import React, { useRef, useState } from 'react';
import { registerUser } from '../data/user';
import '../styles/login.css';

const Register = () => {
  const fName = useRef();
  const fEmail = useRef();
  const fMobile = useRef();
  const fPass = useRef();

  const [errors, setErrors] = useState({});

  const validateInput = (name, value) => {
    if (name === 'name') {
      return value.trim().length > 0 ? null : 'Name is required';
    }
    if (name === 'email') {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) ? null : 'Invalid email address';
    }
    if (name === 'mobile') {
      // Basic mobile number validation
      const mobileRegex = /^[0-9]{10}$/;
      return mobileRegex.test(value) ? null : 'Invalid mobile number';
    }
    // For other fields, you can add more validations if needed
    return null;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      name: fName.current.value,
      email: fEmail.current.value,
      mobile: fMobile.current.value,
      password: fPass.current.value,
    };

    // Validate input fields
    const newErrors = {};
    for (const [fieldName, fieldValue] of Object.entries(data)) {
      const error = validateInput(fieldName, fieldValue);
      if (error) {
        newErrors[fieldName] = error;
      }
    }

    // If there are validation errors, set them in the state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no validation errors, proceed with registration
    console.table('New Data', data);
    await registerUser(data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3 className="display-3 text-dark text-center">Register</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
          <div className="card shadow-lg p-3 mb-5 bg-white rounded border-0">
            <div className="card-body">
              <form action="" autoComplete="off" onSubmit={submitHandler}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    required
                    ref={fName}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="form-group my-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    required
                    ref={fEmail}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="form-group my-3">
                  <label htmlFor="mobile">Mobile</label>
                  <input
                    type="number"
                    id="mobile"
                    name="mobile"
                    className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                    required
                    ref={fMobile}
                  />
                  {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
                </div>
                <div className="form-group my-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    ref={fPass}
                  />
                </div>
                <div className="form-group">
                  <input type="submit" value="Register" className="col-12 rounded-1 p-2 loginButton" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
