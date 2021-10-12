import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/exCategoryMenu";
import Cart from "../components/exCart";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
    </div>
  );
};

export default Home;
