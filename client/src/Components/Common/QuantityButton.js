import React from "react";

const QuantityButton = () => {
  return (
    <div class="flex justify-between align-center items-center rounded-full w-32 h-12 r text-base sm:text-lg font-medium md:w-40 tracking-wide leading-6 transition duration-150 ease-in-out  shadow-grayOutline focus:outline-none ">

      <i class="fas fa-plus m-1 py-2 px-4 cursor-pointer"></i>

      <input
        class="mx-2 text-center w-2 md:w-8 "
        type="text"
        value="1"
      />

      <i class="fas fa-minus m-1 py-2 px-4 cursor-pointer"></i>
    </div>
  );
};

export default QuantityButton;
