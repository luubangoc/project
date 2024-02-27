import React, { useState } from "react";
import { IProduct } from "../../Types/models";
import styles from "./product.module.css";
import {
  Box,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import OptionsBarComponent from "./optionsBarComponent";
import StateProductComponent from "./stateProductComponent";
import ImageProductComponent from "./imageProductComponent";
import ContentProductComponent from "./contentProductComponent";
interface ProductItemProps {
  productItem: IProduct;
}
const ProductItemComponent = ({ productItem }: ProductItemProps) => {
  const [hoverState, setHoverState] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setHoverState(true);
  };

  const handleMouseLeave = () => {
    setHoverState(false);
  };
  return (
    <>
      <Grid
        item
        key={productItem.id}
        sx={{ padding: 1.5 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box>
          <Card>
            <Box position="relative">
              <Box className={styles.stateProduct}>
                <StateProductComponent stateProduct={productItem.state} />
              </Box>
              <Box className={styles.productImageContainer}>
                <ImageProductComponent hoverState={hoverState} productItem={productItem} />
              </Box>
              <Box className={styles.optionBarContainer}>
                <Grid
                  className={
                    !hoverState ? styles.optionBar : styles.optionBarHover
                  }
                >
                  <OptionsBarComponent productItem={productItem} />
                </Grid>
              </Box>
            </Box>
            <CardContent sx={{ height: 120 }}>
              <ContentProductComponent productItem={productItem} />
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </>
  );
};

export default ProductItemComponent;
