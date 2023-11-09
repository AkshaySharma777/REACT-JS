import React, { Component } from 'react'
import Address from './Address'
import Bank from './Bank';
class UserComponent2 extends Component{
    render(){
        const { users } = this.props;
     return (
       users.map((data, indexing)=>
            <div className="row-cols-1 shadow p-3 mb-5 bg-body-tertiary rounded mt-2">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
              <h1 className="text-decoration-underline">User{indexing+1} Personal Details </h1>
               <h2>
                Name :  {data.name} <br />
                Id : {data.id} <br />
                Email : {data.email} <br />
                <h1 className="text-decoration-underline">Address
                </h1>
                <Address addr = {data.address}/>
               </h2>
               <p>
                <h1 className="text-decoration-underline">Banking Details
                </h1>
                <Bank banks = {data.bank}/>
               </p>
              </div>
            </div>
       )
    );
 }
}
export default UserComponent2;