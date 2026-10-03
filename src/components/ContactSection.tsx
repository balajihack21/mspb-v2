import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, Send, Building, Globe } from 'lucide-react';
import { siteConfig } from '../data/siteData';

interface ContactSectionProps {
  initialInquiryType?: string;
  initialHardwarePrefill?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialInquiryType = 'General Inquiry',
  initialHardwarePrefill = '',
}) => {
  const [inquiryType, setInquiryType] = useState(initialInquiryType);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('Singapore');
  const [hardwareRequirement, setHardwareRequirement] = useState(initialHardwarePrefill);
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialInquiryType) setInquiryType(initialInquiryType);
    if (initialHardwarePrefill) setHardwareRequirement(initialHardwarePrefill);
  }, [initialInquiryType, initialHardwarePrefill]);

  const inquiryTypes = [
    'Request a Quote',
    'Sell Your IT Equipment',
    'Data Center Project',
    'IT Asset Disposition (ITAD)',
    'Maintenance & SLA Support',
    'General Inquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
      setErrorMsg('Please fill in all required fields marked with *');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setHardwareRequirement('');
      setMessage('');
    }, 600);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-widest bg-red-50 px-3 py-1 rounded-full border border-red-100">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight mt-3">
            Contact MSPB Technologies
          </h2>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto mt-3" />
          <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
            Reach out to our Singapore headquarters for hardware quotation, international sourcing, data center infrastructure scopes, or third-party maintenance contracts.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Company Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-wider">Singapore Headquarters</span>
              <h3 className="text-2xl font-extrabold text-[#222222] mt-1">
                {siteConfig.companyName}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                UEN: {siteConfig.uen} • Singapore Registered Entity
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-600">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d32f2f] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-gray-900 block">Registered & Operating Address:</span>
                  <p className="text-gray-700">
                    67 Ubi Crescent
                    <br />
                    #04-05
                    <br />
                    Singapore 408560
                  </p>
                </div>
              </div>

              {/* Direct Phone / Mobile */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d32f2f] flex-shrink-0" />
                <div>
                  <span className="font-semibold text-gray-900">Direct Phone / WhatsApp:</span>{' '}
                  <a href="tel:+6584363635" className="hover:text-[#d32f2f] transition-colors font-medium">
                    +65 84363635
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#d32f2f] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <div>
                    <span className="font-semibold text-gray-900">Trading & General:</span>{' '}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-[#d32f2f] transition-colors font-medium text-xs sm:text-sm"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                  {siteConfig.contact.secondaryEmail && (
                    <div>
                      <span className="font-semibold text-gray-900">Direct Trading Desk:</span>{' '}
                      <a
                        href={`mailto:${siteConfig.contact.secondaryEmail}`}
                        className="hover:text-[#d32f2f] transition-colors font-medium text-xs sm:text-sm"
                      >
                        {siteConfig.contact.secondaryEmail}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Regional Coverage Highlights */}
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs space-y-2">
              <span className="font-bold text-gray-800 uppercase tracking-wider block">
                Regional Logistics & Field Support:
              </span>
              <p className="text-gray-600 leading-relaxed">
                Singapore • Malaysia • India • Japan • Australia • New Zealand • Southeast Asia • Europe • Middle East • North America • South America
              </p>
            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center space-x-3">
              {/* WhatsApp Button */}
              <a
                href={siteConfig.contact.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.599 2.669-.699c.971.53 1.77.83 2.791.83 3.181 0 5.768-2.587 5.768-5.766.001-3.18-2.585-5.767-5.768-5.767zm3.364 8.163c-.144.405-.837.774-1.17.825-.311.05-.712.072-2.312-.592-1.844-.764-3.003-2.658-3.096-2.78-.091-.125-.745-.989-.745-1.888 0-.898.471-1.341.639-1.523.167-.182.366-.228.488-.228.122 0 .244.001.35.006.113.005.263-.043.411.314.153.371.52 1.272.565 1.365.045.093.076.201.015.324-.061.123-.092.2-.183.308-.091.107-.193.24-.275.323-.092.091-.187.19-.08.374.106.183.473.78 1.013 1.261.696.621 1.282.814 1.465.905.183.092.29.077.397-.046.107-.123.457-.533.58-.716.121-.183.244-.153.41-.092.168.061 1.066.503 1.249.595.183.091.305.137.35.213.046.077.046.444-.098.849z"/>
                </svg>
              </a>

              {/* LinkedIn Button */}
              <a
                href={siteConfig.contact.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                aria-label="LinkedIn"
                title="LinkedIn Profile"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.46 1.46 0 1 0 0-2.92 1.46 1.46 0 0 0 0 2.92M7.85 18.5V10.13H5.06v8.37h2.79z" />
                </svg>
              </a>

              {/* Instagram Button */}
              <a
                href={siteConfig.contact.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-[#E4405F] text-white flex items-center justify-center hover:opacity-90 transition-opacity shadow-xs"
                aria-label="Instagram"
                title="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Quote Form */}
          <div className="lg:col-span-7 bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8">
            {submitted ? (
              <div className="p-8 bg-green-50 border border-green-200 rounded-lg text-green-800 animate-in fade-in text-center space-y-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-xl text-green-900">Thank you for your inquiry!</h4>
                <p className="text-sm text-green-700 max-w-md mx-auto leading-relaxed">
                  We have received your requirements at <span className="font-semibold text-gray-900">{siteConfig.displayName}</span>. Our specialist will respond promptly with details and commercial terms.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-green-700 text-white rounded hover:bg-green-800 transition cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded">
                    {errorMsg}
                  </div>
                )}

                {/* Inquiry Type Tabs */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Select Inquiry Purpose *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {inquiryTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setInquiryType(type)}
                        className={`px-2.5 py-2 text-xs font-semibold rounded border transition text-left cursor-pointer ${
                          inquiryType === type
                            ? 'bg-red-50 border-[#d32f2f] text-[#d32f2f] ring-1 ring-red-500/20'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name section */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Contact Name *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First Name *"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                        setErrorMsg('');
                      }}
                      required
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded focus:border-[#d32f2f] focus:outline-hidden transition"
                    />
                    <input
                      type="text"
                      placeholder="Last Name *"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                        setErrorMsg('');
                      }}
                      required
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded focus:border-[#d32f2f] focus:outline-hidden transition"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrorMsg('');
                      }}
                      required
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded focus:border-[#d32f2f] focus:outline-hidden transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+65 ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded focus:border-[#d32f2f] focus:outline-hidden transition"
                    />
                  </div>
                </div>

                {/* Company & Country */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company / Organization"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded focus:border-[#d32f2f] focus:outline-hidden transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Country / Region
                    </label>
                    <input
                      type="text"
                      placeholder="Singapore, Malaysia, Australia, etc."
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded focus:border-[#d32f2f] focus:outline-hidden transition"
                    />
                  </div>
                </div>

                {/* Hardware requirement / Part numbers */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Equipment Details / Part Numbers / Project Scope
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dell PowerEdge R750 (Qty: 4) / Cisco Switches / ITAD Pickup / SLA Renewal"
                    value={hardwareRequirement}
                    onChange={(e) => setHardwareRequirement(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded focus:border-[#d32f2f] focus:outline-hidden transition"
                  />
                </div>

                {/* Comment / Message field */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Comment or Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide additional details regarding configurations, timelines, delivery locations..."
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      setErrorMsg('');
                    }}
                    required
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded focus:border-[#d32f2f] focus:outline-hidden transition resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#d32f2f] hover:bg-[#b71c1c] rounded transition-colors disabled:opacity-50 cursor-pointer shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
