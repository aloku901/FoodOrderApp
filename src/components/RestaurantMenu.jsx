/** @format */

import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

function RestaurantMenu() {
  const { resId } = useParams();

  const resinfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResinfo(json.data);
  // };

  if (resinfo === null) return <Shimmer />;

  const info = resinfo?.cards?.[2]?.card?.card?.info;
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
    sla, //slaString used
  } = info || {};

  console.log(info);

  const categories =
    resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  console.log(categories);

  const menu =
    resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  console.log(menu);
  // console.log(
  //   resinfo.cards[4].groupedCard.cardGroupMap.REGULAR
  // );

  return (
    <div className="menu w-7/12 mx-auto mb-20">
      <h1 className="font-extrabold text-2xl mt-10 mb-2 ">{name}</h1>
      <div className="p-5 border rounded-3xl shadow-xl my-5">
        <h2 className="flex items-center gap-1 font-bold text-xl">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-hidden="true"
            strokecolor="rgba(2, 6, 12, 0.92)"
            fillcolor="rgba(2, 6, 12, 0.92)"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B"></stop>
                <stop offset="1" stopColor="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>
          {avgRating}({totalRatingsString}){" "}
          <span className="font-bold text-gray-500">.</span> {costForTwoMessage}
        </h2>
        <h2 className="my-1 underline text-orange-500 font-semibold text-sm">
          {cuisines.join(", ")}
        </h2>
      </div>

      {categories.map((category, index) => (
        <RestaurantCategories
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
      {/* <ul>
        {menu.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{" "}
            {item.card.info.price / 100 ||
              item.card.info.finalPrice / 100 ||
              item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
export default RestaurantMenu;
