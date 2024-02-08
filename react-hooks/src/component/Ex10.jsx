import React, { useRef, useState, useImperativeHandle } from 'react'
import CountingBox from './screens/CountBox'

function Ex10() {

    const [wordCount, setWordCount] = useState(0)
  
    // the useRef hook return a ref object with a mutable property named "current"
    const txtRef= useRef()

    const countWords = (count) => {
      setWordCount(count)
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

            <CountingBox ref={txtRef} />

          <div className="form-group mt-2 mb-2">
            <button onClick={() => countWords(txtRef.current.count)} className="btn btn-success">Count Words</button>
          </div>
        </div>
        <div className="card-footer">
            <h1 className="text-center">
              Current word count = { wordCount }
            </h1>
        </div>
       </div>
      </div>
     </div>
  </div>
  )
}

export default Ex10