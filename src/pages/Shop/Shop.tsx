import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Shop = () => {
  const params = useParams();
  const location = useLocation();
  console.log(params, location);

  return <div>Shop</div>;
};

export default Shop;
