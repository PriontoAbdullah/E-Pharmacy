import React from 'react';
import Blog from '../../Components/Home/Blog/Blog';
import Hero from '../../Components/Home/Hero/Hero';
import PictureUpload from '../../Components/Home/PictureUpload/PictureUpload';
import ShopCard from '../../Components/Home/ShopCard/ShopCard';
import VendorCTA from '../../Components/Home/VendorCTA/VendorCTA';

const Home = () => {
  return (
    <>
      {/* Background Image with 3 sections */}
      <div
        className="min-h-auto bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/9hFrQqt/medicine-home-banner.png)`,
        }}
      >
        <Hero />
      </div>
      <ShopCard />
      <PictureUpload />
      <VendorCTA />
      <Blog />
    </>
  );
};

export default Home;
