import React, { useState } from 'react';
import shopCard from '../../../Data/vendors'
import './ShopCard.css'

const ShopCard = () => {
    const [shopCards, setShopCards] = useState(shopCard)
    


    return (
        <div>
            
            <div class="w-full text-center py-10">
                <h1 class="font-bold text-3xl">Shop By Store</h1>
            </div>
            <div className="cards flex flex-wrap justify-center">
                
                {
                    shopCards.map(shopCard => (
                        

                        <div styles={{ 
                            backgroundImage: `url(${shopCard.bgImg})`,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                            }} class="mx-3 my-8 bg-gray-300 rounded-lg shadow-xl  p-4 w-96 md:w-2/5 lg:w-1/4 ">

                            

                            

                            <div class="relative pt-2">

                                <div class="absolute -mt-12 w-full flex justify-center items-center">
                                    <img class="shadow-2xl rounded-3xl border border-2-black h-16 w-16" src={shopCard.logo} alt="" />
                                </div>

                                <div class="absolute right-0 top-2 shadow">
                                    <p class="rounded border py-0.5 px-3">{shopCard.status}</p>
                                </div>

                                <h1 class="font-bold text-xl pb-1.5">{shopCard.name}</h1>
                                <div class="text-sm">
                                    <p class="pb-1">{shopCard.stars}</p>
                                    <p>{shopCard.address1}</p>
                                    <p>{shopCard.address2}</p>
                                    <p>{shopCard.address3}</p>
                                    <div class="flex">
                                        <svg class="w-4 h-4 mt-0.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                        <p>{shopCard.phone}</p>
                                    </div>
                                    
                                </div>

                                
                            </div>
                            <div class="flex justify-center my-2 ">
                                <button class="flex py-1.5 px-5 rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-accent-700">
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