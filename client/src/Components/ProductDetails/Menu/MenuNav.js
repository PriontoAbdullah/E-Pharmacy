import React from "react";

const MenuNav = ({ tabNumber, tabName, openTab, setOpenTab }) => {
  return (
    <li className="-mb-px  text-center">
      <a
        className={
          "text-md md:text-lg font-bold   py-3 block leading-normal " +
          (openTab === tabNumber
            ? "text-black border-b-2 border-cyan-500"
            : "text-gray-600 ")
        }
        onClick={(e) => {
          e.preventDefault();
          setOpenTab(tabNumber);
        }}
        data-toggle="tab"
        href="#link1"
        role="tablist"
      >
        {tabName}
      </a>
    </li>
  );
};

export default MenuNav;
