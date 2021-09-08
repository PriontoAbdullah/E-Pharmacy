import React from 'react';
import { useParams } from 'react-router-dom';
import VendorUser from './VendorUser';

const VendorNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { panel } = useParams();

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex">
            {/* Hamburger button */}
            <button
              className="font-bold text-teal-600 hover:text-teal-900 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            </button>

            {/* Page Title */}
            <h1 className="ml-2 sm:ml-0 font-display font-semibold text-base sm:text-xl tracking-wide text-gray-800">
              {panel === 'dashboard'
                ? 'Dashboard'
                : panel === 'allOrders'
                ? 'All Orders'
                : panel === 'allProducts'
                ? 'All Products'
                : panel === 'suppliers'
                ? 'All Suppliers'
                : panel === 'customers'
                ? 'All Customers'
                : panel === 'messages'
                ? 'All Messages'
                : null}
              <span className="hidden sm:inline-flex">🚀</span>
            </h1>
          </div>

          <div className="flex items-center">
            {/* search button*/}
            <button
              className="w-8 h-8 flex items-center justify-center bg-teal-50 hover:bg-gray-200 transition duration-150 rounded-full mx-3"
              aria-controls="search-modal"
            >
              <span className="sr-only">Search</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-teal-400"
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                />
                <path
                  className="fill-current text-teal-300"
                  d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                />
              </svg>
            </button>

            {/* notifications button*/}
            <button
              className="w-8 h-8 flex items-center justify-center bg-teal-50 hover:bg-gray-200 transition duration-150 rounded-full"
              aria-haspopup="true"
            >
              <span className="sr-only">Notifications</span>
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-current text-teal-300"
                  d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
                />
                <path
                  className="fill-current text-teal-200"
                  d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
                />
              </svg>
            </button>

            <hr className="w-px h-6 bg-gray-200 mx-3" />
            {/*  user menu */}
            <VendorUser />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default VendorNavbar;
