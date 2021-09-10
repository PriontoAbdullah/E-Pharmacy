import React from 'react';

const QuantityButton = () => {
  return (
    <div className="flex justify-between align-center items-center rounded w-32 h-11 r text-base sm:text-lg font-medium tracking-wide leading-6 transition duration-150 ease-in-out border border-teal-400 focus:outline-none ">
      <i className="fas fa-plus m-1 py-2 px-4 cursor-pointer font-normal text-teal-600"></i>
      <input
        className="mx-2 text-center w-2 text-gray-900"
        type="text"
        value="1"
      />

      <i className="fas fa-minus m-1 py-2 px-4 cursor-pointer font-normal text-teal-600"></i>
    </div>
  );
};

export default QuantityButton;
