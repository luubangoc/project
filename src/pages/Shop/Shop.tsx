import { Box, Grid, Paper } from "@mui/material";
import React, { Fragment } from "react";
import Navbar from "../../components/header/Header";
import ListProductShop from "../../components/listproductshop";


const Shop = () => {
  return (
    <Fragment>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box sx={{ backgroundColor: "green" }}>Category</Box>
        <Box className="px-2 py-4 my-4">
          <ListProductShop></ListProductShop>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Shop;
