import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/default/Home'
import Login from './component/auth/Login'
import Register from './component/auth/Register'
import Pnf from './component/default/Pnf'
import ProtectedRoute from './AuthGuard/ProtectedRoute'
import { ToastContainer } from 'react-toastify'
function App(props) {
  return (
      <BrowserRouter>
          <ToastContainer autoClose={4000} position='top-right' />
            <Routes>
              {/* 
                router - v5
                <ProtectedRoute>
                 <Route path={'/'} element={<Home/>}/>  
                <ProtectedRoute/>
              */}
                <Route element={<ProtectedRoute/>}>
                  <Route path={`/`} element={<Home/>} />
                </Route>
                <Route path={`/login`} element={<Login/>} />
                <Route path={`/register`} element={<Register/>} />
                <Route path={`/*`} element={<Pnf/>} />
            </Routes>

      </BrowserRouter>
  )
}

export default App