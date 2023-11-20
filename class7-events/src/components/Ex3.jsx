import React,
{
Fragment, useState
}

from "react";

const Ex3 = () => {

const sayHello = (parameter1) => {
alert(`Hello, ${parameter1}`);
    }
    
    let [num, setNum] = useState(0); 
    const [isView, setIsView] = useState(true); 
    const [count, setCount] = useState(0); 

    const clickHandler = () => {
        setNum(num + 1);
        setIsView(isView => !isView);
    }

return (<Fragment>
   
    <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <div className="lead my3 p-3 border">
                    <p> <b>4) Update the state inside an onClick event handler</b></p>
                    <button
                        className="btn btn-outline-info" onClick={
                            clickHandler
                        } >
                        Ex3 - Click Handler</button>
                    <p><b>Increment : </b>{num}</p>

                    <div>
                        {
                            isView ? <h5 className="text-success">Welcome to REACT</h5> :
                                <h5 className="text-danger">Try Next Time</h5>
                        }
                    </div>

                    <button className="btn btn-outline-success mx-2" onClick={() => setCount(count + 1)}>Increment</button>
                    <button className="btn btn-outline-success mx-2" onClick={() => setCount(count - 1)}>Decrement</button>

                    <p><b>Result : </b>{count}</p>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <div className="lead my3 p-3 border">
                    <p> <b>5) Use synthetic events = directly inside an onClick event handler</b></p>
                    <button
                        className="btn btn-outline-info" value='Bepractical' onClick={
                          (e) => alert(e.target.value)
                        } >
                        Ex3 - Synthetic Handler
                    </button>
                </div>
            </div>
        </div>
    </div>
</Fragment>);
}

;
export default Ex3;