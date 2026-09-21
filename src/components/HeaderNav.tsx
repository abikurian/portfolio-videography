import React, { useState, useEffect } from 'react';

interface HeaderNavProps {
  wordmarkName: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ wordmarkName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');

  const navItems = [
    { id: 'work', label: 'WORK', href: '#work' },
    { id: 'reels', label: 'REELS', href: '#reels' },
    { id: 'reel', label: 'SHOWREEL', href: '#reel' },
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'bts', label: 'BTS', href: '#bts' },
    { id: 'tools', label: 'TOOLS', href: '#tools' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      // Active section detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-base ease-cut ${
        isScrolled
          ? 'bg-bg-sunken/92 backdrop-blur-md border-b border-line shadow-2xl'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-container mx-auto h-full px-5 md:px-10 flex items-center justify-between">
        {/* Left: Wordmark */}
        <a
          href="#"
          className="font-display font-extrabold text-sm md:text-base tracking-[0.02em] text-text hover:text-accent transition-colors duration-fast"
        >
          {wordmarkName}
        </a>

        {/* Right Desktop Navigation Links (Clean sans-serif font) */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`group relative py-2 font-sans font-semibold text-xs tracking-widest transition-colors duration-fast uppercase ${
                  isActive ? 'text-text' : 'text-text-dim hover:text-text'
                }`}
              >
                {item.label}
                {/* Active / Hover 1px Accent Underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[1px] bg-accent transition-all duration-fast ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 text-text hover:text-accent focus:outline-none"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Sheet */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-bg-sunken z-40 px-6 py-10 flex flex-col justify-between border-t border-line">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold font-display tracking-tight text-text hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
