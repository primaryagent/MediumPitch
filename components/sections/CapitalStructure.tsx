export default function CapitalStructure() {
  return (
    <section id="capital" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">06</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          Capital Structure
        </h2>
        
        <div className="space-y-12">
          <p className="text-lg text-white/70 leading-normal">
            Warehouse operates as GP/LP fund structure.
          </p>
          
          {/* BTC Now (GP) */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">BTC Now (GP)</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Manages origination, underwriting, servicing, bond placement. Zero balance sheet exposure.
            </p>
            <div className="mb-6">
              <p className="text-xl text-white/80 mb-4">Earns:</p>
              <ul className="space-y-3">
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Management fees (2% annual on warehouse AUM)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Origination fees (1% of loans)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Servicing fees (0.25% annual on loans + 0.5% annual on bonds)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Carried interest (50% of returns above 10% hurdle with high-water mark)</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Warehouse LPs */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Warehouse LPs</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Warehouse operates as GP/LP fund structure (not debt or equity). LPs make capital commitments, receive preferred returns, and participate in profit splits above hurdle - standard private credit fund mechanics identical to Blackstone Credit, Apollo Funds, and KKR Private Credit. <strong className="text-[#F7931A]">Important:</strong> LP economics (10% preferred, 20-28% expected IRR) are designed to attract capital but subject to negotiation based on beta traction and market conditions. As a novel, pre-revenue asset class, actual warehouse terms will likely require adjustment to reflect investor risk appetite.
            </p>
            
            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">LP Economics:</h4>
              <ul className="space-y-3">
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span><strong className="text-white">10% preferred return:</strong> Guaranteed annual return to LPs</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span><strong className="text-white">Compounding shortfall protection:</strong> If warehouse returns fall below 10%, shortfall accumulates and compounds. LPs must receive all accumulated preferred return before GP earns any carry.</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>First LP receives 20% equity in BTC Now GP + preferred economics (locked in, no redemption rights)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Expected LP IRR: 20-28%</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">GP Carried Interest:</h4>
              <ul className="space-y-3">
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span><strong className="text-white">Carry structure:</strong> GP earns 50% of returns ABOVE 10% hurdle</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span><strong className="text-white">High-water mark plus hurdle:</strong> GP only earns carry on returns exceeding both the 10% hurdle AND previous peak performance - protects LPs from paying carry twice on recovery of prior losses</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 rounded-lg border border-white/10 mb-6">
              <p className="text-lg font-semibold mb-4">Example:</p>
              <p className="text-lg text-white/70 leading-normal">
                $150M generates $20M annually (13.3% gross):
              </p>
              <ul className="space-y-2 mt-4">
                <li className="text-base text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>$15M preferred (10% hurdle) → 100% to LPs</span>
                </li>
                <li className="text-base text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>$5M excess - Split 50/50</span>
                </li>
                <li className="text-base text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>LPs receive: $17.5M (11.7% effective)</span>
                </li>
                <li className="text-base text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>BTC Now receives: $2.5M carried interest</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-2xl font-semibold leading-snug mb-4">Redemption Mechanics:</h4>
              <ul className="space-y-3">
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span><strong className="text-white">First LP (20% BTC Now equity holder):</strong> Locked in for life of fund, no redemption rights</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span><strong className="text-white">Subsequent LPs:</strong> May request redemption at any time (simple email request)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Exiting LPs receive: Original capital + all accumulated unpaid preferred return</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span><strong className="text-white">No forced liquidation rights:</strong> LPs cannot force warehouse to liquidate assets during market stress - protects operational continuity</span>
                </li>
              </ul>
            </div>
            
            <p className="text-lg text-white/70 leading-normal">
              <strong className="text-white">Hybrid fund structure:</strong> Combines elements of closed-end funds (locked first LP, long-term capital) with limited redemption flexibility for subsequent LPs. This structure balances operational stability with LP liquidity needs.
            </p>
          </div>
          
          {/* Bond Structure */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Bond Structure</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              $70M AAA + $20M BBB sold to institutions. $10M equity tranche retained by warehouse (first-loss position). $10M reserve pool funded from payments (liquidity buffer).
            </p>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Bonds pay monthly interest + principal (amortizing structure, 10-year term).
            </p>
            
            <div className="p-6 rounded-lg border border-white/10 mb-6">
              <h4 className="text-2xl font-semibold leading-snug mb-6">Payment waterfall (monthly):</h4>
              <ol className="space-y-3">
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] font-semibold min-w-[2rem]">1.</span>
                  <span>Collect borrower payments (15% APR)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] font-semibold min-w-[2rem]">2.</span>
                  <span>Pay servicing fees (0.5% to BTC Now)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] font-semibold min-w-[2rem]">3.</span>
                  <span>Pay AAA (7% coupon + principal)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] font-semibold min-w-[2rem]">4.</span>
                  <span>Pay BBB (9% coupon + principal)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] font-semibold min-w-[2rem]">5.</span>
                  <span>Replenish reserve pool to 10% of outstanding bond face value</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] font-semibold min-w-[2rem]">6.</span>
                  <span>Distribute excess spread to equity (held by warehouse)</span>
                </li>
              </ol>
            </div>
            
            <p className="text-lg text-white/70 leading-normal mb-6">
              Reserve pool builds from cash flows over time. Not upfront capital deployment.
            </p>
            
            <p className="text-lg text-white/70 leading-normal mb-6">
              Equity returns flow to warehouse fund. Creates capital recycling.
            </p>
            
            <p className="text-lg text-white/70 leading-normal mb-6">
              <strong className="text-white">Performance guarantee:</strong> First 12-24 months post-bond-issuance: Warehouse swaps non-performing loans (&gt;60 days delinquent) for performing loans with equal or better credit quality. Protects bond investors during loan seasoning period. Warehouse absorbs performance risk until loans demonstrate payment history.
            </p>
            
            <p className="text-lg text-white/70 leading-normal">
              Self-healing warehouse sustains swap capacity: Swapped loans that default return as Bitcoin. Warehouse reissues Bitcoin as new performing loans. Swap capacity regenerates without depleting warehouse capital. Traditional lenders cannot offer sustainable swaps - each swap permanently consumes capital.
            </p>
          </div>
          
          {/* Bitcoin Recovery & Reissuance */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Bitcoin Recovery & Reissuance</h3>
            
            <p className="text-2xl font-semibold text-[#F7931A] leading-snug mb-8">
              Three-layer capital advantage. Traditional lenders lose capital on defaults. We regenerate performing assets.
            </p>
            
            <div className="space-y-8 mb-12">
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">Layer 1 - Retained Payments</h4>
                <p className="text-lg text-white/70 leading-normal">
                  All payments collected before default stay with warehouse. No clawback. No reversal. Defaulter paid $58K over 3 years? We keep $58K.
                </p>
              </div>
              
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">Layer 2 - Non-Depreciating Collateral</h4>
                <p className="text-lg text-white/70 leading-normal">
                  Bitcoin recovered at market value. Cars depreciate 20-40%. Homes decline in distressed sales. Bitcoin: market rate on recovery date, regardless of default timing.
                </p>
              </div>
              
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">Layer 3 - Reissuance Without Capital</h4>
                <p className="text-lg text-white/70 leading-normal">
                  Recovered Bitcoin reissued as new installment plans. Generate fresh origination fees (1% of face value). Create new 10-year payment streams. Zero fresh capital deployed.
                </p>
              </div>
            </div>
            
            <h4 className="text-3xl font-bold leading-tight mb-8">Capital Impact Comparison</h4>
            <p className="text-lg text-white/70 leading-normal mb-6">$100K Bitcoin loan defaults after 3 years:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-lg border border-white/10">
                <p className="text-sm text-white/50 mb-4">Traditional Consumer Lender</p>
                <div className="space-y-2 text-white/70 mb-4">
                  <p>Principal loss: $100K</p>
                  <p>Payments collected: $58K</p>
                  <p>Collateral recovery: $50K (depreciated)</p>
                  <p className="pt-2 border-t border-white/10">Net loss: -$8K</p>
                  <p>Fresh capital for new loan: $100K</p>
                </div>
                <p className="text-xl font-bold">Total capital impact: $108K</p>
              </div>

              <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5">
                <p className="text-sm text-white/50 mb-4">BTC Now</p>
                <div className="space-y-2 text-white/70 mb-4">
                  <p>Payments retained: $58K</p>
                  <p>Bitcoin recovered: $100K (at market)</p>
                  <p>Reissue: $192K plan + $1,920 fee</p>
                  <p className="pt-2 border-t border-[#F7931A]/30">Net position: breakeven to positive</p>
                  <p>Fresh capital deployed: $0</p>
                </div>
                <p className="text-xl font-bold text-[#F7931A]">Total capital impact: ~$0</p>
              </div>
            </div>
            
            <p className="text-2xl font-bold text-[#F7931A] leading-snug mb-12">
              Capital efficiency gain: 100%+ vs. traditional lending.
            </p>
            
            <div className="mb-12">
              <h4 className="text-3xl font-bold leading-tight mb-8">Why 70% Stress Test Survives</h4>
              
              <p className="text-lg text-white/70 leading-normal mb-6">
                Traditional ABS: 70% defaults = catastrophic loss.
              </p>
              
              <p className="text-lg text-white/70 leading-normal mb-6">
                BTC Now: 70% nominal defaults ≠ 70% economic loss.
              </p>
              
              <div className="p-6 rounded-lg border border-white/10 mb-6">
                <h5 className="text-xl font-semibold mb-4">Effective loss calculation:</h5>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Longer seasoning = more payments retained before default</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Full Bitcoin recovery at market value (not depreciated collateral)</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Reissuance without capital consumption</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-2xl font-semibold text-[#F7931A] leading-snug mb-6">
                Result: 70% nominal default rate - &lt;30% effective economic loss after retained payments, recovery value, and reissuance economics.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                AAA tranche protected through extreme scenarios. Not because defaults don&apos;t happen. Because defaults don&apos;t permanently consume capital.
              </p>
            </div>
            
            <div className="mb-12">
              <h4 className="text-3xl font-bold leading-tight mb-8">Capital Velocity</h4>
              
              <p className="text-lg text-white/70 leading-normal mb-6">
                <strong className="text-white">Traditional warehouse:</strong> Defaults deplete capital. Recovered collateral sold at loss. Fresh capital required for new originations. Capital drains.
              </p>
              
              <p className="text-lg text-white/70 leading-normal mb-6">
                <strong className="text-white">BTC Now warehouse:</strong> Defaults regenerate performing assets. Recovered Bitcoin reissued. No fresh capital needed. Capital compounds.
              </p>
              
              <p className="text-2xl font-bold text-[#F7931A] leading-snug">
                This is why $150M warehouse supports $1.2B originations (12 tranches). Capital recycles rather than depletes.
              </p>
            </div>
            
            <div>
              <h4 className="text-2xl font-semibold leading-snug mb-6">Unique to Commodity-Backed Installments</h4>
              <p className="text-lg text-white/70 leading-normal mb-6">
                Traditional lenders cannot replicate this without:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Non-depreciating collateral (Bitcoin)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Installment purchase structure (not margin loans)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Institutional custody integration</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Continuous reissuance systems</span>
                </li>
              </ul>
              <p className="text-lg font-semibold">
                Structural advantage. Not operational. Competitors need our exact structure to match.
              </p>
            </div>
          </div>
          
          {/* Current Status */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Current Status</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              No committed warehouse capital yet. Active negotiations with private lenders, Bitcoin whales, family offices.
            </p>
            <p className="text-lg text-white/70 leading-normal">
              $7M equity raise funds beta launch, demand validation, proof of concept for warehouse negotiations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

