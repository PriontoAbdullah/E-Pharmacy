import React from 'react';
import DashboardCard from './Dashboard/DashboardCard';
import IncomeExpenses from './Dashboard/IncomeExpenses';
import RecentCustomers from './Dashboard/RecentCustomers';

const VendorDashboard = () => {
  return (
    <>
      <DashboardCard />

      <div className="grid grid-cols-12 gap-6 mt-6">
        <RecentCustomers />
        <IncomeExpenses />
      </div>
    </>
  );
};

export default VendorDashboard;
