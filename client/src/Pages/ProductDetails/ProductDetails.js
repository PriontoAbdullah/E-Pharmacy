import React from "react";
import Footer from "../../Components/Home/Footer/Footer";
import Menu from "../../Components/ProductDetails/Menu/Menu";
import ProductInfo from "../../Components/ProductDetails/ProductInfo";
import productsData from "../../Data/products";

const ProductDetails = () => {
  const product = productsData[3]
  return (
    <>
      <section className="overflow-hidden">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <ProductInfo product={product} />
          <Menu product={product} />
        </div>
        <Footer/>
      </section>
    </>
  );
};

export default ProductDetails;
