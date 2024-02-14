// const heading = React.createElement("h1",{},"Hello world from React");
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
/**
 *  <div id="parent">
 *     <div id="child">
 *       <h1> I 'm h1 tag </h1>
 *       <h2> I 'm h2 tag </h2>
 *      </div>
 *  </div>
 * 
 * ReacrElement(object) => HTML(Browser Understaands)
 */
// createElement(the elementappeneding, properties adding to it,)

import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
    "div", 
    {id:'parent'},
    React.createElement( 'div',{id:'child'},
    [
        React.createElement('h1',{},"I'm h1 tag"),
        React.createElement('h2',{},"I'm h2 tag"),
    ])
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)