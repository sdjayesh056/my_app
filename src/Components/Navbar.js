import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  console.log(items);

  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span className="logo">Redux Store</span>
      <div>
        <Link className="navlink" to={"/"}>
          Home
        </Link>
        <Link className="navlink" to={"/cart"}>
          Cart
        </Link>
        <span className="cartCounter">CART ITEMS : {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
