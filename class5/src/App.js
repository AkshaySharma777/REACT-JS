import React, { Component } from 'react';
import Users from './components/Users';
const url = 'https://dummyjson.com'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: [],
    }
  }
  componentDidMount(){
    fetch(`${url}/users`)
    .then((res) => res.json())
    .then((out) => {
      // console.log('data', out)
      this.setState({
        users: out.users,
      });
    })
    .catch((err)=> console.log(err.message));
  }
  render(){
    return(
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-3 text-success text-center">
                  Props in class component..!
              </h1>
            </div>
          </div>
        </div>
        <Users users = {this.state.users}/>
      </div>
    )
  }
}

export default App;