import React from 'react';

export default function CircleCarousel({ items }) {
  return (
    <div className="flex justify-between gap-6 overflow-x-auto scrollbar-hide px-4">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center flex-shrink-0">
          <a href={item.link} className="block">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2 border-1 border-gray1">
              <img src={item.image} alt={item.name} className="object-contain rounded-full" />
            </div>
            <p className="text-center font-medium text-sm">{item.name}</p>
          </a>
        </div>
      ))}
    </div>
  );
} 