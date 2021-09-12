import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {  XIcon } from '@heroicons/react/outline'
import Footer from '../../Components/Home/Footer/Footer'
import Header from '../../Components/Home/NavBar/Header'
import NavBar from '../../Components/Home/NavBar/NavBar'

const orders = [
  {
    id: 1,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    status: 'out-for-delivery',
    productName: 'Kicks Carrier',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-01.jpg',
    imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
  },
  {
    id: 2,
    date: 'June 21, 2021',
    datetime: '2021-06-21',
    status: 'delivered',
    productName: 'Micro Backpack',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-02.jpg',
    imageAlt: 'Light grey canvas backpack with black handle, zipper, and edge details.',
  },
  {
    id: 3,
    date: 'June 6, 2021',
    datetime: '2021-06-06',
    status: 'cancelled',
    productName: 'Drawtop Canister',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-03.jpg',
    imageAlt: 'Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap.',
  },
  {
    id: 4,
    date: 'May 24, 2021',
    datetime: '2021-05-24',
    status: 'delivered',
    productName: 'High Wall Tote',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-04.jpg',
    imageAlt: 'White canvas tote bag with black drawstring liner and white handle.',
  },
  // More orders...
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const OrderHistory = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">
            <Header />
            <NavBar />
        {/* Mobile menu */}
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>
  
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                <div className="px-4 pt-5 pb-2 flex">
                  <button
                    type="button"
                    className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
  
                <div className="border-t border-gray-200 py-6 px-4">
                  <a href="#" className="-m-2 p-2 flex items-center">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="w-5 h-auto block flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
  
        <main
          className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          aria-labelledby="order-history-heading"
        >
          <div className="max-w-xl">
            <h1 id="order-history-heading" className="text-3xl font-extrabold tracking-tight text-gray-900">
              Order history
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Check the status of recent orders, manage returns, and discover similar products.
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            {orders.map((order) => (
              <div key={order.id} className="group relative">
                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
                  <img src={order.imageSrc} alt={order.imageAlt} className="object-center object-cover" />
                </div>
                <h3 className="mt-4 text-sm text-gray-500">
                  <a href={order.href}>
                    <span className="absolute inset-0" />
                    {order.productName}
                  </a>
                </h3>
                <p className="mt-1 text-lg font-medium">
                  {order.status === 'delivered' ? (
                    <span className="text-gray-900">
                      Delivered on <time dateTime={order.datetime}>{order.date}</time>
                    </span>
                  ) : order.status === 'out-for-delivery' ? (
                    <span className="text-indigo-600">Out for delivery</span>
                  ) : order.status === 'cancelled' ? (
                    <span className="text-gray-500">Cancelled</span>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
};

export default OrderHistory;