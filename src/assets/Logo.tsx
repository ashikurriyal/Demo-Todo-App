/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

export const Logo: React.FC<LogoProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="none"
      // 2. Apply the className here so Tailwind works
      className={className} 
      {...props}
    >
      <defs>
        <linearGradient
          id="logo_gradient"
          x1="20"
          y1="20"
          x2="236"
          y2="236"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>

      <rect
        width="256"
        height="256"
        rx="60"
        fill="url(#logo_gradient)"
        opacity="0.2"
      />

      <path
        d="M178.8 90.8c3.1-3.1 8.2-3.1 11.3 0 3.1 3.1 3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0l-40-40c-3.1-3.1-3.1-8.2 0-11.3 3.1-3.1 8.2-3.1 11.3 0L104.5 165l74.3-74.2z"
        fill="url(#logo_gradient)"
        stroke="url(#logo_gradient)"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle
        cx="190"
        cy="60"
        r="12"
        fill="url(#logo_gradient)"
        opacity="0.8"
      />
    </svg>
  );
};

export default Logo;