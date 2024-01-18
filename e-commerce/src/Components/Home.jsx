import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import UserCard from "./UserCard"

const baseUrl = "http://localhost:4000"

const Home = () => {

    const [contacts, setContacts] = useState([])

    const getContacts = async () => {
        await 
        axios.get(`${baseUrl}/contacts`)
        .then(res => {
            console.log("con", res)
            setContacts(res.data)
        })
        .catch((err) => {toast.error(err.message)})
    }

    useEffect(() => {getContacts()}, [])
  return (
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <h5 className="display-3">
                    Products List
                </h5>
            </div>
        </div>
        <div className="row">
            {
                contacts && contacts.map((item, index) => {
                    return(<UserCard key={index} contacts={item}/>)
                })
            }
        </div>
    </div>
  )
}

export default Home