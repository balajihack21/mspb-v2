import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Package, Mail, User, Phone, Building2, Copy, Check, ExternalLink } from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface QuoteInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInquiryType?: string;
  defaultHardwareDetails?: string;
}

export const QuoteInquiryModal: React.FC<QuoteInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultInquiryType = 'Request a Quote',
  defaultHardwareDetails = '',
}) => {
  const inquiryCategories = [
    'Request a Quote',
    'Sell Your IT Equipment (ITAD)',
    'Data Center & Cabling Project',
    'Maintenance & SLA Support',
    'General Inquiry',
  ];

  const targetEmail = 'contact@mspb-tech.com';
  const ccEmail = 'ashikerogan@mspb-tech.com';

  const [inquiryCategory, setInquiryCategory] = useState(defaultInquiryType);
  const [hardwareDetails, setHardwareDetails] = useState(defaultHardwareDetails);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (defaultHardwareDetails) {
      setHardwareDetails(defaultHardwareDetails);
    }
  }, [defaultHardwareDetails]);

  useEffect(() => {
    if (defaultInquiryType) {
      setInquiryCategory(defaultInquiryType);
    }
  }, [defaultInquiryType]);

  if (!isOpen) return null;

  const quoteSubject = `[Quote Request] ${inquiryCategory} - ${name || 'Prospective Client'}${company ? ` (${company})` : ''}`;
  const quoteBody = `NEW QUOTE / INQUIRY DETAILS
----------------------------------------
To: ${targetEmail}
Customer Name: ${name}
Email Address: ${email}
Phone / WhatsApp: ${phone || 'Not provided'}
Company: ${company || 'Individual / Not specified'}
Category: ${inquiryCategory}

Hardware / Requirements / BOM:
${hardwareDetails}

Timestamp: ${new Date().toLocaleString()}
----------------------------------------
Submitted via MSPB Technologies Portal`;

  const mailtoUrl = `mailto:${targetEmail}?cc=${encodeURIComponent(ccEmail)}&subject=${encodeURIComponent(quoteSubject)}&body=${encodeURIComponent(quoteBody)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !hardwareDetails.trim()) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          inquiryCategory,
          hardwareDetails,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to submit quote request right now.');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.warn('API submission log:', err);
      setSubmitError(err instanceof Error ? err.message : 'Unable to submit quote request right now.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopySummary = () => {
    navigator.clipboard.writeText(quoteBody);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setHardwareDetails('');
    setCopied(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-xl max-w-lg w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-1.5 text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full transition cursor-pointer"
          aria-label="Close modal"
          title="Close window"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {isSubmitted ? (
          <div className="p-6 sm:p-8 text-center py-8 space-y-4">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900">Quote Request Auto-Mailed</h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-gray-900">{name}</span>. Your quote request and specifications have been automatically emailed to:
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-[#d32f2f] border border-red-200 rounded-lg text-xs font-bold font-mono mt-2">
                <Mail className="w-3.5 h-3.5" />
                <span>{targetEmail}</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2 pt-2 max-w-sm mx-auto text-left">
              <a
                href={mailtoUrl}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold rounded-lg uppercase tracking-wider transition cursor-pointer shadow-xs text-center"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Email App ({targetEmail})</span>
              </a>

              <button
                type="button"
                onClick={handleCopySummary}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-lg transition cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Copied Quote Details to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-gray-600" />
                    <span>Copy Quote Details</span>
                  </>
                )}
              </button>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs text-gray-600 max-w-sm mx-auto text-left">
              <p className="font-semibold text-gray-800">Singapore HQ Desk:</p>
              <p>Phone: +65 84363635 • Official Inboxes: {targetEmail}, {ccEmail}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="w-full max-w-sm mx-auto py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-bold rounded-lg uppercase tracking-wider transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 sm:p-7">
            {/* Header */}
            <div className="mb-5 pr-8">
              <span className="text-[11px] font-bold text-[#d32f2f] uppercase tracking-wider">
                {inquiryCategory}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-0.5">
                Request a Quote
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Quotes are processed and forwarded directly to <span className="font-medium text-gray-700">{targetEmail}</span>.
              </p>
            </div>

            {submitError ? (
              <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                {submitError}
              </div>
            ) : null}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Inquiry Category (Dropdown) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Inquiry Category
                </label>
                <select
                  value={inquiryCategory}
                  onChange={(e) => setInquiryCategory(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:border-[#d32f2f] focus:ring-1 focus:ring-[#d32f2f] focus:outline-hidden text-gray-700"
                >
                  {inquiryCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hardware / Requirement (Required) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Equipment / Part Number / Requirement <span className="text-[#d32f2f]">*</span>
                </label>
                <div className="relative">
                  <Package className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <textarea
                    rows={2}
                    required
                    placeholder="e.g. Dell PowerEdge R750 (Qty: 2), Cisco C9300-48P, or project requirements..."
                    value={hardwareDetails}
                    onChange={(e) => setHardwareDetails(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:border-[#d32f2f] focus:ring-1 focus:ring-[#d32f2f] focus:outline-hidden resize-none"
                  />
                </div>
              </div>

              {/* Name & Email (Required) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Your Name <span className="text-[#d32f2f]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:border-[#d32f2f] focus:ring-1 focus:ring-[#d32f2f] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Business Email <span className="text-[#d32f2f]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:border-[#d32f2f] focus:ring-1 focus:ring-[#d32f2f] focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Phone / WhatsApp & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Phone / WhatsApp <span className="text-[#d32f2f]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+65 8436 3635"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:border-[#d32f2f] focus:ring-1 focus:ring-[#d32f2f] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Company <span className="text-gray-400 font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Company Ltd"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:border-[#d32f2f] focus:ring-1 focus:ring-[#d32f2f] focus:outline-hidden"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs sm:text-sm font-bold rounded-lg uppercase tracking-wider transition disabled:opacity-50 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Sending Request...' : 'Submit Quote Request'}
                </button>
                <p className="text-[11px] text-gray-400 text-center mt-2">
                  Guaranteed response within 2–4 business hours • Singapore Desk
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
