import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import vendorData from '../../../../Data/vendor';
import Categories from '../../../Categories/Categories';
import ContactVendor from '../../../ContactVendor/ContactVendor';
import Products from '../../../Products/Products';


const ShopDetails = () => {

    const {vendorId} = useParams();
    const newVendor = vendorData.find(vendor => vendor._id === vendorId)

     const {shopName, cardBanner, logo, location, city, name, phone, status} = newVendor

     console.log(vendorData)
     console.log(newVendor)

    return (
        
        <div class="flex md:flex-row flex-col-reverse mx-auto container px-4 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <div class="md:w-3/12 min-h-screen bg-gray-100">
                <Categories/>
                <ContactVendor/>
            </div>


            {/* Shop */}

            <div class="md:w-9/12 min-h-screen ">
                <div  class="w-full relative">

                    {/* Shop banner */}

                    
                   <img src={cardBanner} alt="" class="max-h-80"/>

                   {/* Shop Details */}

                   <div class=" bg-blue-800 bg-opacity-80 py-4 lg:w-4/12 md:py-4 lg:py-12 xl:py-14 px-4 lg:absolute left-0 top-0 text-white min-h-96 flex flex-col items-center justify-center">
                       <img src={logo} alt="" class="rounded-full w-14 md:w-12"/>
                       <h1 class="text-2xl font-bold pt-2">{shopName}</h1>
                       <h4 class="text-xl pb-1">Owner: {name}</h4>

                       <div>
                           <div class="flex">
                                <svg  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                </svg>
                                <p>{location}, {city}</p>
                            </div>
                            <div class="flex">
                                <svg  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <p>{phone}</p>
                            </div>
                            <div class="flex">
                                <svg  xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                    </svg>
                                    <p>Store {status}</p>
                            </div>
                       </div>
                   </div>
                </div>

                {/* Products */}
                <Products/>
            </div>
        </div>
    );
};

export default ShopDetails;