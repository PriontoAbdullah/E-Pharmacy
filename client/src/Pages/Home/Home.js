import React from 'react';
import Hero from '../../Components/Home/Hero/Hero';
import Header from '../../Components/Home/NavBar/Header';
import NavBar from '../../Components/Home/NavBar/NavBar';
import PictureUpload from '../../Components/Home/PictureUpload/PictureUpload';
import ShopCard from '../../Components/Home/ShopCard/ShopCard';
import Blog from '../../Components/Home/Blog/Blog';

const Home = () => {
  return (
    <>
      {/* Background Image with 3 sections */}
      <div
        className="min-h-auto lg:min-h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/9hFrQqt/medicine-home-banner.png)`,
        }}
      >
        <Header />
        <NavBar />
        <Hero />
        
      </div>
      <ShopCard/>
      <PictureUpload></PictureUpload>
      <Blog></Blog>
    </>
  );
};

export default Home;
