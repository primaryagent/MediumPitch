'use client';

import { useEffect, useState } from 'react';

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

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('what-we-do');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observers: IntersectionObserver[] = [];
    
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { 
          threshold: 0.3,
          rootMargin: '-100px 0px -60% 0px'
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [mounted]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 40;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!mounted) return null;

  return (
    <aside className="hidden lg:block fixed left-0 top-0 w-[280px] h-screen border-r border-white/5 bg-black overflow-y-auto">
      <div className="p-8">
        {/* Logo/Title */}
        <div className="mb-12">
          <h1 className="text-xl font-bold mb-1">BTC NOW</h1>
          <p className="text-sm text-white/50 mb-3">Deep Dive</p>
          <a 
            href="/"
            className="text-xs text-[#F7931A] hover:text-[#e68915] transition-colors flex items-center gap-1"
          >
            ← Back to Executive Summary
          </a>
        </div>
        
        {/* Navigation */}
        <nav className="space-y-1">
          {sections.map(({ id, label, number, subsections }) => (
            <div key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className={`w-full flex items-start gap-3 px-3 py-2 rounded transition-colors duration-200 text-left ${
                  activeSection === id
                    ? 'border-l-2 border-[#F7931A] bg-[#F7931A]/5 text-white'
                    : 'border-l-2 border-transparent hover:bg-white/5 text-white/80'
                }`}
              >
                <span className={`text-sm font-mono shrink-0 ${
                  activeSection === id ? 'text-[#F7931A]' : 'text-white/40'
                }`}>
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
  );
}

