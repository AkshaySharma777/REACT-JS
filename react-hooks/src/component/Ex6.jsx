import React, { useLayoutEffect, useState } from "react";

function Ex6() {
  /* 
  The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

Prefer the standard useEffect when possible to avoid blocking visual updates.

If you’re migrating code from a class component, useLayoutEffect fires in the same phase as componentDidMount and componentDidUpdate.

@version — 16.8.0
 */
  const [num, setNum] = useState(0)

  const clickHandler = (val) => {
    setNum(num + val)
  }

  useLayoutEffect(() => {
    console.log(`layout effect triggered`)
  },[num]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-success">useLayoutEffect</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>{num}</h1>
          <button className="btn btn-success" onClick={() => clickHandler(10)}>Add + 10</button>
        </div>
      </div>
    </div>
  );
}

export default Ex6;
