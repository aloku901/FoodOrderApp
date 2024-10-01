/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header flex justify-between px-6 pt-5 pb-2 border shadow-lg">
      <div className="logo text-3xl font-semibold cursor-pointer">
        <Link to="/">Logo</Link>
      </div>
      <div className="nav-items ">
        <ul className="flex flex-row gap-10 cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
