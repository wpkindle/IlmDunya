import React from 'react';

/**
 * BrandLogo component for IlmiDunya Pakistan.
 * Renders the authentic logo artwork with responsive sizing.
 *
 * @param {'light' | 'dark' | 'icon'} variant - Color scheme
 * @param {'xs' | 'sm' | 'md' | 'lg'} size - Overall dimension scaling
 * @param {boolean} withBadge - Whether to display the "Pakistan" badge
 * @param {string} className - Optional custom class name
 */
export default function BrandLogo({
  variant = 'light',
  size = 'md',
  withBadge = false,
  className = ''
}) {
  const isDark = variant === 'dark';
  const isIconOnly = variant === 'icon';

  const heightClasses = {
    xs: 'h-6 sm:h-7',
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-10',
    lg: 'h-9 sm:h-12'
  };

  const currentHeightClass = heightClasses[size] || heightClasses.md;

  if (isIconOnly) {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        <img
          src="/icon.svg"
          alt="IlmiDunya Icon"
          className={`${currentHeightClass} w-auto object-contain select-none transition-transform group-hover:scale-105`}
        />
      </div>
    );
  }

  const logoSrc = isDark ? '/logo-dark.svg' : '/logo.svg';

  return (
    <div className={`inline-flex items-center gap-2 select-none shrink-0 ${className}`}>
      <img
        src={logoSrc}
        alt="IlmiDunya Pakistan"
        className={`${currentHeightClass} w-auto max-w-[140px] sm:max-w-none object-contain select-none transition-transform group-hover:scale-[1.02]`}
      />
      {withBadge && (
        <span
          className={`hidden sm:inline-block px-1.5 py-0.5 rounded text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-wider ${
            isDark
              ? 'bg-[#c25d33] text-white border border-[#c25d33]/50 shadow-xs'
              : 'bg-[#c25d33] text-white shadow-2xs'
          }`}
        >
          Pakistan
        </span>
      )}
    </div>
  );
}
