export default function WhatThisAchieves() {
  return (
    <section id="what-this-achieves" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">12</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          What This $7M Achieves
        </h2>

        <div className="space-y-12">
          {/* Platform Status */}
          <div id="platform-status">
            <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
              <span className="text-white/40">→</span>
              Platform Status
            </h3>
            <p className="text-xl text-white/80 leading-relaxed mb-4">The platform is operational with 5-minute KYC/credit approvals, custody integration done end of November, and Stripe payment rails. Legal structure confirmed by Stinson.</p>
            <p className="text-xl text-white/80 leading-relaxed">Built entirely with founder capital, with $1.5M additional founder commitment in reserve.</p>
          </div>
          
          {/* Launch Milestones */}
          <div id="launch-milestones">
            <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
              <span className="text-white/40">→</span>
              Launch Milestones
            </h3>
            
            <p className="text-lg text-white/70 leading-normal mb-8">
              <strong className="text-white">Timeline:</strong> Legal opinion to proceed November 2025. Custody integration complete December 2025. GP/LP structure December 2025. Warehouse roadshow begins Q1 2026. April 27, 2026 launch. $150M warehouse closed Q2 2026. First securitization Q3 2026.
            </p>

            {/* Legal Structure */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">Legal structure:</h4>
              <p className="text-lg text-white/70 leading-normal mb-4">
                <strong className="text-white">Status: Confirmed by Stinson.</strong>
              </p>
              <div className="p-6 rounded-lg border border-white/10 mb-4">
                <p className="text-lg font-semibold mb-3">
                  Installment purchase plan for commodity:
                </p>
                <p className="text-lg text-white/70 leading-normal mb-3">
                  We sell Bitcoin inventory we own with installment payment terms, structured as commodity sales rather than consumer lending. This approach avoids 50-state consumer lending licenses, TILA/FCRA complexity, and interest rate caps.
                </p>
                <p className="text-lg text-white/70 leading-normal">
                  California documentation is in progress and serves as the template for all states. Regulatory classification risk exists: while the structure is supported by counsel, it remains untested in practice, and state regulators could classify it as consumer lending. Budget includes contingency funding for additional licenses if required.
                </p>
              </div>
              <p className="text-lg text-white/70 leading-normal mb-2">Budget: $500-750K for legal and compliance work, covering entity formation, SEC review, BSA/AML development, state compliance verification, and contingency for licenses.</p>
              <p className="text-lg text-white/70 leading-normal">Timeline: All legal documentation completed before April 2026 launch.</p>
            </div>

            {/* Warehouse facility */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">$150M warehouse facility:</h4>
              <p className="text-lg text-white/70 leading-normal mb-4">
                <strong className="text-white">Status: Target close Q2 2026.</strong>
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Roadshow begins Q1 2026, targeting commitments before conference. Conference live origination provides leverage to close remaining commitments through institutional proof-of-concept and media coverage.
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Preliminary discussions underway with family offices and Bitcoin whales. First LP receives 20% BTC Now equity (terms in Capital Structure section 06).
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Conference creates negotiating leverage through live loan origination as proof, Bloomberg coverage for credibility, and institutional meetings over Days 1-4 building a warm pipeline.
              </p>
              <p className="text-lg text-white/70 leading-normal mb-2">Budget: $1.5M for roadshow, term sheets, and legal documentation.</p>
              <p className="text-lg text-white/70 leading-normal mb-4">Timeline: $150M committed Q2 2026, first tranche Q3 2026.</p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                <strong className="text-white">Capital deployment:</strong> Unspent raise capital (minus 6-month operating runway) deployed into warehouse alongside LP commitments for launch origination.
              </p>
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Contingency:</strong> If no LP commitments by April 2026, founders provide $5M warehouse capital for launch origination.
              </p>
            </div>

            {/* Custody */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">Custody integration:</h4>
              <p className="text-lg text-white/70 leading-normal mb-4">
                <strong className="text-white">Status: Legal opinion to proceed November 2025. Integration complete December 2025.</strong>
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Fireblocks Trust provides institutional custody with dedicated Bitcoin addresses for each customer. No pooling of assets. Customers view their Bitcoin and wallet address in the app.
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Integration timeline: 4-6 weeks through standard service agreement.
              </p>
              <div className="p-6 rounded-lg border border-white/10 mb-4">
                <p className="text-lg font-semibold mb-3">
                  Custody fee economics:
                </p>
                <p className="text-lg text-white/70 leading-normal mb-3">
                  Fireblocks Trust custody locked at 4 basis points (0.04% annual) - significantly below institutional standard of 20-25 bps.
                </p>
                <p className="text-lg text-white/70 leading-normal mb-3">
                  <strong className="text-white">Pre-bond (loans in warehouse):</strong> Warehouse pays 0.04% custody fees to Fireblocks plus 0.25% loan servicing fees to BTC Now GP, totaling 0.29% warehouse operating expense.
                </p>
                <p className="text-lg text-white/70 leading-normal">
                  <strong className="text-white">Post-bond (loans in SPV):</strong> Bond SPV pays BTC Now GP 0.5% servicing fee, from which BTC Now pays custody costs (0.04%) and retains 0.46% net servicing margin. Superior economics vs. industry standard ~0.25% margin.
                </p>
              </div>
              <p className="text-lg text-white/70 leading-normal mb-2">Budget: $500K for custody integration (included in operating runway), covering API work, insurance, and testing.</p>
              <p className="text-lg text-white/70 leading-normal">Legal opinion to proceed November 2025. Integration complete December 2025.</p>
            </div>

            {/* GP/LP Structure */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">GP/LP structure:</h4>
              <p className="text-lg text-white/70 leading-normal mb-4">
                <strong className="text-white">Status: Complete end of December 2025.</strong>
              </p>
              <p className="text-lg text-white/70 leading-normal mb-2">
                Legal documentation, operating agreements, and LP onboarding infrastructure ready for warehouse capital deployment Q1 2026.
              </p>
              <p className="text-lg text-white/70 leading-normal">
                Budget: $250K (included in legal/compliance allocation).
              </p>
            </div>
          </div>

          {/* Regulatory Strategy */}
          <div id="regulatory-strategy">
            <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
              <span className="text-white/40">→</span>
              Regulatory Strategy
            </h3>
            <p className="text-lg text-white/70 leading-normal mb-4">
              <strong className="text-white">Legal counsel: Stinson engaged with structure confirmed.</strong>
            </p>
            <p className="text-lg text-white/70 leading-normal mb-4">
              <strong className="text-white">Structure:</strong> Installment purchase plan for commodity (Bitcoin inventory we own), not consumer lending.
            </p>
            <p className="text-lg text-white/70 leading-normal mb-6">
              <strong className="text-white">Key differentiation:</strong> We sell Bitcoin we own with installment payment terms rather than facilitating on-demand purchases, which avoids consumer lending classification and 50-state licensing requirements.
            </p>
            <div className="p-6 rounded-lg border border-white/10 mb-6">
              <p className="text-lg font-semibold mb-3">
                Note on terminology:
              </p>
              <p className="text-lg text-white/70 leading-normal">
                This document uses &quot;loans&quot; and &quot;lending&quot; for investor clarity, but the legal structure is an installment purchase of Bitcoin inventory. This distinction is critical for regulatory classification - it's a commodity sale with installment terms, not consumer lending.
              </p>
            </div>
            <p className="text-lg text-white/70 leading-normal mb-4">Installment purchase structure avoids:</p>
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>50-state consumer lending licenses</span>
              </li>
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>TILA/FCRA consumer protection complexity</span>
              </li>
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>Interest rate caps and usury laws</span>
              </li>
            </ul>
            <p className="text-lg text-white/70 leading-normal mb-6">
              <strong className="text-white">Regulatory classification risk:</strong> The installment purchase structure is supported by Stinson but remains untested in practice. State regulators could classify this as consumer lending, money transmission, or securities offering. Budget includes contingency for additional licenses if required.
            </p>
            
            <p className="text-lg text-white/70 leading-normal">
              Budget: $500-750K for legal and compliance, covering entity formation, SEC review, BSA/AML development, state compliance verification, and contingency for additional licenses.
            </p>
          </div>

          {/* Execution Timeline */}
          <div id="execution-timeline">
            <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
              <span className="text-white/40">→</span>
              Execution Timeline
            </h3>

            <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5 mb-8">
              <p className="text-2xl font-bold text-[#F7931A] leading-snug mb-6">Platform status: Operational</p>

              <p className="text-lg font-semibold mb-4">Built with founder capital before this raise.</p>

              <div className="mb-6">
                <p className="text-lg font-semibold mb-3">Live systems:</p>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">✓</span>
                    <span>AML/KYC with 2-minute verification</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">✓</span>
                    <span>Credit checks with complete bureau integration</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">✓</span>
                    <span>Income verification through bank account linking (completed in seconds)</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">✓</span>
                    <span>Underwriting engine enabling 5-minute loan approvals</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">✓</span>
                    <span>Borrower portal with account management and payment tracking</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-lg font-semibold mb-3">Final integration (4-6 weeks):</p>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">→</span>
                    <span>Custody API for Bitcoin delivery system</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">→</span>
                    <span>Payment rails through Stripe reconciliation (accepting ACH, card, and crypto)</span>
                  </li>
                </ul>
              </div>

              <p className="text-2xl font-bold text-[#F7931A] leading-snug mb-4">
                Not a demo. Not a beta. Live origination April 27.
              </p>

              <p className="text-lg text-white/70 leading-normal">
                Platform handles Day 1 conference volume with underwriting approving loans in under 10 minutes and Bitcoin delivered same-day.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">Demand validation:</h4>
              <p className="text-2xl font-bold text-[#F7931A] leading-snug mb-4">Conference proves demand.</p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Anecdotal evidence from founder networks indicates Bitcoin holders prefer installment plans over HELOCs (which require home equity), personal loans (with investment covenants), and margin loans (with liquidation risk).
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Macro validation comes from the BlackRock iShares Bitcoin ETF, Fidelity Bitcoin ETF, and MicroStrategy treasury adoption. Institutional acceptance creates downstream consumer demand.
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Conference provides concentrated validation with 50K Bitcoin enthusiasts as high-intent buyers. Live origination tests pricing ($2-5K/month payments), loan sizes ($25K-75K range), and approval rates.
              </p>
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Transparency:</strong> You invest before formal demand validation, which represents higher risk at seed-stage pricing.
              </p>
            </div>

            <p className="text-lg text-white/70 leading-normal mb-8">
              <strong className="text-white">Launch strategy:</strong> Bitcoin Conference 2026 (April 27, Las Vegas, 50,000+ attendees) provides a concentrated launch audience of high-intent Bitcoin buyers.
            </p>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">Launch validates critical assumptions:</h4>
              <ul className="space-y-3">
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Pricing acceptance (15% effective APR for 10 years?)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Loan size preference ($25K? $50K? $75K?)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Bond investor appetite (unrated Bitcoin-backed bonds?)</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">If demand is weak:</h4>
              <p className="text-lg text-white/70 leading-normal">
                Pivot pricing, pivot product, or return capital. Transparency: You invest before formal validation at higher risk with seed-stage entry valuation.
              </p>
            </div>
          </div>

          {/* Why We're Raising */}
          <div id="why-raising">
            <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
              <span className="text-white/40">→</span>
              Why We're Raising
            </h3>
            
            <p className="text-2xl font-bold text-[#F7931A] leading-snug mb-8">We launch in April 2026 with or without VC funding.</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5">
                <p className="text-xl font-bold text-[#F7931A] mb-4">With VC ($7M):</p>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Bitcoin Conference main stage launch with Bloomberg/Fox/CNBC coverage</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Close $150M warehouse facility in 90 days</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Hire A+ product and design talent for exceptional UX</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>18-month runway to reach $100M+ origination volume</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-white/10">
                <p className="text-xl font-bold text-white mb-4">Without VC:</p>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-white/50 mt-1">•</span>
                    <span>Smaller launch to prove the model</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-white/50 mt-1">•</span>
                    <span>Slower warehouse close over 12-18 months</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-white/50 mt-1">•</span>
                    <span>Functional product with less polish</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-white/50 mt-1">•</span>
                    <span>Founders delay salaries to extend runway</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-white/50 mt-1">•</span>
                    <span>Raise Series A at higher valuation after proving traction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Final Closing */}
          <div className="mt-16 p-8 rounded-lg border-2 border-[#F7931A] bg-[#F7931A]/10 text-center">
            <p className="text-3xl font-bold text-white mb-6">
              We launch April 27, 2026.
            </p>
            <p className="text-2xl text-white/90 mb-6">
              With or without venture capital.
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              The question is: do you want seed-stage pricing at $40M post, or Series A pricing after we prove demand?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
