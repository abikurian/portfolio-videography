# DESIGN.md — Video Editing Portfolio

A design spec for a single-page video editor's portfolio. The reference is a dark, quiet, production-studio layout (small nav, one big hero frame, plain-spoken intro, logo wall, tight behind-the-scenes grid). This spec keeps that calm, editorial feel but pushes it toward *an editor's* identity: timecodes, cut points, frame grids, and a timeline.

---

## 1. Concept

**One line:** *A dark editing suite you can scroll through.*

The page should feel like sitting in front of an NLE (Premiere / DaVinci) at night: near-black surfaces, the work glowing out of it, small utilitarian labels in monospace, and one warm accent used like a playhead marker. The work is the star. The interface stays out of the way.

**Three words to design against:** *rhythmic, restrained, tactile.*

- **Rhythmic** — layout and motion follow cuts and beats, not bounces and fades. Things arrive on a cut, hold, and leave.
- **Restrained** — one accent, two typefaces plus a mono, almost no decoration.
- **Tactile** — grain, hairline rules, timecodes, frame numbers. Details that feel like real production material.

---

## 2. Principles

1. **Footage first.** Every screen has at least one moving or still frame from real work. No stock, no abstract blobs.
2. **Edit the page like a film.** Cut anything that doesn't earn its seconds. Fewer sections, each one confident.
3. **Hairlines over boxes.** Structure comes from 1px rules and whitespace, not cards with shadows.
4. **Type does the talking.** Big, tight headlines; small, quiet metadata.
5. **Motion has a reason.** Motion should imitate editing behavior (cut, scrub, hold, reveal), never decoration.
6. **Fast.** A portfolio that stutters undermines the editor. Target sub-2s LCP on 4G.

### What to avoid (the "AI-generated" tells)

- Purple/blue gradients, neon glows, glassmorphism, glowing blurred orbs
- Centered hero with "Elevate your brand" style copy
- Three identical rounded cards with icon + heading + paragraph
- Emoji as icons, gradient text, sparkle icons
- Every element rounded at 16–24px with a soft drop shadow
- Generic filler copy ("passionate creative", "bringing stories to life", "cutting-edge")
- Perfect symmetry everywhere. Let the grid break in places, like a real editorial layout.
- Stock testimonials with fake avatars

---

## 3. Visual Language

### 3.1 Color

Warm near-black instead of pure `#000`. It reads as film, not as a terminal.

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#131211` | Page background |
| `--bg-raised` | `#1B1A18` | Cards, video wells, footer |
| `--bg-sunken` | `#0D0C0B` | Nav on scroll, lightbox backdrop |
| `--line` | `#2B2926` | Hairline rules, grid borders |
| `--line-strong` | `#3D3A35` | Hover borders, active dividers |
| `--text` | `#EDE9E1` | Primary text (warm off-white, not `#fff`) |
| `--text-dim` | `#A39E94` | Secondary text, captions |
| `--text-faint` | `#6B675F` | Timecodes, metadata, disabled |
| `--accent` | `#E8552B` | Playhead orange. Links on hover, active states, the single "hot" element per view |
| `--accent-soft` | `#E8552B26` | 15% tint for selection / focus fill |
| `--ok` | `#7FB069` | Only for form success |

**Rules**
- The accent appears **at most once or twice per viewport**. If everything is orange, nothing is.
- Never place accent text on `--bg-raised` at small sizes (fails contrast). Use it for shapes, lines, and large text only.
- Text contrast: `--text` on `--bg` is ~14:1, `--text-dim` on `--bg` is ~6.5:1. Keep body copy on `--text` or `--text-dim`, never `--text-faint`.
- **Light mode:** not required. This is a dark-only site. Set `color-scheme: dark`.

### 3.2 Texture

- **Film grain overlay:** a 200×200 monochrome noise PNG (or SVG `feTurbulence`), `opacity: 0.045`, `mix-blend-mode: overlay`, fixed, `pointer-events: none`, sits above content. It should be barely perceptible — you notice it only when it's removed.
- **Vignette on hero video:** radial gradient from transparent to `rgba(0,0,0,.45)` at the edges.
- No gradients on UI surfaces. The only gradient allowed is the bottom-up scrim behind text that overlays video (`linear-gradient(to top, rgba(13,12,11,.85), transparent 60%)`).

### 3.3 Shape & borders

- Radius: `0` for media and grids, `2px` for buttons and inputs. Nothing bigger.
- Borders: `1px solid var(--line)`. Hover: `--line-strong`.
- Shadows: none, except a single soft `0 30px 60px -30px rgba(0,0,0,.6)` on the lightbox player.

---

## 4. Typography

Three roles. Load only the weights used.

| Role | Family | Fallback | Notes |
|---|---|---|---|
| Display / headings | **Archivo** (variable, use width axis ~112–125 for hero) | `"Helvetica Neue", Arial, sans-serif` | Slightly extended, heavy, tight tracking. Feels like a title card |
| Body | **Archivo** at normal width, 400 | same | Keeps the page cohesive |
| Accent serif (sparingly) | **Instrument Serif** *italic* | `Georgia, serif` | One or two words in a headline, e.g. the *word* that matters. Not more |
| Meta / timecode | **IBM Plex Mono** 400/500 | `ui-monospace, Menlo, monospace` | Labels, durations, frame counts, nav index numbers |

### Scale (desktop → mobile)

| Token | Desktop | Mobile | Weight | Tracking | Line-height |
|---|---|---|---|---|---|
| `display` | 132px | 56px | 800 | -0.04em | 0.92 |
| `h1` | 72px | 40px | 700 | -0.03em | 1.0 |
| `h2` | 40px | 28px | 700 | -0.02em | 1.1 |
| `h3` | 22px | 20px | 600 | -0.01em | 1.25 |
| `body-lg` | 20px | 18px | 400 | 0 | 1.55 |
| `body` | 16px | 16px | 400 | 0 | 1.6 |
| `meta` | 12px | 11px | 500 (mono) | 0.06em, UPPERCASE | 1.4 |

Use `clamp()` for fluid sizes, e.g. `--fs-display: clamp(3.5rem, 9vw, 8.25rem)`.

**Rules**
- Headlines are left-aligned. Always. Centered text only inside the lightbox caption.
- Max body line length: 60–68 characters.
- Numbers in mono use `font-variant-numeric: tabular-nums`.
- Section labels look like `01 — SELECTED WORK` in `meta`, with the number in `--accent` only on the active section.

---

## 5. Layout System

- **Container:** max-width `1320px`, side padding `clamp(20px, 4vw, 56px)`.
- **Grid:** 12 columns, 24px gutter (desktop), 4 columns / 16px gutter (mobile).
- **Spacing scale (8pt):** `4, 8, 12, 16, 24, 32, 48, 64, 96, 144, 200`.
- **Section rhythm:** vertical padding `144px` desktop / `88px` mobile. Sections separated by a 1px `--line` rule with the section label sitting on it, like a timeline marker.
- **Breakpoints:** `480 / 768 / 1080 / 1440`.
- **Intentional grid break:** in Selected Work, one project per row is allowed to bleed to the left or right viewport edge. This is the editorial touch that keeps the page from feeling templated.

---

## 6. Page Structure

Single page, six sections. In order:

```
┌──────────────────────────────────────────────────────────┐
│ NAV   ABI ▸ [Work] [Reel] [About] [Contact]     00:00:00 │
├──────────────────────────────────────────────────────────┤
│                                                          │
│                  HERO — looping reel                     │
│         (full-bleed video, title card bottom-left)       │
│                                                          │
├──────────────────────────────────────────────────────────┤
│ 01 — ABOUT                                               │
├──────────────────────────────────────────────────────────┤
│ 02 — SELECTED WORK   (3–5 projects, editorial rows)      │
├──────────────────────────────────────────────────────────┤
│ 03 — REEL / SHOWREEL (full player)                       │
├──────────────────────────────────────────────────────────┤
│ 04 — BEHIND THE CUT  (frame grid, process stills)        │
├──────────────────────────────────────────────────────────┤
│ 05 — TOOLS & PROCESS (timeline strip)                    │
├──────────────────────────────────────────────────────────┤
│ 06 — CONTACT + FOOTER                                    │
└──────────────────────────────────────────────────────────┘
```

### 6.1 Navigation

- Height `64px`, transparent over hero, becomes `--bg-sunken` at 92% opacity with a bottom hairline after scrolling 40px.
- Left: wordmark in Archivo 800, uppercase, `letter-spacing: 0.02em`. Just the name. No logo mark unless one already exists.
- Right: nav links in `meta` style (mono, uppercase, 12px). Small index numbers before each (`01 Work`).
- Far right: a live **timecode** showing scroll progress mapped to a runtime, e.g. `00:00:00:00 → 00:02:30:00`. It updates on scroll. It's decorative but delightful, and it's the one memorable "editor" detail in the header.
- Active link gets a 1px accent underline that is 100% width, not a dot.
- Mobile: links collapse into a full-screen sheet on `--bg-sunken`, links set in `h1` size, stacked left-aligned.

### 6.2 Hero

**Purpose:** show the work within one second.

- Full-bleed muted, looping, autoplay video (a 10–15s cut of the best moments). Height `100svh`, min `560px`.
- Poster frame must be set so there's no black flash. Use the first strong frame.
- Vignette overlay + bottom scrim.
- **Title card**, bottom-left, inside the container:
  - `meta` line: `VIDEO EDITOR — KERALA / REMOTE` (adjust to real location)
  - `display` headline, two lines max, e.g. `I cut stories / to the *beat.*` with the final word in Instrument Serif italic. Use the person's own voice; don't copy this line if it isn't true to them.
  - One sentence under it, `body-lg`, `--text-dim`, max 44ch.
  - Two actions: **primary** `Watch the reel ▸` (solid `--text` on `--bg`, inverted), **secondary** text link `Selected work ↓`.
- Bottom-right: a small mono readout `REC ● 00:00:12` with the dot in `--accent`, blinking at 1s. Only appears when the video is playing.
- Reduced motion: replace video with the poster still.

### 6.3 About ("Who I am")

Mirrors the reference's "Who we are" block: short, plain, confident. No bio essay.

- Two-column on desktop: left 4 cols = section label + small portrait or a still of the editing setup (grayscale, 3:4, grain on). Right 7 cols = the statement.
- Statement in `h2`, 2–3 sentences maximum. Then a `body` paragraph of 3–4 lines.
- Under it, a hairline-separated 3-column **facts row** in mono:
  `EXPERIENCE  —  X yrs` · `SPECIALTY  —  Short-form, music edits` · `AVAILABILITY  —  Open for freelance`
- Copy rules: first person, specific, no adjectives that could describe anyone. Name the kinds of edits you actually do (beat-synced edits, short films, reels, color, sound design).

### 6.4 Selected Work

The main event. **3 to 5 projects**, no more. Quality over quantity.

**Row layout (editorial, alternating):**
- Each project is a full-width row separated by a hairline.
- Left: project index `01`, title (`h1`), one-line description, then a mono metadata list (`ROLE · TOOLS · YEAR · RUNTIME`).
- Right: a 16:9 video well that autoplays a muted 4–6s preview on hover (desktop) or when scrolled into view (mobile). Click opens the lightbox with the full piece.
- Alternate the media side each row. On every second row, let the media bleed off the viewport edge.
- Hover state: media scales `1.0 → 1.02` over 500ms, a thin `--accent` line draws across the bottom edge (left to right, 400ms), and the title shifts `8px` right. Nothing else.

**Project fields**
```
index, title, client_or_type, role, tools[], year, runtime,
one_liner, thumbnail, preview_clip (mp4/webm, ≤ 2MB), full_video_url
```

**Suggested content mix** (use whatever is real for you, ordered by strength):
1. A beat-synced edit or reel (the type of work you're best known for)
2. A short film or narrative piece, edited and colored by you
3. A motion/3D-integrated piece (e.g. a Blender animation composited and cut in your editor)
4. A commercial or brand-style promo, even if self-initiated
5. One before/after breakdown

> If you have a Blender-made animation such as *Whispers of Silence* or a campus short film, they work well as a "narrative / atmosphere" slot and show range beyond pure cutting.

### 6.5 Reel (Showreel)

- Single large player, 16:9, full container width, with custom minimal controls.
- Controls: play/pause, a thin scrubber (2px tall, grows to 6px on hover, `--accent` fill for the played portion), time readout `00:42 / 01:30` in mono, mute, fullscreen. No rounded pill controls, no big translucent play triangle. A small square play glyph in the corner is enough.
- Under the player: **chapter markers** on the scrubber, one for each project in the reel, hover shows the project name in a tiny tooltip.
- Keyboard: `Space` play/pause, `←/→` ±5s, `J/K/L` like an NLE, `F` fullscreen, `M` mute.

### 6.6 Behind the Cut (frame grid)

Directly inspired by the reference's "Behind-the-scenes" 3×N photo grid.

- 3 columns × 3 rows on desktop, 2 columns on tablet, 1–2 on mobile. `4px` gap (tight, like contact-sheet frames), no radius.
- Content: timeline screenshots, color grading node trees, waveform/beat markers, raw vs. graded frames, setup photos. This is the "proof of process" that hiring editors love.
- Each tile has a mono caption revealed on hover, bottom-left over a scrim: `A001_C014 — RAW → GRADED`.
- Mixed aspect ratios are fine; use CSS grid with `grid-auto-flow: dense` and a few tiles spanning 2 columns/rows so it doesn't feel like a spreadsheet.
- One tile can be a **before/after slider** (drag divider, 1px `--accent` line with a small square handle).
- Click opens a lightbox with prev/next.

### 6.7 Tools & Process

Replace the reference's client-logo wall (which you may not have yet) with something more honest and more editor-y: a **timeline strip**.

- A horizontal 3-track diagram that looks like a stripped-down NLE timeline:
  - Track V1: `Assembly → Rough cut → Fine cut → Color → Export`
  - Track A1: `Music / Beat map → Sound design → Mix`
  - Track FX: `Motion graphics → Compositing`
- Blocks are flat rectangles (`--bg-raised`, 1px `--line`), varying widths, with mono labels. A vertical `--accent` playhead line sits at the "Fine cut" block with a small triangle on top.
- Below: a plain text list of tools, in mono, separated by slashes: `DaVinci Resolve / Premiere Pro / After Effects / Blender / Audition`. Only list what you can actually work in.
- **If you have clients or collaborators:** show them as plain text names in a row (`--text-dim`, `h3`), not fake-looking logos. If you get real logos, render them monochrome at 60% opacity, same height, evenly spaced, like the reference.

### 6.8 Contact + Footer

- Huge `display` line: `Got footage? Let's cut it.` — or something in your own voice.
- Below, one email link in `h2` size that underlines with an accent line on hover. Copy-to-clipboard on click with a tiny mono toast `COPIED ✓` (no emoji).
- Secondary links in a hairline-separated row: Instagram / YouTube / LinkedIn / Behance, `meta` style.
- Optional minimal form: Name, Email, "What are we cutting?" textarea, Send. Inputs are bottom-border only (1px `--line`, accent on focus), labels in mono above.
- Footer row: `© 2026 [Name]` left, `Back to top ↑` right, and a mono line `Designed & edited in [city]`.
- Footer background `--bg-raised` with a top hairline.

---

## 7. Components

### Buttons
| Variant | Style |
|---|---|
| Primary | bg `--text`, text `--bg`, `12px 20px`, radius `2px`, `meta` type, arrow glyph `▸` after label. Hover: bg `--accent`, text `--bg`, 200ms |
| Secondary | transparent, 1px `--line-strong` border, text `--text`. Hover: border `--text` |
| Text link | `--text`, underline offset 6px, 1px thickness. Hover: underline color `--accent` |

Focus ring for all: `2px solid var(--accent)`, `outline-offset: 3px`.

### Tags / meta chips
Not pills. Plain mono text separated by ` · `, or bracketed like `[ 4K ]` `[ 60FPS ]`. Zero background.

### Video well
`aspect-ratio: 16/9`, `--bg-raised`, `object-fit: cover`. Show a mono duration label in the bottom-right corner over the scrim (`01:24`). Skeleton state: flat `--bg-raised` with a slow 2s linear shimmer of `--line`.

### Lightbox
- Backdrop `--bg-sunken` at 96%.
- Player max `min(92vw, 1400px)`, 16:9, with the soft shadow described above.
- Caption beneath: title, role, tools, year in mono. Close with `Esc` or a small `CLOSE ✕` mono label top-right (not a circle button).
- Trap focus. Return focus to the trigger on close.

### Toast
Bottom-left, mono, `--bg-raised`, 1px `--line`, auto-dismiss in 2s.

### Custom cursor (optional, desktop only)
A 10px `--text` dot that grows to a 56px ring with the label `PLAY` over video wells (`mix-blend-mode: difference`). Disable on touch and for `prefers-reduced-motion`. If it gets in the way, drop it. The site doesn't depend on it.

---

## 8. Motion

Tone: **cuts, not floats.** Short, crisp, with a slight overshoot at most.

| Token | Value |
|---|---|
| `--ease-cut` | `cubic-bezier(.2, .8, .2, 1)` |
| `--ease-inout` | `cubic-bezier(.65, 0, .35, 1)` |
| `--dur-fast` | `160ms` |
| `--dur-base` | `320ms` |
| `--dur-slow` | `700ms` |

- **Page load:** hero title lines reveal upward through a mask (`clip-path` / `overflow: hidden` parent), 700ms, staggered 90ms. Nav fades in at the end. Total intro under 1.2s.
- **Scroll reveals:** elements translate `24px → 0` with opacity `0 → 1`, 500ms, triggered once at 15% visibility. **No** re-triggering, **no** parallax on text.
- **Section labels:** the hairline draws in from left to right as the section enters (`scaleX 0 → 1`, origin left, 600ms).
- **Hover:** see components. Max one moving property per element besides color.
- **Scroll timecode:** update via `requestAnimationFrame`, throttled, no layout thrash.
- **Reduced motion:** disable all transforms and video autoplay; keep opacity fades at 150ms.

---

## 9. Video & Media Handling

- **Formats:** deliver H.264 MP4 plus a WebM (VP9/AV1) fallback. Hero clip ≤ 6 MB, project previews ≤ 2 MB, 720p, no audio track.
- **Hosting:** full pieces on YouTube/Vimeo (unlisted or public) embedded lazily with a click-to-load facade (poster + play button) to avoid loading heavy iframes. Self-host only the short preview loops.
- **Attributes on preview videos:** `muted playsinline loop preload="metadata"` and `poster`.
- **Autoplay policy:** play only when ≥ 50% visible (IntersectionObserver), pause when out of view. Never more than 2 videos playing at once.
- **Images:** AVIF/WebP with JPEG fallback, `loading="lazy"`, explicit `width`/`height` to prevent layout shift, `decoding="async"`.
- **Grade the thumbnails.** Use a consistent look across all stills (same contrast, same grain), so the grid reads as a coherent body of work.

---

## 10. Responsive Behavior

| Element | ≥1080 | 768–1079 | <768 |
|---|---|---|---|
| Nav | inline links + timecode | inline links, timecode hidden | hamburger sheet |
| Hero title | `display` 2 lines | `h1` 2 lines | 56px, 3 lines OK |
| Work rows | 5/7 col split, alternating | stacked, media first | stacked, media first, no edge-bleed |
| Frame grid | 3 col | 2 col | 2 col (tight) |
| Timeline strip | full | full | horizontally scrollable with edge fade |
| Facts row | 3 col | 3 col | stacked with hairlines |

- Tap targets ≥ 44×44px.
- On touch, hover previews become "in view = plays".
- Test at 360, 390, 768, 1024, 1440, and 1920 widths. On ultrawide, cap container and let the hero video stay full-bleed.

---

## 11. Accessibility

- Semantic landmarks: `header`, `nav`, `main`, `section[aria-labelledby]`, `footer`.
- Every video has a text title and (if spoken) captions in a `.vtt`. Decorative loops get `aria-hidden="true"`.
- Skip link: "Skip to work", first tabbable element, visible on focus.
- All interactive elements keyboard reachable with a visible accent focus ring.
- Don't rely on color alone. The active nav item has an underline, not just an accent color.
- Respect `prefers-reduced-motion` and `prefers-color-scheme` (fixed dark, but declare it).
- Lightbox: `role="dialog"`, `aria-modal="true"`, focus trap, `Esc` to close.
- Target WCAG 2.2 AA.

---

## 12. Tech Notes

- **Stack suggestion:** plain HTML + modern CSS + a tiny amount of vanilla JS is enough. Astro or Next.js if you want a build step. Avoid heavy animation libraries; GSAP (ScrollTrigger only) is the maximum.
- **CSS approach:** custom properties for tokens, `clamp()` for fluid type, CSS grid for layout, `@layer` for order.
- **Performance budget:** JS ≤ 90 KB gz, CSS ≤ 25 KB gz, fonts ≤ 120 KB (subset Latin, `font-display: swap`, preload the display font).
- **SEO/Share:** unique `<title>`, meta description, OG image (a 1200×630 graded still with your name), `schema.org/Person`.
- **Analytics:** privacy-friendly only (Plausible / Umami), optional.

### Token starter

```css
:root {
  color-scheme: dark;

  /* color */
  --bg: #131211;
  --bg-raised: #1b1a18;
  --bg-sunken: #0d0c0b;
  --line: #2b2926;
  --line-strong: #3d3a35;
  --text: #ede9e1;
  --text-dim: #a39e94;
  --text-faint: #6b675f;
  --accent: #e8552b;
  --accent-soft: #e8552b26;

  /* type */
  --font-display: "Archivo", "Helvetica Neue", Arial, sans-serif;
  --font-serif: "Instrument Serif", Georgia, serif;
  --font-mono: "IBM Plex Mono", ui-monospace, Menlo, monospace;

  --fs-display: clamp(3.5rem, 9vw, 8.25rem);
  --fs-h1: clamp(2.5rem, 5vw, 4.5rem);
  --fs-h2: clamp(1.75rem, 3vw, 2.5rem);
  --fs-body: 1rem;
  --fs-meta: 0.75rem;

  /* space (8pt) */
  --s-1: 4px;  --s-2: 8px;  --s-3: 12px; --s-4: 16px;
  --s-5: 24px; --s-6: 32px; --s-7: 48px; --s-8: 64px;
  --s-9: 96px; --s-10: 144px;

  /* motion */
  --ease-cut: cubic-bezier(.2, .8, .2, 1);
  --ease-inout: cubic-bezier(.65, 0, .35, 1);
  --dur-fast: 160ms; --dur-base: 320ms; --dur-slow: 700ms;

  /* layout */
  --container: 1320px;
  --pad-x: clamp(20px, 4vw, 56px);
}

.meta {
  font: 500 var(--fs-meta)/1.4 var(--font-mono);
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--text-faint);
  font-variant-numeric: tabular-nums;
}
```

### Suggested file structure

```
/portfolio
├─ index.html
├─ /assets
│  ├─ /video     hero.mp4, hero.webm, previews/*.mp4
│  ├─ /img       stills, bts/*, og.jpg, grain.png
│  └─ /fonts     archivo-var.woff2, plex-mono-500.woff2, instrument-serif-italic.woff2
├─ /css          tokens.css, base.css, components.css, sections.css
└─ /js           nav-timecode.js, video-observer.js, lightbox.js, reveal.js
```

---

## 13. Content Checklist (fill these in before building)

- [ ] Name and short wordmark
- [ ] Location / availability line
- [ ] Hero clip (10–15s, your absolute best moments) + poster frame
- [ ] 3–5 projects, each with: title, role, tools, year, runtime, 4–6s preview, full link
- [ ] Full showreel (60–90s)
- [ ] 6–9 process stills (timeline, grade, before/after, setup)
- [ ] 2–3 sentence About statement written in your own voice
- [ ] Portrait or editing-desk photo
- [ ] Tools list (only what you use)
- [ ] Email + 2–3 social links
- [ ] OG image

---

## 14. Final QA — "Does it look designed, not generated?"

- [ ] Is there exactly one accent color, used sparingly?
- [ ] Are there zero gradients on UI surfaces and zero glow effects?
- [ ] Do headings feel like title cards, not SaaS marketing?
- [ ] Is at least one layout moment intentionally asymmetric?
- [ ] Is every piece of copy something only *you* could say?
- [ ] Do all thumbnails share one grade/look?
- [ ] Does the page still work with video disabled, JS disabled, and reduced motion on?
- [ ] Can someone see your best work within 5 seconds of landing?
- [ ] Lighthouse: Performance ≥ 90, Accessibility ≥ 95.
