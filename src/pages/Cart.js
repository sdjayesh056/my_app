import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const items = useSelector((state) => state.cart);
  console.log(items.data);

  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(remove(itemId));
  };

  return (
    <div className="cartWrapper">
      <h1>This is cart page</h1>
      {items.map((item) => {
        return (
          <div className="cardCart">
            <img className="cartImage" src={item.image} />
            <h5>{item.title}</h5>
            <h5>{item.price}</h5>
            <button
              className="cartRemoveBtn"
              onClick={() => handleRemove(item.id)}
            >
              Remove Product
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
