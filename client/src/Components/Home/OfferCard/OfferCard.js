import React from 'react';

const OfferCard = () => {
  return (
    <div className="px-5 my-10 sm:my-0 lg:p-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
      <div className="rounded overflow-hidden shadow-lg relative ">
        <img
          className="w-full"
          src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/05/banner-11.jpg"
          alt="Mountain"
        />
        <div className="absolute top-8 sm:top-3 md:top-6 lg:top-12 left-6 lg:left-6 text-white">
          <h2 className="text-sm lg:text-md mb-1 lg:mb-2">DON’T MISS</h2>
          <h1 className="font-semibold text-xl lg:text-3xl mb-1 lg:mb-2">
            Huge Sale <br />
            70%
          </h1>
          <p className="text-sm">SHOP NOW</p>
        </div>
      </div>
      <div className="rounded overflow-hidden shadow-lg relative">
        <img
          className="w-full"
          src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/05/banner-12.jpg"
          alt="River"
        />
        <div className="absolute top-8 sm:top-3 md:top-6 lg:top-12 left-6 lg:left-6 text-white">
          <h2 className="text-sm lg:text-md mb-1 lg:mb-2">COMMITMENT</h2>
          <h1 className="font-semibold text-xl lg:text-3xl mb-1 lg:mb-2">
            100% Secure
            <br />
            delivery
          </h1>
          <p className="text-sm">READ MORE</p>
        </div>
      </div>

      <div className="rounded overflow-hidden shadow-lg relative ">
        <img
          className="w-full"
          src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/05/banner-13.jpg"
          alt="Forest"
        />
        <div className="absolute top-8 sm:top-3 md:top-6 lg:top-12 left-6 lg:left-6 text-white">
          <h2 className="text-sm lg:text-md mb-1 lg:mb-2">FREE SHIPPING</h2>
          <h1 className="font-semibold text-xl lg:text-3xl mb-1 lg:mb-2">
            35%
            <br />
            OFF
          </h1>
          <p className="text-sm">SHOP NOW</p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
