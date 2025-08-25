import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";

const Header = () => {

  // let btnName = "Login"; // this is just a normal js variable it cannot be use to update the state

  const [btnNameReact, setBtnNameReact] = useState("Login") // this is how a state variable changes the UI

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src= {LOGO_URL}/>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button className="login"
            onClick={() => { btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")  // once the button is clicked the whole header UI not only the button will re-render
              console.log(btnNameReact) 
             }} 
            
            >{btnNameReact}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;