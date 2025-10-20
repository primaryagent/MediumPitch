export default function RevenueModel() {
  return (
    <section id="revenue" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">05</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          Revenue Model
        </h2>
        
        <div className="space-y-12">
          <p className="text-2xl font-semibold text-[#F7931A] leading-snug">
            Two entities. Seven fee streams. 90%+ margins at scale.
          </p>
          
          {/* BTC Now (GP) Revenue */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">BTC Now (GP) Revenue</h3>
            <p className="text-xl text-white/80 mb-6">Per $100M Tranche:</p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">Upfront:</h4>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Loan origination: $1M (1% of loans)</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Bond issuance: $2M (2% of bonds)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">Recurring:</h4>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Loan servicing: $250K/year (0.25% annual on loans)</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Bond servicing: $500K/year (0.5% annual on bonds, 10 years)</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Warehouse management: $3M/year (2% of $150M warehouse AUM)</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">Performance-based:</h4>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Carried interest: 50% of warehouse returns above 10% LP hurdle</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Warehouse Fund Revenue */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Warehouse Fund Revenue</h3>
            <p className="text-xl text-white/80 mb-6">Per $100M Tranche:</p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">Recurring:</h4>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Spread capture: $7.56M annually (15% borrower APR - 7.44% weighted bond coupon). $75.6M per tranche over 10 years.</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Equity distributions: Retained $10M equity tranche per $100M bond issuance</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-2xl font-semibold leading-snug mb-4">Profit split:</h4>
                <ul className="space-y-3">
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>First 10% annual return: 100% to LPs</span>
                  </li>
                  <li className="text-lg text-white/70 flex items-start gap-3">
                    <span className="text-[#F7931A] mt-1">•</span>
                    <span>Returns above 10%: Split 50/50 between warehouse LPs and BTC Now (GP)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Revenue Trajectory */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Revenue Trajectory</h3>
            <p className="text-xl text-[#F7931A] font-semibold mb-4">BTC Now (GP) Revenue Only</p>
            <p className="text-lg text-white/60 mb-6">(excludes warehouse fund spread capture and LP returns)</p>
            <p className="text-xl text-white/80 mb-6">Realistic scenario (Year 1 begins upon warehouse facility close):</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-6 rounded-lg border border-white/10">
                <span className="text-lg font-medium">Year 1</span>
                <span className="text-lg text-[#F7931A] font-bold">$10.5-18M</span>
                <span className="text-sm text-white/50">2-4 new tranches; upfront + recurring + warehouse mgmt</span>
              </div>
              <div className="flex justify-between items-center p-6 rounded-lg border border-white/10">
                <span className="text-lg font-medium">Year 2</span>
                <span className="text-lg text-[#F7931A] font-bold">$23.75-37M</span>
                <span className="text-sm text-white/50">5-8 new tranches; recurring from all outstanding + minimal carry</span>
              </div>
              <div className="flex justify-between items-center p-6 rounded-lg border border-white/10">
                <span className="text-lg font-medium">Year 3</span>
                <span className="text-lg text-[#F7931A] font-bold">$39.75-59M</span>
                <span className="text-sm text-white/50">8-12 new tranches; recurring from 15-24 outstanding + carry ramping</span>
              </div>
              <div className="flex justify-between items-center p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5">
                <span className="text-lg font-medium">Year 4+</span>
                <span className="text-lg text-[#F7931A] font-bold">$53.75-68.5M</span>
                <span className="text-sm text-white/50">10-12 new annually; recurring from 25-36+ outstanding + steady carry</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 rounded-lg border border-white/10 bg-white/5">
              <h4 className="text-xl font-semibold mb-4">Revenue composition:</h4>
              <ul className="space-y-2">
                <li className="text-white/70">• Upfront fees (origination + issuance): <span className="text-white font-semibold">$3M per new tranche</span></li>
                <li className="text-white/70">• Recurring fees (loan + bond servicing): <span className="text-white font-semibold">$750K/year per outstanding tranche</span> over 10-year life</li>
                <li className="text-white/70">• Warehouse management: <span className="text-white font-semibold">$3M annually</span> (fund-level fee, not per-tranche)</li>
                <li className="text-white/70">• Carried interest: <span className="text-white font-semibold">$0-2.5M annually</span> (ramps as warehouse matures)</li>
              </ul>
            </div>
            
            <div className="mt-6 p-6 rounded-lg border border-[#F7931A]/30 bg-[#F7931A]/5">
              <p className="text-sm font-semibold text-[#F7931A] mb-2">Important Note:</p>
              <p className="text-white/70 text-sm">
                This trajectory reflects BTC Now GP management company revenue only. Does NOT include:
                Warehouse fund spread capture ($7.56M annually per tranche), LP preferred returns and profit distributions, or equity tranche distributions.
              </p>
            </div>
            
            <div className="mt-8 space-y-4">
              <h4 className="text-xl font-semibold text-white/90">Key Points:</h4>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <p className="text-white/70">
                    <span className="font-semibold text-white">Capacity:</span> $150M warehouse supports 12 simultaneous tranches—trajectory assumes 60-80% capacity utilization accounting for demand generation and bond placement cycles.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <p className="text-white/70">
                    <span className="font-semibold text-white">Operating Expenses:</span> $2M annually initially (5 people, pre-loan issuance). Ramps to $4.3M annually once first loans issued (10 people, full marketing, travel). Profitable from first tranche—origination and servicing fees exceed operating costs at both phases.
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <p className="text-white/70">
                    <span className="font-semibold text-white">10-Year Cumulative:</span> <span className="text-[#F7931A] font-bold">$400-550M BTC Now GP revenue.</span> 90%+ operating margins at steady state.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

