import React from "react";
import QuantityButton from "../Common/QuantityButton";
import ShowRating from "../Common/ShowRating";
const ProductInfo = ({
  product: { image, brand, description, totalReview },
}) => {
  return (
    <div className="mx-auto flex flex-wrap justify-between">
      <img
        alt="ecommerce"
        className="lg:w-1/3 w-full lg:h-auto h-64 object-cover object-center rounded"
        src={image}
      />
      <div className="lg:w-2/3 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">
          The Catcher in the Rye
        </h1>
        <h2 className="text-sm title-font text-gray-900 tracking-widest mb-2">
          Brand: {brand}
        </h2>
        <div className="mb-2">
          <ShowRating value={4} />
        </div>
        <p className="leading-relaxed h-20 overflow-hidden">{description}</p>
        <div className="flex mt-4 items-center pb-4 border-b-2 border-gray-100 mb-4">
          <span className="title-font font-medium text-2xl text-gray-900">
            $58.00
          </span>
        </div>
        <div className="flex flex-wrap gap-3 align-center">
          <QuantityButton />
          <button class="main-button rounded-full mb-4">
            <i class="fas fa-cart-plus"></i> &nbsp; Add To Cart
          </button>
        </div>
        <button class="hero-search-button rounded-full">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductInfo;
