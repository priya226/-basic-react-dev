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
// const parent = React.createElement(
//     "div", 
//     {id:'parent'},
//     React.createElement( 'div',{id:'child'},
//     [
//         React.createElement('h1',{},"I'm h1 tag"),
//         React.createElement('h2',{},"I'm h2 tag"),
//     ])
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(parent)

// const root = ReactDOM.createRoot(document.getElementById('root')) //get root element we dealing with browser we fetching root from browser dom

// const heading = React.createElement(  // this is React Element this is not htmlElement
//     "h1",
//     {id:'heading'},
//     'Namste React'
// )
// console.log(heading);
// //jsx is html like syntax its not html in javascript
// const jsxHeading= <h1 id="heading" className="heading"> Namste this is jsx javascript syntax  its not html</h1>
// console.log(jsxHeading);
// console.log('both object have same properties does give any difference')
// root.render(heading) //when render this element then it become html element
// root.render(jsxHeading) // JSX (transpiled before it reaches JS )- By parcel through Babel
// //JSX => Reacat.createEelement => ReactElement-JS Object => HTMLElement (render)
// // Babel is converting this 
// jsxMultizlines =(
//     <h1> multi line jsx should enclosed within curly braces</h1>
// )


// React element 
const heading =(
    <h1>
        Heading React Element
    </h1>
)
//React Functional Component a js fn which return react element

const HeadingComponent = () =>{
    return <h1>Functional compoent heading</h1>
}
// or we can write this way
const Title =() =>(
    <h1>
        Title React  component
    </h1>
)
const title1 ="this is title variable";
const HeadingCompoent2 = () => (
    <div id="container">
    {/* <Title /> */}
    {/* we can write this way too */}
    {Title()}  
    <h2>
        {console.log('JSX having javascript console log')}
        {100+200}
        {title1}
    </h2>
     <h1 className="heading">
        Functional compoent heading
    </h1>
    </div>
    
)
const elem = <span> this is span added into jsx title</span>
const title2 =(
    <h1>
        {elem}
        React title using jsx
        <HeadingCompoent2 />
    </h1>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingCompoent2 />) // this is how render react compoent
root.render(title2) // this is how render react compoent
