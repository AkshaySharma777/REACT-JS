import {Fragment} from 'react';
import Ex1 from "./components/Ex1"
import Ex2 from "./components/Ex2"
import Ex3 from "./components/Ex3"
import Ex4 from "./components/Ex4"
import Ex5 from "./components/Ex5"
import Ex6 from "./components/Ex6"
import Ex7 from "./components/Ex7"
import Ex8 from "./components/Ex8"




function App() {
  return <Fragment>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="display-3 text-warning">Handling events in React components</h1>

          <div className="lead my3 p-3 border">
            <p>
              <b>1) Call an inline function in an onClick event handler</b>
            </p>
            <button className='btn btn-outline-info' onClick={() => {
              alert("Hello");
            }}>Click-App</button>
          </div>
        </div>
      </div>
    </div>
    <Ex1 />
    <Ex2 />
    <Ex3 />
    <Ex4 />
    <Ex5 />
    <Ex6 />
    <Ex7 />
    <Ex8 />



  </Fragment>;
}

export default App;
