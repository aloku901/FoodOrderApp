/** @format */

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import LocationSelector from "./LocationSelector";


function Header({ onLocationChange }) {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="header flex justify-between px-6 pt-5 pb-2 border shadow-lg">
      <div className="logo text-3xl font-semibold cursor-pointer flex items-center justify-center">
        <Link to="/" className="mr-4">Logo</Link>
        <LocationSelector onLocationChange={onLocationChange} className="mr-16" />
      </div>
      <div className="nav-items ">
        <ul className="flex flex-row gap-10 cursor-pointer">
          <li>{onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li>
            <Link to="/cart">🛒({cartItems.length})</Link>
          </li>
          <li className="px-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
