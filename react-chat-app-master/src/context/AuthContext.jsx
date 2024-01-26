import React, { createContext, useState, useEffect } from "react";
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth"

// context instance
export const AuthContext = createContext()

function AuthProvider(props) {
    const { children } = props
    const [currentUser, setCurrentUser] = useState(false)

     
     useEffect(() => {
      // mount stage 
      const changedAuth = onAuthStateChanged(auth, user => {
        setCurrentUser(user)
      })

      // unmount 
      return ()=>{
        changedAuth()
      }
      
     }, [])

    let data = {
        currentUser
    }

  return (
    <AuthContext.Provider value={ data }>
      {
        props.children
      }
    </AuthContext.Provider>
  )
}

export default AuthProvider