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
                <p className="text-sm text-white/50 mb-1">Raising</p>
                <p className="text-xl font-bold text-[#F7931A]">$7M at $40M post (17.5% dilution)</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Launch Date</p>
                <p className="text-xl font-bold">April 27, 2026</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Warehouse Target</p>
                <p className="text-xl font-bold">$150M closed Q2 2026</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Bond Capacity</p>
                <p className="text-xl font-bold">$1.2B (12 tranches)</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Status</p>
                <p className="text-xl font-bold">Pre-revenue, platform operational</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Borrower APR</p>
                <p className="text-xl font-bold">15% (10-year, zero liquidation)</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Bond Coupons</p>
                <p className="text-xl font-bold">7-9% (AAA/BBB)</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Spread Capture</p>
                <p className="text-xl font-bold">$7.56M/year per tranche</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">GP Revenue (Year 4+)</p>
                <p className="text-xl font-bold text-[#F7931A]">$53.75-68.5M annually</p>
              </div>
              <div className="p-4 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-1">Margins</p>
                <p className="text-xl font-bold">90%+ at scale</p>
              </div>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">What We Do</h3>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <p>
                We offer Bitcoin installment plans with pricing equivalent to 15% effective APR over 10-year terms and zero margin call risk. Borrowers own their Bitcoin from day one, held in institutional custody (Fireblocks Trust, 4 bps annual fee) with transfer restrictions until final payment. Monthly payments remain fixed regardless of Bitcoin's price. No forced liquidations, ever.
              </p>
              <p>
                We securitize $100M face value Bitcoin installment plans into Bitcoin-Backed Securities (BBS). AAA tranche pays 7% coupon, BBB tranche pays 9% coupon. Each tranche generates $7.56M annual spread ($75.6M over 10 years). This is the first securitized Bitcoin installment credit product delivering fixed interest to institutional bond investors.
              </p>
              <p>
                Our bankruptcy-remote structure keeps Bitcoin off our balance sheet entirely, eliminating corporate risk. Bonds are backed by non-depreciating collateral with a self-healing recovery mechanism that regenerates performing assets instead of depleting capital.
              </p>
            </div>
          </div>

          {/* Market Opportunity */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Market Opportunity</h3>
            <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5 mb-6">
              <p className="text-2xl font-bold text-white mb-2">$2.2T Bitcoin market cap. $0 institutional credit access without liquidation risk.</p>
            </div>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <p>
                Potential credit market: <strong className="text-white">$440-550B</strong> (20-25% of market cap, matching traditional asset leverage ratios). Real estate: 23% leverage. Autos: 25% leverage. Bitcoin: 0% leverage.
              </p>
              <p>
                <strong className="text-white">Target market:</strong> 36-45M Americans with FICO 670+ scores who own cryptocurrency. Average credit capacity: $30-50K per consumer. 5% penetration at $40K average = <strong className="text-[#F7931A]">$72-90B addressable market</strong>.
              </p>
              <p>
                <strong className="text-white">Why existing credit fails Bitcoin buyers:</strong> Personal loans prohibit investment use (covenant violations trigger full repayment), 3-5 year terms. HELOCs require 20% home equity. Credit cards carrying $50K balance tanks FICO by 100+ points. Margin loans force liquidations during crashes.
              </p>
              <p>
                We are price makers, not price takers. Zero competition exists for this structure. 15% effective APR reflects lender risk while providing the only non-liquidatable Bitcoin credit option in market.
              </p>
            </div>
          </div>

          {/* Business Model & Unit Economics */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Business Model & Unit Economics</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              <strong className="text-white">Two entities:</strong> BTC Now GP (management company) + $150M Warehouse Fund (GP/LP structure)
            </p>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-4">Seven revenue streams:</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>Loan origination: $1M per tranche (1% of $100M loans)</span></li>
                <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>Bond issuance: $2M per tranche (2% of $100M structure)</span></li>
                <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>Loan servicing: $250K/year per tranche (0.25% annual)</span></li>
                <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>Bond servicing: $500K/year per tranche (0.5% annual, 10 years)</span></li>
                <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>Warehouse management: $3M/year (2% of $150M AUM)</span></li>
                <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>Spread capture: $7.56M/year per tranche (15% APR - 7.44% coupon - 0.75% servicing)</span></li>
                <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>Carried interest: 50% of returns above 10% hurdle</span></li>
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-white/10 mb-6">
              <p className="text-lg font-semibold mb-4">Capital leverage:</p>
              <p className="text-lg text-white/70">$150M warehouse → $1.2B bond origination capacity (12 tranches over time through sequential deployment and capital recycling)</p>
            </div>

            <div className="space-y-3 mb-6">
              <p className="text-lg text-white/70"><strong className="text-white">GP Revenue trajectory (BTC Now management company only):</strong></p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 rounded border border-white/10">
                  <p className="text-sm text-white/50">Year 1</p>
                  <p className="text-lg font-bold text-[#F7931A]">$10.5-18M</p>
                </div>
                <div className="p-3 rounded border border-white/10">
                  <p className="text-sm text-white/50">Year 2</p>
                  <p className="text-lg font-bold text-[#F7931A]">$23.75-37M</p>
                </div>
                <div className="p-3 rounded border border-white/10">
                  <p className="text-sm text-white/50">Year 3</p>
                  <p className="text-lg font-bold text-[#F7931A]">$39.75-59M</p>
                </div>
                <div className="p-3 rounded border border-[#F7931A] bg-[#F7931A]/5">
                  <p className="text-sm text-white/50">Year 4+</p>
                  <p className="text-lg font-bold text-[#F7931A]">$53.75-68.5M</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-white/70 mb-4">
              <strong className="text-white">Operating margins:</strong> 90%+ at scale. Profitable from first tranche.
            </p>

            <p className="text-lg text-white/70">
              <strong className="text-white">Warehouse LP economics:</strong> 10% preferred return, 50/50 profit split above hurdle. Expected LP IRR: 20-28%. At steady state: LPs receive $52.86M (35.24% return), BTC Now receives $37.86M carried interest.
            </p>
          </div>

          {/* The Moat */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">The Moat</h3>
            <div className="space-y-6 text-lg text-white/70 leading-normal">
              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Permanent regulatory moat:</h4>
                <p className="mb-3">
                  Basel III imposes 1250% risk weight on Bitcoin exposures. For every $1 of Bitcoin-backed lending, banks must hold $1.25 in Tier 1 capital. A $100M Bitcoin loan portfolio requires banks to hold $125M in regulatory capital—more capital than the loan itself. At typical 15% ROE hurdles, banks need $18.75M annual profit. Our 15% APR generates $15M annually on $100M—not enough to cover their cost of capital.
                </p>
                <p className="text-[#F7931A] font-semibold">Banks cannot profitably offer this product under current regulations.</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">Self-healing warehouse:</h4>
                <p>
                  Defaults regenerate performing assets instead of depleting capital. Three-layer advantage: (1) Retained payments before default, (2) Bitcoin recovered at market value (not depreciated), (3) Reissued as new installment plans generating fresh fees without fresh capital. Result: 50-70% LGD reduction vs. traditional consumer lending.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-3">First-mover advantage:</h4>
                <p>
                  12-18 months proprietary loan performance data. Rating agency relationships. Each loan adds to proprietary dataset competitors cannot replicate.
                </p>
              </div>

              <p>
                <strong className="text-white">Capital efficiency:</strong> Profitable at $100M originations vs. banks needing $500M-$1B to justify overhead.
              </p>
            </div>
          </div>

          {/* Traction & Status */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Traction & Status</h3>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <div>
                <p className="font-semibold text-white mb-2">Platform operational:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>5-minute KYC/credit approvals</span></li>
                  <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>Stripe payment rails (ACH, card, crypto)</span></li>
                  <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>Custody: Fireblocks Trust, 4 bps annual fee (vs 20-25 bps standard), complete Dec 2025</span></li>
                  <li className="flex gap-3"><span className="text-[#F7931A]">•</span><span>Legal structure: Confirmed by Stinson (commodity installment plan)</span></li>
                </ul>
              </div>

              <p>
                <strong className="text-white">Built entirely with founder capital:</strong> $1.5M deployed, $1.5M additional reserved.
              </p>

              <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5">
                <p className="font-semibold text-white mb-2">Launch: April 27, 2026</p>
                <p>Bitcoin Conference, Las Vegas. 50,000+ attendees. Main stage announcement with Bloomberg, Fox, CNBC coverage confirmed. Live origination Day 1—real loans funded, real Bitcoin delivered. Not a demo.</p>
              </div>

              <p>
                <strong className="text-white">Warehouse discussions:</strong> Preliminary conversations with family offices and Bitcoin whales. Roadshow begins Q1 2026 targeting $150M close Q2 2026.
              </p>
            </div>
          </div>

          {/* The Ask */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">The Ask</h3>
            <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5 mb-6">
              <p className="text-2xl font-bold text-white mb-4">
                Raising $7M equity at $40M post-money (17.5% dilution, preferred equity)
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-4">Use of Funds:</h4>
              <div className="space-y-3 text-white/70">
                <p><span className="font-semibold text-white">$1M:</span> Bitcoin Conference 2026 launch event (main stage, media coverage, institutional FOMO)</p>
                <p><span className="font-semibold text-white">$1.5M:</span> Warehouse LP roadshow ($150M target close Q2 2026)</p>
                <p><span className="font-semibold text-white">$1M:</span> A+ product/design talent (world-class UX)</p>
                <p><span className="font-semibold text-white">$1M:</span> State licensing (all 50 states within 6 months)</p>
                <p><span className="font-semibold text-white">$2.5M:</span> Operating runway (18 months to $100M+ origination volume)</p>
              </div>
            </div>

            <p className="text-lg text-white/70 mb-4">
              <strong className="text-white">Leverage path:</strong> $7M seed equity → $150M warehouse → $1.2B bond origination capacity. 8x leverage through sequential deployment and capital recycling.
            </p>

            <p className="text-lg text-white/70 mb-6">
              <strong className="text-white">First LP terms:</strong> Receives 20% BTC Now equity for $150M warehouse commitment. 10% preferred return, 50/50 profit split above hurdle.
            </p>

            <div className="p-6 rounded-lg border border-white/10 text-center">
              <p className="text-2xl font-bold text-[#F7931A] mb-4">
                We launch April 2026 with or without venture capital.
              </p>
              <p className="text-xl text-white">
                Question: Seed pricing at $40M post, or Series A pricing after we prove demand?
              </p>
            </div>
          </div>

          {/* Risk Mitigation */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Risk Mitigation</h3>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <p>
                <strong className="text-white">Stress test:</strong> Structure survives 70% lifetime defaults + 90% Bitcoin crash. AAA tranche fully protected through extreme scenarios.
              </p>
              <p>
                <strong className="text-white">Conservative design:</strong> New asset class with no historical performance data. Base case assumes 8-15% defaults (industry-standard for FICO 670+). Stress testing at 70% ensures protection even in catastrophic scenarios.
              </p>
              <p>
                <strong className="text-white">10M Monte Carlo simulations</strong> across 432 scenarios (default rates, Bitcoin volatility, prepayment assumptions). Self-healing warehouse mechanics reduce dependency on perfect credit performance.
              </p>
            </div>
          </div>

          {/* Team Summary */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Team</h3>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <p>
                <strong className="text-white">Marc Dumpff, CEO & Capital Markets:</strong> Structured sovereign debt, operated regulated funds under FMA/CIMA/ECB. Founded Liechtenstein hedge fund at age 20. Associate Partner, Noviganto & Associates (advising ECB, IMF, World Bank).
              </p>
              <p>
                <strong className="text-white">Evan Kalimtzis, CIO & Securitization:</strong> 25+ years structured credit. MD/Co-Head JP Morgan CIO SPAR ($400B portfolio). MD JP Morgan CIO Head International Risk. Founder/CEO Asteri Capital ($550M credit hedge fund). Ph.D. Program Finance, Columbia.
              </p>
              <p>
                <strong className="text-white">Peter D. Howard, CRO & Structured Products:</strong> 20+ years managing structured products. Partner/Senior PM Peloton Partners ($1.8B ABS fund, $10B+ portfolio). Head ABS/CMBS Prop Trading, Dresdner Kleinwort. MBA Finance, NYU Stern.
              </p>
              <p>
                <strong className="text-white">Plus 4 additional C-level executives</strong> with deep expertise in product, technology, operations, and fund administration.
              </p>
              <p>
                Team has executed together 10-15 years across regulated funds, sovereign debt, and trading infrastructure. All-in commitment with 4-year vesting (1-year cliff).
              </p>
            </div>
          </div>

          {/* Exit Strategy */}
          <div>
            <h3 className="text-3xl font-bold leading-tight mb-6">Exit Strategy</h3>
            <div className="space-y-4 text-lg text-white/70 leading-normal">
              <p>
                <strong className="text-white">Target:</strong> 8-12x revenue multiples (fintech infrastructure exits serving institutional markets)
              </p>
              <p>
                <strong className="text-white">Potential acquirers:</strong> JPMorgan, Goldman Sachs, BNY Mellon (traditional finance seeking Bitcoin exposure), Coinbase, Block, Kraken (crypto-native seeking credit products), PayPal/Venmo (fintech needing Bitcoin offerings)
              </p>
              <p>
                <strong className="text-white">Comparable exits:</strong> LendingClub ($9B SPAC), SoFi ($8.65B), Figure ($3.2B), Upstart ($12B+ peak), Avant ($2B)
              </p>
              <p>
                <strong className="text-white">If we achieve $50-100M revenue (Years 3-5), $400M-$1.2B exit range credible.</strong> Premium multiple justified by proprietary Bitcoin credit data, self-healing warehouse mechanics, proven securitization track record.
              </p>
              <p>
                <strong className="text-white">Alternative:</strong> High-margin business supports dividend distributions. Can remain private, distribute cashflows indefinitely.
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="mt-16 p-8 rounded-lg border-2 border-[#F7931A] bg-[#F7931A]/10">
            <h3 className="text-2xl font-bold mb-4">Summary</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              First securitized Bitcoin installment credit product with zero forced liquidation risk. $2.2T market, $0 institutional credit access, $440-550B potential. Banks can't compete (Basel III 1250% risk weight). Self-healing warehouse regenerates performing assets (50-70% LGD reduction). Platform operational, launching April 2026 with or without VC funding.
            </p>
            <p className="text-lg text-white/70 leading-normal mb-6">
              <strong className="text-white">Raising $7M at $40M post</strong> for conference launch, warehouse roadshow, A+ product talent, state licensing, and 18-month operating runway. $7M → $150M warehouse → $1.2B bond capacity. GP revenue: $10.5-18M Year 1 → $53.75-68.5M Year 4+. 90%+ margins.
            </p>
            <p className="text-xl font-bold text-[#F7931A] text-center">
              Question: Seed pricing at $40M post now, or Series A pricing after we prove demand?
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="text-center pt-8 pb-4">
            <p className="text-white/50 mb-2">↓ Keep scrolling for detailed sections ↓</p>
            <p className="text-sm text-white/40">What We Do • Market • How It Works • Revenue Model • Capital Structure • Moat • Team • Go-to-Market • The Ask</p>
          </div>
        </div>
      </div>
    </section>
  );
}

