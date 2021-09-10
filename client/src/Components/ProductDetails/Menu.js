import React from 'react';
import { Faq } from './FAQ';
import Reviews from './Reviews/Reviews';
import VendorInfo from './VendorInfo';

const Menu = ({ product: { description, totalReview } }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full pb-5 pt-10">
          <ul
            className="flex gap-x-4 md:gap-x-14 mb-4 list-none flex-wrap  flex-row border-b-2"
            role="tablist"
          >
            <li className="-mb-px  text-center">
              <a
                className={
                  'text-md md:text-lg font-sans font-medium py-3 block leading-normal ' +
                  (openTab === 1
                    ? 'text-gray-900 border-b-2 border-cyan-500'
                    : 'text-gray-600 ')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Description
              </a>
            </li>
            <li className="-mb-px  text-center">
              <a
                className={
                  'text-md md:text-lg font-sans font-medium py-3 block leading-normal ' +
                  (openTab === 2
                    ? 'text-gray-900 border-b-2 border-cyan-500'
                    : 'text-gray-600 ')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Reviews ({totalReview ? totalReview : 0})
              </a>
            </li>
            <li className="-mb-px  text-center">
              <a
                className={
                  'text-md md:text-lg font-sans font-medium py-3 block leading-normal ' +
                  (openTab === 3
                    ? 'text-gray-900 border-b-2 border-cyan-500'
                    : 'text-gray-600 ')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Vendor Info
              </a>
            </li>
            <li className="-mb-px text-center">
              <a
                className={
                  'text-md md:text-lg font-sans font-medium py-3 block leading-normal ' +
                  (openTab === 4
                    ? 'text-gray-900 border-b-2 border-cyan-500'
                    : 'text-gray-600 ')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-accent-200 w-full rounded">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <p className="text-gray-800 font-sans font-normal tracking-wide leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <Reviews />
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <VendorInfo />
                </div>
                <div className={openTab === 4 ? 'block' : 'hidden'} id="link3">
                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
