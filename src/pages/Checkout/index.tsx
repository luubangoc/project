import { Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "../../components/Header/Header";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const handleLinkClick = () => {
    
  };
  return (
    <>
      <Navbar />
      <Stack
        className={styles.title}
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <h5>SHOPPING CART </h5>
        <i className="fa-solid fa-arrow-right"></i>
        <h5>CHECKOUT</h5>
        <i className="fa-solid fa-arrow-right"></i>
        <h5>ORDER COMPLETE</h5>
      </Stack>
      <Grid container>
        <Typography variant="body2">
          Have a coupon?
          <Link href="#" onClick={handleLinkClick}>
            Click here to enter your code
          </Link>
        </Typography>
      </Grid>
    </>
  );
};

export default Checkout;
