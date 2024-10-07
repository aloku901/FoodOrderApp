/** @format */

import React from "react";
import ItemList from "./ItemList";

function RestaurantCategories({ data }) {
  console.log(data);

  return (
    <div>
      <div className="w-11/12 mx-auto my-2">
        <div className="flex justify-between">
          <span className="font-extrabold text-base">
            {data.title}({data.itemCards.length})
          </span>
          <span>▼</span>
        </div>
        <ItemList items={data.itemCards} />
      </div>

      <div className="w-full p-2 bg-gray-200 mt-2"></div>
    </div>
  );
}

export default RestaurantCategories;
