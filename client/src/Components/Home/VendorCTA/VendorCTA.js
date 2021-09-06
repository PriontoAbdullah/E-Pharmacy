import React from "react";

const VendorCTA = () => {

  return (
    <div>
      <section className="px-0 py-12 mx-auto max-w-7xl sm:px-4">
        <div className="grid items-center justify-center grid-cols-1 gap-10 px-4 py-6 overflow-hidden rounded-none card card-body sm:rounded-lg md:px-10 md:grid-cols-12">
          <div className="col-span-1 md:col-span-7">
            <h2 className="mb-3 text-2xl font-normal leading-tight lg:text-4xl">
              Sleep peacefully knowing that your website is performing at it’s
              best.
            </h2>
            <ul className='list-disc'>
              <li className='ml-4'>Lorem ipsum dolor sit adipisicing elit</li>
              <li className='ml-4'>Lorem ipsum sit amet  adipisicing</li>
              <li className='ml-4'>Lorem ipsum dolor adipisicing elit</li>
              <li className='ml-4'>Lorem ipsum dolor sit adipisicing elit</li>
            </ul>
            
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
