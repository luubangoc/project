import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../features/Redux/Store/store";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from 'react-bootstrap/Button';
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'
import { NavLink } from "react-router-dom";
import "../../App.css"
import { settingSlideHeader } from "../../constants/settingSlideHeader";
import { slideImages } from "../../assets/sildeImage";
import { divStyle } from "./styleComponent";
import { IProduct } from "../../Types/models";

  
const Home = () => {
  const listProduct = useSelector(
    (state: RootState) => state.reducer.productSlice.listProduct 
  );
  const listNewProduct = listProduct.filter((item:IProduct) =>
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
          <FeatureCollection />
          <ListProductComponent listProduct={listNewProduct} />
        </Box>
      </div> */}

      <div style={{ height: "50px", backgroundColor: "white" }}>
        {" "}
        Của ai nhận đi !{/*Organic and safe clothes set for your baby  */}
      </div>

      {/* <div className="my-5">
        <Box alignContent="center" sx={{ marginTop: 10 }}>
          <PopularProducts />
          <ListProductComponent listProduct={listPopularProduct} />
        </Box>
      </div> */}

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
