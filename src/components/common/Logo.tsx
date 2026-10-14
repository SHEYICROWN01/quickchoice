import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'white';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showText = true,
  size = 'md'
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: { main: 'text-base', sub: 'text-[9px]' },
    md: { main: 'text-xl', sub: 'text-[11px]' },
    lg: { main: 'text-2xl', sub: 'text-[12px]' }
  };

  const isDarkVariant = variant === 'dark' || variant === 'white';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Exact Official Quick Choice Vector Mark */}
      <div className={`relative shrink-0 ${iconSizes[size]} transition-transform duration-200 hover:scale-105`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Deep Purple Base Container */}
          <rect width="100" height="100" rx="22" fill="#211078" />
          
          {/* White Outer Border Ring */}
          <rect
            x="3.5"
            y="3.5"
            width="93"
            height="93"
            rx="18.5"
            stroke="#FFFFFF"
            strokeWidth="5"
          />

          {/* Magenta Accent Block */}
          <rect x="22" y="22" width="31" height="56" rx="4" fill="#EC078A" />

          {/* Stylized Modern Q Top-Right Path */}
          <path
            d="M 28 35 H 64 C 71 35 76 40 76 47 V 49 C 76 52 73 55 69 55 H 41 C 34 55 30 59 30 65 V 65 C 30 71 35 75 42 75 H 52"
            stroke="#FFFFFF"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Diagonal Pill Tail */}
          <line
            x1="55"
            y1="52"
            x2="72"
            y2="69"
            stroke="#FFFFFF"
            strokeWidth="11"
            strokeLinecap="round"
          />

          {/* 'choice' wordmark inside magenta block */}
          <text
            x="24"
            y="74"
            fill="#FFFFFF"
            fontSize="10"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="800"
            letterSpacing="-0.5px"
          >
            choice
          </text>
        </svg>
      </div>

      {/* Brand Logotype Typography */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className={`font-extrabold tracking-tight flex items-baseline gap-1 ${textSizes[size].main}`}>
            <span className={isDarkVariant ? 'text-white' : 'text-[#211078]'}>
              Quick
            </span>
            <span className="text-[#EC078A]">
              Choice
            </span>
          </div>
          <span
            className={`font-semibold tracking-wider uppercase mt-0.5 ${textSizes[size].sub} ${
              isDarkVariant ? 'text-white/70' : 'text-[#68677A]'
            }`}
          >
            Telecommunications
          </span>
        </div>
      )}
    </div>
  );
};
