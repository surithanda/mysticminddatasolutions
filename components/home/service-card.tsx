"use client";

import type { LucideIcon } from "lucide-react";
import { useState } from "react";

interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

interface ServiceCardProps {
  service: Service;
  /** Used to compute dynamic height – keeps cards aligned */
  index: number;
  total: number;
}

/* -------------------------------------------------------------
   ServiceCard – same visual, now fully responsive
   ------------------------------------------------------------- */
export function ServiceCard({ service, index, total }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  /* -------------------------------------------------------------
     Dynamic height classes – ensures all cards in a row have equal height
     ------------------------------------------------------------- */
  const heightClass = `
    h-full min-h-[220px] 
    xs:min-h-[240px] 
    sm:min-h-[260px] 
    md:min-h-[280px] 
    lg:min-h-[300px] 
    xl:min-h-[320px]
  `;

  return (
    <div
      className={`
        ${service.color} 
        rounded-2xl p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 
        cursor-pointer transform transition-all duration-300 
        hover:scale-[1.03] hover:shadow-2xl 
        flex flex-col justify-between group 
        relative z-10 ${heightClass}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div>
        {/* Icon */}
        <div className="mb-3 xs:mb-4 sm:mb-5 lg:mb-6 inline-block p-2 xs:p-2.5 sm:p-3 bg-black/10 rounded-lg">
          <Icon
            className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-black"
            strokeWidth={2}
          />
        </div>

        {/* Title */}
       <h3 className="text-lg xs:text-lg sm:text-xl lg:text-xl xl:text-xl font-semibold text-black dark:text-black mb-2 xs:mb-3 tracking-wide">
  {service.title}
</h3>


        {/* Description */}
       <p className="text-black dark:text-black text-sm xs:text-base sm:text-lg lg:text-lg xl:text-xl leading-relaxed">
  {service.description}
</p>

      </div>

      {/* Learn More */}
      <div
        className={`
          inline-flex items-center gap-2 text-gray-900 font-semibold 
          text-sm xs:text-base sm:text-lg 
          transition-all duration-300
          ${isHovered ? "translate-x-2" : ""}
        `}
      >
        Learn more
        <svg
          className="w-4 h-4 xs:w-5 xs:h-5 sm:w-5 sm:h-5 transition-transform stroke-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
}