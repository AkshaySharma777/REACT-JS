import React, { useRef, useState, useImperativeHandle } from 'react'

/*
  Hooks(Categories)
  1. State Hooks -> useState, useReducer
  2. Reference Hooks -> useRef
  3. Effect Hooks -> useEffect, useLayoutEffect
  4. Performance Hooks -> useCallBack, useMemo, useImperativeHandle
  5. Context Hook -> useContext
*/

// useImperativeHandle customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases.

function Ex9() {
  const [wordCount, setWordCount] = useState(0)
  
  // the useRef hook return a ref object with a mutable property named "current"
  const txtRef= useRef()

  const countWords = () => {
    const txt = txtRef.current.value
    setWordCount(txt.split(' ').length)
  }

  return (
    <div className='container'>
     <div className="row">
      <div className="col-md-12">
        <h3 className="display-3 text-center">useImperativeHandle</h3>
      </div>
     </div>
     <div className="row">
      <div className="col-md-6 offset-md-3">
       <div className="card">
        <div className="card-body">
          <div className="form-group mt-2 mb-2">
            <label htmlFor="txt">Enter Your Words</label>
            <textarea name="txt" id="txt" ref={txtRef} cols="30" rows="6" className='form-control' required></textarea>
          </div>
          <div className="form-group mt-2 mb-2">
            <button className="btn btn-success">Count Words</button>
          </div>
        </div>
       </div>
      </div>
     </div>
  </div>
  )
}

export default Ex9