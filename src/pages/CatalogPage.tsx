import React, { useState, useEffect, useMemo } from 'react';
import {
  ChevronRight,
  Search,
  X,
  Eye,
  CheckCircle2,
  Server
} from 'lucide-react';
import { Product } from '../types';
import { productsData } from '../data/siteData';

interface CatalogPageProps {
  initialCategory?: string;
  initialSubCategory?: string;
  initialBrand?: string;
  initialSearch?: string;
  onFilterChange?: (filters: { category?: string; sub?: string; brand?: string; search?: string }) => void;
  onParamsChange?: (filters: { category?: string; sub?: string; brand?: string; search?: string }) => void;
  onProductClick: (product: Product) => void;
  onOpenInquiry: (inquiryType?: string, prefill?: string) => void;
  onNavigateHome?: () => void;
  onNavigateToDivisions?: (divNumber?: string) => void;
  onNavigate?: (params: { page: 'home' | 'divisions' | 'catalog'; division?: string; category?: string; sub?: string; brand?: string; search?: string }) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  initialCategory,
  initialBrand,
  initialSearch,
  onFilterChange,
  onParamsChange,
  onProductClick,
  onOpenInquiry,
  onNavigateHome,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || 'All');
  const [activeBrand, setActiveBrand] = useState<string>(initialBrand || 'All');
  const [activeCondition, setActiveCondition] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch || '');
  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const itemsPerPage = 12;

  useEffect(() => {
    if (initialCategory !== undefined) setActiveCategory(initialCategory || 'All');
  }, [initialCategory]);

  useEffect(() => {
    if (initialBrand !== undefined) setActiveBrand(initialBrand || 'All');
  }, [initialBrand]);

  useEffect(() => {
    if (initialSearch !== undefined) setSearchQuery(initialSearch || '');
  }, [initialSearch]);

  const categories = [
    'All',
    'Servers & Storage',
    'Workstations',
    'Laptops & Computing',
    'Networking Equipment',
    'Components & Spare Parts',
  ];

  const brands = useMemo(() => {
    const list = new Set<string>();
    productsData.forEach((p) => {
      if (p.brand) list.add(p.brand);
    });
    return ['All', ...Array.from(list).sort()];
  }, []);

  const notifyChange = (cat: string, br: string, q: string) => {
    const payload = {
      category: cat === 'All' ? undefined : cat,
      brand: br === 'All' ? undefined : br,
      search: q || undefined,
    };
    onFilterChange?.(payload);
    onParamsChange?.(payload);
  };

  // Filtered products
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      if (activeCategory !== 'All') {
        const matchesCategory =
          product.category?.toLowerCase() === activeCategory.toLowerCase() ||
          (activeCategory === 'Servers & Storage' && product.category?.includes('Server')) ||
          (activeCategory === 'Networking Equipment' && product.category?.includes('Network')) ||
          (activeCategory === 'Laptops & Computing' && product.category?.includes('Laptop')) ||
          (activeCategory === 'Components & Spare Parts' && product.category?.includes('Component'));
        if (!matchesCategory) return false;
      }

      if (activeBrand !== 'All' && product.brand !== activeBrand) {
        return false;
      }

      if (activeCondition !== 'All') {
        const cond = (product.condition || '').toLowerCase();
        if (activeCondition === 'New' && !cond.includes('new')) return false;
        if (activeCondition === 'Refurbished' && !cond.includes('refurb') && !cond.includes('tested')) return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matches =
          product.name.toLowerCase().includes(q) ||
          product.brand?.toLowerCase().includes(q) ||
          product.category?.toLowerCase().includes(q) ||
          product.processor?.toLowerCase().includes(q) ||
          product.description?.toLowerCase().includes(q);
        if (!matches) return false;
      }

      return true;
    });
  }, [activeCategory, activeBrand, activeCondition, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));
  const currentProducts = useMemo(() => {
    const start = (currentPageNum - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPageNum]);

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPageNum(1);
    notifyChange(cat, activeBrand, searchQuery);
  };

  const handleBrandSelect = (brand: string) => {
    setActiveBrand(brand);
    setCurrentPageNum(1);
    notifyChange(activeCategory, brand, searchQuery);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPageNum(1);
    notifyChange(activeCategory, activeBrand, val);
  };

  const handleClearFilters = () => {
    setActiveCategory('All');
    setActiveBrand('All');
    setActiveCondition('All');
    setSearchQuery('');
    setCurrentPageNum(1);
    notifyChange('All', 'All', '');
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-16">
      {/* Top Breadcrumb & Clean Header */}
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
            <span className="font-semibold text-gray-900">Hardware Catalog</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Enterprise Hardware Catalog
              </h1>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                Curated enterprise models. Need specific configurations, spare parts, or a custom BOM? Request a quote directly.
              </p>
            </div>

            <button
              onClick={() => onOpenInquiry('Request a Quote', 'General Hardware Bill of Materials')}
              className="px-4 py-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold rounded-lg transition self-start md:self-auto cursor-pointer"
            >
              Request Custom Quote / BOM
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Simple Controls: Search & Category Pills */}
        <div className="space-y-4 mb-8">
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search by model, brand, processor, or keyword..."
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-hidden focus:border-[#d32f2f] focus:ring-1 focus:ring-[#d32f2f]"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Clean Category Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#d32f2f] text-white'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Secondary Quick Filters: Brand & Condition */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-gray-600">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-500">Brand:</span>
                <select
                  value={activeBrand}
                  onChange={(e) => handleBrandSelect(e.target.value)}
                  className="bg-white border border-gray-200 rounded px-2 py-1 text-xs text-gray-800 focus:outline-hidden cursor-pointer"
                >
                  {brands.slice(0, 15).map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-500">Condition:</span>
                <div className="flex items-center gap-1">
                  {['All', 'New', 'Refurbished'].map((cond) => (
                    <button
                      key={cond}
                      onClick={() => {
                        setActiveCondition(cond);
                        setCurrentPageNum(1);
                      }}
                      className={`px-2 py-0.5 rounded text-xs transition cursor-pointer ${
                        activeCondition === cond
                          ? 'bg-gray-800 text-white font-medium'
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {cond}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {(activeCategory !== 'All' || activeBrand !== 'All' || activeCondition !== 'All' || searchQuery) && (
              <button
                onClick={handleClearFilters}
                className="text-xs text-[#d32f2f] hover:underline font-semibold cursor-pointer"
              >
                Reset All Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-xs text-gray-500 mb-4">
          Showing <span className="font-semibold text-gray-900">{filteredProducts.length}</span> hardware items
        </div>

        {/* Product Grid */}
        {currentProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md hover:border-gray-300 transition flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image */}
                  <div
                    onClick={() => onProductClick(product)}
                    className="h-44 bg-gray-100 relative overflow-hidden cursor-pointer flex items-center justify-center p-3"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                    {product.brand && (
                      <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs text-[10px] font-bold text-gray-800 px-2 py-0.5 rounded border border-gray-200">
                        {product.brand}
                      </span>
                    )}
                  </div>

                  {/* Product Body */}
                  <div className="p-4">
                    <div className="text-[11px] font-semibold text-[#d32f2f] uppercase tracking-wider mb-1">
                      {product.category}
                    </div>

                    <h3
                      onClick={() => onProductClick(product)}
                      className="text-sm font-bold text-gray-900 group-hover:text-[#d32f2f] transition cursor-pointer line-clamp-2 mb-2"
                      title={product.name}
                    >
                      {product.name}
                    </h3>

                    {product.processor && (
                      <p className="text-xs text-gray-500 line-clamp-1 mb-2">
                        {product.processor}
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                      <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                        {product.condition || 'Tested'}
                      </span>
                      {product.inStock && (
                        <span className="text-emerald-700 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>In Stock</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 pt-0 border-t border-gray-100 mt-2 flex items-center gap-2">
                  <button
                    onClick={() => onOpenInquiry('Request a Quote', `${product.name} (${product.brand || ''})`)}
                    className="flex-1 py-2 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold rounded transition text-center cursor-pointer"
                  >
                    Request Quote
                  </button>
                  <button
                    onClick={() => onProductClick(product)}
                    className="p-2 border border-gray-200 hover:bg-gray-50 text-gray-600 rounded transition cursor-pointer"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
            <Server className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-gray-900 mb-1">No hardware items found</h3>
            <p className="text-xs text-gray-500 mb-4">Try adjusting your search terms or category selection.</p>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-gray-900 text-white text-xs font-semibold rounded-lg"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Simple Clean Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-10">
            <button
              disabled={currentPageNum === 1}
              onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
              className="px-3 py-1.5 rounded border border-gray-200 bg-white text-xs font-semibold text-gray-700 disabled:opacity-40 cursor-pointer"
            >
              Previous
            </button>
            <span className="text-xs text-gray-600 px-3">
              Page {currentPageNum} of {totalPages}
            </span>
            <button
              disabled={currentPageNum === totalPages}
              onClick={() => setCurrentPageNum((p) => Math.min(totalPages, p + 1))}
              className="px-3 py-1.5 rounded border border-gray-200 bg-white text-xs font-semibold text-gray-700 disabled:opacity-40 cursor-pointer"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
