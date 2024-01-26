import React from 'react'
import ChatContainer from '../chat/ChatContainer'
import "./home.scss"
import env from 'react-dotenv'

function Home(props) {
    return (
        <div className='app-body'>
            <ChatContainer/>
        </div>
    )
}

export default Home