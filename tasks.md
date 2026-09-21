# Implementation Tasks & Architecture: ABI KURIAN VARGHESE Portfolio

This document outlines the detailed component architecture, technical stack setup, custom Tailwind CSS configuration, and execution plan for the high-performance video editing portfolio of **ABI KURIAN VARGHESE**.

---

## 1. Tech Stack & Environment Setup

- **Framework:** Astro 4.x (Static Architecture & SSR-ready layout)
- **UI Framework Integration:** React 18 (Client-side interactive islands)
- **Styling:** Tailwind CSS 3.x (Mapped strictly to `DESIGN.md` custom tokens)
- **Typography:** Google Fonts (`Archivo`, `Instrument Serif`, `IBM Plex Mono`)
- **Icons & Assets:** SVGs for glyphs, optimized MP4/WebM video clips, AVIF/WebP image stills

---

## 2. Exact Tailwind CSS Mapping (`tailwind.config.mjs`)

The CSS custom properties defined in `DESIGN.md` map into Tailwind's theme extension:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkClass: 'dark',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#131211',      // Page background
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
          soft: 'rgba(232, 85, 43, 0.15)', // Selection/focus tint
        },
        ok: '#7FB069',              // Form success green
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
        body: ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
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
    },
  },
  plugins: [],
};
```

---

## 3. Project & Component Architecture

```
src/
├── components/
│   ├── HeaderNav.tsx         # [Client Island] Header with scroll timecode (00:00:00:00 -> 00:02:30:00) & mobile menu
│   ├── Hero.astro            # Hero section with full-bleed looping video, scrim, title card & REC dot
│   ├── AboutSection.astro    # About section statement (10-bit color, beat edits) + 3-col mono facts row
│   ├── SelectedWork.astro    # Section container for projects
│   ├── ProjectRow.tsx        # [Client Island] Alternating project row with video preview on hover/scroll & lightbox launch
│   ├── LightboxModal.tsx     # [Client Island] Accessible video player modal with focus trap & metadata
│   ├── ShowreelPlayer.tsx    # [Client Island] Custom 16:9 NLE player with scrubber, chapter markers & J/K/L keyboard controls
│   ├── FrameGrid.astro       # Behind the Cut contact sheet frame grid
│   ├── BeforeAfterSlider.tsx # [Client Island] Interactive RAW vs GRADED split-screen drag slider
│   ├── TimelineStrip.astro   # NLE 3-track timeline diagram (V1, A1, FX) with playhead marker
│   ├── ToolsProcess.astro    # Tools list (DaVinci Resolve / Premiere Pro / Sony a7 IV (S-Log) / FL Studio)
│   ├── ContactFooter.astro   # Contact CTA headline, email copy button, social links & footer
│   ├── ToastNotification.tsx# [Client Island] "COPIED ✓" floating mono notification
│   └── FilmGrainOverlay.astro# SVG feTurbulence / noise PNG overlay at 4.5% opacity
├── data/
│   └── portfolioData.ts      # Structured data for projects, reel chapters, frame grid, bio & contact
├── layouts/
│   └── Layout.astro          # Root HTML layout with SEO meta tags, Google Fonts, film grain & dark-mode styling
├── pages/
│   └── index.astro           # Main single-page application assembling all sections
└── styles/
    └── global.css            # Global CSS rules, font-face declarations & utility classes
```

---

## 4. Component Technical Specifications

### Component 1: `HeaderNav.tsx` (React Island)
- **Fixed Height:** `64px`, fixed at top.
- **Scroll Behavior:** Switches from transparent to `bg-bg-sunken/92 backdrop-blur-md border-b border-line` after scrolling `40px`.
- **Left:** Wordmark `ABI KURIAN VARGHESE` (Archivo 800 uppercase, tracking `0.02em`).
- **Center/Right Links:** `01 WORK`, `02 REEL`, `03 ABOUT`, `04 BTS`, `05 TOOLS`, `06 CONTACT` (IBM Plex Mono uppercase `12px`). Active item gets a 1px accent underline.
- **Timecode Readout:** Live counter `00:00:00:00 → 00:02:30:00` updating smoothly on scroll (`requestAnimationFrame`).
- **Mobile Menu:** Collapses links into full-screen sheet on `--bg-sunken` with `h1`-sized stacked links.

### Component 2: `Hero.astro` & `HeroVideo.tsx`
- **Video:** `100svh` min `560px` full-bleed muted looping video (AV1/VP9/MP4 fallback) with poster image.
- **Scrim/Vignette:** Radial edge vignette + gradient scrim (`linear-gradient(to top, rgba(13,12,11,.85), transparent 60%)`).
- **Title Card:** Bottom-left inside 1320px container.
  - `meta`: `VIDEO EDITOR — KERALA`
  - `display` headline: "I cut stories to the <span class="font-serif italic text-accent font-normal">beat.</span>"
  - `body-lg` paragraph: "Crafting rhythmic, high-impact edits with 10-bit color precision and immersive sound design."
  - Actions: Primary `Watch the reel ▸` (bg `--text`, text `--bg`, hover `--accent`), Secondary `Selected work ↓`.
- **REC Indicator:** Bottom-right mono readout `REC ● 00:00:12` with blinking accent dot.

### Component 3: `AboutSection.astro`
- **Section Label:** `01 — ABOUT` over top hairline.
- **Desktop Grid:** 4-column left (label + grayscale 3:4 studio/gear still with grain overlay), 7-column right (editorial statement).
- **Copy:** Focus on 10-bit S-Log color grading, pace-driven narrative cuts, and sound design synchronization.
- **Facts Row:** Hairline-separated 3-column mono stats:
  - `EXPERIENCE — 4+ YRS`
  - `SPECIALTY — 10-Bit Color & Beat Edits`
  - `AVAILABILITY — Open for Freelance`

### Component 4: `SelectedWork.astro` & `ProjectRow.tsx`
- **Section Label:** `02 — SELECTED WORK`
- **Project 1:** `fuginiz` — College technology and arts festival promotional video.
- **Project 2:** `Whispers of Motion` — Cinematic narrative short & mood film.
- **Project 3:** `Rhythm & Steel` — High-octane commercial brand edit.
- **Project 4:** `Grade & Grain` — 10-bit S-Log3 color grading breakdown.
- **Layout & Interactivity:**
  - Alternating rows (Left text / Right video well, then Right text / Left video well with edge bleed).
  - Hover on desktop / scroll into view on mobile triggers 4-6s muted video preview loop.
  - Hover state: video scales `1.0 → 1.02` (500ms), 1px `--accent` line draws left-to-right on bottom border, title shifts 8px right.
  - Click opens `LightboxModal.tsx`.

### Component 5: `ShowreelPlayer.tsx` (React Island)
- **Section Label:** `03 — SHOWREEL`
- **Player:** 16:9 container with 2px accent progress bar (grows to 6px on hover).
- **Controls Bar:** Play/Pause glyph, time readout `00:42 / 01:30`, Mute toggle, Fullscreen toggle.
- **Chapter Markers:** Interactive tooltips on timeline showing project names.
- **Keyboard Shortcuts:** `Space` (Play/Pause), `J`/`K`/`L` (Rewind/Pause/Fast-Forward), `←`/`→` (±5s), `F` (Fullscreen), `M` (Mute).

### Component 6: `FrameGrid.astro` & `BeforeAfterSlider.tsx`
- **Section Label:** `04 — BEHIND THE CUT`
- **Grid Layout:** 3 cols × 3 rows desktop (tight 4px gap, no radius, contact sheet feel).
- **Content:** Timeline screenshots, DaVinci Resolve node trees, beat waveforms, RAW vs GRADED stills.
- **Interactive Tile:** `BeforeAfterSlider.tsx` allowing drag comparison between S-Log3 RAW and Rec.709 10-bit graded frames with a 1px accent drag line.
- **Lightbox Integration:** Click any tile to inspect high-res render.

### Component 7: `TimelineStrip.astro` & `ToolsProcess.astro`
- **Section Label:** `05 — TOOLS & PROCESS`
- **3-Track Timeline Diagram:**
  - Track V1: `Assembly → Rough cut → Fine cut → Color → Export`
  - Track A1: `Music / Beat map → Sound design → Mix`
  - Track FX: `Motion graphics → Compositing`
- **Playhead Marker:** Vertical accent line positioned at "Fine cut" stage.
- **Tools Strip:** Plain text list in uppercase mono:
  `DaVinci Resolve / Premiere Pro / Sony a7 IV (S-Log) / FL Studio`

### Component 8: `ContactFooter.astro` & `ToastNotification.tsx`
- **Section Label:** `06 — CONTACT`
- **Headline:** Huge `display` headline: `Got footage? Let's cut it.`
- **Email Copy:** `abikurianvarghese@gmail.com` in `h2` size with accent hover underline. Click triggers clipboard copy and displays `COPIED ✓` toast.
- **Social Links:** Instagram, YouTube, LinkedIn, Behance in mono uppercase style.
- **Footer Row:** `© 2026 ABI KURIAN VARGHESE` (Left), `Designed & edited in Kerala` (Center mono), `Back to top ↑` (Right).

---

## 5. Verification & Quality Checklist

1. **Visual Language:** Strict adherence to `#131211` background, single `#E8552B` accent, 1px hairlines, and 0px border-radii on media.
2. **Typography Scale:** Fluid font size clamping across breakpoints. Instrument Serif italic applied *only* to accent words like "beat".
3. **Performance:** Sub-2s LCP, lazy video previews via `IntersectionObserver`, optimized AVIF images.
4. **Accessibility:** WCAG 2.2 AA compliant focus rings (`2px solid #E8552B`), keyboard shortcuts, full aria modal setup.

---

## 6. Execution Plan & Next Steps

Upon your approval of this `tasks.md` file:
1. Initialize Astro project with `@astrojs/react` and `@astrojs/tailwind`.
2. Configure `tailwind.config.mjs` and `global.css` with Google Fonts and tokens.
3. Construct `portfolioData.ts` with all project, video, and image assets.
4. Build layouts, static Astro components, and React islands.
5. Verify build, responsive behavior, and accessibility.
