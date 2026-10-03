import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { CoreDivisionsPreview } from '../components/CoreDivisionsPreview';

interface HomeViewProps {
  onOpenInquiry: (inquiryType?: string, prefillDetails?: string) => void;
  onNavigateToCatalog?: (category?: string, subCategory?: string) => void;
  onNavigateToDivision: (divisionNumber: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onOpenInquiry,
  onNavigateToDivision,
}) => {
  return (
    <div>
      {/* 1. Hero */}
      <HeroSlider
        onOpenInquiry={onOpenInquiry}
        onNavigateToDivision={onNavigateToDivision}
      />

      {/* 2. Four Core Divisions (Simplified & Scannable) */}
      <CoreDivisionsPreview
        onNavigateToDivision={onNavigateToDivision}
        onOpenInquiry={onOpenInquiry}
      />
    </div>
  );
};
