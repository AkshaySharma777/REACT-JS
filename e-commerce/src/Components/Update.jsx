import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import UserForm from './../middleware/FormValidate';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const baseUrl = "http://localhost:4000"

const Update = () => {
    const params = useParams()

    const {contact, errors, readValue, setContact} = UserForm();

    useEffect(() => {
        axios
        .get(`${baseUrl}/contacts/${params.id}`)
        .then((res) => {
            console.log(res)
            setContact(res.data);
        })
        .catch((err) => toast.error(err.message))
    }, [])

    const navigate = useNavigate()

    let updateHandler = async (e) => {
        e.preventDefault();
        await axios
        .put(`${baseUrl}/contacts/${params.id}`, contact)
        .then((res) => {
            toast.success("User Updated")
            navigate("/")
        })
        .catch((err) => {toast.error(err.message)})
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <h5 className="display-3 text-center">
                    Update {params.id}
                </h5>
            </div>
        </div>
        <div className="row">
                <div className="col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                    <div className="card p-3">
                        <div className="card-body">
                            <form autoComplete='off' onSubmit={updateHandler}>
                                <div className="form-group my-2">
                                    <label htmlFor="name">
                                    product Name
                                    </label>
                                    <input type="text" name="name" id="name"  className='form-control' required minLength={4} maxLength={10} onChange={readValue} value={contact.name}/>
                                    {
                                        errors.name ? (
                                            <div className='alert alert-danger'>
                                                {
                                                    errors.name
                                                }
                                            </div>
                                        ) : null
                                    }
                                </div>
                                {/* <div className="form-group my-2">
                                    <label htmlFor="email">
                                        Email
                                    </label>
                                    <input type="email" name="email" id="email" className='form-control' required placeholder='user@domina.com' onChange={readValue} value={contact.email}/>
                                    {
                                        errors.email ? (
                                            <div className='alert alert-danger'>
                                                {
                                                    errors.email
                                                }
                                            </div>
                                        ) : null
                                    }
                                </div> */}
                                <div className="form-group my-2">
                                    <label htmlFor="image">
                                        Profile Image
                                    </label>
                                    <input type="url" name='image' id='image' className='form-control' required placeholder='Enter url format of image link' onChange={readValue} value={contact.image}/>
                                    {
                                        errors.image ? (
                                            <div className='alert alert-danger'>
                                                {
                                                    errors.image
                                                }
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="mobile">
                                    rate
                                    </label>
                                    <input type="number" name="rate" id="mobile" className='form-control' required onChange={readValue} value={contact.rate}/>
                                    {
                                        errors.rate ? (
                                            <div className='alert alert-danger'>
                                                {
                                                    errors.rate
                                                }
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className='form-group my-2'>
                                    <label htmlFor="address">
                                    title
                                    </label>
                                    <textarea name="title" id="address" cols="30" rows="5" className='form-control' required onChange={readValue} value={contact.title}></textarea>
                                    {
                                        errors.title ? (
                                            <div className='alert alert-danger'>
                                                {
                                                    errors.title
                                                }
                                            </div>
                                        ) : null
                                    }
                                </div>
                                <div className="form-group my-2">
                                    <input type="submit" value='Update' className='btn btn-outline-success'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
</div>
    </div>
  )
}

export default Update