import React from "react";
import ReactDOM from "react-dom/client"; // Notice the /client for React 18+
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";


// This is a way to pass inline CSS or even there is another way to pass this
// const styleCard ={
//     backgroundColor : "#f0f0f0"
// }





const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>
  },
  {
    path: "/about"
    
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;
