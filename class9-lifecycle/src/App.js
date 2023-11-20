import React, {Component, Fragment}  from "react";
import Counter from "./component/Counter";
import  ReactDOM  from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mounting Phase",
    };
  }

  mount() {
    ReactDOM.render(
      <React.StrictMode>
        <Counter name={this.state.name} />
      </React.StrictMode>, document.getElementById("renderHere")
    );
  }

  unmount() {
    
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-3 text-success text-center">LIFECYCLE</h1>
              <p className="text-center">{this.state.name}</p>
              <hr />
            </div>
          </div>
          <div className="row my-3">
            <div className="col">
              <button className="btn btn-outline-success" onClick={this.mount.bind(this)}>Mount</button>
              <button className="btn btn-outline-danger float-end" onClick={this.unmount.bind()}>
                UnMount
              </button>
              <hr />
            </div>
          </div>
        </div>
        <section id="renderHere"></section>
      </Fragment>
    );
  }
}

export default App;
