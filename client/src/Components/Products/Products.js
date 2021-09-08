import React from 'react';
import products from '../../Data/products';

const Products = () => {
    return (
        <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 pt-10 sm:pt-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Our Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group ">
              <div className="w-full min-h-80 bg-blue-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>

              {/* name and price */}

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-md text-gray-900 font-display">
                    <a href={product.href}>
                      <span aria-hidden="true" className=" inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
                <p className="text-md font-medium text-gray-900">${product.price}</p>
              </div>

              <div>
                <p class="text-sm mt-1">{product.brand}</p>
              </div>


            {/*  wishlist, quick view, add to cart buttons */}

              <div class="flex justify-between my-4 items-center">
                <div>
                  <button class="hover:bg-teal-800 hover:text-white p-1 rounded-full transition duration-150 ease-in-out mr-2" title="Add to Wishlist">
                    <svg class="w-5 h-5  transition duration-150 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></button>
                  <button class="hover:bg-teal-800 hover:text-white p-1 rounded-full transition duration-150 ease-in-out" title="Quick View">
                    <svg class="w-5 h-5  transition duration-150 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>

                  </button>


                  <button>
                    
                  </button>
                </div>


                <button class="flex py-1 px-3 text-sm rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-accent-700 ">
                  
                  Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Products;