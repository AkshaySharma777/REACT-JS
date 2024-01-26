import React, { UseContext, useContext, useRef } from 'react'
import  './css/chatInput.scss'
import { AuthContext } from './../../context/AuthContext';
 
const ChatInput = () => {
  const fchat = useRef()
  const context = useContext(AuthContext)

  const handler = () => {
    context.click(fchat.current.value)
  }
  return (
    <div className='chat-input'>
     <div className="plus-icon">
      <i className="bi bi-plus"></i>
     </div>
     <div className="input-box">
      <i className="bi bi-emoji-smile"></i>
      <input type="text" name='chat' id='chat' ref={fchat} required />
     </div>
     <div className="send-icon" onClick={handler}>
      <i className="bi bi-send-fill"></i>
     </div>
    </div>
  )
}

export default ChatInput