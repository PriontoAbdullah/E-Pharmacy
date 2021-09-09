import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../../../Assets/images/logo.png';

const VendorSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  const { panel } = useParams();

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  return (
    <div className="lg:w-60">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-opacity-30 z-40 lg:hidden lg:z-auto shadow-xl transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-teal-500 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-4 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden pl-4 pt-5 text-teal-600 hover:text-teal-900"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-8 h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <Link exact to="/" className="block">
            <div
              href="/"
              className="inline-flex items-center mt-6 mx-auto sm:mx-6"
            >
              <img src={logo} alt="logo" className="object-contain w-10" />
              <span className="ml-2 text-base sm:text-lg font-display font-semibold tracking-wide leading-snug text-teal-50 uppercase">
                E-Pharmacy
              </span>
            </div>
          </Link>
        </div>

        {/* Links */}

        <div className="flex flex-col items-center flex-shrink-0 pb-4">
          <img
            alt="testimonial"
            className="inline-block object-cover object-center w-20 h-20 mb-2 rounded-full"
            src="https://www.pngitem.com/pimgs/m/255-2558624_pharmacy-medical-logo-hd-png-download.png"
          />
          <h2 className="font-display text-xl font-semibold tracking-wide text-teal-50 title-font text-center">
            Medicine Store
          </h2>
          <p className="font-sans text-sm font-semibold tracking-wide text-teal-100 title-font text-center">
            vendor@gmail.com
          </p>
        </div>

        <nav className="flex-grow pb-4 pr-4 md:block md:pb-0 md:overflow-y-auto">
          <ul className="font-sans font-medium text-2xl tracking-wide">
            <li>
              <Link
                className={
                  panel === 'dashboard' ? 'sidebar-item-active' : 'sidebar-item'
                }
                to="/vendor/dashboard"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=" icon icon-tabler icon-tabler-ctealit-card"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <line x1="7" y1="15" x2="7.01" y2="15"></line>
                  <line x1="11" y1="15" x2="13" y2="15"></line>
                </svg>
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                className={
                  panel === 'allOrders' ? 'sidebar-item-active' : 'sidebar-item'
                }
                to="/vendor/allOrders"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="ml-4">All Orders</span>
              </Link>
            </li>
            <li>
              <Link
                className={
                  panel === 'allProducts'
                    ? 'sidebar-item-active'
                    : 'sidebar-item'
                }
                to="/vendor/allProducts"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <span className="ml-4">All Products</span>
              </Link>
            </li>
            <li>
              <Link
                className={
                  panel === 'suppliers' ? 'sidebar-item-active' : 'sidebar-item'
                }
                to="/vendor/suppliers"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
                <span className="ml-4">Suppliers</span>
              </Link>
            </li>
            <li>
              <Link
                className={
                  panel === 'customers' ? 'sidebar-item-active' : 'sidebar-item'
                }
                to="/vendor/customers"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="ml-4">Customers</span>
              </Link>
            </li>
            <li>
              <Link
                className={
                  panel === 'messages' ? 'sidebar-item-active' : 'sidebar-item'
                }
                to="/vendor/messages"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span className="ml-4">Messages</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default VendorSidebar;
