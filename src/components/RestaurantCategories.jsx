/** @format */

import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategories({ data, showItems, setShowIndex }) {
  console.log(data);

  // const [ showItems, setShowItem ] = useState(false);

  const handleClick = () => {
    setShowIndex();
  }
  return (
    <div>
      <div className="w-11/12 mx-auto my-2">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-extrabold text-base">
            {data.title}({data.itemCards.length})
          </span>
          <span>▼</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>

      <div className="w-full p-2 bg-gray-200 mt-2"></div>
    </div>
  );
}

export default RestaurantCategories;
