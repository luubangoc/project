import React from "react";
import { Box } from "@mui/material";
import { IListProduct, IProduct } from "../../Types/models";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingSlickProduct } from "../../constants/settingSlick";
import ProductItemComponent from "../../components/productComponent";

const ListProductComponent = ({ listProduct }: IListProduct) => {
  var settings = settingSlickProduct;
  return (
    <>
      <Slider {...settings}>
        {listProduct.map((product: IProduct) => (
          <Box key={product.id}>
            <ProductItemComponent productItem={product}></ProductItemComponent>
          </Box>
        ))}
      </Slider>
    </>
  );
};

export default ListProductComponent;
