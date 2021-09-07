import React from "react";
import NavBar from "../../Components/Home/NavBar/NavBar";
import Menu from "../../Components/ProductDetails/Menu";
import ProductInfo from "../../Components/ProductDetails/ProductInfo";
import productsData from "../../Data/products";

const ProductDetails = () => {
  const product = productsData[3]
  return (
    <>
      <NavBar />
      <section className="overflow-hidden">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <ProductInfo product={product} />
          <Menu product={product} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
