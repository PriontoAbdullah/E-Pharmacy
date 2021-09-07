import React from 'react';

const CompanyLogo = () => {
  return (
    <div>
      <a
        href="/"
        aria-label="E-Pharmacy"
        title="E-Pharmacy"
        className="inline-flex items-center mr-8"
      >
        <svg
          className="w-8 text-teal-accent-700"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeWidth="2"
          strokeLinecap="round"
          strokeMiterlimit="10"
          stroke="currentColor"
          fill="none"
        >
          <rect x="3" y="1" width="7" height="12" />
          <rect x="3" y="17" width="7" height="6" />
          <rect x="14" y="1" width="7" height="6" />
          <rect x="14" y="11" width="7" height="12" />
        </svg>
        <span className="ml-2 text-xl font-semibold font-display tracking-wide text-teal-400 uppercase">
          E-Pharmacy
        </span>
      </a>
    </div>
  );
};

export default CompanyLogo;
