import React from 'react'
import ChatContainer from '../chat/ChatContainer'
import "./home.scss"
import env from 'react-dotenv'

function Home(props) {
    console.log(env.PROJECT_ID)
    return (
        <div className='app-body'>
            {/* <ChatContainer/> */}
            {env.PROJECT_ID}
        </div>
    )
}

export default Home