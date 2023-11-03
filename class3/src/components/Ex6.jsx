import React from "react";

const Ex6 = (props) => {
    const {img, lorem, name} = props;
  return(
    <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h1 className="bg-warning text-white p-2 text-center">REACT DESTRUCTURING FUNCTIONAL PROPS</h1>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            
            <div className="card">
                <img src = {img} />

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        {lorem}
                    </p>
                    <button type="button" className="btn btn-outline-primary">View More</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Ex6;