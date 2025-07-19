import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the /client for React 18+

// this is using react create elemement
// const heading = React.createElement("h1", {id: "heading"}, "Namaste JS Episode 3");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)

// using jsx the above code can written like below
// const jsxHeading = <h1 id='heading'> This heading is using JSX</h1>
// root.render(jsxHeading)

// React functional component 
const TitleFunctionalComponent = () =>(
    <h1 className='heading'> Namaste Js from component </h1>
)

const TitleElement = (
    <h1 className='heading'> Namaste Js from element </h1>
)

const str = "This is how you can inject JS code in Compoenent using {}, This whole line is saved as string in JS code"

// This is component composition => composing two components into one another the way TitleFunctionalComponent is used here
const HeadingComponent = () =>(
    <div>
    <TitleFunctionalComponent/> 
    {str} 
    {TitleElement}
    {/* /This is how we can call too THIS IS AMAZING */}
    {TitleFunctionalComponent()}
    <h1 className='heading'>This is comming from functional component</h1>
    </div>
)

root.render(<HeadingComponent/>) // this is how we render a component