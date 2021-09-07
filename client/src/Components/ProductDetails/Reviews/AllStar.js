import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import ShowRating from "../../Common/ShowRating";

const AllStar = () => {
  return (
    <div className="flex flex-col max-w-md p-8 shadow-grayOutline mb-5 rounded-xl lg:p-12">
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
          <div className="flex items-center space-x-1">
            <span className="flex-shrink-0 w-12 text-sm">5 star</span>
            <div className="w-80">
              <ProgressBar completed={60} margin={5} bgColor='#FFDF00' labelSize={12}/>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="flex-shrink-0 w-12 text-sm">4 star</span>
            <div className="w-80">
              <ProgressBar completed={60} margin={5} bgColor='#FFDF00' labelSize={12}/>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="flex-shrink-0 w-12 text-sm">3 star</span>
            <div className="w-80">
              <ProgressBar completed={60} margin={5} bgColor='#FFDF00' labelSize={12}/>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="flex-shrink-0 w-12 text-sm">2 star</span>
            <div className="w-80">
              <ProgressBar completed={60} margin={5} bgColor='#FFDF00' labelSize={12}/>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <span className="flex-shrink-0 w-12 text-sm">1 star</span>
            <div className="w-80">
              <ProgressBar completed={21} margin={5} bgColor='#FFDF00' labelSize={12}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllStar;
