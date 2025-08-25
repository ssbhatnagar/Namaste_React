import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // useState take the input as array it is same as provding input like below
  // const arr = useState(resList);
  // const listOfRestaurant = arr[0];
  // const setListOfRestaurant = arr[1]

  // this is how we destructure the array and provide the input
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const[searchText, setSearchText] = useState("");

  
  // This will work after the body component is rendered
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json)
    console.log(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    // console.log("hi");
    setListOfRestaurant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    // .gridElements.infoWithStyle.restaurants
    // data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name
  };

  // this is conditional rendering - rendeing UI based on any condition
  // if(listOfRestaurant.length === 0){
  //   return<Shimmer/>
  // }

  // this is better way to use twernary operator to make conditional rendering
  return listOfRestaurant.length === 0 ? <Shimmer/> :  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text"
          className="search-box"
          value = {searchText} // this is how we bind the seacrhText value with the local variable of state
          onChange={(e) => {
            setSearchText(e.target.value)
          }} 
          />
          <button
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              // Yahan `res.info.name` ka use kiya gaya hai aur case-insensitive kiya gaya hai.
              (res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
          );
          setFilteredRestaurant(filteredList);
          }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res?.info?.avgRating > 4.2
            );
            setListOfRestaurant(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurant{" "}
        </button>
      </div>
      <div className="res-container">
        {/* ALWAYS GIVE A KEY */}
        {filteredRestaurant.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant?.info?.id || index}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
