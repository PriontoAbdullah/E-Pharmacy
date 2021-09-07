import React from 'react';
import vendorData from '../../Data/vendor';

const VendorInfo = () => {
    const vendor = vendorData[7];
    return (
        <div className='text-gray-700 text-md font-bold flex flex-col gap-1'>
            <h3>Store Name: {vendor.shopName}</h3>
            <h3>Owner Name: {vendor.name}</h3>
            <h3>Owner Phone: {vendor.phone}</h3>
            <h3>Owner Email: {vendor.email}</h3>
            <h3>Address: {vendor.location} {vendor.location && ','} {vendor.city}</h3>
        </div>
    );
};

export default VendorInfo;