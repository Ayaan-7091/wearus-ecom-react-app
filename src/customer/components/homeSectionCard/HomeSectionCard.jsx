import React, { useState } from 'react';


export default function HomeSectionCard({item}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 mt-2 mb-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >


      <div className="relative h-[15rem] w-[12rem]">
        <img
          className={`object-cover object-top w-full h-full rounded-lg mt-5 absolute transition-opacity duration-1000 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
          src={item.image}
          alt="T-shirt 1"
        />
        <img
          className={`object-cover object-top w-full h-full rounded-lg mt-5 absolute transition-opacity duration-1000 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          src={item.alt_image}
          alt="T-shirt 2"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mt-3 text-center">{item.title}</h3>
        <p className="mt-2 text-sm text-gray-500">{item.description}</p>
      </div>
    </div>
  );
}
