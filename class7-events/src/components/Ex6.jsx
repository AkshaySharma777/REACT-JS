import React, { Component } from "react";

export default class Ex6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Event Bind",
    };
  }

  clickHandler() {
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
                    8) Binding directly when passing(calling) the function
                  </b>
                </p>
                <p>
                  <b>Message : </b>
                  {this.state.message}
                </p>
                <button
                  className="btn btn-outline-info"
                  onClick={this.clickHandler.bind(this)}
                >
                  Ex6 - Click Handler
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
