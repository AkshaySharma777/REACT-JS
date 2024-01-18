import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import { logoutUser } from '../data/user';

const Menu = () => {

    let loginStatus = localStorage.getItem('loginStatus') || false;

    const logoutHandler = async () => {
        if (window.confirm(`Are you sure to logout?`)) {
            await logoutUser();
        } else {
            toast.warning('logout tarminated');
        }
    }

  return (
    <div className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
            <NavLink to={'/'} className='navbar-brand'>HILORA</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="menu">
                {
                    loginStatus ? (
                        <Fragment>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={"/"} className="nav-link">Menu</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/create"} className="nav-link">Create</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/cart"} className="nav-link">Cart <i class="bi bi-cart4"></i></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/"} className="nav-link btn btn-danger" onClick={logoutHandler}>Logout <i class="bi bi-power"></i></NavLink>
                                </li>
                            </ul>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to={"/login"} className="nav-link">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={"/register"} className="nav-link">Register</NavLink>
                                </li>
                            </ul>
                        </Fragment>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Menu
