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
                Capital deployment: $10M equity per tranche. Reserve pool builds from payment waterfall, not upfront capital.
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
                Each $100M bond requires $10M equity. During 60-90 day loan seasoning: borrowers pay 15% APR. Cash collected builds equity for bond issuance.
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
                    <span>Sell $100M bonds to institutions ($70M AAA + $20M BBB + $10M equity)</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] font-semibold min-w-[2rem]">5.</span>
                    <span>Receive $100M cash proceeds, retain $10M equity tranche</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] font-semibold min-w-[2rem]">6.</span>
                    <span>Warehouse capital refreshed: $90M returned, $10M equity held</span>
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
                $150M warehouse supports 15 simultaneous tranches ($10M each). Bond sale proceeds + monthly spreads drive capital velocity.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Profitable at $100M originations. Banks need $500M-$1B to justify overhead.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Scalability:</strong> GP/LP warehouse structure enables rapid capital raises when demand scales. First LP model replicates for subsequent warehouse expansion.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Self-healing mechanism:</strong> Recovered Bitcoin from defaults reissued to new borrowers. Generate fresh origination fees without new capital. Reduces effective LGD by 25-40% vs. traditional consumer lending.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Enables sustainable loan swap performance guarantee: Non-performing loans swapped out of bonds during 12-24 month seasoning period → if default, Bitcoin recovered → reissued as new performing loans → available for future bond collateral. Traditional lenders deplete capital with each swap. We recycle swapped defaults back into performing assets.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Traditional lenders liquidate repossessed collateral at loss, redeploy fresh capital. We retain Bitcoin, reissue it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

