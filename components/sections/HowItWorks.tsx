export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">03</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          How It Works
        </h2>
        
        <div className="space-y-16">
          {/* For Borrowers */}
          <div id="for-borrowers" className="scroll-mt-24">
            <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
              <span className="text-white/40">→</span>
              For Borrowers
            </h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-lg border border-white/10">
                  <p className="text-sm text-white/50 mb-2">Bitcoin spot</p>
                  <p className="text-3xl font-bold text-[#F7931A]">$100,000</p>
                </div>
                <div className="p-6 rounded-lg border border-white/10">
                  <p className="text-sm text-white/50 mb-2">Installment price</p>
                  <p className="text-3xl font-bold">$192,000</p>
                  <p className="text-sm text-white/40 mt-1">(1.92x multiplier, includes service fee)</p>
                </div>
                <div className="p-6 rounded-lg border border-white/10">
                  <p className="text-sm text-white/50 mb-2">Monthly payment</p>
                  <p className="text-3xl font-bold">$1,600</p>
                  <p className="text-sm text-white/40 mt-1">× 120 months</p>
                </div>
                <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5">
                  <p className="text-sm text-white/50 mb-2">Effective APR</p>
                  <p className="text-3xl font-bold text-[#F7931A]">15%</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-white/70 leading-normal">
                  <strong className="text-white">Ownership & Custody:</strong> Your Bitcoin is held in institutional custody (Fireblocks Trust) under your name from day one, with transfer restrictions until final payment. Each customer receives a dedicated Bitcoin address to view the Bitcoin they purchased through the installment plan. No pooling of assets. You can see your Bitcoin and wallet address directly in the app.
                </p>
                
                <p className="text-lg text-white/70 leading-normal">
                  <strong className="text-white">Payment Structure:</strong> Fixed monthly payments regardless of Bitcoin's price. No margin calls, ever. Prepay anytime without penalty.
                </p>
                
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Voluntary Sale Options (Borrower-Initiated Only):</strong> Through the app, you can request to liquidate your position at any time. When you choose to liquidate, we sell only enough of your Bitcoin to cover your remaining installment payments—never all of it. All remaining Bitcoin (not sold, not converted to USD) is released directly to you. Example: You buy $100K Bitcoin via installment plan. Bitcoin appreciates to $300K. You request liquidation with $150K remaining on your obligation: We sell approximately $150K worth of BTC to satisfy your remaining payments, and transfer the remaining ~$150K worth of Bitcoin directly to your wallet. You receive Bitcoin, not cash. In downturn scenarios, your payment obligations continue regardless of Bitcoin's price (no forced sales by lenders), but voluntary liquidation becomes less attractive. Warehouse and bond investors can NEVER force sale. It's your Bitcoin. You control the timing. No USD refunds; complete all payments for full Bitcoin transfer rights.
              </p>
                
                <p className="text-lg text-[#F7931A] leading-normal font-semibold">
                  Key differentiator: Unlike margin loans that force sales during crashes, only you decide when to sell. No forced sales by lenders, ever.
                </p>
              </div>
            </div>
          </div>
          
          {/* For Investors */}
          <div id="for-investors" className="scroll-mt-24">
            <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
              <span className="text-white/40">→</span>
              For Investors
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-white/70 leading-normal">
                Bitcoin collateral represents 52% of total payment obligation: $100,000 Bitcoin backs $192,000 total obligation (1.92x payment-to-collateral ratio). This structure provides loss protection through three layers: (1) retained payments before default, (2) Bitcoin recovery at market value, (3) reissuance economics that generate fresh revenue without new capital. Unlike traditional lending where unsecured portions represent total loss, Bitcoin maintains deep market liquidity (enabling instant liquidation at current market rates rather than depreciated asset values) and reissuance capability, providing genuine loss protection even through price volatility.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Each tranche is backed by $100M in Bitcoin value (measured at plan origination) and is structured as bonds:
              </p>
              <ul className="space-y-3">
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>$70M AAA (7% coupon, monthly interest + principal)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>$20M BBB (9% coupon, monthly interest + principal)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>$10M equity tranche (retained by warehouse, first-loss position)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>$10M reserve pool (funded from monthly payments, liquidity buffer for payment smoothing)</span>
                </li>
              </ul>
              
              <div className="p-6 rounded-lg border border-white/10 mb-6">
                <p className="text-lg font-semibold mb-4">Bond Economics:</p>
                
                <p className="text-lg text-white/70 leading-normal mb-4">
                  <strong className="text-white">Weighted average coupon: 7.44%</strong>
                </p>
                <ul className="space-y-2 mb-4 ml-4">
                  <li className="text-white/70">• $70M AAA bonds at 7% = $4.9M annual interest</li>
                  <li className="text-white/70">• $20M BBB bonds at 9% = $1.8M annual interest</li>
                  <li className="text-white/70">• Total: $6.7M on $90M bonds</li>
                </ul>
                
                <p className="text-lg text-white/70 leading-normal mb-4">
                  <strong className="text-white">Annual spread: 7.56% ($7.56M per tranche)</strong>
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="text-white/70">• Borrower payments: $15M (15% effective APR on $100M financed)</li>
                  <li className="text-white/70">• Bond interest: $6.7M (7.44% weighted average)</li>
                  <li className="text-white/70">• Servicing costs: $0.75M (0.75% of loans)</li>
                  <li className="text-[#F7931A] font-semibold">• Warehouse spread: $7.56M annually</li>
                </ul>
              </div>
              
              <p className="text-lg text-white/70 leading-normal">
                Capital requirement: $100M warehouse capital to originate each tranche (to purchase Bitcoin inventory: 1,000 BTC at $100K spot = $100M, which backs $192M in installment obligations at 1.92x). Post-bond sale: $90M returns to warehouse, $10M equity tranche remains locked in SPV, $2M issuance fee paid to BTC Now GP (revenue, not locked capital). Reserve pool builds from payment waterfall, not upfront capital.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                AAA protected by 40% subordination. Initial stress testing indicates AAA protection through 70% lifetime defaults - Bitcoin can be recovered at market value (unlike depreciating auto/home collateral in traditional lending).
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Payment waterfall: Servicing → AAA → BBB → Reserve → Equity.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                The equity tranche receives monthly excess spread distributions that flow back to the warehouse fund. These returns fund new loan originations, creating a capital recycling mechanism that operates without external fundraising.
              </p>
              
              <p className="text-2xl font-semibold text-[#F7931A] leading-snug">
                First securitized Bitcoin installment credit product with zero forced liquidation risk. Investors never hold Bitcoin. Receive 7-9% fixed coupons from $2.2T credit market.
              </p>
              
              <div className="p-6 rounded-lg border border-white/10 mt-6">
                <h4 className="text-xl font-semibold mb-4">Rating Strategy:</h4>
                <p className="text-lg text-white/70 leading-normal mb-3">
                  <strong className="text-white">Years 1-2:</strong> Issue unrated bonds to private credit buyers and institutional investors. This allows immediate market access while building 12-18 months of loan performance data.
                </p>
                <p className="text-lg text-white/70 leading-normal">
                  <strong className="text-white">Years 2-3:</strong> Transition to rated bonds (A- or better) with rating agency approval. Proprietary performance data showcases Bitcoin recovery/reissuance advantage, supporting higher ratings and broader institutional distribution. Rating reduces required interest payments to bondholders, increasing warehouse spread capture.
                </p>
              </div>
            </div>
          </div>
          
          {/* Unit Economics & Default Assumptions */}
          <div id="unit-economics">
            <h3 className="text-4xl font-bold leading-tight mb-8">Unit Economics & Default Assumptions</h3>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5">
                <p className="text-lg text-white mb-4">
                  <strong className="text-[#F7931A]">Base case lifetime default rate:</strong> 8-15% over 10-year bond life.
                </p>
                <p className="text-lg text-white/70 leading-normal">
                  This assumes borrowers with FICO 670+ scores purchasing Bitcoin installments. Comparable to unsecured consumer loan performance for similar credit profiles, such as credit cards or personal loans.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-white/10">
                <p className="text-lg text-white mb-4">
                  <strong className="text-[#F7931A]">Stress test:</strong> Initial modeling indicates structure survival through 70% lifetime defaults with AAA tranche fully protected.
                </p>
                
                <p className="text-lg text-white/70 leading-normal mb-4">
                  <strong className="text-white">Conservative design:</strong> New asset class with no historical performance data. Base case assumes 8-15% defaults (industry-standard for FICO 670+ unsecured credit). Initial stress testing at 70% ensures bond structure protects AAA investors even in catastrophic scenarios.
                </p>
                
                <p className="text-lg text-white/70 leading-normal">
                  Self-healing warehouse mechanics and detailed recovery analysis in Capital Structure section 06.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

