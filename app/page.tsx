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
import RisksStatus from '@/components/sections/RisksStatus';
import Ask from '@/components/sections/Ask';
import FinancialProjections from '@/components/sections/FinancialProjections';
import Summary from '@/components/sections/Summary';

export default function Home() {
  return (
    <>
      <Sidebar />
      <MobileMenu />
      <main className="lg:ml-[280px] pt-16 lg:pt-0">
        <Hero />
        <WhatWeDo />
        <Market />
        <HowItWorks />
        <RevenueModel />
        <CapitalStructure />
        <Moat />
        <Team />
        <RisksStatus />
        <Ask />
        <FinancialProjections />
        <Summary />
      </main>
    </>
  );
}
