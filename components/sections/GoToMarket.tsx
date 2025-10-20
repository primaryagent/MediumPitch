'use client';

export default function GoToMarket() {
  return (
    <section id="go-to-market" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-white px-4 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
          Go-to-Market Strategy
        </h2>

        <div className="space-y-8">
          {/* Launch Event */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Launch Event</h3>
            <p className="text-lg text-slate-700 mb-4">
              <strong className="text-orange-600">Bitcoin Conference 2026 (April 27, Las Vegas)</strong> — 50,000+ attendees, concentrated audience of high-intent Bitcoin buyers.
            </p>
            <p className="text-slate-600">
              This provides ideal launch environment: concentrated target audience, high engagement, credibility from association with premier Bitcoin industry event.
            </p>
          </div>

          {/* Viral Referral Program */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Viral Referral Program</h3>
            <p className="text-slate-700 mb-4">
              Pay referrers amount equal to customer&apos;s first installment payment (one-time). Enables YouTube creators, X accounts, and influencers to monetize Bitcoin content while driving customer acquisition.
            </p>

            <div className="bg-orange-50 rounded-xl p-6 mb-4">
              <p className="text-lg font-semibold text-orange-900 mb-2">
                Zero upfront marketing spend
              </p>
              <p className="text-slate-700">
                — referral fees paid from collected revenue only.
              </p>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-slate-800 mb-3">Referral examples (scales with loan size):</p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">→</span>
                  $50K Bitcoin purchase → ~$833 first payment → $833 referral
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">→</span>
                  $100K Bitcoin purchase → ~$1,667 first payment → $1,667 referral
                </li>
                <li className="flex items-center">
                  <span className="text-orange-500 mr-2">→</span>
                  $200K Bitcoin purchase → ~$3,333 first payment → $3,333 referral
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="font-semibold text-slate-800 mb-2">Viral mechanics:</p>
                <p className="text-slate-700">
                  High-ticket items with referral payments that scale with transaction size create strong incentive for crypto influencers to promote product and drive larger purchases.
                </p>
              </div>

              <div className="bg-slate-50 rounded-lg p-4">
                <p className="font-semibold text-slate-800 mb-2">Capital efficiency:</p>
                <p className="text-slate-700">
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
