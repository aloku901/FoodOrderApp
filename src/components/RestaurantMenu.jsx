/** @format */

import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

function RestaurantMenu() {
  const [resinfo, setResinfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResinfo(json.data);
  };

  if (resinfo === null) return <Shimmer />;

  const info = resinfo?.cards?.[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = info || {};

  const menu =
    resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  console.log(menu);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      <ul>
        {menu.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name}-{" "}
            {item.card.info.price / 100 ||
              item.card.info.finalPrice / 100 ||
              item.card.info.defaultPrice/100}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default RestaurantMenu;
