import React from 'react';

const Hero = () => {
  return (
    <section>
      <div className="w-full px-3 antialiased lg:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="container py-24 mx-auto text-center sm:px-4 font-sans">
            <h1 className="text-4xl font-semibold font-display leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none">
              <span className="relative inline-block text-transparent text-gray-800 tracking-normal">
                Your medication, delivered
              </span>
            </h1>
            <div className="max-w-lg mx-auto mt-6 sm:mt-8 text-sm text-center text-gray-600 tracking-wide sm:text-base md:max-w-xl md:text-lg xl:text-xl">
              Say goodbye to all your healthcare worries with us
            </div>

            <div className="relative flex items-center max-w-md mx-auto mt-12 overflow-hidden text-center rounded-full shadow-3xl">
              {/* Search functionality for a medicine */}
              <input
                type="text"
                name="search"
                placeholder="Search your medicine from here"
                className="w-full h-12 px-6 py-2 font-medium text-teal-800 placeholder-gray-500 tracking-wide focus:outline-none"
              />
              <span className="relative top-0 right-0 block ">
                <button type="button" className="hero-search-button">
                  Search
                </button>
              </span>
            </div>

            <div className="mt-12 text-base tracking-wider text-teal-300">
              Take care of your healthcare now!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
