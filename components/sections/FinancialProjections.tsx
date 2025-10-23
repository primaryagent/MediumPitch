export default function FinancialProjections() {
  return (
    <section id="projections" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">13</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          Financial Projections
        </h2>
        
        <div className="space-y-12">
          {/* Base Case */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Base Case</h3>
            <p className="text-xl text-[#F7931A] font-semibold mb-2">BTC Now (GP) Revenue Only</p>
            <p className="text-lg text-white/60 mb-6">(excludes warehouse fund spread capture and LP returns)</p>
            <p className="text-xl text-white/80 mb-6">Revenue projections (Year 1 begins when first loans are issued at Q1 2026 beta launch):</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-6 rounded-lg border border-white/10">
                <span className="text-lg font-medium">Year 1</span>
                <span className="text-lg text-[#F7931A] font-bold">$10.5-18M</span>
                <span className="text-sm text-white/50">2-4 new tranches; upfront + recurring + mgmt</span>
              </div>
              <div className="flex justify-between items-center p-6 rounded-lg border border-white/10">
                <span className="text-lg font-medium">Year 2</span>
                <span className="text-lg text-[#F7931A] font-bold">$23.75-37M</span>
                <span className="text-sm text-white/50">5-8 new; recurring from all outstanding</span>
              </div>
              <div className="flex justify-between items-center p-6 rounded-lg border border-white/10">
                <span className="text-lg font-medium">Year 3</span>
                <span className="text-lg text-[#F7931A] font-bold">$39.75-59M</span>
                <span className="text-sm text-white/50">8-12 new; recurring from 15-24 outstanding</span>
              </div>
              <div className="flex justify-between items-center p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5">
                <span className="text-lg font-medium">Year 4+</span>
                <span className="text-lg text-[#F7931A] font-bold">$53.75-68.5M</span>
                <span className="text-sm text-white/50">10-12 new annually; 25-36+ outstanding</span>
              </div>
            </div>
            
            <div className="mb-6 p-6 rounded-lg border border-white/10 bg-white/5">
              <p className="text-sm font-semibold text-[#F7931A] mb-2">Revenue composition:</p>
              <p className="text-white/70 text-sm">
                Upfront fees ($3M/tranche) + Recurring fees ($750K/year per outstanding tranche) + Warehouse mgmt ($3M/year) + Carried interest ($0-2.5M/year ramping)
              </p>
            </div>
            
            <div className="space-y-4 mt-6">
              <h4 className="text-xl font-semibold text-white/90">Key Points:</h4>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <p className="text-white/70">
                    <span className="font-semibold text-white">Operating Expenses:</span> $2M annually initially (5 people, pre-loan issuance). Ramps to $4.3M annually once first loans issued (10 people, full marketing, travel). Profitable from first tranche. No path-to-profitability risk.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <p className="text-white/70">
                    <span className="font-semibold text-white">10-Year Cumulative:</span> <span className="text-[#F7931A] font-bold text-xl">$400-550M BTC Now GP revenue.</span> 90%+ operating margins at steady state.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stress Testing */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Stress Testing</h3>
            <div className="space-y-6">
              <p className="text-lg text-white/70 leading-normal">
                Survives 90% Bitcoin crash + 70% lifetime defaults.
              </p>

              <p className="text-lg text-white/70 leading-normal">
                10M Monte Carlo simulations across 432 scenarios.
              </p>

              <div className="p-6 rounded-lg border border-white/10 mb-6">
                <h4 className="text-2xl font-semibold leading-snug mb-6">Bond structure resilience:</h4>
                <p className="text-lg text-white/70 leading-normal mb-4">
                  Bitcoin recovery advantage: Unlike traditional ABS where repossessed collateral depreciates 20-40%, Bitcoin can always be recovered at market value and reissued. This self-healing mechanism makes the structure dramatically more resilient than traditional consumer lending.
                </p>
                <p className="text-lg text-white/70 leading-normal">
                  AAA tranche remains fully protected through 70% lifetime defaults - even with a 90% Bitcoin price crash factored in. This protection level is possible because we can recover and reissue defaulted Bitcoin at market value, generating fresh revenue without new capital.
                </p>
              </div>

              <p className="text-lg text-white/70 leading-normal mb-6">
                Business survives extreme stress scenarios with AAA protection intact.
              </p>
              
              <p className="text-lg text-white/70 leading-normal mb-6">
                Conservative design for new asset class with no historical performance data.
              </p>
              
              <p className="text-lg text-white/70 leading-normal mb-6">
                <strong className="text-white">Full stress test models available to investors:</strong> Monte Carlo simulations, jump diffusion models, custom scenario testing. Investors can run sensitivity analyses on default rates, Bitcoin volatility, and prepayment assumptions.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Self-sustaining after first tranche sale. Origination fees + servicing fees cover operating expenses. Each subsequent tranche adds to cumulative revenue without increasing fixed costs.
              </p>
            </div>
          </div>
          
          {/* Long-Term Economics */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Long-Term Economics</h3>
            <div className="space-y-6">
              <p className="text-lg text-white/70 leading-normal">
                Year 5+: Origination + servicing on 30+ cumulative tranches + equity spread capture from seasoned bonds.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Year 10+: Origination + servicing on 60+ cumulative tranches + full spread potential from mature portfolio.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Equity tranche returns: Bonds issued in Year 1 return equity distributions for 10 years. By Year 5, warehouse receives equity distributions from 20+ bonds simultaneously.
              </p>
              
              <p className="text-lg text-white/70 leading-normal">
                Self-healing warehouse: Keep payments collected before default + recover Bitcoin at market value + reissue without fresh capital. Generates incremental origination fees and reduces effective LGD vs. traditional consumer lending (25-40% from non-depreciating collateral alone, 50-70% including all three protection layers). Reduces dependency on fresh LP capital for growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

