import React from "react";

const VendorCTA = () => {
  return (
    <div>
      <section className="px-0 py-12 mx-auto max-w-7xl sm:px-4 md:px-10">
        <div className="grid items-center justify-center grid-cols-1 gap-10 px-4 py-6 overflow-hidden rounded-none card card-body sm:rounded-lg md:px-10 md:grid-cols-12">
          <div className="col-span-1 md:col-span-7">
            <h2 className="mb-3 text-2xl font-normal leading-tight lg:text-4xl">
              Add your local pharmacy online, NOW
            </h2>
            <ul className="list-disc pb-3 ml-4 text-sm text-gray-600 tracking-wide sm:text-base md:max-w-xl md:text-lg xl:text-xl">
              <li className="">Take user orders form online</li>
              <li className="">Create your shop profile</li>
              <li className="">Manage your store</li>
              <li className="">Get more orders</li>
            </ul>
            <button type="button" className="hero-search-button ">
              Add Now
            </button>
          </div>
          <div className="col-span-1 md:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
              className="object-cover h-48 w-full rounded-md"
              alt="Mac App"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default VendorCTA;
