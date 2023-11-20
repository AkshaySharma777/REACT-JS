import React, { Component } from "react";

export default class Ex7 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Event Bind",
    };
  }

  clickHandler = ()=> {
    this.setState({
      message: "change state",
    });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="lead my3 p-3 border">
                <p>
                  <b>
                    9) Binding with the help of arrow function
                  </b>
                </p>
                <p>
                  <b>Message : </b>
                  {this.state.message}
                </p>
                <button
                  className="btn btn-outline-info"
                  onClick={this.clickHandler}
                >
                  Ex7 - Click Handler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
