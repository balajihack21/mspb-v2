import React from 'react';
import { Package, Server, Recycle, Shield, ArrowRight } from 'lucide-react';
import { coreDivisions } from '../data/siteData';

interface CoreDivisionsPreviewProps {
  onNavigateToDivision: (divisionNumber: string) => void;
  onOpenInquiry: (inquiryType?: string, prefillDetails?: string) => void;
}

export const CoreDivisionsPreview: React.FC<CoreDivisionsPreviewProps> = ({
  onNavigateToDivision,
  onOpenInquiry,
}) => {
  const getDivisionDetails = (number: string) => {
    switch (number) {
      case '01':
        return {
          icon: <Package className="w-6 h-6 text-[#d32f2f]" />,
          summary: 'Buy, sell, and source enterprise servers, storage arrays, networking equipment, and spare parts at wholesale rates.',
        };
      case '02':
        return {
          icon: <Server className="w-6 h-6 text-[#d32f2f]" />,
          summary: 'Turnkey data center deployment: rack & stack, structured copper/fiber cabling, containment, and cable management.',
        };
      case '03':
        return {
          icon: <Recycle className="w-6 h-6 text-[#d32f2f]" />,
          summary: 'Certified NIST 800-88 data destruction, corporate asset remarketing, and environmentally responsible e-waste recycling.',
        };
      case '04':
        return {
          icon: <Shield className="w-6 h-6 text-[#d32f2f]" />,
          summary: '24/7 multi-vendor hardware maintenance, 4-hour critical on-site parts delivery, and cost-effective TPM SLAs.',
        };
      default:
        return {
          icon: <Server className="w-6 h-6 text-[#d32f2f]" />,
          summary: '',
        };
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Clean Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 mb-3 inline-block">
            Core Business Divisions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Our Four Core Divisions
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Comprehensive IT hardware and infrastructure services for modern enterprises.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreDivisions.map((div) => {
            const details = getDivisionDetails(div.number);
            return (
              <div
                key={div.number}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md hover:border-gray-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-red-50">
                      {details.icon}
                    </div>
                    <span className="text-xs font-bold font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded">
                      DIVISION {div.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {div.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {details.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigateToDivision(div.number)}
                    className="text-xs font-bold text-[#d32f2f] hover:text-[#b71c1c] flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Division Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onOpenInquiry('Request a Quote', `Division ${div.number} - ${div.title}`)}
                    className="text-xs font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
