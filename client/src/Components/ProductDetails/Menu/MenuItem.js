const MenuItem = ({ tabNumber, openTab, component }) => {
    return (
      <div className={openTab === tabNumber ? "block" : "hidden"} id="link1">
        <p className="text-gray-600 font-medium">{component}</p>
      </div>
    );
  };
  export default  MenuItem;