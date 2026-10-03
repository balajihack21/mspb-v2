import React from 'react';
import { Home, ChevronRight, ArrowLeft } from 'lucide-react';
import { CoreDivisions } from '../components/CoreDivisions';
import { coreDivisions } from '../data/siteData';

interface DivisionsPageProps {
  activeDivision?: string;
  initialDivision?: string;
  onSelectDivision?: (divisionNumber: string) => void;
  onDivisionChange?: (divisionNumber: string) => void;
  onOpenInquiry: (inquiryType?: string, prefillDetails?: string) => void;
  onNavigateHome?: () => void;
  onNavigateToCatalog?: (category?: string) => void;
  onNavigate?: (params: { page: 'home' | 'divisions' | 'catalog'; division?: string; category?: string; sub?: string; brand?: string; search?: string }) => void;
}

export const DivisionsPage: React.FC<DivisionsPageProps> = ({
  activeDivision,
  initialDivision,
  onSelectDivision,
  onDivisionChange,
  onOpenInquiry,
  onNavigateHome,
  onNavigate,
}) => {
  const currentDivisionNumber = activeDivision || initialDivision || '01';

  const handleSelectDivision = (divisionNumber: string) => {
    if (typeof onSelectDivision === 'function') {
      onSelectDivision(divisionNumber);
    } else if (typeof onDivisionChange === 'function') {
      onDivisionChange(divisionNumber);
    } else if (typeof onNavigate === 'function') {
      onNavigate({ page: 'divisions', division: divisionNumber });
    }
  };

  const handleGoHome = () => {
    if (typeof onNavigateHome === 'function') {
      onNavigateHome();
    } else if (typeof onNavigate === 'function') {
      onNavigate({ page: 'home' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-16">
      {/* Top Simple Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <nav className="flex items-center space-x-2 text-xs text-gray-500">
              <button
                onClick={handleGoHome}
                className="hover:text-[#d32f2f] transition cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="font-semibold text-gray-900">Core Divisions</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Core Divisions Content */}
      <main>
        <CoreDivisions
          activeDivision={currentDivisionNumber}
          onSelectDivision={handleSelectDivision}
          onOpenInquiry={onOpenInquiry}
        />
      </main>
    </div>
  );
};
