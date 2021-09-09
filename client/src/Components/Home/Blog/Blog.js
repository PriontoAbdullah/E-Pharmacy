import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Blog = () => {
  return (
    <div>
      <div className="px-4 pt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <h2 className="font-display text-center text-4xl mb-4 font-semibold text-teal-500 tracking-wide">
          Our Latest News
        </h2>
        <p className="font-sans text-center mb-12 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          dolorem.
        </p>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-3xl">
            <img
              src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2018/05/blog-1-720x484.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 mb-4">
              <p className="mb-3 text-xs font-semibold font-sans tracking-wide uppercase pb-4 border-b border-gray-300 ">
                <a
                  href="/"
                  className="transition-colors duration-200 text-teal-500 hover:text-teal-accent-700 border-r border-gray-300 pr-4"
                  aria-label="Category"
                  title="date"
                >
                  28 Jan 2021
                </a>
                <span className="text-gray-600 px-4">4 comments</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-display font-medium pt-3 leading-5 transition-colors duration-200 text-gray-700"
              >
                Travelling Solo Is Awesome
              </a>
              <p className="mb-2 text-gray-700 pb-4">
                Solo travel gives you a chance to listen to your gut and control
                what direction you want to head gut and control.
              </p>
              <a
                href="#_"
                class="bg-teal-300 p-2 rounded-sm tracking-wide text-white shadow-lg transition-all  hover:bg-teal-500 cursor-pointer"
              >
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-3xl">
            <img
              src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2018/05/blog-4-720x484.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 mb-4">
              <p className="mb-3 text-xs font-semibold font-sans  tracking-wide uppercase pb-4 border-b border-gray-300 ">
                <a
                  href="/"
                  className="transition-colors duration-200 text-teal-500 hover:text-teal-accent-700 border-r border-gray-300 pr-4"
                  aria-label="Category"
                  title="date"
                >
                  18 Jun 2021
                </a>
                <span className="text-gray-600 px-4">1 comments</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-display font-medium pt-3 leading-5 transition-colors duration-200 text-gray-700"
              >
                A Beautiful Sunday Morning
              </a>
              <p className="mb-2 text-gray-700 pb-4">
                There seems to be nature's healing medicine in fresh air. You
                and your children will notice sweet aromas in the air.
              </p>
              <a
                href="#_"
                class="bg-teal-300 p-2 rounded-sm tracking-wide text-white shadow-lg transition-all hover:bg-teal-500 cursor-pointer "
              >
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>

          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-3xl">
            <img
              src="https://medik.wpengine.com/wp-content/uploads/2019/01/blog9-1024x648.jpg"
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 mb-4">
              <p className="mb-3 text-xs font-semibold font-sans  tracking-wide uppercase pb-4 border-b border-gray-300 ">
                <a
                  href="/"
                  className="transition-colors duration-200 text-teal-500 hover:text-teal-accent-700 border-r border-gray-300 pr-4"
                  aria-label="Category"
                  title="date"
                >
                  5 SEP 2021
                </a>
                <span className="text-gray-600 px-4">2 comments</span>
              </p>
              <a
                href="/"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-display font-medium pt-3 leading-5 transition-colors duration-200 text-gray-700"
              >
                Blood Pressure Machine
              </a>
              <p className="mb-2 text-gray-700 pb-4">
                To measure blood pressure, your doctor uses an instrument call a
                sphygmomanometer, which is more often referred to as a blood
                pressure cuff.
              </p>
              <a
                href="#_"
                className="bg-teal-300 p-2 rounded-sm tracking-wide text-white shadow-lg transition-all  hover:bg-teal-500 cursor-pointer"
              >
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
