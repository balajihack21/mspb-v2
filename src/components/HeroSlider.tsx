import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSliderProps {
  onOpenInquiry: (inquiryType?: string, prefill?: string) => void;
  onNavigateToDivision?: (divisionNumber: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenInquiry,
  onNavigateToDivision,
}) => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=80"
          alt="Enterprise Data Center"
          className="w-full h-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          {/* Subtle Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-[#d32f2f]" />
            <span>Singapore HQ • Global IT Distribution</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
            Enterprise IT Hardware & Infrastructure Solutions
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl font-normal">
            Wholesale enterprise servers, storage, networking equipment, certified ITAD, and 24/7 SLA maintenance support across APAC and worldwide.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigateToDivision?.('01')}
              className="px-6 py-3.5 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-sm font-bold rounded-lg transition shadow-md flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Core Divisions</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenInquiry('Request a Quote', 'General Hardware / Infrastructure Inquiry')}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg border border-white/20 transition cursor-pointer"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
