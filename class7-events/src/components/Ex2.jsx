import React,
{
Fragment, useState
}

from "react";

const Ex2 = () => {
const sayHello = (parameter1) => {
alert(`Hello, ${parameter1}`);
    }
    
    let [count, setCount] = useState(1); 
return (<Fragment>
   
    <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <div className="lead my3 p-3 border">
                    <p> <b>3) Call multiple functions in an onClick event handler</b></p>
                    <button
                        className="btn btn-outline-info" onClick={() => {
                            sayHello("REACT");
                            setCount(count += 1);
                        }} >
                        Ex2 - Say  Hello and Increment</button>
                    <p><b>Increment : </b>{count}</p>
                </div>
            </div>
        </div>
    </div>
</Fragment>);
}

;
export default Ex2;