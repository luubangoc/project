import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleProductsFetchRequest } from "./features/Redux/Reducers/productSlice";
import "./App.css";
import { handleGetCategories } from "./features/Redux/Reducers/categorySlice";
import DetailProduct from "./pages/detailProduct/DetailProduct";
import Cart from "./pages/Cart";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import CategoryProduct from "./pages/categoryProduct/categoryProduct";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleProductsFetchRequest());
    dispatch(handleGetCategories());
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} /> */}
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<DetailProduct />} />
      <Route path="/category/:categoryName" element={<CategoryProduct />} />
    </Routes>
  );
}

export default App;
