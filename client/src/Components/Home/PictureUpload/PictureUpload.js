import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PictureUpload = () => {
  return (
    <div
      className="min-h-auto  bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(https://i.imgur.com/1ZNaBq1.jpg)`,
      }}
    >
      <div className="px-4 pb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pb-20">
        <div className="max-w-xl sm:mx-auto sm:text-center lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 mt-16 sm:mx-auto">
              <div className="flex items-center justify-center text-2xl w-16 h-16 text-white rounded-full bg-teal-400">
                <FontAwesomeIcon icon={faCamera} />
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-display text-3xl font-semibold leading-none tracking-normal text-gray-800 sm:text-4xl md:mx-auto">
                Ask Your Pharmacist, <br /> Not the Internet
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                We have made our systems as many simple as we can. You can just
                take a picture of your prescription and send it to us to place
                your order
              </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-sans font-medium tracking-wider transition duration-200 rounded shadow-md bg-teal-400 text-white uppercase hover:bg-teal-700 focus:shadow-outline focus:outline-none"
              >
                Upload Your prescription
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureUpload;
