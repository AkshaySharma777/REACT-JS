import React, { Fragment } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouter = () => {
    let loginStatus = localStorage.getItem("loginStatus") || false;
  return (
    <Fragment>
        {
            loginStatus ? <Outlet></Outlet> : <Navigate to={'/login'}></Navigate>
        }
    </Fragment>
  )
}

export default ProtectedRouter
