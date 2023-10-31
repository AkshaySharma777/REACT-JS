import React from "react";

function testFunction(name){
   return name.toLowerCase();
}

function App() {
  const title = "WELCOME TO REACT JS.";

  const endTitle = "Be-practical Tech Solutions"
  const heading1 = React.createElement("h1", { id: "title1" }, "Heading-1");

  const heading2 = React.createElement("h2", { id: "title2" }, "Heading-2");

  const section = React.createElement("section", { id: "container" }, [
    heading1,
    heading2,
  ]);

  const websiteLink = {
    url: "https://www.youtube.com"
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="bg-primary p-3 text-white text-center">
            {title + endTitle}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="bg-secondary p-3 text-white text-center">
            {heading1}
            {heading2}
            {section}
             
             <a href={websiteLink.url} target="_blank" className="text-bg-light text-decoration-none">Youtube</a>

             <br />

             <h1>FUNCTION CALLING : {testFunction(title)}</h1>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
