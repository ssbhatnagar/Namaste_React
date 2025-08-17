import RestaurantCard from "./RestaurantCard";

import resList from "../Utils/mockData";


const Body = () => {

   
    

  return (
    <div className="body">
      <div className="filter"> 
        <button className="filter-btn"> Top Rated Restaurant </button>
      </div>
      <div className="res-container">
        {/* ALWAYS GIVE A KEY */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
