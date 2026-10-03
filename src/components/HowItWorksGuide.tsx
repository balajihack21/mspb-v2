import React, { useState } from 'react';
import {
  HelpCircle,
  ShoppingBag,
  Cpu,
  ShieldCheck,
  Wrench,
  ArrowRight,
  FileCheck,
  Truck,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Info,
  CheckCircle,
  Building2
} from 'lucide-react';

interface HowItWorksGuideProps {
  onOpenInquiry: (inquiryType?: string, prefill?: string) => void;
}

export const HowItWorksGuide: React.FC<HowItWorksGuideProps> = ({ onOpenInquiry }) => {
  const [activeTab, setActiveTab] = useState<'buying' | 'selling' | 'services' | 'glossary'>('buying');
  const [expandedGlossary, setExpandedGlossary] = useState<string | null>(null);

  const glossaryItems = [
    {
      term: 'ITAD (IT Asset Disposition)',
      simpleMeaning: 'Safely retiring, data-wiping, and reselling or recycling used company computers & servers.',
      detail:
        'When companies upgrade laptops or data center servers, MSPB securely picks up the old equipment, wipes 100% of confidential files following government standards (NIST 800-88), and pays cash/credit for reusable assets while responsibly recycling broken units.'
    },
    {
      term: 'TPM (Third-Party Maintenance)',
      simpleMeaning: 'Affordable hardware repair and maintenance without buying expensive manufacturer warranty renewals.',
      detail:
        'Instead of paying expensive extended warranty fees to original manufacturers (like Dell, HPE, Cisco, or Lenovo), MSPB provides identical 24/7 technical support and rapid on-site spare part replacements at 40-70% lower cost.'
    },
    {
      term: 'SLA (Service Level Agreement)',
      simpleMeaning: 'A guaranteed time frame for our engineers to respond and fix hardware problems.',
      detail:
        'For example, a "4-Hour On-Site 24x7 SLA" means if a server hard drive fails at 2:00 AM on Sunday, an MSPB engineer arrives at your data center with a replacement part within 4 hours.'
    },
    {
      term: 'EOL / EOSL (End-of-Life / End-of-Service-Life)',
      simpleMeaning: 'Hardware models no longer sold or supported by the original maker.',
      detail:
        'When brands stop selling older servers or switches, MSPB continues to source genuine spare parts, upgrade memory/storage, and provide support so your systems can keep running smoothly.'
    },
    {
      term: 'BOM (Bill of Materials)',
      simpleMeaning: 'Your shopping list of hardware parts, model numbers, and quantities.',
      detail:
        'You can simply send us your Excel spreadsheet or list of required parts, and our Singapore desk will price every line item with stock availability.'
    },
    {
      term: 'MTP / MPO Fiber Cabling',
      simpleMeaning: 'High-density fiber optic cables carrying multiple high-speed data streams in one compact wire.',
      detail:
        'Used in enterprise data centers for connecting top-of-rack switches and high-speed storage without creating messy cable tangles.'
    },
    {
      term: 'UEN (Unique Entity Number)',
      simpleMeaning: 'Singapore Government Business Registration ID (MSPB UEN: 202350916Z).',
      detail:
        'A formal verification that MSPB Technologies is a legally registered Singapore company operating under Singapore commercial and corporate laws.'
    }
  ];

  return (
    <section id="how-it-works" className="py-14 sm:py-18 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Friendly Intro */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d32f2f] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100 mb-3">
            <Info className="w-3.5 h-3.5" />
            <span>Guide for First-Time Visitors & Clients</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a1a] tracking-tight">
            How MSPB Technologies Works — Plain & Simple
          </h2>
          <div className="w-14 h-1 bg-[#d32f2f] mx-auto mt-3" />
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
            Whether you are an IT Director, Procurement Officer, or first-time buyer, here is a clear guide on how we help your organization save budget, deploy infrastructure, and manage hardware lifecycles.
          </p>
        </div>

        {/* 4 Interactive Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => setActiveTab('buying')}
            className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'buying'
                ? 'bg-[#d32f2f] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>1. How to Buy Hardware & Request a Quote</span>
          </button>

          <button
            onClick={() => setActiveTab('selling')}
            className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'selling'
                ? 'bg-[#d32f2f] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <DollarSign className="w-4 h-4" />
            <span>2. How to Sell Excess IT Equipment</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'services'
                ? 'bg-[#d32f2f] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>3. Data Center & Support Services</span>
          </button>

          <button
            onClick={() => setActiveTab('glossary')}
            className={`px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'glossary'
                ? 'bg-[#d32f2f] text-white shadow-xs'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>4. Plain English Tech Glossary</span>
          </button>
        </div>

        {/* TAB CONTENT: 1. HOW TO BUY */}
        {activeTab === 'buying' && (
          <div className="bg-gray-50/80 rounded-2xl border border-gray-200 p-6 sm:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-wider">
                  B2B Direct Quoting (No Complex Checkout Required)
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  How Purchasing IT Hardware Works in 3 Simple Steps
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Because enterprise IT hardware involves specific voltage, rack rails, memory configurations, and warranty tiers, we provide fast direct quotes rather than retail shopping carts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {/* Step 1 */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs relative">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-[#d32f2f] font-black text-sm flex items-center justify-center mb-3">
                    1
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    Select or Describe Your Hardware
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Click <strong>"Request a Quote"</strong> across any division, or type in your required part numbers, model specifications, or bulk quantities.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs relative">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-[#d32f2f] font-black text-sm flex items-center justify-center mb-3">
                    2
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    Receive Fast B2B Quotation
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Our Singapore trading desk verifies stock across APAC, Europe, and Americas, returning official competitive pricing, warranty terms, and lead times.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-2xs relative">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-[#d32f2f] font-black text-sm flex items-center justify-center mb-3">
                    3
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-1">
                    Tested Dispatch & Delivery
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Every server, switch, and module undergoes rigorous bench diagnostics and anti-static packaging before international or domestic delivery.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-700">
                  <span className="font-bold text-gray-900 block">Need custom specifications or an unlisted part?</span>
                  We source hard-to-find components and legacy systems globally within 24–48 hours.
                </div>
                <button
                  onClick={() => onOpenInquiry('Request a Quote', 'Custom Hardware Sourcing Request')}
                  className="px-5 py-2.5 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold uppercase tracking-wider rounded transition cursor-pointer whitespace-nowrap"
                >
                  Request a Quote Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT: 2. HOW TO SELL */}
        {activeTab === 'selling' && (
          <div className="bg-gray-50/80 rounded-2xl border border-gray-200 p-6 sm:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-wider">
                  Asset Recovery & Buyback
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  How Companies Sell Their Surplus & Decommissioned Hardware
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Turn surplus inventory, off-lease laptops, and decommissioned data center racks into recovered budget with zero data security risk.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <span className="text-xs font-black text-[#d32f2f] block mb-1">STEP 1</span>
                  <h4 className="font-bold text-gray-900 text-xs mb-1">Submit Equipment List</h4>
                  <p className="text-[11px] text-gray-600">
                    Send your inventory list (laptops, servers, switches, drives) with approximate condition.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <span className="text-xs font-black text-[#d32f2f] block mb-1">STEP 2</span>
                  <h4 className="font-bold text-gray-900 text-xs mb-1">Fair Market Valuation</h4>
                  <p className="text-[11px] text-gray-600">
                    We calculate high-recovery resale value based on current global secondary markets.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <span className="text-xs font-black text-[#d32f2f] block mb-1">STEP 3</span>
                  <h4 className="font-bold text-gray-900 text-xs mb-1">Pickup & Data Sanitization</h4>
                  <p className="text-[11px] text-gray-600">
                    We collect the hardware and perform 100% certified data erasure (NIST 800-88 compliance).
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <span className="text-xs font-black text-[#d32f2f] block mb-1">STEP 4</span>
                  <h4 className="font-bold text-gray-900 text-xs mb-1">Payment & Certificate</h4>
                  <p className="text-[11px] text-gray-600">
                    Fast cash payout or credit balance plus official certificates of destruction/erasure.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-700">
                  <span className="font-bold text-gray-900 block">Have unused hardware taking up storage space?</span>
                  Get an initial estimate from our ITAD valuation team today.
                </div>
                <button
                  onClick={() => onOpenInquiry('Sell Your IT Equipment', 'Surplus Hardware Valuation')}
                  className="px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold uppercase tracking-wider rounded transition cursor-pointer whitespace-nowrap"
                >
                  Submit Equipment for Buyback
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT: 3. SERVICES EXPLAINED */}
        {activeTab === 'services' && (
          <div className="bg-gray-50/80 rounded-2xl border border-gray-200 p-6 sm:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-wider">
                  On-Site & Maintenance Capabilities
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  Data Center Deployment & Maintenance Explained
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  We bridge the gap between hardware supply and physical data center execution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                <div className="bg-white p-5 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
                    <Cpu className="w-4 h-4 text-[#d32f2f]" />
                    <span>Physical Data Center Deployment</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Our team physically mounts servers into server racks, runs neat fiber and Ethernet cables, connects power distribution units (PDUs), and tests every network link before going live.
                  </p>
                  <span className="text-[11px] text-gray-500 font-medium block">
                    Ideal for: Cloud providers, enterprise IT teams, colocation migrations.
                  </span>
                </div>

                <div className="bg-white p-5 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mb-2">
                    <ShieldCheck className="w-4 h-4 text-[#d32f2f]" />
                    <span>24x7 Multi-Vendor Maintenance (TPM)</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Instead of discarding working servers just because their 3-year warranty ended, MSPB provides 24x7 on-site repair, emergency parts replacement, and SLA support for Dell, HP, Cisco, and IBM.
                  </p>
                  <span className="text-[11px] text-gray-500 font-medium block">
                    Ideal for: Extending hardware lifespan, reducing operational expenditure.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB CONTENT: 4. TECH GLOSSARY */}
        {activeTab === 'glossary' && (
          <div className="bg-gray-50/80 rounded-2xl border border-gray-200 p-6 sm:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-wider">
                  Plain-Language Definitions
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-1">
                  Common Enterprise IT Terms Explained
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Click on any term below to view its simple meaning and real-world example.
                </p>
              </div>

              <div className="space-y-3">
                {glossaryItems.map((item) => {
                  const isOpen = expandedGlossary === item.term;
                  return (
                    <div
                      key={item.term}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden transition"
                    >
                      <button
                        onClick={() => setExpandedGlossary(isOpen ? null : item.term)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 cursor-pointer"
                      >
                        <div>
                          <span className="font-bold text-sm text-gray-900 block">
                            {item.term}
                          </span>
                          <span className="text-xs text-gray-600">
                            {item.simpleMeaning}
                          </span>
                        </div>
                        <div className="p-1 rounded-full bg-gray-100 text-gray-500">
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 bg-red-50/30 border-t border-gray-100 text-xs text-gray-700 leading-relaxed">
                          <p className="font-medium text-gray-800 mb-1">In Detail:</p>
                          <p>{item.detail}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
