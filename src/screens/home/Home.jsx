import React, { useState } from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Testimonials from '../../components/testimonials/Testimonials'
import Experience from '../../components/experience/Experience'
import Footer from '../../components/footer/Footer'
import { useAuth } from '../../context/AppContext'

import * as fcl from '@onflow/fcl'
import { toast } from 'react-hot-toast'
import { database } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'

fcl.config()
 .put("accessNode.api", "https://rest-testnet.onflow.org")
 .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
 .put("flow.network", "testnet")
 .put("app.detail.title", "try Dapp")
 .put("discovery.authn.endpoint","https://fcl-discovery.onflow.org/api/testnet/authn")
 .put("0xFLOW", "0x7e60df042a9c0868")
 .put("0xFT", "0x9a0766d93b6608b7")

function Home() {
  const navigate = useNavigate()

  const {
    authUser, setAuthUser,
    isLoggedin, setIsLoggedin,
    isTimerOn, setIsTimerOn,
    sendTokenVar, setSendTokenVar } = useAuth()
  
  const [user, setUser] = useState()

  const logIn =  () => {
    console.log("this is login fun")
    fcl.authenticate();
    fcl.currentUser().subscribe(setUser);

    setAuthUser({...user})
    if(authUser){
      if((JSON.parse(localStorage.getItem('user-wa') || '[]')).length === 0)
        localStorage.setItem('user-wa', JSON.stringify(user.addr))
    }
    // console.log(authUser)
    setIsLoggedin(true)
  }

  
  const handleEdit = async (wallet_address)=>{
    // let uid = 'alok';
    const res = await database.user.get();
    res.forEach(async (res)=>{
      if(res.data().wallet_address === wallet_address){
        console.log(res.data());
        if(res.data().repay === false){
          const user_WA =  JSON.parse(localStorage.getItem('user-wa') || '[]')
          await database.user.doc(res.id).update({repay: true, lender: user_WA})
        }
        else {
          await database.user.doc(res.id).delete()
        }
      }
    })
  }

  
  const sendFlow = async (recepient, amount, wallet_address) =>{
    const cadence = `
    import FungibleToken from 0xFT
    import FlowToken from 0xFLOW

    transaction(recepient: Address, amount: UFix64){
      prepare(signer: AuthAccount){
        let sender = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)
          ?? panic("Could not borrow Provider reference to the Vault")

        let receiverAccount = getAccount(recepient)

        let receiver = receiverAccount.getCapability(/public/flowTokenReceiver)
          .borrow<&FlowToken.Vault{FungibleToken.Receiver}>()
          ?? panic("Could not borrow Receiver reference to the Vault")
 
        receiver.deposit(from: <- sender.withdraw(amount: amount))
      }
    }
  `;
  const args = (arg, t) => [arg(recepient, t.Address), arg(amount, t.UFix64)];
  const limit = 500;

  const txId = await fcl.mutate({
    cadence,
    args,
    limit
  });
  console.log("Waiting for transaction to be sealed...");
  const txDetails = await fcl.tx(txId).onceSealed();
  console.log({ txDetails });

  // remove user
  // deletee(wallet_address);
  handleEdit(wallet_address)
  // let data =  JSON.parse(localStorage.getItem('fintech-app') || '[]')
  // let newData = data.filter(ele=> ele.wallet_address != wallet_address);
  // localStorage.setItem('fintech-app', [...newData]);
  setIsTimerOn(true);
  navigate('/')

};

const recepient = "0x3ffc4a41753d04d4"

  if(isTimerOn) setInterval( async ()=>{
    try {
      let res= await database.user.get();
      res.forEach( async(ele)=>{
        if(ele.data().wallet_address === JSON.parse(localStorage.getItem('user-wa'))){
          if(ele.data().repay === true){
            setInterval(()=>{
              sendFlow(recepient, ele.data().amount, ele.data().lender_wa)
            }, 20000)
          }          
        }
      })
      await database.user.doc()
    } catch (error) {
      throw new Error(error);
    }
  }, 30000);

  return (
    <div className=''>
      <Navbar logIn={logIn} user={user} />
      <Header />
      <Testimonials />
      <Experience />
      <Footer />
    </div>
  )
}

export default Home
