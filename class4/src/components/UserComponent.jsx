import React from "react";
import users from '../data/users'

function Info(){
    return (
       users.map((data)=>
            <div className="row-cols-1 shadow p-3 mb-5 bg-body-tertiary rounded mt-2">
              <div className="col">
              <h1 className="text-decoration-underline">Personal Details</h1>
               <h2>
                Name :  {data.name} <br />
                Id : {data.id} <br />
                Email : {data.email} <br />
                Age : {data.age} <br />
                Address : City - {data.address.city}, 
                Zipcode - {data.address.pin}
               </h2>
               <p>
                <h1 className="text-decoration-underline">Banking Details</h1>
                <h2 className="text-decoration-underline">Bank-1</h2>
                <h3>
                    Account Number : {data.bank[0].accNo}<br/>
                    Bank Name : {data.bank[0].bName}<br/>
                    Account Type: {data.bank[0].type}<br/>
                </h3> 
                <h2 className="text-decoration-underline">Bank-2</h2>
                <h3>
                    Account Number : {data.bank[1].accNo}<br/>
                    Bank Name : {data.bank[1].bName}<br/>
                    Account Type: {data.bank[1].type}<br/>
                </h3> 
               </p>
              </div>
            </div>
       )
    );
}

export default Info;