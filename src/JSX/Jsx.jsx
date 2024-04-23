/*
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.


Coding JSX
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() 
and/or appendChild() methods.
JSX converts HTML tags into react elements.
Expressions in JSX
With JSX you can write expressions inside curly braces { }.
Example of declaration of javascript element & how to use in html direct


*/

import React from 'react'

function Jsx() {

    const myelement = <h1>I Love JSX!</h1>;  
    const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>; 
    const myelement2 = (
        <ul>
          <li>Apples</li>
          <li>Bananas</li>
          <li>Cherries</li>
        </ul>
      );

    const mystyle={backgroundColor:'red',textAlign:'center'}  


      
  return (
    <div>
        {myelement}
        <hr />
        {myelement1}
        <hr />
        {myelement2}
        <hr />
        <h1 style={{color: 'red'}}>Hi i am inline css</h1>
        <hr />
        <h1 style={mystyle}>Hi i am var stor css</h1>
    </div>
  )
}

export default Jsx