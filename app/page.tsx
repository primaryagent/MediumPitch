'use client';

import Sidebar from '@/components/Sidebar';
import MobileMenu from '@/components/MobileMenu';
import Hero from '@/components/sections/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Market from '@/components/sections/Market';
import HowItWorks from '@/components/sections/HowItWorks';
import RevenueModel from '@/components/sections/RevenueModel';
import CapitalStructure from '@/components/sections/CapitalStructure';
import Moat from '@/components/sections/Moat';
import Team from '@/components/sections/Team';
import GoToMarket from '@/components/sections/GoToMarket';
import GrowthModel from '@/components/sections/GrowthModel';
import WhatThisAchieves from '@/components/sections/WhatThisAchieves';
import Ask from '@/components/sections/Ask';

export default function Home() {
  return (
    <>
      <Sidebar />
      <MobileMenu />
      
      {/* PDF Export Button - Fixed position, visible on screen only */}
      <button
        onClick={() => window.print()}
        className="fixed bottom-8 right-8 z-50 px-6 py-3 bg-[#F7931A] hover:bg-[#e68915] text-white font-semibold rounded-lg shadow-lg transition-all duration-200 hover:scale-105 print:hidden flex items-center gap-2"
        aria-label="Export pitch deck as PDF"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
          />
        </svg>
        Export PDF
      </button>
      
      <main className="lg:ml-[280px] pt-16 lg:pt-0">
        <Hero />
        <WhatWeDo />
        <Market />
        <HowItWorks />
        <RevenueModel />
        <CapitalStructure />
        <Moat />
        <Team />
        <GoToMarket />
        <GrowthModel />
        <Ask />
        <WhatThisAchieves />
      </main>
    </>
  );
}
