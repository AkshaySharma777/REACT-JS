import React, { Component, Fragment } from "react";
import  ReactDOM  from 'react-dom';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }
    componentWillMount() {
        console.log('component will mount(deprecated)');
    }

    componentDidMount() {
        console.log('component did mount called');
    }
     
    componentWillReceiveProps(nP, nC){
      console.log('component will receive props');
      console.log('New Props = ', nP);
      console.log('New State = ', nC);
      if (nP.counterProps >= 10) {
        this.setState({ isActive : true })
          }
   
    }
  
  shouldComponentUpdate(nP, nS) {
    console.log('should component update?');
    console.log('newProps = ', nP);
    console.log('newState = ', nS);
    return true;
  }
  
  componentWillUpdate(nP, nS) {
    console.log('component will update');
    console.log('newProps = ', nP);
    console.log('newState = ', nS);
  }

    updateCounter() {
      ReactDOM.render(
        <React.StrictMode>
          <Counter counterProps={this.props.counterProps+1} />
        </React.StrictMode>,
        document.getElementById("renderHere")
      );
    }
   
    render() {
        console.log('This is a Render Method');
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
                        <h1 className="text-primary text-center">Counter</h1>
                       <hr/>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h1>{this.props.counterProps}</h1>
              <div className='lead border p-3 text-center'>
                {
                  this.state.isActive ? <h1>WELCOME TO LIFECYCLE METHODS</h1> : (
                    <div>
                      <h1 className='text-secondary'>Need More Counts</h1>
                      <button
                className="btn btn-outline-warning"
                onClick={this.updateCounter.bind(this)}
              >
               Add + 1 (Update Props Value)
              </button>
                    </div>
                  )
                }
              </div>
            
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  componentDidUpdate(oP, oS) {
    console.log('component did update successfully');
    console.log('oldProps = ', oP);
    console.log('oldState = ', oS);
  }

}

export default Counter;
