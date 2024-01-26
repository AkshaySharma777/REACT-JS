import React, { createContext } from 'react'

// context 
export const ChatContext = createContext()

// context provider
export default function ChatProvider(props) {
  return (
    <ChatContext.Provider value={{}}>
        {
            props.children
        }
    </ChatContext.Provider>
  )
}
