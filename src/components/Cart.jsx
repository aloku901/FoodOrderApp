/** @format */

import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <ItemList items={"cart"} />
    </div>
  );
}

export default Cart;
