import React, { useState } from 'react';
import vendorData from '../../Data/vendor';


const Categories = () => {
     const [categories, setCategories] = useState(vendorData)

    // console.log(categories[0].category)
    return (
        <div>
            <div>
                <h1 class="p-3 text-lg">Product Category</h1>
                <div class=" ">
                    {
                        categories.map(singleCategory => (
                            <div class="m-2">
                                <ul>
                                    <li class="bg-white shadow-lg my-2 p-2 cursor-pointer">
                                        <div class="flex justify-between items-center">
                                            <p>{singleCategory?.shopName}</p>
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;