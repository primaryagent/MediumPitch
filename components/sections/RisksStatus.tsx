export default function RisksStatus() {
  return (
    <section id="risks" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">09</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          Risks & Status
        </h2>
        
        <div className="space-y-12">
          {/* Current Stage */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Current Stage</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Pre-revenue. No beta launched. No partnerships signed. No committed warehouse capital.
            </p>
            <p className="text-lg text-white/70 leading-normal">
              $7M raise at $40M post-money reflects execution risk. Early investors compensated through entry valuation.
            </p>
          </div>
          
          {/* Critical Dependencies */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Critical Dependencies</h3>
            
            <div className="space-y-8">
              {/* Lender-of-record partnership */}
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">Lender-of-record partnership:</h4>
                <p className="text-lg text-white/70 leading-normal mb-4">
                  Status: Negotiations with Cross River, WebBank. Preliminary discussions underway.
                </p>
                <p className="text-lg text-white/70 leading-normal mb-4">
                  Budget: $2M for legal structuring, compliance integration, partnership finalization.
                </p>
                <p className="text-lg text-white/70 leading-normal mb-4">
                  Timeline: Q4 2025 - Q1 2026 (6-9 months).
                </p>
                <p className="text-lg text-white/70 leading-normal">
                  Fallback: Multiple regional banks offer lender-of-record services.
                </p>
              </div>
              
              {/* Warehouse facility */}
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">$150M warehouse facility:</h4>
                <p className="text-lg text-white/70 leading-normal mb-4">
                  Status: We've had exploratory conversations with family offices and Bitcoin whales in our network. Formal commitments are contingent on beta traction and demand validation—this is expected and appropriate at seed stage.
                </p>
                <p className="text-lg text-white/70 leading-normal mb-4">
                  Leverage: This $7M raise provides leverage for warehouse negotiations by demonstrating beta performance data and signup momentum. First LP economics (20% BTC Now equity + 10% preferred + 50% carry above hurdle) designed to attract capital once proof of concept established.
                </p>
                <p className="text-lg text-white/70 leading-normal mb-4">
                  Budget: $2.1M for roadshow, term sheet negotiations, legal documentation.
                </p>
                <p className="text-lg text-white/70 leading-normal">
                  Timeline: Q1-Q2 2026 (post-beta launch).
                </p>
              </div>
              
              {/* Custody partnerships */}
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">Custody partnerships:</h4>
                <p className="text-lg text-white/70 leading-normal mb-4">
                  Status: Active engagement with Coinbase Custody and Anchorage Digital. Institutional custody is established commodity business with standard 0.25% AUM fee structure.
                </p>
                <p className="text-lg text-white/70 leading-normal mb-4">
                  Integration is straightforward technical buildout, not speculative partnership. Similar to bank account setup — standard API documentation, insurance arrangements, technical integration.
                </p>
                <p className="text-lg text-white/70 leading-normal mb-4">
                  Budget: $500K for API integration, insurance arrangements, technical implementation.
                </p>
                <p className="text-lg text-white/70 leading-normal">
                  Timeline: Q4 2025 - Q1 2026.
                </p>
              </div>
            </div>
          </div>
          
          {/* Regulatory */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Regulatory</h3>
            <div className="space-y-6">
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Legal counsel:</strong> Stinson (engaged).
              </p>
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Structure:</strong> Installment purchase plan, NOT consumer lending.
              </p>
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Key differentiation:</strong> Warehouse maintains Bitcoin inventory. We sell Bitcoin we own, not facilitate purchases on demand. This distinguishes us from consumer lending classification and associated 50-state licensing requirements.
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Structuring as commodity purchase with installment payment terms avoids:
              </p>
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
              <p className="text-lg text-white/70 leading-normal mb-6">
                Lender-of-record partnership provides banking infrastructure and regulatory umbrella for payment processing and custody arrangements.
              </p>
              <p className="text-lg text-white/70 leading-normal">
                Budget: $1.5M for legal/compliance. Entity formation, lender-of-record partnership, SEC review, custody agreements, BSA/AML development, state compliance verification.
              </p>
            </div>
          </div>
          
          {/* Execution */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Execution</h3>
            <div className="space-y-6">
              <p className="text-lg text-white/70 leading-normal">
                Q1 2026 beta launch depends on this $7M raise.
              </p>
              
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">Demand validation:</h4>
                <p className="text-lg text-white/70 leading-normal mb-6">
                  Network validation through extensive conversations within Bitcoin holder networks shows strong appetite: $2-5K/month installment plans preferred over traditional leverage options (HELOCs requiring home equity, personal loans with investment covenants, margin loans with liquidation risk).
                </p>
                <p className="text-lg text-white/70 leading-normal mb-6">
                  Macro validation: Global Bitcoin ETF adoption (BlackRock iShares, Fidelity) and corporate treasury adoption (MicroStrategy, Tesla) prove institutional acceptance of Bitcoin as asset class. This creates downstream consumer demand for Bitcoin access products.
                </p>
                <p className="text-lg text-white/70 leading-normal mb-6">
                  Market timing: Either seed investors believe Bitcoin adoption trajectory creates demand for non-liquidatable credit access, or they miss the opportunity.
                </p>
              </div>
              
              <p className="text-lg text-white/70 leading-normal mb-4">
                <strong className="text-white">Launch strategy:</strong> Bitcoin Conference 2026 (April 27, Nashville, 50,000+ attendees) provides concentrated launch audience of high-intent Bitcoin buyers.
              </p>
              
              <div className="mb-6">
                <p className="text-lg text-white/70 leading-normal mb-4">Beta validates:</p>
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
              
              <p className="text-lg text-white/70 leading-normal mb-6">
                Budget: $1.4M for beta platform, underwriting system, custody integration, borrower portal.
              </p>
              
              <p className="text-lg text-white/70 leading-normal mb-6">
                If validation fails: Pivot pricing, pivot product, or return remaining capital.
              </p>
              
              <p className="text-lg text-white/70 leading-normal mb-6">
                Transparency: You invest BEFORE formal demand validation. Higher risk, better entry valuation.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                See section 11 (Investment Risks) for detailed analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

