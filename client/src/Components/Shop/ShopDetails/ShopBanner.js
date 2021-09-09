import React from 'react';
import { useParams } from 'react-router-dom';
import vendorData from '../../../Data/vendor';

const ShopBanner = () => {
  const { vendorId } = useParams();
  const newVendor = vendorData.find((vendor) => vendor._id === vendorId);

  const { shopName, cardBanner, logo, location, city, name, phone, status } =
    newVendor;

  return (
    <div className="container mx-auto">
      <div className="max-w-full relative mt-6 mb-10">
        {/* Shop banner */}
        <img src={cardBanner} alt="banner" className="max-h-80 w-full" />

        {/* Shop Details */}
        <div className="bg-teal-500 sm:bg-blue-600 bg-opacity-90 sm:bg-opacity-40 py-4 lg:w-4/12 md:py-4 lg:py-12 px-4 lg:absolute left-0 top-0 text-white min-h-96 flex flex-col items-center justify-center text-sans">
          <img src={logo} alt="logo" className="rounded-full w-16" />
          <h1 className="text-2xl font-semibold pt-2 tracking-wide">
            {shopName}
          </h1>
          <h4 className="text-xl pb-2">Owner: {name}</h4>

          <div>
            <div className="flex pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>
                {location}, {city}
              </p>
            </div>
            <div className="flex pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <p>{phone}</p>
            </div>
            <div className="flex pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              <p>Store {status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
