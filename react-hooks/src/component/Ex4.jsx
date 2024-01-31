import React, { useRef } from 'react'

function Ex4() {
  const fBtn = useRef()
  const fName = useRef()

  // mutable ref
  const clickHandler = () => {
    console.log(`ref = `, fBtn.current.className)
    console.log(`ref input = `, fName.current.value)
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12">
          <button ref={fBtn} className='btn btn-success' onClick={clickHandler}>Click Me</button>
          
          <div className="form-group">
           <input type="text" name="" id="" ref={fName} className="form-control" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ex4