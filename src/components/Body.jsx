import "./Component.css";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Body() {
  const [listOfRestaurants, setListofRestaurant] = useState([]);
  const [filteredRestauant, setFilterdeRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setListofRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdeRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks Like You are Offline ! Please Check your Internet
        Connection.......
      </h1>
    );
  }

  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return (!listOfRestaurants || listOfRestaurants.length === 0) ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center justify-center justify-between mx-28">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg p-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg text-[green] font-bold"
            onClick={() => {
              console.log(searchText);

              const filteredRestauant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilterdeRestaurant(filteredRestauant);
            }}>
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filtereslist = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterdeRestaurant(filtereslist);
            }}
          >Top Rated Restaurants</button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestauant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
