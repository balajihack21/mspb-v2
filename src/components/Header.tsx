import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { coreDivisions } from '../data/siteData';

interface HeaderProps {
  activeSection: string;
  currentPage?: 'home' | 'divisions' | 'catalog' | 'about' | 'contact';
  currentDivision?: string;
  currentCategory?: string;
  onSelectCategory?: (category: string, subCategory?: string) => void;
  onOpenInquiry: (inquiryType?: string, prefill?: string) => void;
  onNavigate?: (params: { page: 'home' | 'divisions' | 'catalog' | 'about' | 'contact'; division?: string; category?: string; sub?: string; search?: string }) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage = 'home',
  onOpenInquiry,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsDropdownOpen, setDivisionsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const divisionsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'divisions' | 'catalog' | 'about' | 'contact', division?: string) => {
    setMobileMenuOpen(false);
    setDivisionsDropdownOpen(false);
    onNavigate?.({ page, division });
  };

  return (
    <header className={`sticky top-0 z-40 bg-white transition-all duration-200 ${scrolled ? 'shadow-md' : 'border-b border-gray-100'}`}>
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="cursor-pointer text-left focus:outline-hidden"
            aria-label="MSPB Technologies Home"
          >
            <Logo size="md" />
          </button>

          {/* Clean Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                currentPage === 'home' ? 'text-[#d32f2f]' : 'text-gray-700 hover:text-[#d32f2f]'
              }`}
            >
              Home
            </button>

            {/* Core Divisions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (divisionsTimeoutRef.current) clearTimeout(divisionsTimeoutRef.current);
                setDivisionsDropdownOpen(true);
              }}
              onMouseLeave={() => {
                divisionsTimeoutRef.current = setTimeout(() => setDivisionsDropdownOpen(false), 200);
              }}
            >
              <button
                onClick={() => handleNavClick('divisions')}
                className={`flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer py-1 ${
                  currentPage === 'divisions' ? 'text-[#d32f2f]' : 'text-gray-700 hover:text-[#d32f2f]'
                }`}
              >
                <span>Core Divisions</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>

              {divisionsDropdownOpen && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50 animate-in fade-in duration-150">
                  <div className="bg-white rounded-xl shadow-xl ring-1 ring-black/5 p-2 border border-gray-100">
                    {coreDivisions.map((div) => (
                      <button
                        key={div.number}
                        onClick={() => handleNavClick('divisions', div.number)}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-gray-50 transition cursor-pointer flex items-center justify-between group"
                      >
                        <span className="text-xs font-semibold text-gray-800 group-hover:text-[#d32f2f]">
                          {div.number}. {div.title}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                currentPage === 'about' ? 'text-[#d32f2f]' : 'text-gray-700 hover:text-[#d32f2f]'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-sm font-semibold transition-colors cursor-pointer py-1 ${
                currentPage === 'contact' ? 'text-[#d32f2f]' : 'text-gray-700 hover:text-[#d32f2f]'
              }`}
            >
              Contact
            </button>

            {/* Request a Quote CTA */}
            <button
              onClick={() => onOpenInquiry('Request a Quote')}
              className="px-4 py-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold rounded-lg transition-all shadow-xs cursor-pointer"
            >
              Request a Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => onOpenInquiry('Request a Quote')}
              className="px-3 py-1.5 bg-[#d32f2f] text-white text-xs font-bold rounded-md"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-[#d32f2f] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2 shadow-lg">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
              currentPage === 'home' ? 'text-[#d32f2f] bg-red-50' : 'text-gray-800'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('divisions')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
              currentPage === 'divisions' ? 'text-[#d32f2f] bg-red-50' : 'text-gray-800'
            }`}
          >
            Core Divisions
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
              currentPage === 'about' ? 'text-[#d32f2f] bg-red-50' : 'text-gray-800'
            }`}
          >
            About
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg ${
              currentPage === 'contact' ? 'text-[#d32f2f] bg-red-50' : 'text-gray-800'
            }`}
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
};
