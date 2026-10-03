import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'dark',
}) => {
  const iconDimensions =
    size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  const textClass =
    size === 'sm'
      ? 'text-lg'
      : size === 'lg'
      ? 'text-2xl'
      : 'text-xl sm:text-2xl';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none cursor-pointer ${className}`}>
      {/* Clean Red & Black Tech Icon */}
      <div className={`${iconDimensions} flex items-center justify-center flex-shrink-0`}>
        <svg
          viewBox="0 0 36 36"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="36" height="36" rx="6" fill="#d32f2f" />
          <path
            d="M8 26V10L14 18L20 10V26"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23 14C23 11.79 24.79 10 27 10C29.21 10 31 11.79 31 14C31 16.21 29.21 18 27 18H23V26"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1 leading-none">
          <span
            className={`font-black tracking-tight ${
              variant === 'light' ? 'text-white' : 'text-[#222222]'
            } ${textClass}`}
          >
            MSPB
          </span>
          <span className="font-bold text-[#d32f2f] text-sm sm:text-base tracking-normal">
            TECHNOLOGIES
          </span>
        </div>
      </div>
    </div>
  );
};
