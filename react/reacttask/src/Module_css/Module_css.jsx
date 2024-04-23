/*
.module.css

Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it, 
and you do not have to worry about name conflicts.


Create the CSS module with the .module.css extension, example: my-style.module.css.

import abc from './style1.module.css'

normal css import
import from './style1.css'

*/


import React from 'react'

import A from './style1.module.css'
import B from './style2.module.css'

function Module_css() {
  return (
    <div>
        <div className={A.box}>box from STYLE 1</div>
        <div className={B.box}>box from STYLE 2</div>
    </div>
  )
}

export default Module_css