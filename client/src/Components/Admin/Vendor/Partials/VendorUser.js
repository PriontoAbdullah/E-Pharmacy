import React from 'react';

const VendorUser = () => {
  return (
    <div className="relative inline-flex">
      <button
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
      >
        <img
          className="w-10 h-10 rounded-full"
          src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg"
          width="50"
          height="50"
          alt="User"
        />
        <div className="flex items-center truncate">
          <span className="font-body truncate ml-2 mr-1 text-base font-medium text-teal-500 hover:text-teal-800">
            Logout
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-teal-500 hover:text-teal-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default VendorUser;
