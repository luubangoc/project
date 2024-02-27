import {
  Badge,
  Box,
  CardMedia,
  IconButton,
  Rating,
  Tooltip,
  Typography,
} from "@mui/material";
import { Fragment, useContext, useState } from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductItemContext } from "../../components/product";
import { NavLink, useLocation, useParams } from "react-router-dom";
import styles from "../detailProduct/detailProduct.module.css";
import { IoMdHome } from "react-icons/io";
import { FaShoppingBag } from "react-icons/fa";
import { FaRegUser, FaSearch } from "react-icons/fa";
import Review from "./components/Review";
import RelatedProduct from "./components/RelatedProduct";

const PrevArrow = (props: any) => {
  const { onClick, currentSlide } = props;
  if (currentSlide === 0) {
    return (
      <div onClick={onClick} className={styles.prevArrow}>
        <ArrowBackIosIcon fontSize="medium" sx={{ opacity: 0.1 }} />
      </div>
    );
  }
  return (
    <div onClick={onClick} className={styles.prevArrow}>
      <ArrowBackIosIcon fontSize="medium" />
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick, currentSlide, slideCount } = props;
  if (currentSlide === slideCount - 1) {
    return (
      <div onClick={onClick} className={styles.nextArrow}>
        <ArrowForwardIosIcon fontSize="medium" sx={{ opacity: 0.1 }} />
      </div>
    );
  }
  return (
    <div onClick={onClick} className={styles.nextArrow}>
      <ArrowForwardIosIcon fontSize="medium" />
    </div>
  );
};

const DetailProduct = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const params = useParams();
  const location = useLocation();
  console.log(location.state);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setQuantity(value);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Fragment>
      <Box>
        <div className="nav-item d-flex">
          <NavLink to="/" className="nav-link active" aria-current="page">
            Home
          </NavLink>
          <NavLink to="/shop" className="nav-link">
            / Shop
          </NavLink>
          <p>
            {" "}
            / <strong>{location.state && location.state.name}</strong>
          </p>
        </div>
      </Box>
      <Box className="d-flex">
        <div className={`${styles.slidercontainer} col-lg-7`}>
          <Box className="col-lg-8">
            <Box className="my-2">
              <Slider {...settings}>
                {location.state &&
                  location.state.images.map((item: any, index: number) => (
                    <CardMedia
                      component="img"
                      image={item}
                      height="100%"
                      width="100%"
                      key={index}
                      className={styles.cardImage}
                    ></CardMedia>
                  ))}
              </Slider>
            </Box>
          </Box>
        </div>
        <div className="col-lg-5">
          <h3>{location.state && location.state.name}</h3>
          <Box
            display="flex"
            justifyContent="start"
            className="mb-3"
            alignItems="center"
          >
            <Rating
              name="simple-controlled"
              value={location.state.rating.rate}
              size="small"
            />
            <Typography className="ms-2">
              ({location.state.rating.count} customer review)
            </Typography>
          </Box>
          <Box className="mb-3">
            <Typography variant="h5" fontWeight="500" color="primary">
              $
              {(
                location.state.price -
                location.state.price * (location.state.discount / 100)
              ).toFixed(2)}
            </Typography>
          </Box>
          <Box className="mb-3">
            <Typography component="p" color="lightslategray">
              {location.state.description}
            </Typography>
          </Box>

          <Box className="d-flex col-3">
            <span
              className="input-group-text rounded-0 rounded-start align-items-center"
              onClick={handleDecreaseQuantity}
              style={{ width: "20px" }}
            >
              -
            </span>
            <input
              type="text"
              className="form-control text-center rounded-0"
              value={quantity}
              aria-label="Quantity"
              aria-describedby="decrement increment"
              onChange={handleQuantityChange}
              style={{ width: "35px" }}
            />
            <span
              className="input-group-text rounded-0 rounded-end"
              onClick={handleIncreaseQuantity}
              style={{ width: "20px" }}
            >
              +
            </span>
          </Box>
          <Box className="d-flex col-9">
            <button
              type="button"
              className="btn btn-primary me-2"
              style={{ width: "106px" }}
            >
              Add to cart
            </button>
            <button
              type="button"
              className="btn btn-success"
              style={{ width: "106px" }}
            >
              Buy now
            </button>
          </Box>
        </div>
      </Box>
      <Review idProduct={location.state.id} />
      <RelatedProduct category={location.state.categoryName} />
    </Fragment>
  );
};

export default DetailProduct;
