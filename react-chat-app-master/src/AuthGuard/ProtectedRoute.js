import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = () => {
  const context = useContext(AuthContext)
  const currentUser = context.currentUser
  return (
    <React.Fragment>
       {
         currentUser ? <Outlet/> : <Navigate to={`/login`}/>
       }
    </React.Fragment>
  )
}

export default ProtectedRoute