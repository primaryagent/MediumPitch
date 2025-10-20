export default function Team() {
  return (
    <section id="team" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">08</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          Team
        </h2>
        
        <div className="space-y-8">
          {/* Marc Dumpff */}
          <div className="p-6 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold mb-2">Marc Dumpff</h3>
            <p className="text-lg text-[#F7931A] mb-4">CEO & Capital Markets</p>
            <p className="text-base text-white/70 leading-normal">
              Founded hedge fund in Liechtenstein at age 20. Expanded advisory/management business in Hong Kong: HK$1B+ shared capital. Developed proprietary futures trading algorithms for global clientele. Collaborated with sovereign debt issuers in Africa to structure successful financial instruments. Expertise: capital raising, institutional distribution, and algorithmic trading systems.
            </p>
          </div>
          
          {/* Evan Kalimtzis */}
          <div className="p-6 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold mb-2">Evan Kalimtzis</h3>
            <p className="text-lg text-[#F7931A] mb-4">Chief Risk Officer & Securitization</p>
            <p className="text-base text-white/70 leading-normal">
              Pioneered CMO/CDO trading. Founded JP Morgan CIO's SPAR group: managed $400B investment portfolio. Established risk management, capital efficiency measurement, and ALM framework at institutional scale. Led $550M Glencore-backed multi-strategy credit hedge fund (single-name bonds, loans, structured credit products, derivatives). Currently: Senior Executive Officer & Licensed Director, CLI Middle East (ADGM).
            </p>
          </div>
          
          {/* Alexander Watanabe */}
          <div className="p-6 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold mb-2">Alexander Watanabe</h3>
            <p className="text-lg text-[#F7931A] mb-4">Chief Product Officer & Cross-Asset Lending</p>
            <p className="text-base text-white/70 leading-normal">
              Engineered cross-asset lending framework. Led AI/ML forecasting at Suntory for global strategic initiatives. VP of Product Management, Robotics Engineer, Technology & Automation Lead. Developed recommendation systems and serverless deployment infrastructure (PyTorch, AWS Lambda). Global experience: USA, India, Japan, Europe.
            </p>
          </div>
          
          {/* Korneliusz Caputa */}
          <div className="p-6 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold mb-2">Korneliusz Caputa</h3>
            <p className="text-lg text-[#F7931A] mb-4">Chief Technology Officer & Financial Infrastructure</p>
            <p className="text-base text-white/70 leading-normal">
              10+ years building financial infrastructure. Developed trade execution DSL and risk management language for institutional trading systems. Full-stack high-assurance software developer. Founder: Makers' Den (software development company). Specializes: TypeScript, Node.js, AWS, Web3. MSc Computer Science: category theory, algorithms, functional programming.
            </p>
          </div>
          
          {/* James Alder */}
          <div className="p-6 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold mb-2">James Alder</h3>
            <p className="text-lg text-[#F7931A] mb-4">Chief Operating Officer & Regulatory Strategy</p>
            <p className="text-base text-white/70 leading-normal">
              Founded Cayman Islands-based Forex trading fund. Established Liechtenstein fund structure with EU regulatory compliance. 15+ years building operational infrastructure for cross-border financial products: fund administration, SPV structuring, multi-jurisdictional regulatory navigation, and offshore entity management. Managed regulatory relationships with CIMA (Cayman), FMA (Liechtenstein), and EU supervisory authorities.
            </p>
          </div>
          
          <div className="mt-12 space-y-6">
            <p className="text-lg text-white/70 leading-normal">
              Bilateral perspective: Been both lenders (Evan at JPM) and borrowers (Marc negotiating credit lines). Understand lender concerns from experience.
            </p>
            
            <p className="text-lg text-white/70 leading-normal">
              Founders taking modest salaries: $20K/month each. All-in commitment. 4-year vesting, 1-year cliff.
            </p>
          </div>
          
          {/* Key Hires */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Key hires in progress:</h3>
            <ul className="space-y-3">
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>Chief Loan Officer: Peter Howard (finalizing, bio to be added when locked in)</span>
              </li>
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>Warehouse President: recruiting for post-warehouse close</span>
              </li>
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>Chief Marketing Officer: targeted hire post-beta launch</span>
              </li>
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>Chief Legal Officer: targeted hire post-beta launch</span>
              </li>
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>Chief Financial Officer: targeted hire post-beta launch</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

