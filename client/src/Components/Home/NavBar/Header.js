import React from 'react';

const Header = () => {
  return (
    <header className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 border-b border-gray-200">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <div className="flex items-center space-x-4">
          <h2 className="text-xs sm:text-sm font-medium text-gray-500 tracking-wider">
            Free delivery for orders over ৳199.{' '}
            <span className="block sm:inline-block">
              ৳20 delivery on ৳99+ !{' '}
              <a href="/" className="text-teal-accent-700 hover:text-teal-700">
                View Offer
              </a>
            </span>
          </h2>
        </div>
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5 text-sm font-medium text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>

          <span className="text-xs sm:text-sm font-medium text-gray-500 hover:text-teal-accent-700 cursor-pointer">
            (+88) 01700001971
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
