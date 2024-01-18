import React from 'react'
import UserForm from '../middleware/FormValidate'

const Create = () => {

    /* const [contact, setContact] = useState({
        name : "",
        email : "",
        image : "",
        mobile : "",
        address : ""
    })

    // Raed value from input
    const readValue = (e) => {
        // e.preventDefault()
        // console.log("Input = ", e.target.name + "-" + e.target.value)
        const {name, value} = e.target;
        setContact({...contact, [name]: value})
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("New Contact = ", contact)
    } */
    // const {contact, }

    const {contact, errors, readValue, submitHandler } = UserForm();

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="display-3 text-dark text-center">
                        Create
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                    <div className="card p-3">
                        <div className="card-body">
                            <form autoComplete='off' onSubmit={submitHandler}>
                                <div className="form-group my-2">
                                    <label htmlFor="name">
                                        Product Name
                                    </label>
                                    <input type="text" name="name" id="name"  className='form-control' required minLength={4} maxLength={10} onChange={readValue} value={contact.name}/>
                                    {
                                        errors.name ? 
                                        (
                                            <div className='alert alert-danger'>
                                                {errors.name}
                                            </div>
                                        ) : 
                                        null
                                    }
                                </div>
                                {/* <div className="form-group my-2">
                                    <label htmlFor="email">
                                        Email
                                    </label>
                                    <input type="email" name="email" id="email" className='form-control' required placeholder='user@domina.com' onChange={readValue} value={contact.email}/>
                                    {
                                        errors.email ? 
                                        (
                                            <div className='alert alert-danger'>
                                                {errors.email}
                                            </div>
                                        ) : 
                                        null
                                    }
                                </div>  */}
                                <div className="form-group my-2">
                                    <label htmlFor="image">
                                        Profile Image
                                    </label>
                                    <input type="url" name='image' id='image' className='form-control' required placeholder='Enter url format of image link' onChange={readValue} value={contact.image}/>
                                    {
                                        errors.image ? 
                                        (
                                            <div className='alert alert-danger'>
                                                {errors.image}
                                            </div>
                                        ) : 
                                        null
                                    }
                                </div>
                                <div className="form-group my-2">
                                    <label htmlFor="rate">
                                        Rate
                                    </label>
                                    <input type="number" name="rate" id="rate" className='form-control' required onChange={readValue} value={contact.rate}/>
                                    {
                                        errors.rate ? 
                                        (
                                            <div className='alert alert-danger'>
                                                {errors.rate}
                                            </div>
                                        ) : 
                                        null
                                    }
                                </div>
                                <div className='form-group my-2'>
                                    <label htmlFor="address">
                                        Title
                                    </label>
                                    <input name="title" id="title" cols="30" rows="5" className='form-control' required onChange={readValue} value={contact.title} />
                                    {
                                        errors.title ? 
                                        (
                                            <div className='alert alert-danger'>
                                                {errors.title}
                                            </div>
                                        ) : 
                                        null
                                    }
                                </div>
                                <div className="form-group my-2">
                                    <input type="submit" value='Create' className='btn btn-outline-success'/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create