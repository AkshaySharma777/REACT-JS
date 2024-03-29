import React, { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import imgSrc from '../../images/pics'
import { toast } from 'react-toastify';
// firebase
import { auth, db } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login(props) {
    
    const femail = useRef()
    const fpass = useRef()
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            let email = femail.current.value
            let password = fpass.current.value
            await signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                toast.success("Successful login")
                navigate(`/`)
            }).catch(err => toast.error(err))
            
        } catch (err) {
            toast.error(err)
        }
    }

    return (
        <div className="container">
            <div className="wrapper">
                <span className="logo">React-Chat-App</span>
            </div>
            
            <div className="form-wrapper">

                <div className="right">
                    <div className="title">
                        Login Here
                    </div>
                    <form autoComplete="on" onSubmit={submitHandler}>

                        <div className="form-item">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" ref={femail} className="form-input" placeholder='Enter email id' required />
                        </div>
                        <div className="form-item">
                            <label htmlFor="pass">Password</label>
                            <input type="password" name="pass" id="pass" ref={fpass} className="form-input" placeholder='Enter password' required />
                        </div>
                        <div className="form-item">
                            <input type="submit" value="Login" className="btn btn-green" />
                        </div>
                    </form>
                    <div className="block">
                        <NavLink to={`/register`} className="btn-link">
                             New user.. Register Here...
                        </NavLink>
                    </div>
                </div>

                <div className="left">
                    <img src={imgSrc.loginImage} alt="no image" />
                </div>
            </div>
        </div>
    )
}

export default Login