import React from 'react';
import Categories from '../../Components/Categories/Categories';
import ShopBanner from '../../Components/Shop/ShopDetails/ShopBanner';
import AllShopBanner from '../../Components/Shop/AllShop/AllShopBanner';
import DisplayShops from '../../Components/Shop/AllShop/DisplayShops';
import NavBar from '../../Components/Home/NavBar/NavBar'
import Header from '../../Components/Home/NavBar/Header';
import Footer from '../../Components/Home/Footer/Footer'


const AllShop = () => {

    return (
        <section>
        {/* Shop Banner*/}
        <Header/>
        <NavBar/>
        <AllShopBanner/>
        <div className="flex md:flex-row flex-col-reverse mx-auto container px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          {/* Shop sidebar */}
          <div className="md:w-3/12 bg-white order-first">
            <Categories />
          </div>
  
          <div className="md:w-9/12 order-last">
            {/* Products */}
            <DisplayShops />
            
          </div>
          
        </div>
      </section>
    );
};

export default AllShop;