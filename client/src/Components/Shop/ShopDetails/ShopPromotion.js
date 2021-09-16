import React from 'react';

const ShopPromotion = () => {
    return (
        <div className="px-5 my-10 sm:my-0 lg:p-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg relative ">
          <img
            className="w-full h-auto"
            src="https://shop-redq.vercel.app/_next/static/images/offer-3-2f8285b13bef950f843cb4147666af6e.png"
            alt="Mountain"
          />
        </div>
        <div className="rounded overflow-hidden shadow-lg relative">
          <img
            className="w-full h-auto"
            src="https://shop-redq.vercel.app/_next/static/images/offer-2-90d3534e1ad62a8b8a977f1290e61e9f.png"
            alt="River"
          />
        </div>
  
        <div className="rounded overflow-hidden shadow-lg relative ">
          <img
            className="w-full h-auto"
            src="https://shop-redq.vercel.app/_next/static/images/offer-1-1f7a4c9ea0ba5a216bc7af1f60d044e0.png"
            alt="Forest"
          />   
        </div>
      </div>
    );
};

export default ShopPromotion;