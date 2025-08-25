import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({ resData }) => {
    // Optional chaining aur default empty object use kiya hai
    const { 
        cloudinaryImageId, 
        name, 
        cuisines = [], 
        avgRating, 
        costForTwo, 
        sla 
    } = resData?.info || {};

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
            ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            {/* Conditional rendering use kiya hai agar sla ya deliveryTime available na ho */}
            {sla?.deliveryTime ? (
                <h4>{sla.deliveryTime} minutes</h4>
            ) : (
                <h4>Delivery info not available</h4>
            )}
        </div>
    );
};

export default RestaurantCard;