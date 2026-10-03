export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  subCategory?: string;
  formFactor: string;
  processor?: string;
  memory?: string;
  storage?: string;
  description: string;
  image: string;
  condition?: 'New' | 'Refurbished' | 'Surplus' | 'Used';
  inStock: boolean;
  featured?: boolean;
}

export interface NavProductSubItem {
  id: string;
  title: string;
  href: string;
}

export interface NavProductCategory {
  id: string;
  title: string;
  href: string;
  subItems: NavProductSubItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'gears' | 'headset' | 'check' | 'pin' | 'toggle' | 'cloud' | 'monitor' | 'globe' | 'cubes' | 'server' | 'shield' | 'refresh' | 'cpu';
}

export interface ContactFormData {
  inquiryType: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  targetHardware?: string;
  message: string;
}

export interface SlideItem {
  id: number;
  badge?: string;
  title: string;
  subtitle?: string;
  image: string;
  primaryCtaText?: string;
  primaryCtaAction?: string;
  secondaryCtaText?: string;
  secondaryCtaAction?: string;
}

export interface HardwareCategoryGroup {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
  items: string[];
}

export interface BusinessDivision {
  number: string;
  id: string;
  title: string;
  tagline: string;
  summary: string;
  highlights: string[];
  ctaText: string;
  ctaType: string;
}

export interface NavigationParams {
  page: 'home' | 'divisions' | 'about' | 'contact' | 'catalog';
  division?: string;
  category?: string;
  sub?: string;
  brand?: string;
  search?: string;
}
