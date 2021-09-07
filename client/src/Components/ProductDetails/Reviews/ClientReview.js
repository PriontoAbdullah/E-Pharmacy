import React from "react";

const ClientReview = () => {
  return (
    <div className="container flex flex-col w-full p-6 mx-auto divide-y rounded-md divide-coolGray-700 dark:bg-coolGray-900 dark:text-coolGray-100">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt="hello"
              className="object-cover w-12 h-12 rounded-full"
            />
          </div>
          <div>
            <h4 className="font-bold">Leroy Jenkins</h4>
            <span className="text-xs dark:text-coolGray-400">2 days ago</span>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm dark:text-coolGray-400">
        <p>
          Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum
          lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.
        </p>
        <p>
          Donec eget ultricies diam, eu molestie arcu. Etiam nec lacus eu mauris
          cursus venenatis. Maecenas gravida urna vitae accumsan feugiat.
          Vestibulum commodo, ante sit urna purus rutrum sem.
        </p>
      </div>
    </div>
  );
};

export default ClientReview;
