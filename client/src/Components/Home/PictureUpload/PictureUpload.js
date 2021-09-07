import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const PictureUpload = () => {
    return (
       <div className="min-h-auto lg:min-h-screen bg-cover bg-no-repeat bg-center"
       style={{
         backgroundImage: `url(https://thehealthstoreturkey.com/wp-content/uploads/2021/01/slider-bg.jpg)`,
       }}>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto sm:text-center lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <a href="/" className="mb-6 mt-16 sm:mx-auto">
              <div className="flex items-center justify-center text-2xl w-12 h-12 text-white rounded-full bg-gray-400">
              <FontAwesomeIcon icon={ faCamera} />
              </div>
            </a>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-normal text-gray-800 sm:text-4xl md:mx-auto">          
                Ask Your Pharmacist, <br />  Not the Internet
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
               We have made our systems as many simple as we can. You can just take a picture of your prescription and send it to us to place your order
              </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-teal-400 text-white uppercase hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
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