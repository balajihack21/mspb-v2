import React, { useState, useEffect } from 'react';
import { Package, Server, Recycle, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { coreDivisions } from '../data/siteData';

interface CoreDivisionsProps {
  onOpenInquiry: (inquiryType?: string, prefillDetails?: string) => void;
  activeDivision?: string;
  onSelectDivision?: (divisionNumber: string) => void;
  hideHeader?: boolean;
}

export const CoreDivisions: React.FC<CoreDivisionsProps> = ({
  onOpenInquiry,
  activeDivision = '01',
  onSelectDivision,
}) => {
  const [currentTab, setCurrentTab] = useState<string>(activeDivision || '01');

  useEffect(() => {
    if (activeDivision) setCurrentTab(activeDivision);
  }, [activeDivision]);

  const handleTabChange = (num: string) => {
    setCurrentTab(num);
    onSelectDivision?.(num);
  };

  const getDivisionData = (number: string) => {
    switch (number) {
      case '01':
        return {
          title: 'IT Hardware Trading',
          tagline: 'Buy, Sell, Source & Supply Enterprise IT Equipment',
          description:
            'We provide wholesale enterprise computer hardware across APAC and global corridors. From single component spares to complete server clusters and networking setups, we source tested, certified hardware at competitive rates.',
          offerings: [
            'Enterprise Rack & Blade Servers (Dell PowerEdge, HPE ProLiant, Lenovo ThinkSystem)',
            'Storage Arrays & Expansion Enclosures (SAN, NAS, All-Flash, Hybrid Storage)',
            'Networking Equipment (Cisco Catalyst/Nexus, Arista, Juniper, Mellanox switches)',
            'Computing Fleets (Enterprise workstations, corporate laptops, desktop clusters)',
            'Components & Field Spares (Intel Xeon/AMD EPYC CPUs, ECC DDR4/DDR5 RAM, NVMe/SAS drives, PSUs)',
          ],
          brands: ['Dell Technologies', 'HPE', 'Cisco', 'Lenovo', 'Supermicro', 'Intel', 'AMD', 'Arista', 'Juniper'],
          ctaText: 'Request Hardware Quotation',
        };
      case '02':
        return {
          title: 'Data Center Infrastructure',
          tagline: 'Deployment, Cabling, Rack & Stack, and Decommissioning',
          description:
            'Turnkey on-site data center engineering services for enterprises, colocation providers, and cloud hubs. We handle physical deployments with zero downtime, precision cable dressing, and comprehensive testing.',
          offerings: [
            'Physical Rack & Stack installation of servers, switches, PDUs, and patch panels',
            'High-density Structured Cabling: MTP/MPO optical fiber and Cat6A/Cat7 copper trunks',
            'Color-coded cable dressing, systematic label indexing, and port mapping',
            'Fluke / OTDR cable certification with detailed test documentation',
            'Clean hardware decommissioning, systematic un-racking, and site handover',
          ],
          brands: ['Panduit', 'CommScope', 'Corning', 'APC / Schneider', 'Vertiv', 'Raritan'],
          ctaText: 'Discuss Data Center Project',
        };
      case '03':
        return {
          title: 'IT Asset Disposition (ITAD)',
          tagline: 'Certified Data Sanitization, Remarketing & Sustainable Recycling',
          description:
            'Complete lifecycle management for retired IT equipment. We safeguard corporate data with certified NIST 800-88 erasure, maximize residual financial return through remarketing, and recycle responsibly.',
          offerings: [
            'Certified NIST SP 800-88 Rev 1 data wiping with serialized Certificates of Destruction',
            'On-site physical hard drive degaussing and mechanical shredding services',
            'Corporate IT asset buyback: recover fair market value from surplus and retired fleet',
            'Comprehensive serialized asset tracking, inventory audit, and compliance reports',
            'Zero-landfill, environmentally responsible e-waste recycling and materials recovery',
          ],
          brands: ['NIST 800-88', 'DoD 5220.22-M', 'ISO 14001 Compliant', 'Serialized Audit Trails'],
          ctaText: 'Submit ITAD Equipment List',
        };
      case '04':
        return {
          title: 'Hardware Maintenance & Support',
          tagline: '24/7 Multi-Vendor Maintenance & Third-Party SLA Coverage',
          description:
            'Cost-effective annual maintenance contracts (AMC) and Third-Party Maintenance (TPM) for enterprise server, storage, and networking hardware—extending equipment life well beyond OEM End-of-Life (EOL).',
          offerings: [
            'Flexible SLA tiers: 24/7/365 4-hour critical on-site response or Next Business Day (NBD)',
            'Multi-vendor equipment coverage: Dell EMC, HPE, Cisco, Lenovo, IBM, NetApp',
            'Dedicated regional spare parts buffer in Singapore for rapid replacement dispatch',
            'Certified senior field engineers for troubleshooting, firmware updates, and part swaps',
            'Significant savings (up to 60%) compared to expensive OEM manufacturer renewals',
          ],
          brands: ['Dell EMC', 'HPE ProLiant', 'Cisco Nexus/Catalyst', 'Lenovo ThinkSystem', 'IBM / NetApp'],
          ctaText: 'Get Maintenance SLA Quote',
        };
      default:
        return {
          title: 'Core Division',
          tagline: '',
          description: '',
          offerings: [],
          brands: [],
          ctaText: 'Request a Quote',
        };
    }
  };

  const currentData = getDivisionData(currentTab);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Division Switcher Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {coreDivisions.map((div) => {
          const isSelected = div.number === currentTab;
          return (
            <button
              key={div.number}
              onClick={() => handleTabChange(div.number)}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-[#d32f2f] bg-red-50/50 shadow-xs ring-1 ring-[#d32f2f]/30'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#d32f2f]' : 'text-gray-400'}`}>
                  DIVISION {div.number}
                </span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-[#d32f2f]" />}
              </div>
              <h3 className={`text-sm font-bold ${isSelected ? 'text-gray-900' : 'text-gray-700'}`}>
                {div.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* Active Division Card */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 shadow-xs">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d32f2f] bg-red-50 px-3 py-1 rounded-full mb-3">
            Division {currentTab}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            {currentData.title}
          </h2>
          <p className="text-base text-gray-500 font-medium mb-4">
            {currentData.tagline}
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            {currentData.description}
          </p>
        </div>

        {/* What We Deliver */}
        <div className="mb-8">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            What We Deliver
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentData.offerings.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                <CheckCircle2 className="w-4 h-4 text-[#d32f2f] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supported Brands / Platforms */}
        <div className="mb-8 pt-6 border-t border-gray-100">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
            Supported Brands & Standards
          </h3>
          <div className="flex flex-wrap gap-2">
            {currentData.brands.map((brand) => (
              <span
                key={brand}
                className="text-xs font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-md"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center gap-4">
          <button
            onClick={() => onOpenInquiry(currentData.ctaText, `Division ${currentTab}: ${currentData.title}`)}
            className="px-6 py-3 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs sm:text-sm font-bold rounded-lg transition shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <span>{currentData.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
