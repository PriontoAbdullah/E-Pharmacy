import React from 'react';
import ShowRating from './ShowRating';

const ReviewTaker = () => {
  return (
    <div className="flex flex-col min-w-full font-sans max-w-md p-8 shadow-grayOutline rounded-xl lg:p-12 ">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center py-4 space-y-3">
          <span className="text-center text-gray-800">
            How was your experience?
          </span>
        </div>
        <div className="pb-4">
          <ShowRating value={3} />
        </div>
        <div className="flex flex-col w-full">
          <textarea
            rows="3"
            placeholder="Message..."
            className="p-4 rounded-md resize-none border-2 border-teal-100"
          ></textarea>
          <button
            type="button"
            className="py-3 mt-4 rounded-md inline-flex items-center justify-center text-base sm:text-lg font-medium leading-6 tracking-wide text-white transition duration-150 ease-in-out bg-teal-500 border border-transparent hover:bg-teal-700 focus:outline-none;"
          >
            Leave feedback
          </button>
        </div>
      </div>
      {/* <div className="flex items-center justify-center">
        <a href="#" className="text-sm dark:text-coolGray-400">
          Maybe later
        </a>
      </div> */}
    </div>
  );
};

export default ReviewTaker;
