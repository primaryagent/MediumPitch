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
                  <span>Carried interest (50% of returns above 10% LP hurdle)</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Warehouse LPs */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Warehouse LPs</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Provide $150M debt capital.
            </p>
            
            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">LP economics:</h4>
              <ul className="space-y-3">
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>10% preferred return (compounding, high-water mark)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>50/50 profit split above hurdle</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>First LP receives 20% equity in BTC Now GP + preferred economics (this dilution is acceptable to seed investors as warehouse facility is existential to operations)</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>Expected LP IRR: 20-28%</span>
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
                  <span>$5M excess → Split 50/50</span>
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
            
            <p className="text-lg text-white/70 leading-normal">
              LPs have zero forced redemption rights. No warehouse line call risk.
            </p>
          </div>
          
          {/* Bond Structure */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Bond Structure</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              $70M AAA + $20M BBB sold to institutions. $10M equity retained by warehouse. $10M reserve pool funded from payments.
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
              Self-healing warehouse sustains swap capacity: Swapped loans that default return as Bitcoin. Warehouse reissues Bitcoin as new performing loans. Swap capacity regenerates without depleting warehouse capital. Traditional lenders cannot offer sustainable swaps—each swap permanently consumes capital.
            </p>
          </div>
          
          {/* Bitcoin Recovery & Reissuance */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Bitcoin Recovery & Reissuance</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Self-healing warehouse mechanism.
            </p>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Installment plans default during warehouse phase → Recover Bitcoin → Reissue in new installment plans → Generate fresh origination fee + new 10-year payment stream.
            </p>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Traditional lending: Default → Liquidate at loss → Redeploy fresh capital.
            </p>
            <p className="text-lg text-white/70 leading-normal mb-8">
              BTC Now: Default → Recover Bitcoin → Reissue without new capital.
            </p>
            
            <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5 mb-6">
              <h4 className="text-2xl font-semibold leading-snug mb-6">Capital efficiency:</h4>
              <p className="text-lg text-white/70 leading-normal mb-4">
                $100M warehouse, 10% defaults = $10M defaulted. Bitcoin backing: $5.2M. Assume Bitcoin down 50%: Worth $2.6M.
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                Traditional lending: $10M loss - $2.6M recovery = $7.4M net loss. Deploy fresh $10M capital. Total impact: $17.4M.
              </p>
              <p className="text-lg text-white/70 leading-normal mb-4">
                BTC Now: Reissue $2.6M Bitcoin as new installment plans → generates $5M new obligations. Effective loss: $5M. Fresh capital: $0. Total impact: $5M.
              </p>
              <p className="text-2xl font-bold text-[#F7931A] leading-snug">
                71% reduction in capital impact through reissuance.
              </p>
            </div>
            
            <p className="text-lg text-white/70 leading-normal">
              Unique to commodity-backed lending. Traditional lenders cannot replicate.
            </p>
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

