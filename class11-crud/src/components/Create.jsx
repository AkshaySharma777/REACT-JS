import React, { useState } from 'react'
import { createTask } from '../data/task';

const Create = () => {

    const [task,setTask] = useState({
        title:'',
        start:'',
        end:'',
        desc:''
    });

    const submitHandler = async (event) => {
        event.preventDefault();
        // console.log('new task',task)
        createTask(task);
    }

    const readValue = (event)=>{
        const {name,value} = event.target;
        // console.log('name = ', name , 'value = ',value);
        setTask({...task,[name]:value});
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-dark">Create</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                <div className="card">
                    <div className="card-body">
                        <form autoComplete='off' onSubmit={submitHandler}>
                            <div className="form-group">
                                <label htmlFor="title">Task Title</label>
                                <input type="text" name="title" id="title" className='form-control' required value={task.title} onChange={readValue}/>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="start">Task Start Date</label>
                                <input type="datetime-local" name="start" id="start" className='form-control' required value={task.start} onChange={readValue}/>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="end">Task End Date</label>
                                <input type="datetime-local" name="end" id="end" className='form-control' required value={task.end} onChange={readValue}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="desc">Description</label>
                                <textarea name="desc" id="desc" cols="30" rows="5" className='form-control' required value={task.desc} onChange={readValue}></textarea>
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" name="" id="" value="Create Task" className='btn btn-outline-success'/>
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
