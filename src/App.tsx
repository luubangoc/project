import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Header";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleProductsFetchRequest } from "./features/Redux/Reducers/productSlice";
import "./App.css";
import ProductItemComponent from "./components/product";
import DetailProduct from "./pages/detailProduct/DetailProduct";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleProductsFetchRequest());
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} /> */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<DetailProduct />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
