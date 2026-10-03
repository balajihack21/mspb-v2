import React, { useState } from 'react';
import { Product } from '../types';
import { productsData } from '../data/siteData';
import { Search, Eye, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ProductsShowcaseProps {
  onProductClick: (product: Product) => void;
  onOpenInquiry: (inquiryType?: string, prefill?: string) => void;
  selectedCategory?: string;
  selectedBrand?: string;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({
  onProductClick,
  onOpenInquiry,
  selectedCategory,
  selectedBrand,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategory || 'All');
  const [activeBrand, setActiveBrand] = useState<string>(selectedBrand || 'All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Servers & Storage',
    'Laptops & Computing',
    'Networking Equipment',
    'Components & Spare Parts',
    'Data Center Equipment',
  ];

  const brands = ['All', 'Dell', 'HP', 'Cisco', 'Intel', 'Samsung', 'MSPB Cabling'];

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      activeCategory === 'All' ||
      product.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      product.subCategory?.toLowerCase().includes(activeCategory.toLowerCase());

    const matchesBrand =
      activeBrand === 'All' ||
      product.brand.toLowerCase() === activeBrand.toLowerCase();

    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.formFactor.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesBrand && matchesSearch;
  });

  return (
    <section id="products" className="py-16 sm:py-20 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Hardware Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mt-3">
            Enterprise Hardware & Equipment Catalog
          </h2>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto mt-3" />
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            Verified stock, configured-to-order servers, networking modules, and tested spare parts ready for dispatch across APAC and international destinations.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-xs mb-10 space-y-4">
          {/* Top Bar: Search + Brand Filter */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search server model, part #, processor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded focus:border-[#d32f2f] focus:outline-hidden"
              />
            </div>

            {/* Brand Filter Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-xs font-bold text-gray-500 mr-1 hidden md:inline">Brand:</span>
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded transition cursor-pointer whitespace-nowrap ${
                    activeBrand === brand
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-gray-100 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded transition cursor-pointer whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#d32f2f] text-white shadow-xs'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Help Tip */}
          <div className="bg-red-50/60 border border-red-100 rounded-lg p-3 text-xs text-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-base">💡</span>
              <span>
                <strong>How to order:</strong> Click <em>"Request Quote"</em> on any item or submit your custom specs. We provide official pricing, warranty tiers & fast shipping lead times within 2 hours.
              </span>
            </div>
            <button
              onClick={() => onOpenInquiry('Request a Quote', 'Custom BOM / Hardware Sourcing Inquiry')}
              className="text-[#d32f2f] font-bold hover:underline whitespace-nowrap text-xs cursor-pointer"
            >
              Submit Custom Part List (BOM) →
            </button>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200 p-8">
            <p className="text-base text-gray-600 mb-3">
              No matching hardware items found in preview catalog.
            </p>
            <p className="text-xs text-gray-500 mb-6 max-w-md mx-auto">
              MSPB Technologies maintains extensive physical inventories in Singapore and partner hubs worldwide. Contact our trading desk to source your exact part numbers.
            </p>
            <button
              onClick={() => onOpenInquiry('Request a Quote', `Sourcing inquiry for: ${searchQuery || activeCategory}`)}
              className="px-6 py-2.5 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase tracking-wider rounded transition cursor-pointer"
            >
              Request Custom Sourcing Quote
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md hover:border-gray-300 transition-all flex flex-col justify-between group"
              >
                {/* Top Image & Badge */}
                <div>
                  <div
                    onClick={() => onProductClick(product)}
                    className="relative h-48 bg-gray-50 flex items-center justify-center p-4 cursor-pointer overflow-hidden border-b border-gray-100"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="max-h-36 object-contain group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Condition badge */}
                    {product.condition && (
                      <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-black/75 text-white uppercase tracking-wider">
                        {product.condition}
                      </span>
                    )}

                    {/* Quick view button overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-gray-900 text-xs font-bold rounded shadow-md">
                        <Eye className="w-3.5 h-3.5 text-[#d32f2f]" /> View Specs
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-semibold text-gray-500">
                      <span>{product.brand}</span>
                      <span className="text-[#d32f2f]">{product.category}</span>
                    </div>

                    <h3
                      onClick={() => onProductClick(product)}
                      className="font-bold text-sm text-gray-900 line-clamp-2 hover:text-[#d32f2f] transition-colors cursor-pointer"
                    >
                      {product.name}
                    </h3>

                    {/* Specifications summary */}
                    <div className="pt-2 border-t border-gray-100 space-y-1 text-xs text-gray-600">
                      {product.processor && (
                        <p className="truncate">
                          <span className="font-semibold text-gray-800">CPU:</span> {product.processor}
                        </p>
                      )}
                      {product.memory && (
                        <p className="truncate">
                          <span className="font-semibold text-gray-800">RAM:</span> {product.memory}
                        </p>
                      )}
                      {product.storage && (
                        <p className="truncate">
                          <span className="font-semibold text-gray-800">Storage:</span> {product.storage}
                        </p>
                      )}
                      <p className="truncate">
                        <span className="font-semibold text-gray-800">Form:</span> {product.formFactor}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Actions (Pure B2B Quote buttons - No Cart / Buy) */}
                <div className="p-4 pt-0 border-t border-gray-100 grid grid-cols-2 gap-2 mt-3">
                  <button
                    onClick={() => onProductClick(product)}
                    className="py-2 px-2.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded transition text-center cursor-pointer flex items-center justify-center gap-1"
                  >
                    <FileText className="w-3.5 h-3.5 text-gray-500" />
                    <span>Specs</span>
                  </button>

                  <button
                    onClick={() => onOpenInquiry('Request a Quote', `Quote for ${product.name} (${product.condition || 'Tested'})`)}
                    className="py-2 px-2.5 text-xs font-bold text-white bg-[#d32f2f] hover:bg-[#b71c1c] rounded transition text-center cursor-pointer"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Global Sourcing & Custom Config Callout */}
        <div className="mt-12 p-6 rounded-xl bg-white border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#d32f2f] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Configured-to-Order (CTO) & Custom Sourcing</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900">
              Need custom CPU/RAM/Storage configurations or hard-to-find legacy parts?
            </h4>
            <p className="text-xs text-gray-600">
              We configure and test enterprise hardware in Singapore prior to regional dispatch. Full warranty included.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <button
              onClick={() => onOpenInquiry('Request a Quote', 'Custom Configured-to-Order (CTO) Server Quote')}
              className="px-5 py-2.5 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase tracking-wider rounded transition cursor-pointer"
            >
              Request Custom Config
            </button>
            <button
              onClick={() => onOpenInquiry('Sell Your IT Equipment', 'Sell Surplus / Decommissioned Equipment')}
              className="px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded transition cursor-pointer"
            >
              Sell Excess Hardware
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
