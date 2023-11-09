import React from "react";
import UserComponent from './components/UserComponent';
import UserComponent2 from './components/UserComponent2';
import users from './data/users'

function App() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-12 col-xxl-12">
        <div className="bg-success text-center text-white p-3 rounded shadow">
          <h1>Functional component Props</h1>
        </div>
      </div>
    </div>
    <UserComponent users = {users}/>
    <div className="bg-success text-center text-white p-3 rounded shadow">
      <h1>Class component Props</h1>
    </div>
    <UserComponent2 users = {users}/>
  </div>
  );
}

export default App;
