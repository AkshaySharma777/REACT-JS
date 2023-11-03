import React, {Component} from "react";

class Ex10 extends React.Component{
//    constructor(props){
//     super(props);
//     console.log(props);
//    }

//    EXAMPLE2
   static defaultProps = {
        color : "brown",
        name : "REACT CLASS DEFULT PROPS"
      };
   render(){
    const {img, lorem, name} = this.props;
    return(
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h1 className="bg-warning text-white p-2 text-center">REACT CLASS DEFAULT PROPS</h1>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
            
            <div className="lead border p38">
                <h2 style={{backgroundColor:this.props.color}}>{this.props.name}</h2>
            </div>
        </div>
    </div>
    );
   }
}

// EXAMPLE1
// Ex10.defaultProps = {
//     color : "brown",
//     name : "REACT CLASS DEFULT PROPS"
//   };

export default Ex10;