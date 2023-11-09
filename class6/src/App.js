import "./App.css";
import Inline from "./components/inline-style/Inline";
import ObjectStyle1 from "./components/object-style/ObjectStyle1";
import ObjectStyle2 from "./components/object-style/ObjectStyle2";
import StyledComponents from "./components/styled-component/StyledComponents";
function App(){
  return(
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="display4 text-success text-center text-decoration-underline">
              STYLES IN REACT
            </h1>
            <h2 className="globalClass">
              1)  INDEX.CSS (GLOBAL CSS FILE : MODULE CSS)
            </h2>
            <h2 className="appClass">
              2)  APP.CSS (APP CSS FILE : PARENT COMPONENT CSS)
            </h2>
          </div>
        </div>
      </div>
      <Inline/>
      <ObjectStyle1/>
      <ObjectStyle2/>
      <StyledComponents/>
    </div>
  );
}

export default App;