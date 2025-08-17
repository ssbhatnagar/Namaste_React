import RestaurantCard from "./RestaurantCard";

import resList from "../Utils/mockData";
import { useState } from "react";


const Body = () => {

    // useState take the input as array it is same as provding input like below
    // const arr = useState(resList);
    // const listOfRestaurant = arr[0];
    // const setListOfRestaurant = arr[1]

    // this is how we destructure the array and provide the input
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
