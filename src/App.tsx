import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleProductsFetchRequest } from "./features/Redux/Reducers/productSlice";
import "./App.css";
import { handleGetCategories } from "./features/Redux/Reducers/categorySlice";
import DetailProduct from "./pages/detailProduct/DetailProduct";
import Cart from "./pages/Cart";

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
    </Routes>
  );
}

export default App;
