import React from 'react'

function ArithmeticOperations() {
  return (
    <form className="row row-cols-lg-auto g-3 align-items-center">
    <div className="col-12">
      <label className="visually-hidden" for="inlineFormInputGroupUsername">Username</label>
      <div className="input-group">
        <div className="input-group-text">@</div>
        <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username"/>
      </div>
    </div>
  
    <div className="col-12">
      <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
      <select className="form-select" id="inlineFormSelectPref">
        <option selected>Choose...</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
  
    <div className="col-12">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="inlineFormCheck"/>
        <label className="form-check-label" for="inlineFormCheck">
          Remember me
        </label>
      </div>
    </div>
  
    <div className="col-12">
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
  )
}

export default ArithmeticOperations