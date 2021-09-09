import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/images/logo.png';

const CompanyLogo = () => {
  return (
    <div>
      <Link
        to="/"
        href="/"
        aria-label="E-Pharmacy"
        title="E-Pharmacy"
        className="inline-flex items-center mr-8"
      >
        <img src={logo} alt="logo" className="w-10" />
        <span className="ml-2 text-xl font-semibold font-display tracking-wide text-teal-400 uppercase">
          E-Pharmacy
        </span>
      </Link>
    </div>
  );
};

export default CompanyLogo;
