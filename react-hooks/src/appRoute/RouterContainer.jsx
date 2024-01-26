import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './../default/Header';

function RouterContainer() {
  return (
    <div>
        <Header/>
        <Outlet />
    </div>
  )
}

export default RouterContainer