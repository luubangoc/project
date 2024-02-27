import ListProductComponent from "./listProduct";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../features/Redux/Store/store";

import { ICategory, IListCategory } from "../../Types/models";
import ListCategory from "./listCategory";
import Navbar from "../../components/Header/Header";
import FeatureCollection from "./featureCollection";
import PopularProducts from "./popularProducts";
import styles from "./home.module.css";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/Login";

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

  const userLogin = useSelector(
    (state: RootState) => state.reducer.loginSlice.user
  );
  console.log(userLogin);
  return (
    <div style={{ width: "100%" }}>
      <Navbar />
      <Login />
      {/* <div style={{ height: "50px", backgroundColor: "green" }}> */}{" "}
      <ListCategory categories={categories} listProduct={listProduct} />
      {/* </div> */}
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
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
