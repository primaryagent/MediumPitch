export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">04</div>
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
                  <strong className="text-white">Ownership & Custody:</strong> Your Bitcoin is held in institutional custody under your name from day one, with transfer restrictions until final payment.
                </p>
                
                <p className="text-lg text-white/70 leading-normal">
                  <strong className="text-white">Payment Structure:</strong> Fixed monthly payments regardless of Bitcoin's price. No margin calls, ever. Prepay anytime without penalty.
                </p>
                
                <p className="text-lg text-white/70 leading-normal">
                  <strong className="text-white">Liquidation Options (Borrower-Initiated Only):</strong> Through the app, you can request partial liquidation at any time—any excess Bitcoin is returned to you, any shortfall continues under the original payment schedule. Warehouse and bond investors can NEVER force liquidation—it's your Bitcoin, you control the timing. No USD refunds; pay through completion for full Bitcoin transfer rights.
                </p>
                
                <p className="text-lg text-[#F7931A] leading-normal font-semibold">
                  Key differentiator: Unlike margin loans that force liquidation, only YOU can trigger liquidation. Zero forced liquidation risk.
                </p>
              </div>
              
              <p className="text-lg text-white/70 leading-normal">
                52% collateral coverage: $100,000 Bitcoin backs $192,000 total obligation. 48% credit cushion from service fee. Unlike traditional lending where the unsecured portion represents total loss, this 48% spread provides genuine protection because Bitcoin can always be recovered and reissued.
              </p>
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
                $100M tranches structured as bonds:
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
                  <span>$10M equity (retained by warehouse)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>$10M reserve pool (funded from monthly payments, first-loss protection)</span>
                </li>
              </ul>
              
              <p className="text-lg text-white/70 leading-normal">
                Weighted average coupon: 7.44% ($70M at 7% + $20M at 9% over $90M bonds). Annual spread: 7.56%.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Capital deployment: $12M per tranche ($10M equity retained in bond structure + $2M issuance fee paid by warehouse). Reserve pool builds from payment waterfall, not upfront capital.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                AAA protected by 40% subordination. Survives 70% lifetime defaults with AAA fully protected—because Bitcoin can always be recovered at market value (unlike depreciating auto/home collateral in traditional lending).
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Payment waterfall: Servicing → AAA → BBB → Reserve → Equity.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Equity tranche receives monthly excess spread distributions. Returns flow to warehouse fund. Funds new loan originations. Capital recycles without external raises.
              </p>
              
              <p className="text-2xl font-semibold text-[#F7931A] leading-snug">
                First Bitcoin product that pays fixed interest. Investors never hold Bitcoin. Receive 7-9% fixed coupons from $2.2T credit market.
              </p>
            </div>
          </div>
          
          {/* Capital Efficiency */}
          <div id="capital-efficiency" className="scroll-mt-24">
            <h3 className="text-3xl font-bold leading-tight mb-8 flex items-center gap-3">
              <span className="text-white/40">→</span>
              Capital Efficiency
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-white/70 leading-normal">
                $150M warehouse → $1.5B bond origination capacity (10:1 leverage).
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Each $100M bond requires $12M warehouse capital ($10M equity + $2M issuance fee). During 60-90 day pre-bond loan seasoning: borrowers pay 15% APR. Cash collected builds equity for bond issuance.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Post-bond: warehouse receives monthly excess spread. Funds new loan originations. Capital recycles without external fundraising.
              </p>
              
              <div className="p-6 rounded-lg border border-white/10">
                <h4 className="text-2xl font-semibold leading-snug mb-6">Cash flow cycle:</h4>
                <ol className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] font-semibold min-w-[2rem]">1.</span>
                    <span>Originate $100M loans with warehouse capital</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] font-semibold min-w-[2rem]">2.</span>
                    <span>Collect payments during seasoning (60-90 days)</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] font-semibold min-w-[2rem]">3.</span>
                    <span>Package loans into $100M bond structure</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] font-semibold min-w-[2rem]">4.</span>
                    <span>Sell $90M bonds to institutions ($70M AAA + $20M BBB), retain $10M equity tranche</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] font-semibold min-w-[2rem]">5.</span>
                    <span>Receive $90M cash proceeds from bond sale</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] font-semibold min-w-[2rem]">6.</span>
                    <span>Warehouse capital refreshed: $90M returned + $10M equity retained = $100M gross, net $88M after $2M issuance fee</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] font-semibold min-w-[2rem]">7.</span>
                    <span>Originate next $100M loan batch immediately</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] font-semibold min-w-[2rem]">8.</span>
                    <span>Receive monthly excess spread from issued bonds</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] font-semibold min-w-[2rem]">9.</span>
                    <span>Repeat cycle</span>
                  </li>
                </ol>
              </div>
              
              <p className="text-lg text-white/70 leading-normal">
                $150M warehouse supports 12 simultaneous tranches ($12M each: $10M equity + $2M issuance fee). Sequential origination with capital recycling: bond sale proceeds fund next tranche immediately. Originate back-to-back every 60-90 days.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Profitable at $100M originations. Banks need $500M-$1B to justify overhead.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Scalability:</strong> GP/LP warehouse structure enables rapid capital raises when demand scales. First LP model replicates for subsequent warehouse expansion.
              </p>
              
              <p className="text-lg text-white/70 leading-normal mb-6">
                <strong className="text-white">Self-healing mechanism:</strong> Three-layer capital advantage.
              </p>
              
              <p className="text-lg text-white/70 leading-normal mb-4">
                <strong className="text-white">Layer 1 - Retained Payments:</strong> Keep all payments collected before default. No clawback. Defaulter paid $58K over 3 years? We keep $58K.
              </p>
              
              <p className="text-lg text-white/70 leading-normal mb-4">
                <strong className="text-white">Layer 2 - Non-Depreciating Collateral:</strong> Bitcoin recovered at market value. Cars depreciate 20-40%. Bitcoin: market rate on recovery date.
              </p>
              
              <p className="text-lg text-white/70 leading-normal mb-6">
                <strong className="text-white">Layer 3 - Reissuance Without Capital:</strong> Recovered Bitcoin reissued to new borrowers. Generate fresh origination fees (1% of face value). Create new 10-year payment streams. Zero fresh capital deployed.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Reduces effective LGD by 50-70% vs. traditional consumer lending. Retained payments + Bitcoin recovery + reissuance changes the math entirely.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Enables sustainable loan swap performance guarantee: Non-performing loans swapped out of bonds during 12-24 month seasoning period → if default, Bitcoin recovered → reissued as new performing loans → available for future bond collateral. Traditional lenders deplete capital with each swap. We recycle swapped defaults back into performing assets.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Traditional lenders liquidate repossessed collateral at loss, redeploy fresh capital. We retain Bitcoin, reissue it.
              </p>
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
                  This assumes borrowers with FICO 670+ scores purchasing Bitcoin installments. Comparable to unsecured consumer loan performance for similar credit profiles.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-white/10">
                <p className="text-lg text-white mb-4">
                  <strong className="text-[#F7931A]">Stress test:</strong> Structure survives 70% lifetime defaults with AAA tranche fully protected.
                </p>

                <h4 className="text-2xl font-semibold leading-snug mb-4 text-white">Why we survive extreme stress:</h4>

                <p className="text-lg text-white/70 leading-normal mb-6">
                  Bitcoin recovery and reissuance mechanism reduces effective Loss Given Default (LGD). Unlike traditional consumer lending where repossessed collateral depreciates 20-40%, Bitcoin can always be recovered at market value and reissued to new borrowers. This generates fresh origination fees ($1M per $100M reissued) and new 10-year payment streams without deploying new capital.
                </p>

                <div className="bg-white/5 rounded-lg p-6 mb-6">
                  <p className="text-lg font-semibold text-[#F7931A] mb-4">Example:</p>
                  <p className="text-lg text-white/80 leading-normal mb-4">
                    $100M loan pool, 70% default over 10 years = $70M defaulted principal.
                  </p>
                  <p className="text-lg text-white/80 leading-normal mb-4">
                    Assume average default at year 3-4: Defaulting loans paid ~$58K each before default. Total payments retained from defaulters: ~$40M.
                  </p>
                  <p className="text-lg text-white/80 leading-normal mb-4">
                    Bitcoin backing: $36.4M (52% collateral coverage). Even with 50% Bitcoin price decline: $18.2M recovery value. Reissue as new installment plans → generates $35M in new payment obligations (1.92x multiplier).
                  </p>
                  <p className="text-lg text-white/70 mb-2">
                    Traditional lender: $70M loss - $18.2M recovery = $51.8M net loss.
                  </p>
                  <p className="text-lg text-[#F7931A] font-semibold">
                    BTC Now: Keep $40M in payments + $18.2M recovery + $35M reissue value = Effective loss minimal. Self-healing mechanism sustains warehouse capital through extreme default scenarios.
                  </p>
                </div>

                <p className="text-lg text-white/70 leading-normal">
                  <strong className="text-white">Conservative design:</strong> New asset class with no historical performance data. Base case assumes 8-15% defaults (industry-standard for FICO 670+ unsecured credit). Stress testing at 70% ensures bond structure protects AAA investors even in catastrophic scenarios—made possible by Bitcoin recovery advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

