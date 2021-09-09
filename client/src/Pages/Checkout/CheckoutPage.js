import React, { useEffect } from 'react';
import Checkout from '../../Components/Checkout/Checkout';
import Footer from '../../Components/Home/Footer/Footer';
import Header from '../../Components/Home/NavBar/Header';
import NavBar from '../../Components/Home/NavBar/NavBar';

const CheckoutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <Checkout />
      <Footer />
    </>
  );
};

export default CheckoutPage;
