export default function GrowthModel() {
  return (
    <section id="growth-model" className="py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">10</div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16">
          Growth Model & Referral Economics
        </h2>
        
        <div className="space-y-12">
          {/* Summary Stats Box */}
          <div className="grid md:grid-cols-4 gap-6 p-8 rounded-lg bg-white/5">
            <div>
              <p className="text-sm text-white/70 mb-2">Referral Cost</p>
              <p className="text-3xl font-bold text-[#F7931A]">0.83%</p>
              <p className="text-xs text-white/70">of lifetime revenue</p>
            </div>
            
            <div>
              <p className="text-sm text-white/70 mb-2">Net CAC (After Redemption)</p>
              <p className="text-3xl font-bold text-[#F7931A]">~0.9%</p>
              <p className="text-xs text-white/70">of gross margin</p>
            </div>
            
            <div>
              <p className="text-sm text-white/70 mb-2">High-Volume Influencers</p>
              <p className="text-3xl font-bold text-[#F7931A]">NEGATIVE</p>
              <p className="text-xs text-white/70">CAC (become borrowers)</p>
            </div>
            
            <div>
              <p className="text-sm text-white/70 mb-2">Traditional Fintech CAC</p>
              <p className="text-3xl font-bold text-white/70">5-10%</p>
              <p className="text-xs text-white/70">paid in cash</p>
            </div>
          </div>

          {/* Capital-Efficient Viral Loop */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Capital-Efficient Viral Growth</h3>
            <p className="text-lg text-white/70 leading-normal mb-6">
              Customer acquisition cost paid in platform credits, not cash. Referrers earn credits equal to referred customer's first installment payment. Credits redeemable only on platform - to offset own installment payments or purchase Bitcoin early.
            </p>
            <p className="text-lg text-white/70 leading-normal">
              Result: Every referrer becomes a customer. Credits locked in closed-loop economy. Zero cash outflow for customer acquisition.
            </p>
          </div>

          {/* The Economics */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg border border-white/10">
              <h4 className="text-xl font-bold text-[#F7931A] mb-4">Referral Cost</h4>
              <p className="text-3xl font-bold mb-2">0.83%</p>
              <p className="text-sm text-white/70">
                of lifetime revenue (first installment / 120 total payments)
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-white/10">
              <h4 className="text-xl font-bold text-[#F7931A] mb-4">Margin on Redemption</h4>
              <p className="text-3xl font-bold mb-2">92%</p>
              <p className="text-sm text-white/70">
                When credits redeemed, we earn margin again (1.92x markup over market price)
              </p>
            </div>
            
            <div className="p-6 rounded-lg border border-white/10">
              <h4 className="text-xl font-bold text-[#F7931A] mb-4">Net CAC After Redemption</h4>
              <p className="text-3xl font-bold mb-2">~0.9%</p>
              <p className="text-sm text-white/70">
                of gross margin (traditional fintech: 5-10% paid in cash)
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-2xl font-bold mb-6">How It Works</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-[#F7931A] font-mono text-sm mt-1">01</span>
                <div>
                  <p className="text-lg font-semibold mb-2">Influencer refers customer</p>
                  <p className="text-white/70">Earns credits equal to customer's first installment payment (ranges from $50 to $10,000 depending on loan size and down payment).</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="text-[#F7931A] font-mono text-sm mt-1">02</span>
                <div>
                  <p className="text-lg font-semibold mb-2">Customer pays 120 installments</p>
                  <p className="text-white/70">We earn 92% gross margin per loan (1.92x markup over Bitcoin market price).</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="text-[#F7931A] font-mono text-sm mt-1">03</span>
                <div>
                  <p className="text-lg font-semibold mb-2">Influencer redeems credits on platform</p>
                  <p className="text-white/70">Uses credits to offset own installment payments or purchase Bitcoin. We earn 92% margin again on redemption.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <span className="text-[#F7931A] font-mono text-sm mt-1">04</span>
                <div>
                  <p className="text-lg font-semibold mb-2">High-volume influencers become borrowers (negative CAC)</p>
                  <p className="text-white/70">To claim $50K in accumulated credits, influencer takes out $142K loan (pays back over 5-7 years at 1.92x markup). We earn $131K margin on influencer's loan - 2.6x the credits owed. <strong className="text-white">CAC payments convert into profitable loan originations. Net CAC becomes negative.</strong></p>
                </div>
              </div>
            </div>
          </div>

          {/* The Negative CAC Insight */}
          <div className="p-8 rounded-lg bg-[#F7931A]/10 border border-[#F7931A]">
            <h3 className="text-2xl font-bold mb-4">High-Volume Influencers: CAC Turns Negative</h3>
            <p className="text-lg text-white/70 mb-4">
              When influencers accumulate significant credits (e.g., $50K from 50 referrals), they take out loans to claim economic benefit. To redeem $50K in credits, influencer must borrow remaining balance ($142K) and pay back over 5-7 years.
            </p>
            <p className="text-lg text-white/70 mb-4">
              Result: Our $50K CAC payment converts into a $142K loan origination. We earn 92% margin ($131K) on influencer's loan - more than double the credits owed.
            </p>
            <p className="text-lg font-bold text-white">
              Net economics: Customer acquisition cost becomes negative. Our best promoters become our highest-margin customers. CAC payments fund loan origination, not just marketing.
            </p>
          </div>

          {/* Why Bitcoin Community Amplifies This */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Bitcoin Community Becomes Autonomous Growth Engine</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-bold text-[#F7931A] mb-3">Game Theory Alignment</h4>
                <p className="text-white/70">
                  Every Bitcoin holder benefits from increased demand. "Pump my bag" incentive drives autonomous promotion. Referral system aligns self-interest with platform growth.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-bold text-[#F7931A] mb-3">Content Ecosystem</h4>
                <p className="text-white/70">
                  Thousands of Bitcoin podcasters, YouTubers, Twitter influencers need daily content. Installment vs. cash debate generates organic discussion. Controversy fuels awareness.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-bold text-[#F7931A] mb-3">Closed-Loop Economy</h4>
                <p className="text-white/70">
                  Credits locked to platform. Can't cash out - must spend on Bitcoin purchases. Every redemption creates new loan volume. Feeds securitization pipeline.
                </p>
              </div>
              
              <div className="p-6 rounded-lg border border-white/10">
                <h4 className="text-lg font-bold text-[#F7931A] mb-3">Self-Reinforcing Flywheel</h4>
                <p className="text-white/70">
                  More influencers → more customers → more loans → more securitization → more institutional credibility → more media → more influencers. Cash flow positive Day 1.
                </p>
              </div>
            </div>
          </div>

          {/* Conference Ignition */}
          <div className="p-8 rounded-lg bg-white/5 border border-[#F7931A]/20">
            <h3 className="text-2xl font-bold mb-4">Conference Ignition Strategy</h3>
            <p className="text-lg text-white/70 mb-6">
              $1M Bitcoin Conference investment (April 27, 2026) sparks initial viral wave. 50,000 attendees, 100+ media outlets, 1,500 journalists, 250 institutions. Live origination event proves demand. Influencers physically present activate referral system immediately.
            </p>
            <p className="text-lg text-white/70">
              Goal: Enter Bitcoin content zeitgeist. Generate controversy and debate ("Is installment lending good or bad for Bitcoin?"). Let community take over distribution autonomously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

