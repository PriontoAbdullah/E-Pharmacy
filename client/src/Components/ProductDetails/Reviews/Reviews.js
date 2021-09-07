import React from "react";
import ReviewTaker from "../../Common/ReviewTaker";
import AllStar from "./AllStar";
import ClientReviewContainer from "./ClientReviewContainer";

const Reviews = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="col-span-1 md:col-span-1 flex flex-col items-center sm:block">
        <AllStar />
        <ReviewTaker />
      </div>
      <div className="col-span-1 lg:col-span-2">
        <ClientReviewContainer />
      </div>
    </div>
  );
};

export default Reviews;
