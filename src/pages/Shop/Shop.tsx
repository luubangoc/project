import { Box } from "@mui/material";
import { Fragment } from "react";
import ListProductShop from "../../components/listproductshop";
import Navbar from "../../components/Header/Header";
import { useSelector } from "react-redux";
import { RootState } from "../../features/Redux/Store/store";
import ListCategory from "../home/listCategory";



const Shop = () => {
  const listProduct = useSelector(
    (state: RootState) => state.reducer.productSlice.listProduct
  );
  const categories = useSelector(
    (state: RootState) => state.reducer.categorySlice.categories
  );
  return (
    <Fragment>
      <Box>
        <Box>
          <Navbar />
        </Box>
        <Box><ListCategory categories={categories} listProduct={listProduct}></ListCategory></Box>
        <Box className="px-2 py-4 my-4">
          <ListProductShop listProduct={listProduct}></ListProductShop>
        </Box>
      </Box>
    </Fragment>
  );
};


export default Shop;




