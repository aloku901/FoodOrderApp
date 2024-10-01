/** @format */

import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function Body() {
  const [resList, setReslist] = useState([]);
  const [filteredrest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    console.log(json);

    setReslist(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  // if (resList.length === 0) {
  //   return <Shimmer/>;
  // }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body mx-8 ">
      <div className="filter mx-28 my-6 flex items-center justify-between">
        <button
          className="fiter-btn cursor-pointer border p-3 bg-slate-900 text-white font-semibold rounded-lg"
          onClick={() => {
            const filteredList = resList.filter(
              (res) => res.info.avgRating > 4.1,
            );
            setFilteredRest(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search flex gap-6">
          <input
            type="text"
            placeholder="Search...."
            className="search-box p-2 rounded-lg font-medium text-lg border cursor-pointer"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="fiter-btn cursor-pointer border p-3 px-6 bg-slate-900 text-white font-semibold rounded-lg"
            onClick={() => {
              console.log(searchText);

              const filteredrest = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );

              setFilteredRest(filteredrest);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap justify-center gap-10 mt-5 ">
        {filteredrest.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
