// SYNTAX-1

// function MyComponent(){}
// export default MyComponent;

// SYNTAX-2 
import React from 'react'
import MyComponent2 from './myComponent2';

export default function MyComponent(){
    return(
        <div className="row bg-secondary text-white">
         <div className="col">
              <h1>WELCOME TO MyComponent FUNCTION (CHILD COMPONENT)</h1>
          </div>
          <MyComponent2/>
        </div>
    );
};6njjk