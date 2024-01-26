import React, { useContext, useState } from 'react'
import chatList from './content/data';
import { NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify'
 
const ChatHeader = () => {
  const { currentUser } = useContext(AuthContext)

  const signoutHandler = () => {
    if (window.confirm('Are you sure to logout?')) {
      signOut(auth)
      toast.success('Logout successful')
    }
  }
 

    const [isToggle, setIsToggle] = useState(false);
    const handleToggle = () => {
      setIsToggle(!isToggle) 
  }

  return (
    <div className='header'>
     <div className="imgText">
        <div className="userimg">
        <img src={currentUser.photoURL ? currentUser.photoURL : "https://robohash.org/Terry.png?set=set4"}  alt="" />
        </div>
        <h4>{currentUser.displayName}</h4>
     </div>
     <div className="icons">
        <div><i className='bi bi-search'></i></div>
        <div className='dropdown'><i className='bi bi-three-dots-vertical' onClick={handleToggle}></i>
          <ul className={isToggle ? "dropdown-menu" : ""}>
              <li>
               <NavLink onClick={signoutHandler}>Logout</NavLink>
              </li>
            </ul>
        </div>
     </div>
    </div>
  )
}

export default ChatHeader