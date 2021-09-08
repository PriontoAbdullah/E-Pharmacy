import React from "react";
import ShowRating from "../../Common/ShowRating";
import SingleProgressBar from "../../Common/SingleProgressBar";


const AllStar = () => {
  return (
    <div className="flex flex-col min-w-full max-w-md p-8 shadow-grayOutline mb-5 rounded-xl lg:p-12">
      <div className="flex flex-col w-full">
        <h2 className="text-2xl mb-4 font-semibold text-center">
          Reviews Overview
        </h2>
        <div className="flex flex-wrap items-center mt-2 mb-1 space-x-2">
          <div className="flex outline-none border-0">
            <ShowRating value={4} />
          </div>
          <span className="dark:text-coolGray-400">3 out of 5</span>
        </div>
        <p className="text-sm dark:text-coolGray-400">861 global ratings</p>
        <div className="flex flex-col mt-4">
          <SingleProgressBar star={5} completed={70} bgColor="#00BFA5" />
          <SingleProgressBar star={4} completed={30} bgColor="#00BFA5" />
          <SingleProgressBar star={3} completed={40} bgColor="#00BFA5" />
          <SingleProgressBar star={2} completed={20} bgColor="#00BFA5" />
          <SingleProgressBar star={1} completed={15} bgColor="#00BFA5" />
        </div>
      </div>
    </div>
  );
};

export default AllStar;
