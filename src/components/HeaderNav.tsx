import React, { useState, useEffect, useRef } from 'react';

interface HeaderNavProps {
  wordmarkName: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ wordmarkName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('work');
  const isClickScrollingRef = useRef(false);

  const navItems = [
    { id: 'about', label: 'ABOUT', href: '#about' },
    { id: 'work', label: 'WORK', href: '#work' },
    { id: 'frames', label: 'FRAMES', href: '#frames' },
    { id: 'showreel', label: 'SHOWREEL', href: '#showreel' },
    { id: 'tools', label: 'TOOLS', href: '#tools' },
    { id: 'contact', label: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScrollState = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);

      // Default to first section when at top of page (e.g. Hero area)
      if (scrollY < 120 && !isClickScrollingRef.current) {
        setActiveSection('about');
      }

      // Bottom of page override to Contact
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 80;
      if (isAtBottom && !isClickScrollingRef.current) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScrollState, { passive: true });
    handleScrollState();

    // IntersectionObserver for dynamic section tracking
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isClickScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScrollState);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    itemId: string
  ) => {
    e.preventDefault();
    setActiveSection(itemId);
    isClickScrollingRef.current = true;

    const el = document.getElementById(itemId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 800);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-colors duration-fast ${
        isScrolled
          ? 'bg-bg border-b border-line'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-container mx-auto h-full px-5 md:px-10 flex items-center justify-between">
        {/* Left: Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveSection('about');
          }}
          className="font-display font-extrabold text-sm md:text-base tracking-[0.02em] text-text hover:text-accent transition-colors duration-fast"
        >
          {wordmarkName}
        </a>

        {/* Right Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`group relative min-h-[44px] inline-flex items-center py-2 px-1 font-sans text-xs uppercase tracking-widest transition-colors duration-fast ${
                  isActive ? 'text-text font-semibold' : 'text-text-dim hover:text-text font-medium'
                } before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-accent before:origin-left before:transition-transform before:duration-base motion-reduce:before:transition-none ${
                  isActive
                    ? 'before:scale-x-100'
                    : 'before:scale-x-0 hover:before:scale-x-100 focus-visible:before:scale-x-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="lg:hidden p-2 text-text hover:text-accent focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
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
        <div className="lg:hidden fixed inset-0 top-16 bg-bg z-40 px-6 py-10 flex flex-col justify-between border-t border-line">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`min-h-[44px] flex items-center text-2xl font-bold font-sans tracking-tight transition-colors ${
                    isActive ? 'text-accent' : 'text-text hover:text-accent'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
