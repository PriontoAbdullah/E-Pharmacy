import React, { useState } from 'react';
import shopCard from '../../../Data/vendor'
import './ShopCard.css'

const ShopCard = () => {
    const [shopCards, setShopCards] = useState(shopCard)
    


    return (
        <div>
            {/* Shop Card */}
            <div class="w-full text-center py-10">
                <h1 class="font-bold text-3xl font-display">Shop By Store</h1>
            </div>
            <div className="cards flex flex-wrap justify-center">
                
                {
                    shopCards.map(shopCard => (
                        

                        <div class="pb-4 m-3 rounded-lg shadow-xl w-96 md:w-2/5 lg:w-1/4 bg-blue-200">

                                        
                            <img src={shopCard.cardBanner} class="rounded-t-lg" alt="" />

                            <div class="relative pt-2">

                                <div class="absolute -mt-12 w-full flex justify-center items-center">
                                    <img class="shadow-3xl rounded-2xl border-2 h-16 w-16" src={shopCard.logo} alt="" />
                                </div>

                                <div class="pt-5 px-4">
                                    <div class="absolute right-4 top-8 shadow">
                                        <p class="rounded border py-0.5 px-3">{shopCard.status}</p>
                                    </div>

                                    <h1 class="font-bold text-xl pb-1.5 text- font-display">{shopCard.shopName}</h1>
                                    <div class="text-sm font-sans">
                                        <p class="pb-1">{shopCard.rating}⭐</p>
                                        <p>{shopCard.location}  {shopCard['postal code']}</p>
                                        <p>{shopCard.city}</p>
                                        <p>{shopCard.address3}</p>
                                        <div class="flex">
                                            <svg class="w-4 h-4 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                            <p>{shopCard.phone}</p>
                                        </div>
                                        
                                    </div>
                                </div>

                                
                            </div>
                            <div class="flex justify-center my-2 mt-4 ">
                                <button class="flex py-2 px-6 rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-accent-700">
                                    <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    Visit Store
                                </button>
                            </div>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    );
};

export default ShopCard;