/** @format */

import React from "react";
import { cloudurl } from "../utils/constant";

function ItemList({ items }) {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 mx-2 border-gray-400 border-b-2 text-left flex justify-between items-center"
        >
          <div className="w-9/12">
            <div className="font-bold text-sm text-gray-700">
              <span className="text-lg">{item.card.info.name}</span>
              <br />
              <span className="text-lg text-black">
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="flex items-center py-1 text-sm">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                fillColor="#116649"
              >
                <rect width="14" height="14" fill="white"></rect>
                <path
                  d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                  fill="#116649"
                ></path>
              </svg>
              <span className="font-semibold text-green-900">
                {item.card.info.ratings.aggregatedRating.rating}
              </span>
              <span className="font-semibold text-gray-500">
                ({item.card.info.ratings.aggregatedRating.ratingCountV2})
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-3 relative">
            <img src={cloudurl + item.card.info.imageId} className="rounded-2xl" />
            <button className="px-10 py-1 bg-white text-green-700 rounded font-bold absolute top-[145px] left-[30px] shadow">
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
