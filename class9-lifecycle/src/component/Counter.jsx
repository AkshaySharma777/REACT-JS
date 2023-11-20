import { Component, Fragment } from "react";

class Counter extends Component {
    componentWillUnmount() {
        console.log('component will mount(deprecated)');
    }

    componentDidMount() {
        console.log('component did mount called');
    }

    render() {
        console.log('This is a Render Method');
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col">
                        <h1 className="text-primary text-center">Counter</h1>
                        <p>{this.props.counterProps}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Counter;
