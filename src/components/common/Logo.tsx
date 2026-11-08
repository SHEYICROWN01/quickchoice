import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  size = 'md'
}) => {
  const isDark = variant === 'dark' || variant === 'white';

  const dimensions = {
    sm: 'h-8 sm:h-9 max-w-[160px]',
    md: 'h-9 sm:h-11 md:h-12 max-w-[220px]',
    lg: 'h-11 sm:h-13 md:h-14 max-w-[260px]',
    xl: 'h-14 sm:h-16 md:h-20 max-w-[320px]'
  };

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Official MARKDRE Logo Image without extra text */}
      <div
        className={`relative shrink-0 flex items-center justify-center transition-transform duration-200 hover:scale-102 ${
          isDark
            ? 'bg-white rounded-lg p-1.5 shadow-sm border border-white/20'
            : 'rounded-md'
        }`}
      >
        <img
          src="/images/mylogo.png"
          alt="MARKDRE Wholesale & Retail"
          className={`${dimensions[size]} w-auto object-contain drop-shadow-xs`}
          onError={(e) => {
            const target = e.currentTarget;
            target.onerror = null;
            target.src = '/src/assets/images/mylogo.png';
          }}
        />
      </div>
    </div>
  );
};
