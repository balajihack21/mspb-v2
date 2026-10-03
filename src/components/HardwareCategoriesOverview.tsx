import React from 'react';
import { hardwareCategoryGroups } from '../data/siteData';
import { Laptop, Server, Network, Cpu, HardDrive, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

interface HardwareCategoriesOverviewProps {
  onSelectCategory: (catName: string) => void;
  onOpenInquiry: (inquiryType?: string, prefill?: string) => void;
}

export const HardwareCategoriesOverview: React.FC<HardwareCategoriesOverviewProps> = ({
  onSelectCategory,
  onOpenInquiry,
}) => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop':
        return <Laptop className="w-6 h-6 text-[#d32f2f]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#d32f2f]" />;
      case 'Network':
        return <Network className="w-6 h-6 text-[#d32f2f]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#d32f2f]" />;
      case 'HardDrive':
        return <HardDrive className="w-6 h-6 text-[#d32f2f]" />;
      default:
        return <Server className="w-6 h-6 text-[#d32f2f]" />;
    }
  };

  return (
    <section id="hardware-categories" className="py-16 sm:py-20 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Hardware Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] tracking-tight mt-3">
            Hardware Categories & Equipment
          </h2>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto mt-4" />
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            Enterprise systems, high-density compute, carrier-grade networking, and certified spare parts available for international supply and buyback.
          </p>
        </div>

        {/* 5 Hardware Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hardwareCategoryGroups.map((group) => (
            <div
              key={group.id}
              className="bg-gray-50 border border-gray-200/80 rounded-xl p-6 hover:shadow-md hover:border-[#d32f2f]/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-xs">
                    {getCategoryIcon(group.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-[#d32f2f] bg-red-50 px-2 py-0.5 rounded">
                    B2B Wholesale & Supply
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#d32f2f] transition-colors">
                  {group.name}
                </h3>
                <p className="text-xs text-gray-500 mb-4">{group.subtitle}</p>

                {/* Sub items as clean chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-2 py-1 bg-white border border-gray-200 rounded text-xs text-gray-700 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-gray-200/80 flex items-center gap-2">
                <button
                  onClick={() => onSelectCategory(group.name)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-gray-700 bg-white hover:bg-gray-100 border border-gray-200 rounded transition cursor-pointer flex items-center justify-center gap-1"
                >
                  <span>View Stock</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenInquiry('Request a Quote', `Quote for ${group.name}`)}
                  className="flex-1 py-2 px-3 text-xs font-semibold text-white bg-[#d32f2f] hover:bg-[#b71c1c] rounded transition cursor-pointer"
                >
                  Request Quote
                </button>
              </div>
            </div>
          ))}

          {/* Quick Equipment Types Summary Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 text-white flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-widest mb-3">
                <Tag className="w-4 h-4" />
                <span>Multi-Condition Sourcing</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                All Equipment Conditions Supported
              </h3>
              <p className="text-xs text-gray-300 mb-4 leading-relaxed">
                Whether deploying brand new turnkey hardware or sourcing cost-effective certified refurbished & excess inventory:
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs">
                {['New', 'Refurbished', 'Used', 'Excess Inventory', 'Surplus', 'End-of-Life (EOL)', 'Bulk Wholesale'].map((cond) => (
                  <span key={cond} className="px-2.5 py-1 bg-white/10 rounded font-medium text-gray-200">
                    {cond}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => onOpenInquiry('Sell Your IT Equipment', 'Sell Excess/Surplus Hardware')}
                className="w-full py-2.5 px-4 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold rounded uppercase tracking-wider transition cursor-pointer text-center"
              >
                Sell Your Excess Equipment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
