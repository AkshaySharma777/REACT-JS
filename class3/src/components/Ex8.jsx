import React, {Component} from "react";

class Ex8 extends React.Component{
//    constructor(props){
//     super(props);
//     console.log(props);
//    }
   render(){
    return(
        <div className="row">
             <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h1 className="bg-warning text-white p-2 text-center">REACT CLASS PROPS</h1>
        
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            
            <div className="lead p3 border">
                <p>{this.props.img}</p>
                <p>{this.props.name}</p>
                <p>{this.props.lorem}</p>
            </div>

            <div className="card">
                <img src = {this.props.img} />

                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">
                        {this.props.lorem}
                    </p>
                    <button type="button" className="btn btn-outline-primary">View More</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
   }
}

export default Ex8;