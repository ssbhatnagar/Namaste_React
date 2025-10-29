import React from "react";
import ReactDOM from "react-dom/client"; // Notice the /client for React 18+
import "./index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";


// This is a way to pass inline CSS or even there is another way to pass this
// const styleCard ={
//     backgroundColor : "#f0f0f0"
// }





const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />  {/**Here outlet is kind of a single source which tells whcih children will get pushed and will render on UI from the appRouter list  */}
    </div>
  );
};

// RouterProvider will provide the below configuration to our app

// this is how we provide configuration, what is configuration? its a list of objects each and every object defines a different path and wjhat should heppen on that path
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>, // is path is "/" show app layout if anuthing else than that show errorElement
    children:[
      {
        path: "/",
        element: <Body/>
        
      },
      {
        path: "/about",
        element: <About/>
        
      },
      {
        path: "/contact",
        element: <Contact/>
        
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu/>
        
      }
    ],
    errorElement: <Error/>
  },
  // {
  //   path: "/about",
  //   element: <About/>
    
  // },
  // {
  //   path: "/contact",
  //   element: <Contact/>
    
  // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />); // this way we use to render the app earlier but now we will use routing

root.render(<RouterProvider router={appRouter}/>);

export default AppLayout;
