import React from 'react';
import { Globe2, ShieldCheck, Cpu, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface CompanyPositioningProps {
  onOpenInquiry: (inquiryType?: string) => void;
}

export const CompanyPositioning: React.FC<CompanyPositioningProps> = ({ onOpenInquiry }) => {
  return (
    <section id="positioning" className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full">
            Company Positioning
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight mt-3">
            Global Technology Solutions. <br className="hidden sm:inline" />
            <span className="text-[#d32f2f]">Local APAC Expertise.</span>
          </h2>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto mt-4" />
        </div>

        {/* Narrative & Regional Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-gray-700">
            <p className="text-base sm:text-lg font-medium text-[#1a1a1a] leading-relaxed">
              {siteConfig.positioning.paragraph1}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {siteConfig.positioning.paragraph2}
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {siteConfig.positioning.paragraph3}
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenInquiry('General Inquiry')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-sm font-semibold rounded shadow-xs transition-colors cursor-pointer"
              >
                <span>Partner With MSPB</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#divisions"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold rounded transition-colors"
              >
                <span>View 4 Core Divisions</span>
              </a>
            </div>
          </div>

          {/* Right Regional & Core Capabilities Card */}
          <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-[#d32f2f] font-bold text-sm uppercase tracking-wider mb-2">
                <Globe2 className="w-5 h-5" />
                <span>Regional & Global Footprint</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                APAC Operations & Worldwide Sourcing
              </h3>
            </div>

            {/* APAC List */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                Primary APAC Coverage:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {siteConfig.regions.apac.map((region) => (
                  <span
                    key={region}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-gray-200 text-xs font-medium text-gray-800"
                  >
                    <MapPin className="w-3 h-3 text-[#d32f2f]" />
                    {region}
                  </span>
                ))}
              </div>
            </div>

            {/* International List */}
            <div className="space-y-2 pt-2 border-t border-gray-200">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">
                International Sourcing & Client Support:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {siteConfig.regions.international.map((region) => (
                  <span
                    key={region}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-gray-200 text-xs font-medium text-gray-700"
                  >
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    {region}
                  </span>
                ))}
              </div>
            </div>

            {/* Pillar badges */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200 text-xs">
              <div className="flex items-center gap-2 text-gray-700">
                <ShieldCheck className="w-4 h-4 text-[#d32f2f] flex-shrink-0" />
                <span className="font-semibold">NIST / DoD Data Security</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Cpu className="w-4 h-4 text-[#d32f2f] flex-shrink-0" />
                <span className="font-semibold">Multi-Vendor TPM & SLA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Who We Support Quick Guide */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block text-center mb-4">
            Tailored Solutions For Every Organization
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200/80">
              <span className="font-bold text-gray-900 block">🏢 Enterprise IT Teams</span>
              <span className="text-gray-500 text-[11px]">Hardware upgrades & 24/7 maintenance</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200/80">
              <span className="font-bold text-gray-900 block">🌐 Data Center Operators</span>
              <span className="text-gray-500 text-[11px]">Rack & stack, fiber cabling & QA/QC</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200/80">
              <span className="font-bold text-gray-900 block">💼 Procurement Managers</span>
              <span className="text-gray-500 text-[11px]">Bulk B2B sourcing & fast custom quotes</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg border border-gray-200/80">
              <span className="font-bold text-gray-900 block">♻️ Corporate Offices</span>
              <span className="text-gray-500 text-[11px]">Certified laptop/server ITAD recycling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
