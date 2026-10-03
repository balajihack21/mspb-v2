import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Send,
  Clock,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface ContactPageProps {
  initialInquiryType?: string;
  initialHardwarePrefill?: string;
  onNavigateHome?: () => void;
  onNavigateToCatalog?: (cat?: string) => void;
  onNavigateToDivisions?: (divNum?: string) => void;
  onNavigate?: (params: { page: 'home' | 'divisions' | 'catalog' | 'about' | 'contact'; division?: string; category?: string }) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialInquiryType = 'Request a Quote',
  initialHardwarePrefill = '',
  onNavigateHome,
}) => {
  const targetEmail = 'contact@mspb-tech.com';
  const secondaryEmail = 'ashikerogan@mspb-tech.com';

  const [inquiryType, setInquiryType] = useState(initialInquiryType);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState(initialHardwarePrefill);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialHardwarePrefill) setMessage(initialHardwarePrefill);
  }, [initialHardwarePrefill]);

  useEffect(() => {
    if (initialInquiryType) setInquiryType(initialInquiryType);
  }, [initialInquiryType]);

  const quoteSubject = `[Inquiry / Quote] ${inquiryType} - ${name}${company ? ` (${company})` : ''}`;
  const quoteBody = `CONTACT & QUOTE REQUEST
----------------------------------------
To: ${targetEmail}
Customer Name: ${name}
Work Email: ${email}
Phone / WhatsApp: ${phone || 'Not provided'}
Company: ${company || 'Individual / Not specified'}
Inquiry Type: ${inquiryType}

Requirements / Hardware BOM:
${message}

Timestamp: ${new Date().toLocaleString()}
----------------------------------------
Submitted via MSPB Technologies Portal`;

  const mailtoUrl = `mailto:${targetEmail}?cc=${encodeURIComponent(secondaryEmail)}&subject=${encodeURIComponent(quoteSubject)}&body=${encodeURIComponent(quoteBody)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          inquiryType,
          message,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Unable to submit quote request right now.');
      }

      setSubmitted(true);
    } catch (err) {
      console.warn('API route log:', err);
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

  return (
    <div className="min-h-screen bg-gray-50/50 pb-16">
      {/* Top Breadcrumb & Header */}
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
            <span className="font-semibold text-gray-900">Contact Us</span>
          </nav>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Contact MSPB Technologies
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Get in touch with our team in Singapore for quotes, BOM pricing, or technical inquiries.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
              <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full mb-4 inline-block">
                Singapore Headquarters
              </span>
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                MSPB Technologies Pte Ltd
              </h2>

              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d32f2f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900 block">Registered Office</span>
                    <span>67 Ubi Crescent, #04-05</span>
                    <span className="block text-gray-500">Singapore 408560</span>
                    <span className="block text-xs text-gray-400 mt-0.5">UEN: {siteConfig.uen}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-gray-100">
                  <Phone className="w-5 h-5 text-[#d32f2f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900 block">Phone & WhatsApp</span>
                    <a href="tel:+6584363635" className="hover:text-[#d32f2f] block font-mono">
                      +65 84363635
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-gray-100">
                  <Mail className="w-5 h-5 text-[#d32f2f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900 block">Direct Quotes & Inquiries Inbox</span>
                    <a href={`mailto:${targetEmail}`} className="text-[#d32f2f] font-semibold block hover:underline">
                      {targetEmail}
                    </a>
                    <a href={`mailto:${secondaryEmail}`} className="text-gray-700 font-medium block hover:text-[#d32f2f] hover:underline text-xs mt-0.5">
                      {secondaryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-gray-100">
                  <Clock className="w-5 h-5 text-[#d32f2f] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900 block">Operating Hours</span>
                    <span>Monday – Friday: 9:00 AM – 6:00 PM (SGT)</span>
                    <span className="block text-xs text-gray-400">24/7 on-call dispatch for active SLA clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8">
              {submitError ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-2">
                    <Mail className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Quote Request Not Sent
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    {submitError}
                  </p>
                  <a
                    href={mailtoUrl}
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold rounded-lg uppercase tracking-wider transition cursor-pointer shadow-xs"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Send by Email Instead</span>
                  </a>
                </div>
              ) : submitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Quote Request Dispatched
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-gray-900">{name}</span>. Your quote request has been prepared and routed to:
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-red-50 text-[#d32f2f] border border-red-200 rounded-lg text-xs font-bold font-mono">
                    <Mail className="w-4 h-4" />
                    <span>{targetEmail}</span>
                  </div>

                  <div className="pt-3 space-y-2 max-w-sm mx-auto">
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

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setMessage('');
                        setCopied(false);
                      }}
                      className="px-5 py-2.5 bg-gray-900 hover:bg-black text-white text-xs font-semibold rounded-lg transition cursor-pointer"
                    >
                      Send Another Quote Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-lg font-bold text-gray-900 mb-1">
                    Send Us a Message / Quote Request
                  </h2>
                  <p className="text-xs text-gray-500 mb-4">
                    Fill in your details below and your request will be emailed directly to <span className="font-semibold text-gray-700">{targetEmail}</span>.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#d32f2f] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#d32f2f] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+65 ..."
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#d32f2f] focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Company / Organization"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#d32f2f] focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#d32f2f] focus:bg-white cursor-pointer"
                    >
                      <option value="Request a Quote">Request a Quote</option>
                      <option value="Sell IT Equipment / ITAD">Sell IT Equipment / ITAD</option>
                      <option value="Data Center & Cabling">Data Center & Cabling</option>
                      <option value="Maintenance & SLA Support">Maintenance & SLA Support</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Hardware Details / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Specify product models, quantities, or project details..."
                      className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-hidden focus:border-[#d32f2f] focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs font-bold rounded-lg transition shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Sending...' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
