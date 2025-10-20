'use client';

export default function WhatThisAchieves() {
  return (
    <section id="what-this-achieves" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          What This $7M Achieves
        </h2>

        {/* Overview */}
        <div className="bg-slate-800/50 rounded-2xl p-8 mb-8 border border-orange-500/20">
          <p className="text-xl text-white/90 mb-6">This $7M seed round funds four critical milestones:</p>
          <ol className="space-y-4 mb-8">
            <li className="text-lg text-white/80">
              <span className="text-orange-400 font-bold">1. Complete beta platform</span> ($1.4M) — 95% built, final custody and banking integrations
            </li>
            <li className="text-lg text-white/80">
              <span className="text-orange-400 font-bold">2. Finalize lender-of-record partnership</span> ($2M) — Legal structuring, compliance integration
            </li>
            <li className="text-lg text-white/80">
              <span className="text-orange-400 font-bold">3. Secure $150M warehouse facility</span> ($2.1M) — Roadshow, term sheets, legal documentation
            </li>
            <li className="text-lg text-white/80">
              <span className="text-orange-400 font-bold">4. Validate demand and pricing</span> ($2M) — 6-9 months operating runway to prove market fit
            </li>
          </ol>

          <p className="text-lg text-white/80 mb-4">
            <strong className="text-orange-400">Timeline:</strong> 6-9 months to warehouse commitment and loan origination launch.
          </p>

          <p className="text-lg text-white/80 mb-4">
            <strong className="text-orange-400">Current stage:</strong> Pre-revenue. Beta 95% complete. Active partnership negotiations. No committed warehouse capital yet.
          </p>

          <p className="text-lg text-white/80">
            $7M raise at $40M post-money reflects execution risk. Early investors compensated through entry valuation.
          </p>
        </div>

        <div className="space-y-8">
          {/* Execution Milestones */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">Execution Milestones</h3>

            {/* Lender-of-record */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-orange-400 mb-4">Lender-of-record partnership:</h4>
              <p className="text-white/70 mb-4">
                Status: Negotiations with Cross River, WebBank. Preliminary discussions underway.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-6 mb-4 border border-orange-500/10">
                <p className="text-white/90 mb-3">
                  <strong className="text-orange-300">Why we need lender-of-record:</strong>
                </p>
                <p className="text-white/80">
                  This is not just payment processing. Lender-of-record partners provide account management infrastructure that&apos;s critical for our installment purchase structure. Each Bitcoin installment gets its own account at the lender-of-record. This infrastructure is especially valuable when transferring loans to Bond SPVs: the consumer continues paying the same account number, while the lender-of-record seamlessly changes account ownership from warehouse to SPV behind the scenes. This operational infrastructure makes the installment purchase structure work smoothly at scale.
                </p>
              </div>
              <p className="text-white/70 mb-2">Budget: $2M for legal structuring, compliance integration, partnership finalization.</p>
              <p className="text-white/70 mb-2">Timeline: Q4 2025 - Q1 2026 (6-9 months).</p>
              <p className="text-white/70">Fallback: Multiple regional banks offer lender-of-record services.</p>
            </div>

            {/* Warehouse facility */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-orange-400 mb-4">$150M warehouse facility:</h4>
              <p className="text-white/70 mb-4">
                Status: We&apos;ve had exploratory conversations with family offices and Bitcoin whales in our network. Formal commitments are contingent on beta traction and demand validation—this is expected and appropriate at seed stage.
              </p>
              <p className="text-white/70 mb-4">
                Leverage: This $7M raise provides leverage for warehouse negotiations by demonstrating beta performance data and signup momentum. First LP economics (20% BTC Now equity + 10% preferred + 50% carry above hurdle) designed to attract capital once proof of concept established.
              </p>
              <p className="text-white/70 mb-2">Budget: $2.1M for roadshow, term sheet negotiations, legal documentation.</p>
              <p className="text-white/70">Timeline: Q1-Q2 2026 (post-beta launch).</p>
            </div>

            {/* Custody */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold text-orange-400 mb-4">Custody partnerships:</h4>
              <p className="text-white/70 mb-4">
                Status: Custody is a commodity service. Coinbase Custody, Anchorage Digital, and BitGo all offer standard institutional custody at ~0.25% AUM with established pricing and service terms.
              </p>
              <p className="text-white/70 mb-4">
                We&apos;ll execute standard service agreements during Q4 2025 technical buildout. No partnership risk—this is infrastructure procurement with established pricing, similar to opening a bank account. Standard API documentation, insurance arrangements, and technical integration.
              </p>
              <div className="bg-slate-800/50 rounded-lg p-4 mb-4 border border-orange-500/10">
                <p className="text-white/90">
                  <strong className="text-orange-300">Custody fee economics:</strong> Pre-bond, custody fees are warehouse operating expenses. Post-bond, custody fees (0.25% AUM) are paid from loan servicing revenue (0.25% annual on loans = $250K/year per tranche), not deducted from bond investor spread.
                </p>
              </div>
              <p className="text-white/70 mb-2">Budget: $500K for API integration, insurance arrangements, technical implementation.</p>
              <p className="text-white/70">Timeline: Q4 2025 - Q1 2026.</p>
            </div>
          </div>

          {/* Regulatory */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">Regulatory</h3>
            <p className="text-white/70 mb-4">
              <strong className="text-orange-400">Legal counsel:</strong> Stinson (engaged).
            </p>
            <p className="text-white/70 mb-4">
              <strong className="text-orange-400">Structure:</strong> Installment purchase plan, NOT consumer lending.
            </p>
            <p className="text-white/70 mb-4">
              <strong className="text-orange-400">Key differentiation:</strong> Warehouse maintains Bitcoin inventory. We sell Bitcoin we own, not facilitate purchases on demand. This distinguishes us from consumer lending classification and associated 50-state licensing requirements.
            </p>
            <div className="bg-slate-800/50 rounded-lg p-6 mb-4 border border-orange-500/10">
              <p className="text-white/90 mb-3">
                <strong className="text-orange-300">Note on terminology:</strong>
              </p>
              <p className="text-white/80">
                This document uses &quot;loans&quot; and &quot;lending&quot; for investor clarity, as these terms are widely understood in capital markets. However, the legal structure is an installment purchase of Bitcoin inventory we own. This distinction is critical for regulatory classification—we are selling a commodity with installment payment terms, not engaging in consumer lending.
              </p>
            </div>
            <p className="text-white/70 mb-4">Structuring as commodity purchase with installment payment terms avoids:</p>
            <ul className="space-y-2 mb-6">
              <li className="text-white/70 flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Consumer lending licenses (50 states)
              </li>
              <li className="text-white/70 flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                TILA/FCRA consumer protection complexity
              </li>
              <li className="text-white/70 flex items-start">
                <span className="text-orange-400 mr-2">•</span>
                Interest rate caps and usury laws
              </li>
            </ul>
            <p className="text-white/70 mb-4">
              Lender-of-record partnership provides banking infrastructure and regulatory umbrella for payment processing and custody arrangements.
            </p>
            <p className="text-white/70">
              Budget: $1.5M for legal/compliance. Entity formation, lender-of-record partnership, SEC review, custody agreements, BSA/AML development, state compliance verification.
            </p>
          </div>

          {/* Execution */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-6">Execution</h3>
            <p className="text-white/70 mb-6">Q1 2026 beta launch depends on this $7M raise.</p>

            <div className="bg-orange-500/10 rounded-xl p-6 mb-6 border border-orange-500/20">
              <p className="text-xl font-bold text-orange-300 mb-4">Beta platform status: 95% complete.</p>

              <div className="mb-6">
                <p className="text-lg font-semibold text-white mb-3">Already operational:</p>
                <ul className="space-y-2">
                  <li className="text-white/80 flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    AML/KYC systems (fully built and tested)
                  </li>
                  <li className="text-white/80 flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    Credit check infrastructure (integrated with major bureaus)
                  </li>
                  <li className="text-white/80 flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    Underwriting system (risk models and approval workflows)
                  </li>
                  <li className="text-white/80 flex items-start">
                    <span className="text-orange-400 mr-2">✓</span>
                    Borrower portal (user interface and account management)
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-lg font-semibold text-white mb-3">Pending completion:</p>
                <ul className="space-y-2">
                  <li className="text-white/80 flex items-start">
                    <span className="text-orange-400 mr-2">→</span>
                    Custody integration (Coinbase Custody/Anchorage Digital API integration)
                  </li>
                  <li className="text-white/80 flex items-start">
                    <span className="text-orange-400 mr-2">→</span>
                    Lender-of-record banking infrastructure (account management system integration)
                  </li>
                </ul>
              </div>

              <p className="text-white/80 mb-4">
                <strong className="text-orange-300">Timeline:</strong> Q1 2026 completion depends on custody and lender-of-record partnerships (covered by $1.4M beta budget). Core platform is built—final integration work only.
              </p>

              <p className="text-white/90 font-semibold">
                This dramatically de-risks execution. We&apos;re not building from scratch; we&apos;re connecting to established infrastructure providers.
              </p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-orange-400 mb-4">Demand validation:</h4>
              <p className="text-white/70 mb-4">
                Network validation through extensive conversations within Bitcoin holder networks shows strong appetite: $2-5K/month installment plans preferred over traditional leverage options (HELOCs requiring home equity, personal loans with investment covenants, margin loans with liquidation risk).
              </p>
              <p className="text-white/70 mb-4">
                Macro validation: Global Bitcoin ETF adoption (BlackRock iShares, Fidelity) and corporate treasury adoption (MicroStrategy, Tesla) prove institutional acceptance of Bitcoin as asset class. This creates downstream consumer demand for Bitcoin access products.
              </p>
              <p className="text-white/70 mb-6">
                Market timing: Either seed investors believe Bitcoin adoption trajectory creates demand for non-liquidatable credit access, or they miss the opportunity.
              </p>
            </div>

            <p className="text-white/70 mb-6">
              <strong className="text-orange-400">Launch strategy:</strong> Bitcoin Conference 2026 (April 27, Las Vegas, 50,000+ attendees) provides concentrated launch audience of high-intent Bitcoin buyers.
            </p>

            <div className="mb-6">
              <p className="text-lg font-semibold text-white mb-3">Beta validates critical assumptions:</p>
              <ul className="space-y-2">
                <li className="text-white/70 flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  Pricing acceptance (15% effective APR for 10 years?)
                </li>
                <li className="text-white/70 flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  Loan size preference ($25K? $50K? $75K?)
                </li>
                <li className="text-white/70 flex items-start">
                  <span className="text-orange-400 mr-2">•</span>
                  Bond investor appetite (unrated Bitcoin-backed bonds?)
                </li>
              </ul>
            </div>

            <p className="text-white/70 mb-4">
              <strong className="text-orange-400">If validation fails:</strong> Pivot pricing, pivot product, or return remaining capital.
            </p>

            <p className="text-white/70">
              <strong className="text-orange-400">Transparency:</strong> You invest BEFORE formal demand validation. Higher risk compensated through entry valuation ($40M post-money).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
