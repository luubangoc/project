import React from "react";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { IListProduct, IProduct } from "../../Types/models";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingSlickProduct } from "../../constants/settingSlick";

const ListProductComponent = ({ listProduct }: IListProduct) => {
  var settings = settingSlickProduct;
  return (
    <div>
      <Slider {...settings}>
        {listProduct.map((product: IProduct) => (
          <Grid item key={product.id} sx={{ padding: 1.5 }}>
            <Card>
              <Box position="relative">
                <Box
                  position="absolute"
                  top={10}
                  left={10}
                  display="flex"
                  flexDirection="column-reverse"
                  gap={1}
                >
                  {" "}
                  {product.state.map(
                    (item, index) =>
                      item !== "popular" && (
                        <Chip
                          key={index}
                          label={item.charAt(0).toUpperCase() + item.slice(1)}
                          color={
                            item.includes("new")
                              ? "success"
                              : item.includes("hot")
                              ? "error"
                              : "default"
                          }
                          size="small"
                        />
                      )
                  )}
                </Box>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.images[0]}
                  alt={product.name}
                ></CardMedia>
              </Box>
              <CardContent sx={{ height: 120 }}>
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Typography component="span" align="center">
                    {product.name}
                  </Typography>
                  <Box display="flex" justifyContent="center">
                    <Rating
                      name="simple-controlled"
                      value={product.rating.rate}
                      size="small"
                    />
                  </Box>
                  <Typography
                    component="span"
                    align="center"
                    color="primary"
                    fontWeight="bold"
                    className="my-2"
                  >
                    $
                    {product.discount !== 0
                      ? (
                          product.price -
                          product.price * (product.discount / 100)
                        ).toFixed(2)
                      : product.price}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Slider>
    </div>
  );
};

export default ListProductComponent;
