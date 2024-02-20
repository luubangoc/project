import ListProductComponent from "./listProduct";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../features/Redux/Store/store";
import FeatureCollection from "./featureCollection";
import PopularProducts from "./popularProducts";

const Home = () => {
  const listProduct = useSelector(
    (state: RootState) => state.reducer.productReducer.listProduct
  );
  const listNewProduct = listProduct.filter((item) =>
    item.state.includes("new")
  );
  console.log(listNewProduct);
  const listPopularProduct = listProduct.filter((item) => item.buy > 50);
  console.log(listPopularProduct);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: "50px", backgroundColor: "red" }}>
        Lưu Bá Ngọc {/* Header (ngoc) */}
      </div>
      <div style={{ height: "50px", backgroundColor: "green" }}>
        {" "}
        Hùng Trần{/* Category (dùng chung) (Hung Tran) */}
      </div>

      <div className="my-5">
        <Box alignContent="center" sx={{ marginTop: 10 }}>
          <FeatureCollection />
          <ListProductComponent listProduct={listNewProduct} />
        </Box>
      </div>

      <div style={{ height: "50px", backgroundColor: "white" }}>
        {" "}
        Của ai nhận đi !{/*Organic and safe clothes set for your baby  */}
      </div>

      <div className="my-5">
        <Box alignContent="center" sx={{ marginTop: 10 }}>
          <PopularProducts />
          <ListProductComponent listProduct={listPopularProduct} />
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
