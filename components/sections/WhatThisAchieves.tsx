export default function WhatThisAchieves() {
  return (
    <section id="what-this-achieves" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">10</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          What This $7M Achieves
        </h2>

        <div className="space-y-12">
          {/* Overview */}
          <div>
            <p className="text-xl text-white/80 leading-relaxed mb-8">This $7M seed round funds four critical milestones:</p>
            <ol className="space-y-4 mb-8">
              <li className="text-lg text-white/70 leading-normal">
                  <span className="text-[#F7931A] font-bold">1. Complete beta platform</span> ($1.4M total, includes $500K custody integration) - 95% built, final custody and banking integrations
              </li>
              <li className="text-lg text-white/70 leading-normal">
                  <span className="text-[#F7931A] font-bold">2. Finalize lender-of-record partnership</span> ($2M) - Legal structuring, compliance integration
              </li>
              <li className="text-lg text-white/70 leading-normal">
                  <span className="text-[#F7931A] font-bold">3. Secure $150M warehouse facility</span> ($2.1M) - Roadshow, term sheets, legal documentation
              </li>
              <li className="text-lg text-white/70 leading-normal">
                  <span className="text-[#F7931A] font-bold">4. Validate demand and pricing</span> ($2M) - 6-9 months operating runway to prove market fit
              </li>
            </ol>

            <p className="text-lg text-white/70 leading-normal mb-4">
              <strong className="text-white">Timeline:</strong> 6-9 months to warehouse commitment and loan origination launch.
            </p>

            <p className="text-lg text-white/70 leading-normal mb-4">
              <strong className="text-white">Current stage:</strong> Pre-revenue. Beta 95% complete. Active partnership negotiations. No committed warehouse capital yet.
            </p>

            <p className="text-lg text-white/70 leading-normal">
              $7M raise at $40M post-money reflects execution risk. Early investors compensated through entry valuation.
            </p>
          </div>

          {/* Execution Milestones */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Execution Milestones</h3>

            {/* Lender-of-record */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">Lender-of-record partnership:</h4>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Status: Negotiations with Cross River, WebBank. Preliminary discussions underway.
              </p>
              <div className="p-6 rounded-lg border border-white/10 mb-4">
                <p className="text-lg font-semibold mb-3">
                  Why we need lender-of-record:
                </p>
                <p className="text-lg text-white/70 leading-normal">
                  This is not just payment processing. Lender-of-record partners provide account management infrastructure that&apos;s critical for our installment purchase structure. Each Bitcoin installment gets its own account at the lender-of-record. This infrastructure is especially valuable when transferring loans to Bond SPVs: the consumer continues paying the same account number, while the lender-of-record seamlessly changes account ownership from warehouse to SPV behind the scenes. This operational infrastructure makes the installment purchase structure work smoothly at scale.
                </p>
              </div>
              <p className="text-lg text-white/70 leading-normal mb-2">Budget: $2M for legal structuring, compliance integration, partnership finalization.</p>
              <p className="text-lg text-white/70 leading-normal mb-2">Timeline: Q1-Q2 2026 (completion before loan origination begins).</p>
              <p className="text-lg text-white/70 leading-normal">Fallback: Multiple regional banks offer lender-of-record services.</p>
            </div>

            {/* Warehouse facility */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">$150M warehouse facility:</h4>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Status: We&apos;ve had exploratory conversations with family offices and Bitcoin whales in our network. Formal commitments are contingent on beta traction and demand validation - this is expected and appropriate at seed stage.
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Leverage: This $7M raise provides leverage for warehouse negotiations by demonstrating beta performance data and signup momentum. First LP economics (20% BTC Now equity + 10% preferred + 50% carry above hurdle) designed to attract capital once proof of concept established.
              </p>
              <p className="text-lg text-white/70 leading-normal mb-2">Budget: $2.1M for roadshow, term sheet negotiations, legal documentation.</p>
              <p className="text-lg text-white/70 leading-normal">Timeline: Q1-Q2 2026 (post-beta launch).</p>
            </div>

            {/* Custody */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">Custody partnerships:</h4>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Status: Custody is a commodity service. Coinbase Custody, Anchorage Digital, and BitGo all offer standard institutional custody at ~0.25% AUM with established pricing and service terms.
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                We&apos;ll execute standard service agreements during Q4 2025 technical buildout. No partnership risk - this is infrastructure procurement with established pricing, similar to opening a bank account. Standard API documentation, insurance arrangements, and technical integration.
              </p>
              <div className="p-6 rounded-lg border border-white/10 mb-4">
                <p className="text-lg font-semibold mb-3">
                  Custody fee economics:
                </p>
                <p className="text-lg text-white/70 leading-normal mb-3">
                  <strong className="text-white">Pre-bond (loans in warehouse):</strong> Warehouse pays 0.25% custody fees to custodian + pays BTC Now GP 0.25% loan servicing fees (BTC Now runs the technology, ensures payments are collected). Total: 0.5% warehouse operating expense.
                </p>
                <p className="text-lg text-white/70 leading-normal">
                  <strong className="text-white">Post-bond (loans in SPV):</strong> Bond SPV pays BTC Now GP 0.5% servicing fee. BTC Now is responsible for paying custody costs (~0.25%) out of this servicing fee and retains ~0.25% net margin. Bond investor returns are net of the 0.5% servicing fee shown in payment waterfall.
                </p>
              </div>
              <p className="text-lg text-white/70 leading-normal mb-2">Budget: $500K for custody API integration, insurance arrangements, technical implementation (included in $1.4M beta platform budget).</p>
              <p className="text-lg text-white/70 leading-normal">Timeline: Q1 2026 (completed before beta launch).</p>
            </div>
          </div>

          {/* Regulatory */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Regulatory</h3>
            <p className="text-lg text-white/70 leading-normal mb-4">
              <strong className="text-white">Legal counsel:</strong> Stinson (engaged).
            </p>
            <p className="text-lg text-white/70 leading-normal mb-4">
              <strong className="text-white">Structure:</strong> Installment purchase plan, NOT consumer lending.
            </p>
            <p className="text-lg text-white/70 leading-normal mb-6">
              <strong className="text-white">Key differentiation:</strong> Warehouse maintains Bitcoin inventory. We sell Bitcoin we own, not facilitate purchases on demand. This distinguishes us from consumer lending classification and associated 50-state licensing requirements.
            </p>
            <div className="p-6 rounded-lg border border-white/10 mb-6">
              <p className="text-lg font-semibold mb-3">
                Note on terminology:
              </p>
              <p className="text-lg text-white/70 leading-normal">
                This document uses &quot;loans&quot; and &quot;lending&quot; for investor clarity, as these terms are widely understood in capital markets. However, the legal structure is an installment purchase of Bitcoin inventory we own. This distinction is critical for regulatory classification - we are selling a commodity with installment payment terms, not engaging in consumer lending.
              </p>
            </div>
            <p className="text-lg text-white/70 leading-normal mb-4">Structuring as commodity purchase with installment payment terms avoids:</p>
            <ul className="space-y-3 mb-6">
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>Consumer lending licenses (50 states)</span>
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
            <p className="text-lg text-white/70 leading-normal mb-4">
              Lender-of-record partnership provides banking infrastructure and regulatory umbrella for payment processing and custody arrangements.
            </p>
            <p className="text-lg text-white/70 leading-normal mb-6">
              <strong className="text-white">Regulatory classification risk:</strong> This installment purchase structure is supported by legal counsel (Stinson), but regulatory classification has not been tested in practice. State regulators could potentially classify this as consumer lending, money transmission, or securities offering. We have budgeted $1.5M for regulatory compliance, legal opinions, and licenses if required. This capital allocation provides flexibility to adapt our structure based on regulatory feedback.
            </p>
            
            <p className="text-lg text-white/70 leading-normal">
              Budget: $1.5M for legal/compliance. Entity formation, lender-of-record partnership, SEC review, custody agreements, BSA/AML development, state compliance verification, and contingency for additional licenses if needed.
            </p>
          </div>

          {/* Execution */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Execution</h3>
            <p className="text-lg text-white/70 leading-normal mb-8">Q1 2026 beta launch depends on this $7M raise.</p>

            <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5 mb-8">
              <p className="text-2xl font-bold text-[#F7931A] leading-snug mb-6">Beta platform status: 95% complete.</p>

              <div className="mb-6">
                <p className="text-lg font-semibold mb-3">Already operational:</p>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">✓</span>
                    <span>AML/KYC systems (fully built and tested)</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">✓</span>
                    <span>Credit check infrastructure (integrated with major bureaus)</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">✓</span>
                    <span>Underwriting system (risk models and approval workflows)</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">✓</span>
                    <span>Borrower portal (user interface and account management)</span>
                  </li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-lg font-semibold mb-3">Pending completion:</p>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">→</span>
                    <span>Custody integration (Coinbase Custody/Anchorage Digital API integration)</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">→</span>
                    <span>Lender-of-record banking infrastructure (account management system integration)</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-white/70 leading-normal mb-4">
                <strong className="text-white">Timeline:</strong> Q1 2026 beta launch with first loan originations, Q2-Q3 2026 warehouse facility close. Year 1 revenue begins when first loans are issued at beta launch. Core platform is built - final integration work only.
              </p>

              <p className="text-lg font-semibold leading-normal">
                This dramatically de-risks execution. We&apos;re not building from scratch; we&apos;re connecting to established infrastructure providers.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">Demand validation:</h4>
              <p className="text-lg text-white/70 leading-normal mb-4">
                <strong className="text-white">Market hypothesis based on founder network conversations:</strong> Bitcoin holders indicate preference for $2-5K/month installment plans over traditional leverage options (HELOCs requiring home equity, personal loans with investment covenants, margin loans with liquidation risk). This is anecdotal evidence from our networks, not formal market research. <strong className="text-[#F7931A]">Beta will validate pricing acceptance and loan size preferences.</strong>
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Macro validation: Global Bitcoin ETF adoption (BlackRock iShares, Fidelity) and corporate treasury adoption (MicroStrategy, Tesla) prove institutional acceptance of Bitcoin as asset class. This creates downstream consumer demand for Bitcoin access products.
              </p>
              <p className="text-lg text-white/70 leading-normal">
                Market timing: Either seed investors believe Bitcoin adoption trajectory creates demand for non-liquidatable credit access, or they miss the opportunity.
              </p>
            </div>

            <p className="text-lg text-white/70 leading-normal mb-8">
              <strong className="text-white">Launch strategy:</strong> Bitcoin Conference 2026 (April 27, Las Vegas, 50,000+ attendees) provides concentrated launch audience of high-intent Bitcoin buyers.
            </p>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">Beta validates critical assumptions:</h4>
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

            <p className="text-lg text-white/70 leading-normal mb-4">
              <strong className="text-white">If validation fails:</strong> Pivot pricing, pivot product, or return remaining capital.
            </p>

            <p className="text-lg text-white/70 leading-normal">
              <strong className="text-white">Transparency:</strong> You invest BEFORE formal demand validation. Higher risk compensated through entry valuation ($40M post-money).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
