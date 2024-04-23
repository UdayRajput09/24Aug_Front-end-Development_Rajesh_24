import React from 'react'

// import css
import './style1.css';

function Css1() {

  const mystyle={backgroundColor:'red',textAlign:'center'}  
  return (
    <div>
        <h1 style={{color: 'red'}}>Hi i am inline css</h1>
        <hr />
        <h1 style={mystyle}>Hi i am var stor css</h1>
        <hr />
        <div className='bigblue'>Hi i am external css</div>
    </div>
  )
}

export default Css1