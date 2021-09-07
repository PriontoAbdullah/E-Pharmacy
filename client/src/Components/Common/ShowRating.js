import {
  faStar, faStarHalfAlt
} from "@fortawesome/free-solid-svg-icons";
import PrettyRating from "pretty-rating-react";
import React from "react";
const ShowRating = ({value}) => {
  const icons = {
    star: {
      complete: faStar,
      half: faStarHalfAlt,
      empty: faStar,
    }
  };
  const colors = {
    star: ["#FFDF00", "#FFDF00", "#D3D3D3"],
  };
  return <PrettyRating value={value} icons={icons.star} colors={colors.star} />;
};

export default ShowRating;
