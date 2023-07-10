import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './lend.css'

import * as fcl from '@onflow/fcl'

fcl.config()
 .put("accessNode.api", "https://rest-testnet.onflow.org")
 .put("discovery.wallet", "https://fcl-discovery.onflow.org/testnet/authn")
 .put("flow.network", "testnet")
 .put("app.detail.title", "try Dapp")
 .put("discovery.authn.endpoint","https://fcl-discovery.onflow.org/api/testnet/authn")
 .put("0xFLOW", "0x7e60df042a9c0868")
 .put("0xFT", "0x9a0766d93b6608b7")

const Lend = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        let data1 = JSON.parse(localStorage.getItem('fintech-app') || '[]')
        setData([...data1]);
        console.log(data1)
    }, [])


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
      let data =  JSON.parse(localStorage.getItem('fintech-app') || '[]')
      let newData = data.filter(ele=> ele.wallet_address != wallet_address);
      localStorage.setItem('fintech-app', [...newData]);
    };

    const recepient = "0x3ffc4a41753d04d4"
  return (
    <div className='lend_container'>
      <Navbar landpage={true} />
      <div className="lend_cards">
        {
            data.length === 0 ? '' :
            data.map(({wallet_address, amount, reason})=>(
                
                <div 
                    className="land_card"
                    onClick={()=>sendFlow(recepient, amount, wallet_address)}
                >
                    <div>{`address: ${wallet_address}`}</div>
                    <div>{`amount: ${amount}`}</div>
                    <div>{`Reason: ${reason}`}</div>
                </div>
            ))
        }
        </div>
    </div>
  )
}


export default Lend
