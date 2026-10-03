import React from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../data/siteData';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenInquiry?: (inquiryType?: string) => void;
  onNavigate?: (params: { page: 'home' | 'divisions' | 'catalog' | 'about' | 'contact'; division?: string; category?: string; sub?: string }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry, onNavigate }) => {
  const handleNav = (page: 'home' | 'divisions' | 'catalog' | 'about' | 'contact', extra?: { division?: string; category?: string }) => {
    onNavigate?.({ page, division: extra?.division, category: extra?.category });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-gray-800">
          {/* Column 1: Company Profile */}
          <div className="space-y-3">
            <div 
              onClick={() => handleNav('home')} 
              className="bg-white p-2 rounded inline-block cursor-pointer"
            >
              <Logo size="sm" />
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Singapore-based enterprise IT hardware trading, data center cabling & infrastructure, certified ITAD, and multi-vendor maintenance support.
            </p>
            <div className="text-xs text-gray-400 space-y-1 pt-1">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">Entity:</span>
                <span>UEN {siteConfig.uen} (Singapore)</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d32f2f] shrink-0 mt-0.5" />
                <span>67 Ubi Crescent, #04-05, Singapore 408560</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('divisions')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Core Business Divisions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-white transition cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-white transition cursor-pointer"
                >
                  Contact & HQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Get in Touch
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d32f2f]" />
                <a href="tel:+6584363635" className="hover:text-white font-mono">
                  +65 84363635
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d32f2f]" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry?.('Request a Quote')}
                className="px-4 py-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold rounded transition cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2">
          <span>
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </span>
          <span className="text-gray-500">Singapore HQ • UEN: {siteConfig.uen}</span>
        </div>
      </div>
    </footer>
  );
};
