import React from 'react';
import { aboutUsItems } from '../data/siteData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#222222] tracking-tight">
            About us
          </h2>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto mt-3" />
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {aboutUsItems.map((item) => (
            <div key={item.id} className="flex flex-col group">
              {/* Photo Box */}
              <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-200 mb-6 shadow-xs">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#222222] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
