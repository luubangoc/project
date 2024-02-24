import {
  Box,
  FormControl,
  MenuItem,
  Rating,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { ProductItemContext } from "../../index";
import ColorComponent from "./colorComponent";
import AddToCartComponent from "./addToCartComponent";

export interface productAddToCartProps {
  size: string;
  color: string;
  id: string;
  quantity: number;
}
const ContentDialogComponent = () => {
  const productItem = useContext(ProductItemContext);
  // const [size, setSize] = React.useState(
  //   productItem ? productItem.sizeProduct[0] : ""
  // );
  const [productAddToCart, setProductAddToCart] =
    useState<productAddToCartProps>({
      size: productItem ? productItem?.sizeProduct[0] : "",
      color: productItem ? productItem?.color[0] : "",
      id: productItem ? productItem.id : "",
      quantity: 1,
    });
  const handleChange = (event: any) => {
    setProductAddToCart({ ...productAddToCart, size: event.target.value });
  };
  // console.log(size);

  const handleColor = (value: string) => {
    setProductAddToCart({
      ...productAddToCart,
      color: value,
    });
  };
  return (
    productItem && (
      <Box className="my-2">
        <Box className="mb-3">
          <Typography variant="h4" fontWeight="400">
            {productItem.name}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="start"
          className="mb-3"
          alignItems="center"
        >
          <Rating
            name="simple-controlled"
            value={productItem.rating.rate}
            size="small"
          />
          <Typography className="ms-2">
            ({productItem.rating.count} customer review)
          </Typography>
        </Box>
        <Box className="mb-3">
          <Typography variant="h5" fontWeight="500" color="primary">
            $
            {(
              productItem.price -
              productItem.price * (productItem.discount / 100)
            ).toFixed(2)}
          </Typography>
        </Box>
        <Box className="mb-3">
          <Typography component="p" color="lightslategray">
            {productItem.description}
          </Typography>
        </Box>
        <Box className="mb-3 d-flex" alignItems="center">
          <Typography component="span" fontSize="20px" fontWeight="500">
            Size:
          </Typography>
          <FormControl sx={{ m: 1, minWidth: "50%" }}>
            <Select
              value={productAddToCart?.size}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              className="my-2"
            >
              <MenuItem value="">
                <em>Choose an option</em>
              </MenuItem>
              {productItem.sizeProduct.map((item: any, index: number) => (
                <MenuItem value={item} key={index}>
                  {" "}
                  {item} Months
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box className="mb-3 d-flex" alignItems="center">
          <Typography component="span" fontSize="20px" fontWeight="500">
            Color:
          </Typography>
          <Box>
            <ColorComponent handleColor={handleColor} />
          </Box>
        </Box>
        <Box className="mb-3 d-flex row" alignItems="center">
          <AddToCartComponent productAddToCart={productAddToCart} />
        </Box>
      </Box>
    )
  );
};

export default ContentDialogComponent;
