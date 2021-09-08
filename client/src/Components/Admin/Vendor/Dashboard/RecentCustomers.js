import React from 'react';

const RecentCustomers = () => {
  const customers = [
    {
      id: '0',
      image: 'https://i.imgur.com/1As0akH.png1',
      name: 'Alex Shatov',
      email: 'alexshatov@gmail.com',
      spent: '৳2,890.66',
    },
    {
      id: '1',
      image: 'https://i.imgur.com/UYCE7Rr.png',
      name: 'Philip Harbach',
      email: 'philip.h@gmail.com',
      spent: '৳2,767.04',
    },
    {
      id: '2',
      image: 'https://i.imgur.com/FHMKqK5.png',
      name: 'Mirko Fisuk',
      email: 'mirkofisuk@gmail.com',
      spent: '৳2,996.00',
    },
    {
      id: '3',
      image: 'https://i.imgur.com/hz6bZkb.png',
      name: 'Olga Semklo',
      email: 'olga.s@cool.design',
      spent: '৳1,220.66',
    },
    {
      id: '4',
      image: 'https://i.imgur.com/udG6SOt.png',
      name: 'Burak Long',
      email: 'longburak@gmail.com',
      spent: '৳1,890.66',
    },
  ];

  return (
    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Recent Customers</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs font-semibold uppercase text-gray-500 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Spent</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Country</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm divide-y divide-gray-100">
              {customers.map((customer) => {
                return (
                  <tr key={customer.id}>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={customer.image}
                            width="40"
                            height="40"
                            alt={customer.name}
                          />
                        </div>
                        <div className="font-medium text-gray-800">
                          {customer.name}
                        </div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">{customer.email}</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        {customer.spent}
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex-shrink-0 self-end ml-2">
                        <a
                          className="font-medium text-teal-500 hover:text-teal-700 font-sans"
                          href="#0"
                        >
                          View<span className="hidden sm:inline"> -&gt;</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentCustomers;
