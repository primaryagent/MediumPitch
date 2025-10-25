'use client';

import { useState } from 'react';

const sections = [
  { id: 'what-we-do', label: 'What We Do', number: '01' },
  { id: 'market', label: 'The Market', number: '02' },
  {
    id: 'how-it-works',
    label: 'How It Works',
    number: '03',
    subsections: [
      { id: 'for-borrowers', label: 'For Borrowers' },
      { id: 'for-investors', label: 'For Investors' },
      { id: 'unit-economics', label: 'Unit Economics' }
    ]
  },
  { id: 'revenue', label: 'Revenue Model', number: '04' },
  { id: 'capital', label: 'Capital Structure', number: '05' },
  { id: 'moat', label: 'The Moat', number: '06' },
  { id: 'team', label: 'Team', number: '07' },
  { id: 'go-to-market', label: 'Go-to-Market Strategy', number: '08' },
  { id: 'growth-model', label: 'Growth Model & Referral Economics', number: '09' },
  { id: 'ask', label: 'The Ask', number: '10' },
  { id: 'what-this-achieves', label: 'What This $7M Achieves', number: '11' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Header with hamburger */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-black border-b border-white/5 z-50 flex items-center justify-between px-6">
        <div>
          <h1 className="text-lg font-bold">BTC NOW</h1>
          <p className="text-xs text-white/50">Business Summary</p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/80 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-in menu */}
      <aside
        className={`lg:hidden fixed top-0 left-0 bottom-0 w-[280px] bg-black border-r border-white/5 z-50 transform transition-transform duration-300 overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8">
          {/* Logo/Title */}
          <div className="mb-12">
            <h1 className="text-xl font-bold mb-1">BTC NOW</h1>
            <p className="text-sm text-white/50">Business Summary</p>
          </div>
          
          {/* Navigation */}
          <nav className="space-y-1">
            {sections.map(({ id, label, number, subsections }) => (
              <div key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="w-full flex items-start gap-3 px-3 py-2 rounded transition-colors duration-200 text-left hover:bg-white/5 text-white/80"
                >
                  <span className="text-sm font-mono text-white/40 shrink-0">
                    {number}
                  </span>
                  <span className="text-base font-medium">{label}</span>
                </button>
                
                {/* Subsections */}
                {subsections && (
                  <div className="mt-1 space-y-1">
                    {subsections.map((subsection) => (
                      <button
                        key={subsection.id}
                        onClick={() => scrollToSection(subsection.id)}
                        className="w-full flex items-start gap-2 pl-12 pr-3 py-1.5 rounded transition-colors duration-200 text-left hover:bg-white/5"
                      >
                        <span className="text-white/40 shrink-0">→</span>
                        <span className="text-sm text-white/60">{subsection.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}

