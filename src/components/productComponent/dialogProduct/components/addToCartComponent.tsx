import { Box, Button, Grid, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import styles from "./dialogproduct.module.css";
import { productAddToCartProps } from "./contentDialogComponent";
import { useDispatch } from "react-redux";
import { handleAddToCart } from "../../../../features/Redux/Reducers/cartSlice";

interface IProps {
  productAddToCart: productAddToCartProps;
}
const AddToCartComponent = ({ productAddToCart }: IProps) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   productAddToCart.quantity = quantity;
  // }, [quantity]);
  // const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   let value = parseInt(event.target.value);
  //   if (!isNaN(value)) {
  //     setQuantity(value);
  //   }
  // };
  console.log(productAddToCart);
  // console.log(quantity);

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 2) {
      setQuantity((prev) => prev - 1);
    }
  };
  return (
    <>
      <Box className="d-flex col-4 ">
        <span
          className="input-group-text rounded-0 rounded-start w-25 align-items-center"
          onClick={handleDecreaseQuantity}
        >
          -
        </span>
        <input
          type="text"
          className="form-control text-center rounded-0 w-25"
          // value={quantity}
          aria-label="Quantity"
          aria-describedby="decrement increment"
          // onChange={handleQuantityChange}
        />
        <span
          className="input-group-text rounded-0 rounded-end w-25"
          onClick={handleIncreaseQuantity}
        >
          +
        </span>
      </Box>
      <Box className="col-6 d-flex">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(handleAddToCart(productAddToCart))}
        >
          Add to cart
        </button>
        <button type="button" className="btn btn-success">
          Buy now
        </button>
      </Box>
    </>
  );
};

export default AddToCartComponent;
