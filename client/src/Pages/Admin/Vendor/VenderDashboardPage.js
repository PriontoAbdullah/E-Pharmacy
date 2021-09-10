import React, { useEffect } from 'react';
import VendorLayout from '../../../Components/Admin/Vendor/VendorLayout';

const VenderDashboardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <VendorLayout />
    </>
  );
};

export default VenderDashboardPage;
