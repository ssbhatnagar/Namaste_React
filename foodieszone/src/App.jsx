import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice the /client for React 18+
import './index.css'

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
                <img className="logo" src="./src/assets/foodiezone-logo.jfif"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return(
        <div className= "res-card">
            <h3>meghna Foods</h3>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            <RestaurantCard/>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
        <div className ="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)

export default AppLayout