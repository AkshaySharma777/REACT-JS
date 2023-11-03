import React from "react";
import Info from './components/UserComponent';

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
    <Info/>
  </div>
  );
}

export default App;
