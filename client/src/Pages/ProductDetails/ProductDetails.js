import React, { useEffect } from 'react';
import Footer from '../../Components/Home/Footer/Footer';
import Header from '../../Components/Home/NavBar/Header';
import NavBar from '../../Components/Home/NavBar/NavBar';
import Menu from '../../Components/ProductDetails/Menu';
import ProductInfo from '../../Components/ProductDetails/ProductInfo';
import productsData from '../../Data/products';

const ProductDetails = () => {
  const product = productsData[1];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <section className="overflow-hidden">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <ProductInfo product={product} />
          <Menu product={product} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetails;
