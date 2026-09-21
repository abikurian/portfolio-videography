/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#131211',      // Warm near-black background
          raised: '#1B1A18',       // Cards, video wells, footer
          sunken: '#0D0C0B',       // Nav on scroll, lightbox backdrop
        },
        line: {
          DEFAULT: '#2B2926',      // Hairline rules, grid borders
          strong: '#3D3A35',       // Hover borders, active dividers
        },
        text: {
          DEFAULT: '#EDE9E1',      // Primary warm off-white
          dim: '#A39E94',          // Secondary text, captions
          faint: '#6B675F',        // Timecodes, metadata, disabled
        },
        accent: {
          DEFAULT: '#E8552B',      // Playhead orange
          soft: 'rgba(232, 85, 43, 0.15)', // 15% selection / focus fill
        },
        ok: '#7FB069',              // Form success
      },
      fontFamily: {
        sans: ['Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['Archivo', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'ui-monospace', 'Menlo', 'monospace'],
      },
      fontSize: {
        display: ['clamp(3.5rem, 9vw, 8.25rem)', { lineHeight: '0.92', letterSpacing: '-0.04em', fontWeight: '800' }],
        h1: ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.03em', fontWeight: '700' }],
        h2: ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        h3: ['clamp(1.25rem, 2vw, 1.375rem)', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.55', fontWeight: '400' }],
        body: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        meta: ['clamp(0.6875rem, 1vw, 0.75rem)', { lineHeight: '1.4', letterSpacing: '0.06em', fontWeight: '500' }],
      },
      spacing: {
        's-1': '4px',
        's-2': '8px',
        's-3': '12px',
        's-4': '16px',
        's-5': '24px',
        's-6': '32px',
        's-7': '48px',
        's-8': '64px',
        's-9': '96px',
        's-10': '144px',
        's-11': '200px',
      },
      borderRadius: {
        DEFAULT: '0px',
        btn: '2px',
      },
      transitionTimingFunction: {
        cut: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
        inout: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      transitionDuration: {
        fast: '160ms',
        base: '320ms',
        slow: '700ms',
      },
      maxWidth: {
        container: '1320px',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s infinite linear',
        blink: 'blink 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
