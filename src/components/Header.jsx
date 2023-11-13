import { useState } from "react"
import "./Component.css"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

function Header() {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
  return (
    <div className='flex justify-between bg-pink-100 shadow-lg items-center px-2'>
        <div className='logo-container '>
            <img 
                className='w-32'
                src='logo.png'
            />
        </div>
        <div className='nav-items'>
            <ul>
                <li>
                    Online Status: {onlineStatus ? "🟢" : "🔴"}
                </li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <button
                    onClick={()=> {
                        btnName === "Login" ? setBtnName("Logout"): setBtnName("Login");
                    }}
                >{btnName}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header