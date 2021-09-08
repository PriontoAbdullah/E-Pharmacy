import React from 'react';

const ContactVendor = () => {
    return (
        <div>
            <div class="bg-white rounded m-2 shadow-xl z-20 pt-5 pb-6 px-2 mt-10 border-t-2 border-gray-400">
                <div>
                    <h1 class="text-xl">Contact with Vendor</h1>
                </div>
                <div class="pt-3">
                    <form >
                    
                    <input type="text" name="email"  placeholder="Email" class="mb-3  block text-sm py-3 px-4 rounded w-full outline-none border border-gray-400" required/>
                    
                    <textarea name="" id="" cols="30" rows="5" placeholder="Write your Message"  class="mb-3  block text-sm py-3 px-4 rounded w-full border border-gray-400 outline-none"></textarea>
                    
                    
                    <input type="submit" value="Send Message" class="cursor-pointer bg-teal-500 py-1 px-4 rounded text-white"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactVendor;