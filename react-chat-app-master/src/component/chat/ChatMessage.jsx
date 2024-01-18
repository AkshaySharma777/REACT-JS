import React, {useEffect, useState} from 'react'
import { chatMsg } from './content/data'

const ChatMessage = () => {
  const [msg, setMsg] = useState(false);

  useEffect(() => {
   // setMsg(chatMsg)
  }, [])

  if(!msg) {
    return (
      <div className="chat-box">
        <div className="blk no-msg">
          <p className="alert">No Messages</p>
        </div>
      </div>
    )
  }

  return (
    <div className='chat-box'>
      {
        chatMsg && chatMsg.map((item, index) => {
            return (
                <div className={ item.sen ? "message sen" : "message rec" } key={index}>
                  <p>{ item.msg } <br /> <span> { item.time } </span></p>
                </div>
            )
        })
      }
    </div>
  )
}

export default ChatMessage