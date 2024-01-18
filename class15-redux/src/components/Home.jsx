import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { deleteBlog, retriveBlogs } from '../Action/BlogAction';
import { toast } from 'react-toastify';


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initFetch = useCallback(() => {
    dispatch(retriveBlogs())
  }, [dispatch])

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const blogs = useSelector((item) => item.blogs);

  const delHandler = async (id) => {
    if(window.confirm(`Are you sure you want to delete blog id = ${id}`)) {
      dispatch(deleteBlog({ id : id }))
      .unwrap()
      .then(res => {
        toast.success('Blog is successfully deleted.');
        navigate('/');
      })
      .catch(error => toast.error(error.message))
    } else {
      toast.warning('delete terminated');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h3 className="display-3 text-center">Blogs</h3>
        </div>
      </div>
      <div className="row">
       {
        blogs && blogs.map((item, index) => {
          const { id, title, subTitle, image, content } = item;
            return(
             <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
              <div className="card">
                <img src={image} alt={title} className="card-img-top" style={{height:'300px'}}/>
                <div className="card-body">
                  <h2 className='text-center text-success text-uppercase'>{title}</h2>
                  <h4 className='text-center text-warning'>{subTitle}</h4>
                  <p className='text-justify text-secondary'>{content}</p>
                </div>
                <div className="card-footer">
                  <NavLink to={`/update/${id}`} className='btn btn-outline-warning'>
                    <i className="bi bi-pen"></i>
                  </NavLink>
                  <button onClick={() => delHandler(id)} className='btn btn-outline-danger float-end'>
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
             </div>
            )
        })
       }
      </div>
    </div>
  )
}

export default Home
