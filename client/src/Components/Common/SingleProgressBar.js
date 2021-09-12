import ProgressBar from "@ramonak/react-progress-bar";

const SingleProgressBar = ({ star, completed, bgColor }) => (
    <div className="flex items-center space-x-1">
      <span className="flex-shrink-0 w-12 text-sm">{star} star</span>
      <div className="w-full">
        <ProgressBar
          completed={completed}
          margin={5}
          bgColor={bgColor}
          labelSize={12}
        />
      </div>
    </div>
  );
export default SingleProgressBar;  