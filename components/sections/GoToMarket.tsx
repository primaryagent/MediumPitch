export default function GoToMarket() {
  return (
    <section id="go-to-market" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">09</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          Go-to-Market Strategy
        </h2>

        <div className="space-y-12">
          {/* Launch Event */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Launch Event</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              <strong className="text-white">Bitcoin Conference 2026 (April 27, Las Vegas)</strong> - 50,000+ attendees, concentrated audience of high-intent Bitcoin buyers.
            </p>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Live origination event with real loans funded Day 1. Main stage announcement with Bloomberg, Fox, and CNBC coverage confirmed. Creates institutional FOMO and warehouse LP closing leverage.
            </p>
            <p className="text-lg text-white/70 leading-normal">
              Not a demo. Not a beta. Real customers receive Bitcoin same-day with 10-year installment terms.
            </p>
          </div>

          {/* Viral Referral Program */}
          <div>
            <h3 className="text-4xl font-bold leading-tight mb-8">Viral Referral Program</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Pay referrers amount equal to customer&apos;s first installment payment (one-time). Enables YouTube creators, X accounts, and influencers to monetize Bitcoin content while driving customer acquisition.
            </p>

            <div className="p-6 rounded-lg border border-[#F7931A] bg-[#F7931A]/5 mb-6">
              <p className="text-2xl font-semibold text-[#F7931A] leading-snug mb-4">
                Zero upfront marketing spend
              </p>
              <p className="text-lg text-white/70 leading-normal">
                Referral fees paid from collected revenue only.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-2xl font-semibold leading-snug mb-4">Referral examples (scales with loan size):</h4>
              <ul className="space-y-3">
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>$50K Bitcoin purchase → $800 first payment → $800 referral</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>$100K Bitcoin purchase → $1,600 first payment → $1,600 referral</span>
                </li>
                <li className="text-lg text-white/70 flex items-start gap-3">
                  <span className="text-[#F7931A] mt-1">•</span>
                  <span>$200K Bitcoin purchase → $3,200 first payment → $3,200 referral</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-white/10">
                <h4 className="text-2xl font-semibold leading-snug mb-4">Viral mechanics:</h4>
                <p className="text-lg text-white/70 leading-normal">
                  High-ticket items with referral payments that scale with transaction size create strong incentive for crypto influencers to promote product and drive larger purchases.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-white/10">
                <h4 className="text-2xl font-semibold leading-snug mb-4">Capital efficiency:</h4>
                <p className="text-lg text-white/70 leading-normal">
                  No upfront marketing burn. Customer acquisition costs are paid from revenue after first payment collected. Scales organically with transaction volume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
