import React from 'react';
import {
  ChevronRight,
  Globe2,
  ShieldCheck,
  Truck,
  Award,
  ArrowRight,
  Building2,
  Mail,
  Phone
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface AboutPageProps {
  onOpenInquiry?: (type?: string) => void;
  onNavigateHome?: () => void;
  onNavigateToCatalog?: (cat?: string) => void;
  onNavigateToDivisions?: (divNum?: string) => void;
  onNavigate?: (params: { page: 'home' | 'divisions' | 'catalog' | 'about' | 'contact'; division?: string; category?: string }) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenInquiry,
  onNavigateHome,
  onNavigateToDivisions,
}) => {
  const pillars = [
    {
      title: 'Global Sourcing Network',
      description: 'Direct procurement channels with Tier-1 OEMs and enterprise liquidations across North America, Europe, and Asia.',
      icon: Globe2,
    },
    {
      title: 'Rigorous Testing & QA',
      description: 'Every server, switch, module, and drive undergoes thorough diagnostic stress-testing before dispatch.',
      icon: ShieldCheck,
    },
    {
      title: 'Singapore Logistics Hub',
      description: 'Strategic headquarters in Singapore enables same-day local dispatch and rapid freight across Southeast Asia.',
      icon: Truck,
    },
    {
      title: 'Circular ITAD Standards',
      description: 'NIST SP 800-88 compliant data destruction and environmentally certified corporate e-waste recycling.',
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50 pb-16">
      {/* Top Breadcrumb & Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
            <button
              onClick={() => onNavigateHome?.()}
              className="hover:text-[#d32f2f] transition cursor-pointer"
            >
              Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="font-semibold text-gray-900">About Us</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            About MSPB Technologies
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Global Technology Solutions. Local APAC Expertise.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Simple Company Intro */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-10 mb-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full mb-4 inline-block">
              Corporate Overview
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Singapore-based enterprise hardware and infrastructure partner
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              MSPB Technologies Pte Ltd (UEN: {siteConfig.uen}) is headquartered in Singapore at 67 Ubi Crescent. We specialize in enterprise IT hardware trading, data center structured cabling and deployment, certified IT asset disposition (ITAD), and 24/7 multi-vendor hardware maintenance contracts.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              We serve system integrators, cloud service providers, enterprise data centers, and corporate clients across Singapore, Malaysia, India, Japan, Australia, New Zealand, and global corridors.
            </p>
          </div>

          {/* Quick Info Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 mt-8 border-t border-gray-100 text-xs">
            <div>
              <span className="text-gray-400 block font-medium">Headquarters</span>
              <span className="font-bold text-gray-900 text-sm">Singapore</span>
            </div>
            <div>
              <span className="text-gray-400 block font-medium">Entity UEN</span>
              <span className="font-bold text-gray-900 text-sm">{siteConfig.uen}</span>
            </div>
            <div>
              <span className="text-gray-400 block font-medium">Core Divisions</span>
              <span className="font-bold text-gray-900 text-sm">4 Dedicated Units</span>
            </div>
            <div>
              <span className="text-gray-400 block font-medium">Support Coverage</span>
              <span className="font-bold text-gray-900 text-sm">24x7 Multi-Vendor</span>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Why Work With Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
                  <div>
                    <div className="p-2.5 rounded-lg bg-red-50 text-[#d32f2f] w-fit mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900 mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Simple CTA Box */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Ready to partner with MSPB Technologies?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Get in touch with our Singapore engineering and hardware procurement team.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry?.('Request a Quote')}
              className="px-5 py-2.5 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold rounded-lg transition cursor-pointer"
            >
              Request a Quote
            </button>
            <button
              onClick={() => onNavigateToDivisions?.('01')}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition cursor-pointer"
            >
              Explore Divisions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
