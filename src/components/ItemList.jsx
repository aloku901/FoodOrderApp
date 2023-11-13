import { CDN_URL } from "../utils/constants";

function ItemList({ items }) {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between items-center">
          <div className="w-9/12">
            <div className="font-bold text-sm text-gray-700">
              <span>{item.card.info.name}</span><br/>
              <span>₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs text-gray-600">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-3 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="rounded"
            />
            <button className="px-2 bg-white text-green-700 rounded font-bold absolute top-20 right-12">ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
