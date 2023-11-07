
import "./Component.css"
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


function Body() {

  const [listOfRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestauant, setFilterdeRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    setListofRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterdeRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {
                setSearchText(e.target.value);
            }}/>
            <button 
              onClick={() => {
                console.log(searchText);

                const filteredRestauant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                setFilterdeRestaurant(filteredRestauant);
              }}
            >Search</button> 
          </div>
          <button className="filter-btn" onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
            setListofRestaurant(filteredList);
          }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
        {filteredRestauant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}     
        </div>
    </div>
  )
}



export default Body