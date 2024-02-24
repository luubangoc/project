import ListProductComponent from "./listProduct";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../features/Redux/Store/store";

import { ICategory, IListCategory } from "../../Types/models";
import ListCategory from "./listCategory";
import Navbar from "../../components/Header/Header";
import FeatureCollection from "./featureCollection";
import PopularProducts from "./popularProducts";
// import Navbar from "../../components/Header/Header";
import styles from "./home.module.css";
import { useEffect } from "react";

const Home = () => {
  const cart = useSelector(
    (state: RootState) => state.reducer.cartSlice.listProductCart
  );
  const listProduct = useSelector(
    (state: RootState) => state.reducer.productSlice.listProduct
  );

  const listNewProduct = listProduct.filter((item) =>
    item.state.includes("new")
  );
  console.log(listNewProduct);
  const listPopularProduct = listProduct.filter((item) => item.buy > 50);
  console.log(listPopularProduct);

  // category
  const categories = useSelector(
    (state: RootState) => state.reducer.categorySlice.categories
  );
  console.log(categories);

  console.log(cart);

  return (
    <div style={{ width: "100%" }}>
      <Navbar />

      <div style={{ height: "50px", backgroundColor: "red" }}>
        Lưu Bá Ngọc {/* Header (ngoc) */}
        <button>-</button>
        <button>+</button>
      </div>
      {/* category */}
      <Box>
        <ListCategory categories={categories} listProduct={listProduct} />
      </Box>

      <div style={{ height: "50px", backgroundColor: "green" }}>
        {" "}
        Hùng Trần{/* Category (dùng chung) (Hung Tran) */}
      </div>
      <div className="my-5">
        <Box alignContent="center" sx={{ marginTop: 10 }}>
          <FeatureCollection />
          <Box sx={{ overflow: "hidden" }}>
            <ListProductComponent listProduct={listNewProduct} />
          </Box>
        </Box>
      </div>

      <div style={{ height: "50px", backgroundColor: "white" }}>
        {" "}
        Của ai nhận đi !{/*Organic and safe clothes set for your baby  */}
      </div>

      <div className="my-5">
        <Box alignContent="center" sx={{ marginTop: 10 }}>
          <PopularProducts />
          <Box sx={{ overflow: "hidden", paddingBottom: "30px" }}>
            <ListProductComponent listProduct={listPopularProduct} />
          </Box>
        </Box>
      </div>

      <div style={{ height: "50px", backgroundColor: "blue" }}>
        {/* Tips and articles (phu)*/}
      </div>

      <div style={{ height: "50px", backgroundColor: "pink" }}>
        {/* Our instagram (thuyet) */}
      </div>

      <div style={{ height: "50px", backgroundColor: "blue" }}>
        {/* footer */}
      </div>
    </div>
  );
};

export default Home;
