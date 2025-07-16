/**
 * React is a library why? 
 * because it can work independently in the smallest portion of the application the code written below for heading2
 * will only be injected in root2 not anywhere else, but if it is a framework we need to use it every where 
 */
const heading2 = React.createElement( // create element creates an object
    "h1",
    {id: "heading"}, // these are attributes
    "Hello world From React" // this is the children that will go inside the h1 tag 
);

console.log(heading2) // this will give an object

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(heading2); // render job is to take the object that we created and then create h1 tag and add that in root 


/**
 * Let's create the structure given below it is having parent div which is having child div inside
 * after that we have two siblings that are h1 and h2 that are inside the child
 * to create sibblings use array 

<div id="parent">
    <div id="child">
        <h1>Im the h1 tag</h1>
        <h2>Im the h2 tag</h2>
    </div>
</div>

*/



// creating parent div
const parent  = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"}, 
    // if you want to create siblings then add the children in array like below
        [
            React.createElement("h1", {}, "Im the H1 tag"), 
            React.createElement("h2", {}, "Im the H2 tag")
        ]
    )
 )
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent);

// the below code is incorrect because in createElement we have thrid param to create a child
// const child = React.createElement("div", {id: "child"}, "This is the Children Div")
// parent.render(child); 


/**
 * Now there is another question which arises that what if we have to create the below structure 
 * 
 * <div id="parent">
    <div id="child">
        <h1>Im the h1 tag</h1>
        <h2>Im the h2 tag</h2>
    </div>
    <div id="child2">
        <h1>Im the h1 tag</h1>
        <h2>Im the h2 tag</h2>
    </div>
</div>

If we create the code for above structure it will look like something that is given below which lloks Ugly that is why
we have something called => JSX


const parent  = React.createElement("div", {id: "parent"},
    [
        React.createElement("div", {id: "child"}, 
    // if you want to create siblings then add the children in array like below
        [
            React.createElement("h1", {}, "Im the H1 tag"), 
            React.createElement("h2", {}, "Im the H2 tag")
        ]
    ), 
        React.createElement("div", {id: "child2"}, 
    // if you want to create siblings then add the children in array like below
        [
            React.createElement("h1", {}, "Im the H1 tag"), 
            React.createElement("h2", {}, "Im the H2 tag")
        ]
    )
    ]
 )
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent);




 */



 