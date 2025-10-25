import Link from 'next/link';

export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="min-h-screen flex items-center justify-center border-b border-white/5 py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">01</div>
        
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            BTC Now
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            Executive Summary
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-[#F7931A] font-bold">
            Bitcoin installment plans with zero liquidation risk. First securitized Bitcoin installment credit product.
          </p>
        </div>

        <div className="space-y-12">
          {/* Key Metrics Table */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Key Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border border-[#F7931A] bg-[#F7931A]/5">
                <p className="text-sm text-white/50 mb-1">Status</p>
                <p className="text-xl font-bold text-[#F7931A]">Pre-revenue, platform operational</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Raising</p>
                <p className="text-xl font-bold">$7M at $40M post (17.5% dilution)</p>
              </div>
              <div className="p-4 rounded-lg border border-[#F7931A] bg-[#F7931A]/5">
                <p className="text-sm text-white/50 mb-1">Market Size (TAM)</p>
                <p className="text-xl font-bold text-[#F7931A]">$440-550B potential Bitcoin credit market</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Addressable Market</p>
                <p className="text-xl font-bold">$72-90B (5% penetration)</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Launch Date</p>
                <p className="text-xl font-bold">April 27, 2026 (Bitcoin Conference)</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Target Revenue (Year 4)</p>
                <p className="text-xl font-bold text-[#F7931A]">$53.75-68.5M annually</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Margins</p>
                <p className="text-xl font-bold">90%+ at scale</p>
              </div>
              <div className="p-4 rounded-lg border border-[#F7931A] bg-[#F7931A]/5 md:col-span-2">
                <p className="text-sm text-white/50 mb-1">Capital Leverage</p>
                <p className="text-xl font-bold text-[#F7931A]">$7M → $150M warehouse → $1.2B origination capacity</p>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">What We Do</h3>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <p>
                <strong className="text-white">The Product:</strong> Consumer wants to buy $50K of Bitcoin but doesn't have $50K cash. We finance the purchase: they receive $50K of Bitcoin immediately (held in institutional custody with transfer restrictions), make fixed monthly payments over 10 years at 15% APR, and own it outright after final payment. No margin calls if Bitcoin crashes—fixed dollar payments regardless of Bitcoin price. No forced liquidations.
              </p>
              <p>
                <strong className="text-white">Why this matters:</strong> Americans can't get long-term credit for Bitcoin purchases. Personal loans prohibit investment use. Credit cards charge 25%+ and tank credit scores. Margin loans force liquidations during crashes (May 2021: 50% drop, mass liquidations). We're the only non-liquidatable Bitcoin financing option.
              </p>
              <p>
                <strong className="text-white">The Business Model:</strong> We originate $100M of these Bitcoin installment plans, then package them into bonds (Bitcoin-Backed Securities). AAA/BBB tranches pay 7-9% coupons to institutional investors. We capture $7.56M annual spread per tranche (15% borrower APR minus bond coupons minus servicing). First securitized Bitcoin credit product. Banks cannot compete under Basel III (1250% risk weight on Bitcoin exposures).
              </p>
            </div>
          </div>

          {/* Market Opportunity */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Market Opportunity</h3>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <p>$2.2T Bitcoin market cap. $0 institutional credit access without liquidation risk.</p>
              <p>Potential credit market: $440-550B (20-25% of Bitcoin market cap, matching real estate/auto leverage ratios).</p>
              <p>Target market: 36-45M Americans with FICO 670+ who own crypto. 5% penetration at $40K average = $72-90B addressable.</p>
              <p>We are price makers, not price takers. Zero competition for this structure.</p>
            </div>
          </div>

          {/* Traction & Status */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Traction & Status</h3>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <ul className="space-y-3 ml-6">
                <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span><strong className="text-white">Platform operational:</strong> Plaid (KYC/underwriting), Stripe (payments), Fireblocks custody (4 bps, Dec 2025)</span></li>
                <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span><strong className="text-white">State licensing in progress:</strong> Stinson partners actively securing 50-state licenses. Only remaining blocker to immediate launch.</span></li>
                <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span><strong className="text-white">Launch:</strong> April 27, 2026 Bitcoin Conference (50K attendees, Bloomberg/Fox/CNBC confirmed, live origination Day 1)</span></li>
                <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span><strong className="text-white">Warehouse discussions:</strong> Family offices, Bitcoin whales. Q1 2026 roadshow, $150M target close Q2 2026</span></li>
              </ul>

              <p className="pt-4">
                Built by team that structured $400B+ at JP Morgan, Peloton Partners, Klarna. Zero outside capital raised to date.
              </p>
            </div>
          </div>

          {/* The Ask */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">The Ask</h3>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <p><strong className="text-white">Raising:</strong> $7M at $40M post (17.5% dilution)</p>
              
              <div>
                <p className="font-semibold text-white mb-2">Use of Funds:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>$1M: Bitcoin Conference launch (main stage, live origination)</span></li>
                  <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>$1.5M: Warehouse LP roadshow ($150M target)</span></li>
                  <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>$1M: A+ product/design talent</span></li>
                  <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>$1M: State licensing (50 states)</span></li>
                  <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>$2.5M: Operating runway (18 months to $100M+ originations)</span></li>
                </ul>
              </div>

              <p><strong className="text-white">Leverage path:</strong> $7M → $150M warehouse → $1.2B bond capacity</p>

              <p className="pt-4 text-white font-semibold">We launch April 2026 with or without VC funding.</p>
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Team</h3>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <p>
                Marc Dumpff (CEO): Sovereign debt, regulated funds (FMA/CIMA/ECB). Evan Kalimtzis (CIO): 25 years structured credit, JP Morgan MD guiding $400B portfolio. Peter Howard (CRO): Partner Peloton Partners ($10B+ ABS portfolio). Alexander Watanabe (CPO): Cross-asset lending, blockchain protocols. Korneliusz Caputa (CTO): 15 years fintech infrastructure, Klarna engineering. Team has executed together 10-15 years.
              </p>
            </div>
          </div>

          {/* Risk Mitigation */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Risk Mitigation</h3>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <p>
                Structure stress tested to 70% lifetime defaults + 90% Bitcoin crash. 10M Monte Carlo simulations across 432 scenarios. Full models available for investor due diligence.
              </p>
            </div>
          </div>

          {/* Final Question */}
          <div className="p-8 rounded-lg border-2 border-[#F7931A] bg-[#F7931A]/5 text-center">
            <p className="text-xl font-bold text-[#F7931A] text-center">
              Question: Seed pricing at $40M post now, or Series A pricing after we prove demand?
            </p>
          </div>

          {/* CTA to Detailed Deck */}
          <div className="text-center pt-12 pb-4">
            <Link 
              href="/pitch"
              className="inline-block px-12 py-6 bg-[#F7931A] hover:bg-[#e68915] text-white text-xl font-bold rounded-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              View Detailed Pitch Deck →
            </Link>
            <p className="text-sm text-white/40 mt-6">Complete breakdown: Market • Business Model • Capital Structure • Team • Go-to-Market • Financial Projections</p>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-white/50 italic mb-3">Questions or want to schedule a call? Reach out:</p>
              <div className="flex items-center justify-center gap-4 text-sm">
                <a href="mailto:marc@btcnow.com" className="text-white/70 hover:text-[#F7931A] transition-colors">
                  📧 marc@btcnow.com
                </a>
                <span className="text-white/30">·</span>
                <a href="https://wa.me/1XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#F7931A] transition-colors">
                  💬 WhatsApp
                </a>
                <span className="text-white/30">·</span>
                <a href="https://linkedin.com/in/marcdumpff" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#F7931A] transition-colors">
                  🔗 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

