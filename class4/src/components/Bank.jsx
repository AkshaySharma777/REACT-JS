import React from 'react'
import BankingDetails from './BankingDetails'
function Bank(users) {
  return (
    <div>
      {
    //     users.banks.map((details, index)=>
    //     <p> 
    //      <h1 className="text-decoration-underline">Bank-{index+1}</h1>  
    //      <h2>
    //        Account Number : {details.accNo} <br /> Bank Name : {details.bName} <br />
    //        Account Type : {details.type}
    //      </h2>
    //     </p>
    //    )
    // <BankingDetails/>
       users.bank.map((item, index)=>{
         return(
<div></div>         );
         }
        }
    </div>
  )
}  

export default Bank
