import React from "react";
import { Faq } from "../FAQ/FAQ";
import Reviews from "../Reviews/Reviews";
import VendorInfo from "../VendorInfo";
import MenuItem from "./MenuItem";
import MenuNav from "./MenuNav";


const Menu = ({ product: { description, totalReview } }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const navItems = [
    {
      tabNumber: 1,
      tabName: "Description",
      component: <p className="text-gray-600 font-medium">{description}</p>,
    },
    {
      tabNumber: 2,
      tabName: `Reviews (${totalReview ? totalReview : 0})`,
      component: <Reviews />,
    },
    { tabNumber: 3, tabName: "Vendor Info", component: <VendorInfo /> },
    { tabNumber: 4, tabName: "FAQ", component: <Faq /> },
  ];
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full pb-5 pt-10">
          <ul
            className="flex gap-x-4 md:gap-x-14 mb-4 list-none flex-wrap  flex-row border-b-2"
            role="tablist"
          >
            {navItems.map(({ tabName, tabNumber }) => (
              <MenuNav
                tabName={tabName}
                tabNumber={tabNumber}
                openTab={openTab}
                setOpenTab={setOpenTab}
                key={tabNumber}
              />
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-accent-200 w-full mb-6  rounded">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                {navItems.map(({ tabName, tabNumber, component }) => (
                  <MenuItem
                    tabNumber={tabNumber}
                    openTab={openTab}
                    component={component}
                    key={tabNumber}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
