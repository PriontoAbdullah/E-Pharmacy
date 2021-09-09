import React, { useEffect } from 'react';
import Footer from '../../Components/Home/Footer/Footer';
import Header from '../../Components/Home/NavBar/Header';
import NavBar from '../../Components/Home/NavBar/NavBar';
import ShopDetails from '../../Components/Shop/ShopDetails/ShopDetails';

const ShopDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <ShopDetails />
      <Footer />
    </>
  );
};

export default ShopDetailsPage;
