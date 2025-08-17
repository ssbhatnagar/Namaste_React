import RestaurantCard from "./RestaurantCard";

import resList from "../Utils/mockData";
import { useState } from "react";


const Body = () => {

   const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    

  return (
    <div className="body">
      <div className="filter"> 
        <button className="filter-btn" onClick={() => {
            const filteredList  = listOfRestaurant.filter(
                (res) => res.avgRating > 4 
            )
            setListOfRestaurant(filteredList)
        }} > Top Rated Restaurant </button>
      </div>
      <div className="res-container">
        {/* ALWAYS GIVE A KEY */}
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
