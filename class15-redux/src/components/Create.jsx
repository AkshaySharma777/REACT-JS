import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBlog } from './../Action/BlogAction';
import { toast } from 'react-toastify';

const Create = () => {
  const [blog, setBlog] = useState({
    title: "",
    subTitle: "",
    image: "",
    content: ""
  });

  const readValue = (e) => {
    const { name, value } = e.target;
    setBlog({ ...blog, [name]:value })
  };

  // Create Ref of useDispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('blog data = ',blog);
    dispatch(createBlog(blog))
    .unwrap()
    .then(res => { 
      toast.success("Successfully Submitted");
      navigate('/');
  })
  .catch(error => toast.error(error.message));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3">Create Blog</h3>
        </div>
      </div>
      
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form autoComplete='off' onSubmit={submitHandler}>
                <div className="form-group mt-2">
                  <label htmlFor="title">
                    Title
                  </label>
                  <input type="text" name='title' value={blog.title} onChange={readValue} placeholder='title' className='form-control' required />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="subtitle">
                    Sub Title
                  </label>
                  <input type="text" name='subTitle' value={blog.subTitle} onChange={readValue} placeholder='sub title' className='form-control' required />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="image">
                    Image Url
                  </label>
                  <input type="url" name='image' value={blog.image} onChange={readValue} placeholder='image' className='form-control' required />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="content">
                    Content
                  </label>
                  <textarea name="content" id="content" cols="30" rows="6" placeholder='blog content' value={blog.content} onChange={readValue} className='form-control'></textarea>
                </div>

                <div className="form-group mt-2">
                 <input type="submit" value="Create" className='btn btn-outline-success' required />
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
