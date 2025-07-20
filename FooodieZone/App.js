import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the /client for React 18+

/**
 * Here is the basic structure of our food ordering app named as FooodieZone
 * 
 * Header
 *  Logo
 *  Nav Items 
 * Body
 *  Search
 *  Restaurant Container
 *      Restaurant card
 * Footer
 *  Copyrights
 *  Links
 *  Address
 *  Contact
 *
 */

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src=".\Assets\Logo\FooodieZone Logo.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>About Us</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className ="app">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)