import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../features/Redux/Store/store";

import { ICategory, IListCategory } from "../../Types/models";
import Navbar from "../../components/Header/Header";
import FeatureCollection from "./featureCollection";
import PopularProducts from "./popularProducts";
import styles from "./home.module.css";
import Footer from "../../components/Footer/Footer";
import Login from "../../components/Login";


import ListCategory from "./listCategory";
import Footer from "../../components/footer/Footer";
import Collection from "./collection";

  
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
  const listPopularProduct = listProduct.filter((item:IProduct) => item.buy > 50);
  console.log(listPopularProduct);

  const settings = settingSlideHeader;
  
  return (
    <div style={{ width: "100%" }}>
     
    <Box>
     
      <Slide {...settings}>
        
         
        {slideImages.map((image, index) => (
          
          
            <Box key={index} sx={{...divStyle,backgroundImage: `url(${image.url})`,}}>
            
                    <div className="position-absolute bottom-0 start-0 m-4">
                      <div className="content">
                      <h1 style={{ fontSize: "75px", whiteSpace: "pre-wrap"}}>{slideImages[index].title}</h1>
                      <p style={{ whiteSpace: "pre-wrap" }}>{slideImages[index].body}</p>
                      <NavLink to={"/shop"}>
                        <Button type="submit">Shop now</Button>{' '}
                      </NavLink>       
                      </div>
                    </div>       

                </Box>
        ))}
        
      </Slide>
    </Box>

      <br /><br /><br /><br />
    
      <div style={{ height: "50px", backgroundColor: "green" }}>
        {" "}
        Hùng Trần{/* Category (dùng chung) (Hung Tran) */}
      </div>

      {/* <div className="my-5">
        <Box alignContent="center" sx={{ marginTop: 10 }}> q
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

      <Box className="my-5">
      <ListCategory categories={categories} listProduct={listProduct} />
      </Box>
      <div className="my-5">
        <Box alignContent="center" sx={{ marginTop: 10 }}>
          <FeatureCollection />
          <Box sx={{ overflow: "hidden" }}>
            <ListProductComponent listProduct={listNewProduct} />
          </Box>
        </Box>
      </Box>
      <Box className='my-5'>
        <Collection />
      </Box>
      <Box className="my-5">
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
