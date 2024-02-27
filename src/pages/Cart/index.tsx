import {
  AppBar,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";
import { RootState } from "../../features/Redux/Store/store";
import { useSelector } from "react-redux";
import {
  handleIncreaseQuantity,
  handleReduceQuantity,
} from "../../features/Redux/Reducers/cartSlice";
import { useDispatch } from "react-redux";
import HeaderTab from "../../components/Header/HeaderTab";

const index = () => {
  const dispatch = useDispatch();
  const cart = useSelector(
    (state: RootState) => state.reducer.cartSlice.listProductCart
  );
  const listProduct = useSelector(
    (state: RootState) => state.reducer.productSlice.listProduct
  );
  const [newCart, setNewCart] = useState([]);
  useEffect(() => {
    const result = cart.map((item) => {
      let newItem;
      listProduct.forEach((product) => {
        if (product.id === item.id) {
          newItem = {
            ...product,
            ...item,
          };
          return newItem;
        }
      });
      return newItem;
    });
    const listCart:any = [...result];
    setNewCart(listCart);
  }, [cart]);
  console.log(cart);

  //   function dispatch(arg0: any): void {
  //     throw new Error("Function not implemented.");
  //   }

  return (
    <Box>
      <HeaderTab/>

      <Stack
        //   component="div"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Typography component="p">SHOPPING CART </Typography>
        <Typography component="p">CHECKOUT</Typography>
        <Typography component="p">ORDER COMPLETE</Typography>
      </Stack>
      <Grid container>
        <Grid item md={8}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="right">PRODUCT</TableCell>
                  <TableCell align="right">PRICE</TableCell>
                  <TableCell align="right">QUANTITY</TableCell>
                  <TableCell align="right">SUBTOTAL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {newCart &&
                  newCart?.map((item: any) => (
                    <TableRow
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <img
                          src={item.images[0]}
                          alt=""
                          style={{ width: "50px" }}
                        />
                      </TableCell>
                      <TableCell align="right">{item.name}</TableCell>
                      <TableCell align="right">{item.price}</TableCell>
                      <TableCell align="right">
                        <div
                          style={{
                            backgroundColor: "#ccc",
                            padding: "0",
                            height: "24px",
                            width: "100px",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            borderRadius: "6px",
                          }}
                        >
                          <button
                            style={{
                              color: "orange",
                              border: "none",
                              backgroundColor: "transparent",
                              fontWeight: "bold",
                            }}
                            onClick={() =>
                              item.quantity! > 1 &&
                              dispatch(
                                handleReduceQuantity({
                                  id: item.id,
                                  size: item.size,
                                  color: item.color,
                                })
                              )
                            }
                          >
                            -
                          </button>
                          {item.quantity}
                          <button
                            style={{
                              color: "orange",
                              border: "none",
                              backgroundColor: "transparent",
                              fontWeight: "bold",
                            }}
                            onClick={() =>
                              dispatch(
                                handleIncreaseQuantity({
                                  id: item.id,
                                  size: item.size,
                                  color: item.color,
                                })
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </TableCell>
                      <TableCell align="right">{item.discount}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item md={4}></Grid>
      </Grid>
    </Box>
  );
};

export default index;
