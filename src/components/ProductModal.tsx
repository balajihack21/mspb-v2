import React from 'react';
import { Product } from '../types';
import { X, Server, Cpu, HardDrive, Zap, ShieldCheck, Mail, Send, CheckCircle2 } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestQuote: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 z-30 p-2 sm:p-2.5 text-gray-700 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-full transition shadow-xs flex items-center justify-center cursor-pointer"
          aria-label="Close modal"
          title="Close window"
        >
          <X className="w-5 h-5 text-gray-800" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          {/* Left: Product Image */}
          <div className="sm:w-1/2 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl border border-gray-100">
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="max-h-56 object-contain"
            />
            {product.condition && (
              <span className="mt-4 px-3 py-1 bg-gray-900 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                Condition: {product.condition}
              </span>
            )}
          </div>

          {/* Right: Specs & Info */}
          <div className="sm:w-1/2 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-[#d32f2f] uppercase tracking-wider">
                {product.brand} • {product.category}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">
                {product.name}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications */}
              <div className="space-y-2 bg-gray-50 p-3.5 rounded-lg border border-gray-200/80 text-xs text-gray-700 mb-6">
                {product.processor && (
                  <div className="flex items-start gap-2">
                    <Cpu className="w-4 h-4 text-[#d32f2f] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">Processor:</span> {product.processor}
                    </div>
                  </div>
                )}
                {product.memory && (
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-[#d32f2f] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">Memory:</span> {product.memory}
                    </div>
                  </div>
                )}
                {product.storage && (
                  <div className="flex items-start gap-2">
                    <HardDrive className="w-4 h-4 text-[#d32f2f] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-gray-900">Storage:</span> {product.storage}
                    </div>
                  </div>
                )}
                <div className="flex items-start gap-2">
                  <Server className="w-4 h-4 text-[#d32f2f] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Form Factor:</span> {product.formFactor}
                  </div>
                </div>
              </div>

              {/* Quality & Warranty badge */}
              <div className="flex items-center gap-2 text-[11px] text-gray-500 mb-4">
                <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Fully Tested in Singapore Lab • 30-90 Day Warranty</span>
              </div>
            </div>

            {/* Action buttons (Pure Quote / Inquiry) */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  onRequestQuote(product);
                  onClose();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#d32f2f] hover:bg-[#b71c1c] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4" />
                <span>Request Quote for this Model</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
