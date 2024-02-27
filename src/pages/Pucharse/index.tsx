import React, { useEffect, useState } from "react";
import { AnyIfEmpty, useSelector } from "react-redux";
import { RootState } from "../../features/Redux/Store/store";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import styles from "./Pucharse.module.css";
import { IPucharse } from "../../Types/models";
import pucharseSaga from "../../features/Redux/Saga/pucharseSaga";
const index = () => {
  const listPucharseByUser: IPucharse[] = useSelector(
    (state: RootState) => state.reducer.pucharseSlice.pucharseByUser
  );
  const listProduct = useSelector(
    (state: RootState) => state.reducer.productSlice.listProduct
  );

  const [newListPucharseByUser, setNewListPucharseByUser] = useState([]);
  useEffect(() => {
    const res = listPucharseByUser.map((pucharse) => {
      let newList;
      const productsNewOrder = pucharse.productsOrder.map((item) => {
        let newItem;
        listProduct.forEach((product) => {
          if (product.id === item.productId) {
            newItem = {
              ...product,
              ...item,
            };
            return newItem;
          }
        });
        return newItem;
      });
      return (newList = { ...pucharse, productsOrder: productsNewOrder });
    });

    const listNewPucharse: any = [...res];
    setNewListPucharseByUser(listNewPucharse);
  }, [listPucharseByUser]);
  // console.log(newListPucharseByUser);

  return (
    <Grid container justifyContent={"center"} sx={{ width: "100%" }}>
      {newListPucharseByUser.map((data: any, index) => (
        <Grid item key={index} xs={8} justifyContent={"center"}>
          <Box sx={{ maxWidth: "1000px", width: "100%" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">woo</Typography>
              <Typography variant="h6">Giao hàng thành công</Typography>
            </Stack>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableBody>
                {data.productsOrder.map((product: any) => (
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <div>
                        {" "}
                        <img
                          src={product.images[0]}
                          alt=""
                          className={styles.img}
                        />
                      </div>
                      <div>
                        <p
                          className={styles.name}
                        >{`${product.name} - ${product.size} - months, ${product.color}`}</p>
                        <p
                          className={styles.quantity}
                          style={{ marginBottom: "0", marginTop: "8px" }}
                        >
                          {`${product.quantityOrder} x`}
                          <span
                            className={styles.price}
                          >{` $${product.price}`}</span>
                        </p>
                      </div>
                    </TableCell>

                    <TableCell style={{ width: 160 }} align="right">
                      <Typography component="p">
                        ${product.price * product.quantityOrder}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow></TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
          <hr />
          <Typography component="p">
            Thành tiền : {data.productsOrder.forEach((product: any) => {})}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default index;
