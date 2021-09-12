import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import allShops from '../../../Data/vendor';

const DisplayShops = () => {
    const [shopCards, setShopCards] = useState(allShops);

    return (
        <div className="pb-10 pt-8 bg-gray-50">
      {/* Shop Card */}
      <div className="w-full text-center py-8">
        <h1 className="font-medium text-4xl font-display tracking-wide text-teal-700">
          All Registered Medicine Stores
        </h1>
        <p className="font-sans text-base tracking-wide text-gray-700 mt-2">
          Search for Medicine, Filter by your location
        </p>
      </div>
      <div className="cards flex flex-wrap justify-center">
        {shopCards.map((shopCard) => (
          <div className="pb-4 m-6 rounded-lg shadow-3xl w-96 md:w-2/5 lg:w-1/4 bg-white">
            <img src={shopCard.cardBanner} className="rounded-t-lg" alt="" />

            <div className="relative pt-2">
              <div className="absolute -mt-12 w-full flex justify-center items-center">
                <img
                  className="shadow-3xl rounded-2xl border-2 border-gray-400 h-16 w-16"
                  src={shopCard.logo}
                  alt=""
                />
              </div>

              <div className="pt-5 px-4">
                <div className="absolute right-4 top-8 shadow-4xl">
                  <p
                    className={`rounded border border-teal-300 py-0.5 px-3 ${
                      shopCard.status === 'Open'
                        ? 'text-green-800'
                        : 'text-red-400'
                    }`}
                  >
                    {shopCard.status}
                  </p>
                </div>

                <h1 className="font-medium text-xl py-1.5 text-teal-800 font-sans tracking-wide">
                  {shopCard.shopName}
                </h1>
                <div className="text-sm font-sans text-gray-800">
                  <p className="pb-1 text-yellow-800">⭐ {shopCard.rating}</p>
                  <p className="pb-1">
                    {shopCard.location} {shopCard['postal code']}
                  </p>
                  <p className="pb-1">{shopCard.city}</p>
                  <p className="pb-1">{shopCard.address3}</p>
                  <div className="flex">
                    <svg
                      className="w-4 h-4 mt-0.5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                    <p>{shopCard.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visit store button */}
            <div className="flex justify-center items-center my-2 mt-4 ">
              <Link to={`/shopDetails/${shopCard._id}`}>
                <button className="flex py-2 px-6 rounded shadow-lg bg-teal-400 focus:outline-none active:bg-teal-400 text-white transition duration-150 ease-in-out hover:bg-teal-600">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                  Visit Store
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default DisplayShops;