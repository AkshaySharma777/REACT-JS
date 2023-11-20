import React, { Component } from "react";

export default class Ex4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      steps: 1
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    alert("clickHandler Function");
    this.setState({
      steps: this.state.steps + 1
    });
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="lead my3 p-3 border">
                <p>
                  <b>6) Class Component Event Listener/Binding inside the constructor</b>
                </p>

                <p>We have to call this.setState method (for functional component) inside the onClick handler to update state value.</p>

                <p>
                  <b>Steps : </b>
                  {this.state.steps}
                </p>

                <button
                  className="btn btn-outline-info"
                  onClick={this.clickHandler} 
                >  
                  Ex4 - Click Handler
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
