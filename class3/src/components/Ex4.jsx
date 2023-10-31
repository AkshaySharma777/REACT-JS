import React, { Component } from 'react'

// Global Variables
let x=21;
const y =124;
let title = "Welcome to String data"
let isAdmin = true

const user = {
    name:"raju",
    age:21,
    email:"raju@gmail.com"
}

const emp = ["manu", "chirag", "john","ali"]

class Ex4 extends Component{
    constructor(props){
        super(props);
        <p>Variables in Class Component.</p>
    }
    render(){
          // Local Variable
        let x =555;

        return (
            <div className='row'>
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h1 className='bg-warning text-white p-2 text-center'>Example-4</h1>
        </div>
        <div className="col">
        <div className="border lead p-3 text-center">
            <h3>Variables in CLASS component</h3>
            <p><b>Num variable X : </b> {x}</p>
            <p><b>Num variable Y : </b> {y}</p>

            <p><b>String variable Title : </b> {title}</p>
            <p><b>Conditional Statement : </b> { x>y ? "say true" : "say false"}</p>
            <p><b>Boolean variable Is Admin: </b> {isAdmin ? "say true" : "say false"}</p>
            <p><b>Boolean variable Is Admin : </b> {isAdmin}</p>
            <p><b>Product of X*Y :</b> {x*y}</p>
            <hr />
            <p><b>Object User.Name :</b>{user.name}</p>
            <p><b>Object User.age :</b>{user.age}</p>
            <p><b>Object User.email :</b>{user.email}</p>
            <hr />

            <p><b>Array EMP[0] :</b>{emp[0]}</p>
            <p><b>Array EMP[1] :</b>{emp[2]}</p>
            <p><b>Array EMP[3] :</b>{emp[3]}</p>
            <hr />
            <div>
                {
                    emp.map((item,index)=>{
                        return(<p key={index}><b>MAP() : </b>{index}. {item}</p>)
                    })
                }
            </div>

            </div>

            </div>
            </div>
        )
    };
  
}

export default Ex4;