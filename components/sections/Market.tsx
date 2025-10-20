export default function Market() {
  return (
    <section id="market" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">03</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          The Market
        </h2>
        
        <div className="space-y-12">
          <p className="text-xl text-white/80 leading-relaxed">
            $2.2T Bitcoin market cap. $0 institutional credit access without liquidation risk.
          </p>
          
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Credit gap:</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-6 rounded-lg border border-white/10">
                <span className="text-lg text-white/70">Real estate</span>
                <span className="text-lg text-white/80">$55T value, $13T debt → 23% leverage</span>
              </div>
              <div className="flex justify-between items-center p-6 rounded-lg border border-white/10">
                <span className="text-lg text-white/70">Autos</span>
                <span className="text-lg text-white/80">$6T value, $1.5T debt → 25% leverage</span>
              </div>
              <div className="flex justify-between items-center p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5">
                <span className="text-lg font-semibold">Bitcoin</span>
                <span className="text-lg font-bold text-[#F7931A]">$2.2T value, $0 debt → 0% leverage</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Target market:</h3>
            <ul className="space-y-3">
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>40-50M Americans own cryptocurrency</span>
              </li>
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>36-45M crypto holders have FICO ≥ 670</span>
              </li>
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>Average credit capacity: $30-50K per consumer</span>
              </li>
              <li className="text-lg text-white/70 flex items-start gap-3">
                <span className="text-[#F7931A] mt-1">•</span>
                <span>Conservative 5% penetration at $40K average = $72-90B addressable</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Why existing credit fails:</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Existing credit options fail Bitcoin buyers for predictable reasons:
            </p>
            <div className="space-y-6">
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Personal loans</strong> prohibit investment use—covenant violations trigger immediate full repayment demands.
              </p>
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">HELOCs</strong> require 20% home equity that young high-income earners ($100K-$175K salaries, FICO 720+) haven't yet accumulated.
              </p>
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Credit cards</strong> destroy credit scores at high utilization—carrying a $50K balance for 10 years tanks FICO by 100+ points.
              </p>
              <p className="text-lg text-white/70 leading-normal">
                <strong className="text-white">Margin loans</strong> force liquidations during crashes—May 2021's 50% drop in 72 hours triggered mass liquidations at worst possible prices.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Why 15% APR:</h3>
            <div className="space-y-6">
              <p className="text-lg text-white/70 leading-normal">
                No comparable products exist with zero liquidation risk. Margin loans offer 8-12% rates but liquidate positions during crashes. Personal loans offer 10-18% rates but covenant restrictions prohibit investment use.
              </p>
              <p className="text-lg text-white/70 leading-normal">
                15% APR reflects lender risk while providing the only non-liquidatable Bitcoin credit option in market. We are price makers, not price takers — zero competition exists for this structure.
              </p>
              <blockquote className="border-l-4 border-[#F7931A] pl-6 py-2 mt-6">
                <p className="text-2xl font-bold text-white leading-snug">
                  Growth isn't capped by demand. Growth is capped by credit access.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

