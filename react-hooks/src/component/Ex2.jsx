import React, { useEffect, useState } from 'react'

/* useEffect(callback, [state, methods]) =>
 
  mount === componentDidMount()
    useEffect(function(){}) => infinite call => continue
    useEffect(function(){},[]) => one time call 
    1. to initialize the state
    2. to call methods (api call)

    update === componentDidUpdate() => nP,nS
   useEffect(function(){},[dep])
   
    unmount === componentWillUnmount()
    useEffect(function(){
      return () => {
        methods, state, props
      }
    })
*/

function Ex2(props) {
  const [user,setUser] = useState([])
  
  const getUsers = async () => {
    await fetch(`https://dummyjson.com/users`)
    .then(res => res.json())
    .then(res => {
      console.log(`users} = `, res)
      setUser(res.users)
    }).catch(err => console.log(err.message))
  }

  // mount
  useEffect(() => {
    console.log(`useEffect callback message`)
    getUsers()

    return () => {
      console.log(`signing off.. comeback..`)
    }
  },[])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <h3 className="display-3">useEffect</h3>
        </div>
      </div>
      <div className="row">
       {
         user && user.map((item,index) => {
          return (
            <div className="col-md-6 col-lg-4 col-sm-12 mt-12 mb-2" key={index}>
              <div className="card shadow border-0">
                <img src={item.image} alt="user image" className="card-img-top p-2" />
                <div className="card-body">
                  <h4 className='text-center'> { item.firstName } { item.lastName } </h4>
                </div>
              </div>
            </div>
          )
         })
       }
      </div>
    </div>
  )
}

export default Ex2