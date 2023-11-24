import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-info text-center text-decoration-underline">
            WELCOME TO ARITHMETIC OPERATIONS WITH REACT
          </h1>
        </div>
      </div>
      <form className="row g-3">
        <div className="col-auto">
          <label for="input1" className="fw-bold">
            Enter input 1 :
          </label>
          <input
            type="text"
            readonly
            className="form-control-plaintext"
          />
        </div>
        <div className="col-auto">
          <input
            type="number"
            className="form-control"
            id="input1"
          />
        </div>
        <div className="col-auto">
          <label for="input2" className="fw-bold">
            Enter input 2 :
          </label>
          <input
            type="text"
            readonly
            className="form-control-plaintext"
          />
        </div>
        <div className="col-auto">
          <input
            type="number"
            className="form-control"
            id="input2"
          />
        </div>
        <div className="row">
          <div className="col">
          <button type="button" className="btn btn-success m-2">Addition</button>
          </div>
          <div className="col">
          <button type="button" className="btn btn-success m-2">Subtraction</button>
          </div>
          <div className="col">
          <button type="button" className="btn btn-success m-2">Multiplication</button>
          </div>
          <div className="col">
          <button type="button" className="btn btn-success m-2">Division</button>
          </div>
          <div className="col">
          <button type="button" className="btn btn-success m-2">Modulus</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
