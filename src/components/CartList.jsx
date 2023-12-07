import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { removeItem, selectCartItems } from "../utils/cartSlice";
import { useState, useEffect } from "react";

function ItemList({ items }) {

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);


  const handleRemoveItem = (item) => {
     dispatch(removeItem(item));
     console.log(item);
  }

  const[subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal whenever cart items change
    const newSubtotal = cartItems.reduce((total, item) => {
      return total + ((item.card.info.price || item.card.info.defaultPrice) / 100);
    }, 0);
    setSubtotal(newSubtotal);
  }, [cartItems]);

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
            <button className="px-2 bg-white text-red-500 rounded font-bold absolute top-20 right-9" onClick={() => handleRemoveItem(item)}>REMOVE</button>
          </div>
        </div>
      ))}
      <div className="flex justify-between px-7 py-6">
        <h3 className=""><b>SubTotal: </b></h3>
        <p>{subtotal}</p>
      </div>
    </div>
  );
}

export default ItemList;
