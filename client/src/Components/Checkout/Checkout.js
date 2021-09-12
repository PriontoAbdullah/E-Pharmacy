import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <div className="flex justify-center my-6">
      <div className="flex flex-col w-full p-8 text-gray-800 bg-white pin-r pin-y md:w-4/5 lg:w-4/5">
        <div className="flex-1">
          <table className="w-full text-sm lg:text-base" cellspacing="0">
            <thead>
              <tr className="h-12 font-sans text-gray-800 text-lg border border-teal-300 border-t-0 border-l-0 border-r-0">
                <th className="hidden text-left md:table-cell font-medium text-teal-600">
                  Product Image
                </th>
                <th className="text-left font-medium text-teal-600">
                  Product Details
                </th>
                <th className="text-left pl-5 lg:pl-8">
                  <span className="inline font-medium text-teal-600">
                    Quantity
                  </span>
                </th>
                <th className="text-right lg:text-left md:table-cell font-medium text-teal-600">
                  Remove
                </th>
                <th className="hidden text-right md:table-cell font-medium text-teal-600">
                  Unit price
                </th>
                <th className="text-right font-medium text-teal-600">
                  Total price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pt-2"> </td>
              </tr>
              <tr>
                <td className="hidden pb-4 md:table-cell">
                  <a href="#0">
                    <img
                      src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-26-1-480x480.jpg"
                      className="w-20 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <a href="#0">
                    <p className="mb-2 ">Stomach Medicine</p>
                    <form action="" method="POST">
                      <button type="submit" className="text-gray-700">
                        <small>Structural (Fabrication)</small>
                      </button>
                    </form>
                  </a>
                </td>
                <td className="justify-center md:justify-end md:flex md:mt-8">
                  <div className="flex-1 flex items-end justify-between text-sm">
                    <div className="border border-gray-400 rounded">
                      <i className="fas fa-plus m-1 py-1 px-4 cursor-pointer font-medium text-teal-600"></i>
                      <input
                        className="mx-2 text-center w-2 font-medium text-gray-800"
                        type="text"
                        value="1"
                      />

                      <i className="fas fa-minus m-1 py-1 px-4 cursor-pointer font-medium text-teal-600"></i>
                    </div>
                  </div>
                </td>
                <td className="text-right px-5 md:table-cell">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-00"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </td>
                <td className="hidden text-right md:table-cell">
                  <span className="text-sm lg:text-base font-medium">
                    ৳ 10.00
                  </span>
                </td>
                <td className="text-right">
                  <span className="text-sm lg:text-base font-medium">
                    ৳ 20.00
                  </span>
                </td>
              </tr>
              <tr>
                <td className="hidden pb-4 md:table-cell">
                  <a href="#0">
                    <img
                      src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2021/04/Image-24-480x480.jpg"
                      className="w-20 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <p className="mb-2">Birth Control Pills</p>
                  <form action="" method="POST">
                    <button type="submit" className="text-gray-700">
                      <small>Overhead Doors</small>
                    </button>
                  </form>
                </td>
                <td className="justify-center md:justify-end md:flex md:mt-8">
                  <div className="flex-1 flex items-end justify-between text-sm">
                    <div className="border border-gray-400 rounded">
                      <i className="fas fa-plus m-1 py-1 px-4 cursor-pointer font-medium text-teal-600"></i>
                      <input
                        className="mx-2 text-center w-2 font-medium text-gray-800"
                        type="text"
                        value="1"
                      />

                      <i className="fas fa-minus m-1 py-1 px-4 cursor-pointer font-medium text-teal-600"></i>
                    </div>
                  </div>
                </td>
                <td className="text-right px-5 md:table-cell">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-00"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </td>
                <td className="hidden text-right md:table-cell">
                  <span className="text-sm lg:text-base font-medium">
                    ৳ 9,600.01
                  </span>
                </td>
                <td className="text-right">
                  <span className="text-sm lg:text-base font-medium">
                    ৳ 19,800.03
                  </span>
                </td>
              </tr>
              <tr>
                <td className="hidden pb-4 md:table-cell">
                  <a href="#0">
                    <img
                      src="https://wpbingosite.com/wordpress/fuho/wp-content/uploads/2020/12/Image-36-1-480x480.jpg"
                      className="w-20 rounded"
                      alt="Thumbnail"
                    />
                  </a>
                </td>
                <td>
                  <p className="mb-2">Vitamin C Medicine</p>
                  <form action="" method="POST">
                    <button type="submit" className="text-gray-700">
                      <small>Framing (Wood)</small>
                    </button>
                  </form>
                </td>
                <td className="justify-center md:justify-end md:flex md:mt-8">
                  <div className="flex-1 flex items-end justify-between text-sm">
                    <div className="border border-gray-400 rounded">
                      <i className="fas fa-plus m-1 py-1 px-4 cursor-pointer font-medium text-teal-600"></i>
                      <input
                        className="mx-2 text-center w-2 font-medium text-gray-800"
                        type="text"
                        value="1"
                      />

                      <i className="fas fa-minus m-1 py-1 px-4 cursor-pointer font-medium text-teal-600"></i>
                    </div>
                  </div>
                </td>
                <td className="text-right px-5 md:table-cell">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-00"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </td>
                <td className="hidden text-right md:table-cell">
                  <span className="text-sm lg:text-base font-medium">
                    ৳ 1.50
                  </span>
                </td>
                <td className="text-right">
                  <span className="text-sm lg:text-base font-medium">
                    ৳ 7.50
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <hr className="pb-6 mt-6" />
          <div className="my-4 mt-6 -mx-2 lg:flex">
            <div className="lg:px-2 lg:w-1/2">
              <div className="p-3 bg-teal-50 rounded-full">
                <h1 className="ml-2 font-semibold text-teal-600 uppercase">
                  Coupon Code
                </h1>
              </div>
              <div className="p-4">
                <p className="mb-4 italic">
                  If you have a coupon code, please enter it in the box below
                </p>
                <div className="justify-center md:flex">
                  <form action="" method="POST">
                    <div className="flex items-center w-full h-13 pl-3 bg-gray-100 border rounded-full">
                      <input
                        type="coupon"
                        name="code"
                        id="coupon"
                        placeholder="Apply coupon"
                        value="90off"
                        className="w-full bg-gray-100 outline-none appearance-none focus:outline-none active:outline-none"
                      />
                      <button
                        type="submit"
                        className="text-sm flex items-center px-3 py-1 text-white bg-teal-500 rounded-full outline-none md:px-4 hover:bg-teal-700 focus:outline-none active:outline-none"
                      >
                        <svg
                          aria-hidden="true"
                          data-prefix="fas"
                          data-icon="gift"
                          className="w-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"
                          />
                        </svg>
                        <span className="font-medium">Apply coupon</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="p-3 bg-teal-50 rounded-full my-3">
                <h1 className="ml-2 font-semibold text-teal-600 uppercase">
                  Enter Shipping Info
                </h1>
              </div>
              <div className="px-4">
                <p className="mb-4 italic">
                  Enter your delivery address where you get the product. You can
                  also send any other location where you send the products.
                </p>
              </div>
              <form>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Name"
                    className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative tracking-wide rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Email"
                    className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Phone"
                    className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Address"
                    className="px-3 py-4 my-1 border-b border-teal-300 placeholder-gray-500 text-blueGray-600 relative  rounded-lg bg-white text-base shadow outline-none focus:outline-none focus:shadow-outline w-full"
                  />
                </div>
              </form>
            </div>
            <div className="lg:px-2 lg:w-1/2">
              <div className="mb-4">
                <div className="p-3 bg-teal-50 rounded-full mb-3">
                  <h1 className="ml-2 font-semibold text-teal-600 uppercase">
                    Payment Method
                  </h1>
                </div>
                <div className="px-4">
                  <p className="mb-3 italic">
                    You can pay us in a multiple way in our payment gateway
                    system.
                  </p>

                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-gray-600"
                      checked
                    />
                    <span className="ml-2 text-gray-800 font-medium">
                      Cash On Delivery
                    </span>
                  </label>
                  <hr />
                  <label className="inline-flex items-center mt-2">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-gray-600"
                    />
                    <span className="ml-2 text-gray-800 font-medium">
                      Bkash
                    </span>
                  </label>
                </div>
              </div>

              <div className="p-3 bg-teal-50 rounded-full">
                <h1 className="ml-2 font-semibold text-teal-600 uppercase">
                  Order Details
                </h1>
              </div>
              <div className="p-4">
                <p className="mb-1 italic">
                  Shipping and additionnal costs are calculated based on values
                  you have entered
                </p>
                <div className="flex justify-between border-b">
                  <div className="lg:px-4 lg:py-2 m-1 text-lg lg:text-xl font-medium text-center text-gray-800">
                    Subtotal
                  </div>
                  <div className="lg:px-4 lg:py-2 m-1 lg:text-lg font-medium text-center text-gray-800">
                    ৳ 148,827.53
                  </div>
                </div>
                <div className="flex justify-between pt-2 border-b">
                  <div className="flex lg:px-4 lg:py-2 m-1 text-lg lg:text-xl font-medium text-teal-500">
                    <form action="" method="POST">
                      <button type="submit" className="mr-2 lg:mt-1">
                        <svg
                          aria-hidden="true"
                          data-prefix="far"
                          data-icon="trash-alt"
                          className="w-4 text-red-600 hover:text-red-800"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path
                            fill="currentColor"
                            d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-112-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"
                          />
                        </svg>
                      </button>
                    </form>
                    Coupon "90off"
                  </div>
                  <div className="lg:px-4 lg:py-2 m-1 lg:text-lg font-medium text-center text-green-600">
                    ৳ -13,944.77
                  </div>
                </div>
                <div className="flex justify-between pt-2 border-b">
                  <div className="lg:px-4 lg:py-2 m-1 text-lg lg:text-xl font-medium text-center text-gray-800">
                    New Subtotal
                  </div>
                  <div className="lg:px-4 lg:py-2 m-1 lg:text-lg font-medium text-center text-gray-800">
                    ৳ 14,882.75
                  </div>
                </div>
                <div className="flex justify-between pt-2 border-b">
                  <div className="lg:px-4 lg:py-2 m-1 text-lg lg:text-xl font-medium text-center text-gray-800">
                    Tax
                  </div>
                  <div className="lg:px-4 lg:py-2 m-1 lg:text-lg font-medium text-center text-gray-800">
                    ৳ 2,976.55
                  </div>
                </div>
                <div className="flex justify-between pt-2 border-b">
                  <div className="lg:px-4 lg:py-2 m-1 text-lg lg:text-xl font-medium text-center text-gray-800">
                    Total
                  </div>
                  <div className="lg:px-4 lg:py-2 m-1 lg:text-lg font-medium text-center text-gray-800">
                    ৳ 17,859.3
                  </div>
                </div>
                <a href="#0">
                  <Link to="/orderHistory" className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-teal-500 rounded-full shadow item-center hover:bg-teal-700 focus:shadow-outline focus:outline-none">
                    <svg
                      aria-hidden="true"
                      data-prefix="far"
                      data-icon="credit-card"
                      className="w-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                      />
                    </svg>
                    <span className="ml-2 pt-1">Place Order</span>
                  </Link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
