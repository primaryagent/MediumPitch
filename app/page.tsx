import Sidebar from '@/components/Sidebar';
import MobileMenu from '@/components/MobileMenu';
import Hero from '@/components/sections/Hero';
import WhatWeDo from '@/components/sections/WhatWeDo';
import Market from '@/components/sections/Market';
import Moat from '@/components/sections/Moat';
import GoToMarket from '@/components/sections/GoToMarket';
import HowItWorks from '@/components/sections/HowItWorks';
import RevenueModel from '@/components/sections/RevenueModel';
import Team from '@/components/sections/Team';
import CapitalStructure from '@/components/sections/CapitalStructure';
import WhatThisAchieves from '@/components/sections/WhatThisAchieves';
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
        <Moat />
        <GoToMarket />
        <HowItWorks />
        <RevenueModel />
        <Team />
        <CapitalStructure />
        <WhatThisAchieves />
        <Ask />
        <FinancialProjections />
        <Summary />
      </main>
    </>
  );
}
