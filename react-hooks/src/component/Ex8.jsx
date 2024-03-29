import React, { useReducer } from 'react'
/* 
  Alternate to useState, when u have complex state logic.
  It takes reducer funtion and an initial state or data, and returns the current state dispatch function to update it.
*/

// const [state, dispatcher] = useReducer(reducer, initialData)

// dispatcher(action type) => to change your state, you dispatch actions to the dispatch function.

// reducer is a function that describes how your state can change based on different actions

function customReducer(state, action) {

  switch (action) {
    case "inc":
      return { qnty: state.qnty + 1 }
       break;
    
    case "dec":
      return state.qnty <=1 ? { qnty: 1 } : { qnty: state.qnty-1 }
       break; 

    case "clear":
      return { qnty: 1 }
       break;

    default: console.log(`check your input`)
  }
}

function Ex8() {
 
 const initialState = { qnty: 1 }
 const [state, dispatch] = useReducer(customReducer, initialState)

  return (
    <div className='container'>
     <div className="row">
      <div className="col-md-12">
        <h3 className="display-3 text-center">useReducer</h3>
      </div>
     </div>
     <div className="row">
      <div className="col-md-12">
        <h1 className="display-3 text-success">
          <button onClick={() => dispatch('dec')} className="btn btn-danger mr-3">-</button>
          { state.qnty }
          <button onClick={() => dispatch('inc')} className="btn btn-success mr-3">+</button>
        </h1>
        <button onClick={() => dispatch('clear')} className="btn btn-warning ml-3">clear</button>

      </div>
     </div>
  </div>
  )
}

export default Ex8