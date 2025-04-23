import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProductCAT } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

const Products = () => {
  const { data: products, status } = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      dispatch(fetchProductCAT());
    };
    getProducts();
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <div className="productWrapper">
      {products.map((product) => {
        return (
          <div className="productCard">
            <img src={product.image} />

            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button className="addToCartBtn" onClick={() => handleAdd(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
