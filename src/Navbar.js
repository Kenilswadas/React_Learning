import React from "react";
import { Link } from "react-router-dom";
import { FaAmazon } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";


import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navDiv">
        <h1 className="logo">
          <FaAmazon />
        </h1>
        <div className="navItems">
          <Link className="items" to="/">
            Home
          </Link>
          <Link className="items" to="/about">
            About
          </Link>
          <Link className="items" to="/Contact">
            Contact
          </Link>
          <div className="searchbar">
            <div>
            <FaSearch/>
            </div>
            <div>
                <input className="inputText" type="text" />
            </div>
          </div>
        </div>
      </div>
      <div className="navDiv2">
        
        <div className="navItems2">
           <div>
            <button className="btn"><FaBars/>All</button>
           </div>
          <Link className="items" to="/">
            Fresh
          </Link>
          <Link className="items" to="/about">
            Amezon miniTV
          </Link>
          <Link className="items" to="/Contact">
            Sell
          </Link>
          <Link className="items" to="/Contact">
            Best Seller
          </Link>
          <Link className="items" to="/Contact">
            Today's Deals
          </Link>
          <Link className="items" to="/Contact">
            Mobiles
          </Link>
          <Link className="items" to="/Contact">
            Electronics
          </Link>
            <Link className="items" to="/Contact">
            Books
          </Link>
          <Link className="items" to="/Contact">
            Aamazon Pay
          </Link>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
