export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-sm font-mono text-[#F7931A] mb-6">01</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
          BTC Now
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
          Business Summary
        </h2>
        <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
          <span className="text-[#F7931A] font-bold">Bitcoin installment plans with zero liquidation risk.</span>{' '}
          Platform operational. Custody complete November 2025. Live launch April 27, 2026. First securitized Bitcoin installment credit product - paying institutional investors fixed interest while giving consumers leverage without margin calls. 10-year terms at 15% effective APR. No forced liquidations, ever.
        </p>
      </div>
    </section>
  );
}
