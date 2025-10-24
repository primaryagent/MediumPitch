export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">02</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          What We Do
        </h2>
        
        <div className="space-y-8">
          <p className="text-xl text-white/80 leading-relaxed">
            We offer Bitcoin installment plans with installment purchase pricing equivalent to 15% effective APR over 10-year terms and zero margin call risk. Borrowers own their Bitcoin from day one, held in institutional custody (Coinbase/Anchorage) with transfer restrictions until final payment. Monthly payments remain fixed regardless of Bitcoin's price. Each Bitcoin installment plan receives dedicated account management infrastructure for seamless payments. Consumers maintain the same account number even as loans transfer to bond SPVs, ensuring uninterrupted payment processing.
          </p>
          
          <p className="text-xl text-white/80 leading-relaxed">
            We package these loans into tranches and securitize them as Bitcoin-Backed Securities (BBS) - AAA and BBB-rated bonds paying 7-9% coupons to institutional investors. Each tranche requires $100M in Bitcoin inventory to originate loans, generating a $7.56M annual spread per tranche ($75.6M over 10 years), creating the first securitized Bitcoin installment credit product that delivers fixed interest to bond investors.
          </p>
          
          <p className="text-xl text-white/80 leading-relaxed">
            Our bankruptcy-remote structure keeps Bitcoin off our balance sheet entirely, eliminating corporate risk.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5">
              <p className="text-sm text-white/50 mb-2">Status</p>
              <p className="text-2xl font-bold text-[#F7931A]">Pre-revenue</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10">
              <p className="text-sm text-white/50 mb-2">Launch</p>
              <p className="text-2xl font-bold">April 27, 2026 launch</p>
            </div>
            <div className="p-6 rounded-lg border border-white/10">
              <p className="text-sm text-white/50 mb-2">Raising</p>
              <p className="text-2xl font-bold">$7M at $40M post</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
