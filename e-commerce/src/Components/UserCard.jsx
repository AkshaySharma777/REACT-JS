import React from 'react'
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const baseUrl = "http://localhost:4000"

const UserCard = (props) => {
    // const {address, id, name, mobile, image, email} = props.contacts
    const {name, image, rate, title, id} = props.contacts

    const deleteContact = (id) => {
        if (window.confirm(`Do you want to delete ${id}`)){
            axios
            .delete(`${baseUrl}/contacts/${id}`)
            .then((res) => {
                toast.success(`Successfully you are deleted`)
                window.location.reload()
            })
            .catch((error) => {toast.error(error.message)})
        } else {
            toast.warning("You have cancel to delete")
        }
    }
  return (
    <div className='col-xs-12 col-sm-12 col-md-4 col-l-4 col-xl-4 col-xxl-4 my-3'>
        <div className="card">
            <img src={image} alt={name} className='imag-fluid shadow' style={{height: "390px"}}/>
            <div className="card-body">
                <h5 className="text-center text-uppercase my-3">
                    {name}
                </h5>
                <ul className="list-group">
                    {/* <li className="list-group-item">
                        <strong>
                            Email
                        </strong>
                        <span className="float-end">
                            {email}
                        </span>
                    </li>  */}
                    <li className="list-group-item">
                        <strong>
                        rate
                        </strong>
                        <span className="float-end">
                            {rate}
                        </span>
                    </li>
                    <li className="list-group-item">
                        <strong>
                        title
                        </strong>
                        <span className="float-end">
                            {title}
                        </span>
                    </li>
                    {/* <li className="list-group-item">
                        <strong>
                            Id
                        </strong>
                        <span className="float-end">
                            {id}
                        </span>
                    </li> */}
                </ul>
            </div>
            <div className="card-footer">
                <NavLink to={`/Update/${id}`} className="btn btn-sm btn-info">
                    <i className='bi bi-pen'></i>
                </NavLink>
                <button className='btn btn-sm btn-danger float-end'>
                    <i className='bi bi-trash' onClick={() => deleteContact(id)}></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default UserCard