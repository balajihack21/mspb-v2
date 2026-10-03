/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback } from 'react';
import { Product, NavigationParams } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { QuoteInquiryModal } from './components/QuoteInquiryModal';
import { HomeView } from './pages/HomeView';
import { DivisionsPage } from './pages/DivisionsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Helper to parse initial or changed URL query parameters or hash
function parseUrlParams(): NavigationParams {
  if (typeof window === 'undefined') {
    return { page: 'home' };
  }

  const params = new URLSearchParams(window.location.search);
  const pageParam = params.get('page')?.toLowerCase();
  const divisionParam = params.get('division');
  const categoryParam = params.get('category');
  const subParam = params.get('sub');
  const brandParam = params.get('brand');
  const searchParam = params.get('search');

  // Also support direct anchor/hash links e.g. #about, #contact, #divisions
  const hash = window.location.hash.replace('#', '').toLowerCase();

  let page: NavigationParams['page'] = 'home';
  if (pageParam === 'about' || hash === 'about') {
    page = 'about';
  } else if (pageParam === 'contact' || hash === 'contact') {
    page = 'contact';
  } else if (pageParam === 'divisions' || divisionParam || hash === 'divisions' || hash.startsWith('division')) {
    page = 'divisions';
  } else if (pageParam === 'catalog' || hash === 'catalog' || hash === 'products') {
    page = 'divisions';
  }

  return {
    page,
    division: divisionParam || (page === 'divisions' ? '01' : undefined),
    category: categoryParam || undefined,
    sub: subParam || undefined,
    brand: brandParam || undefined,
    search: searchParam || undefined,
  };
}

export default function App() {
  const [navParams, setNavParams] = useState<NavigationParams>(parseUrlParams);
  const [activeSection, setActiveSection] = useState(navParams.page);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Quote / Inquiry Modal State
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [inquiryTypePrefill, setInquiryTypePrefill] = useState('Request a Quote');
  const [hardwarePrefill, setHardwarePrefill] = useState('');

  // Synchronize browser history (Back / Forward buttons)
  useEffect(() => {
    const handlePopState = () => {
      const parsed = parseUrlParams();
      setNavParams(parsed);
      setActiveSection(parsed.page);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync activeSection with navParams.page
  useEffect(() => {
    setActiveSection(navParams.page);
  }, [navParams.page]);

  // Master navigation handler that pushes or replaces the browser URL
  const handleNavigate = useCallback(
    (newParams: Partial<NavigationParams>, replace = false) => {
      setNavParams((prev) => {
        let targetPage = newParams.page || prev.page;
        if (targetPage === 'catalog') {
          targetPage = 'divisions';
        }
        const merged: NavigationParams = {
          page: targetPage,
          division: targetPage === 'divisions' ? (newParams.division ?? prev.division ?? '01') : undefined,
        };

        // Construct clean search parameters
        const urlParams = new URLSearchParams();
        if (merged.page !== 'home') {
          urlParams.set('page', merged.page);
        }
        if (merged.page === 'divisions' && merged.division) {
          urlParams.set('division', merged.division);
        }

        const queryString = urlParams.toString();
        const newUrl = queryString ? `${window.location.pathname}?${queryString}` : window.location.pathname;

        if (replace) {
          window.history.replaceState({ ...merged }, '', newUrl);
        } else {
          window.history.pushState({ ...merged }, '', newUrl);
        }

        // Scroll to top upon navigating to a new page or view
        if (!replace || merged.page !== prev.page) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        return merged;
      });
    },
    []
  );

  const handleOpenInquiry = (inquiryType = 'Request a Quote', prefill = '') => {
    setInquiryTypePrefill(inquiryType);
    setHardwarePrefill(prefill);
    setIsQuoteModalOpen(true);
  };

  const handleRequestQuoteFromProduct = (product: Product) => {
    handleOpenInquiry(
      'Request a Quote',
      `${product.name} (${product.condition || 'Tested'}) - ${product.processor || ''}`
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 antialiased font-sans">
      {/* 1. Universal Top Header */}
      <Header
        activeSection={activeSection}
        currentPage={navParams.page}
        currentDivision={navParams.division}
        currentCategory={navParams.category}
        onOpenInquiry={handleOpenInquiry}
        onNavigate={handleNavigate}
      />

      {/* 2. Main Body with Dedicated Pages */}
      <main className="flex-grow">
        {navParams.page === 'home' && (
          <HomeView
            onOpenInquiry={handleOpenInquiry}
            onNavigateToDivision={(divNum) => handleNavigate({ page: 'divisions', division: divNum })}
          />
        )}

        {navParams.page === 'divisions' && (
          <DivisionsPage
            activeDivision={navParams.division || '01'}
            initialDivision={navParams.division || '01'}
            onSelectDivision={(divNum) => handleNavigate({ page: 'divisions', division: divNum })}
            onDivisionChange={(divNum) => handleNavigate({ page: 'divisions', division: divNum })}
            onOpenInquiry={handleOpenInquiry}
            onNavigateHome={() => handleNavigate({ page: 'home' })}
            onNavigate={handleNavigate}
          />
        )}

        {navParams.page === 'about' && (
          <AboutPage
            onOpenInquiry={handleOpenInquiry}
            onNavigateHome={() => handleNavigate({ page: 'home' })}
            onNavigateToDivisions={(divNum) => handleNavigate({ page: 'divisions', division: divNum || '01' })}
            onNavigate={handleNavigate}
          />
        )}

        {navParams.page === 'contact' && (
          <ContactPage
            initialInquiryType={inquiryTypePrefill}
            initialHardwarePrefill={hardwarePrefill}
            onNavigateHome={() => handleNavigate({ page: 'home' })}
            onNavigateToDivisions={(divNum) => handleNavigate({ page: 'divisions', division: divNum || '01' })}
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* 3. Universal Footer */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
        onNavigate={handleNavigate}
      />

      {/* 4. Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={handleRequestQuoteFromProduct}
      />

      {/* 5. Request a Quote / Inquiry Modal */}
      <QuoteInquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultInquiryType={inquiryTypePrefill}
        defaultHardwareDetails={hardwarePrefill}
      />
    </div>
  );
}
