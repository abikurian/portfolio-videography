This file governs how you build websites in this project. The goal is a site that looks
**deliberately designed by a human studio**, not generated. Every rule below exists to keep
the output from sliding into the default "AI / vibe-coded" look. Follow it on every build.

---

## 0. The one rule that matters most

If a stranger could glance at the page for two seconds and say "an AI made this," you have
failed, regardless of whether the code works. Distinctiveness and restraint are the job, not
a bonus. When in doubt, make a *specific* choice tied to the subject instead of a safe,
generic one.

---

## 1. Hard bans (never ship these)

These are the fingerprints of a vibe-coded site. Do not use them.

- **No purple/violet/indigo as the primary brand color.** This is the single biggest tell.
  Avoid `#7c3aed`, `#8b5cf6`, `#a855f7`, `#6366f1` and their neighbors as the dominant hue.
- **No purple-to-blue or purple-to-pink gradients** anywhere — backgrounds, buttons, or text.
- **No gradient-filled headline words** (e.g. one word in the headline tinted with a
  color gradient while the rest is dark). This is everywhere in generated sites.
- **No meaningless stat blocks** — the "25% · 95% · 2025" row of giant numbers with vague
  labels. Only show a number if it is real and sourced.
- **No emoji inside headings or section titles** (🚀 ✨ 🔒 etc.). Use real iconography instead,
  and use it sparingly.
- **No "Why Choose [Brand]?" sections.** Same for "Transform your X into Y," "Start it. Build
  it. Launch it." and other interchangeable SaaS slogans.
- **No glassmorphism by default** — frosted translucent cards with heavy blur and soft glow.
- **No pill-badge clutter** ("99.9% Uptime", "GDPR Compliant", "24/7 Support 🔒") stacked under
  the hero.
- **No default centered-everything layout** with a single column of centered text from top to
  bottom. Use real composition.
- **No raw system font / unstyled Inter** as the entire type system (see §3).
- **No rainbow of soft drop shadows** on every card. Shadow is an accent, not a texture.

If a design brief or reference *explicitly* asks for one of these (e.g. the client genuinely
wants purple), the brief wins — but confirm it's intentional, and execute it with care so it
still looks designed rather than defaulted.

---

## 2. Follow the user's references first

If the user provides design examples, screenshots, links, or a brand, **those override
everything below except the hard bans.** Before designing:

1. Identify the reference's palette (pull actual hex values), type style, spacing rhythm,
   and the one signature move that makes it feel like itself.
2. Match that direction. Do not "improve" it toward a generic look.
3. If the reference conflicts with a hard ban (e.g. it's purple), tell the user and ask
   whether to match it or adapt it.

No references provided? Then pin the brief yourself: name the concrete subject, its audience,
and the page's single job, and design specifically for that.

---

## 3. Typography (always beautiful, always intentional)

Type carries the personality. Never leave it as a default.

- **Pair two faces with intent:** a characterful display/heading face used with restraint,
  plus a clean, legible body face. Optionally a third utility face for captions or data.
- **Avoid the tired defaults** as your whole system: plain Inter, Roboto, Open Sans, system-ui.
  They're fine as a *body* in some briefs, but pair them with a real display face and a
  deliberate scale.
- **Good starting palettes** (mix display + body, pick to fit the subject, not by habit):
  - Editorial / trustworthy: *Fraunces* or *Libre Caslon* display + *Inter Tight* body
  - Modern / technical: *Space Grotesk* or *General Sans* + *IBM Plex Sans*
  - Warm / human: *Bricolage Grotesque* + *Source Serif* body
  - Sharp / premium: *Geist* or *Satoshi* + *Newsreader* for long copy
- **Set a real type scale.** Define explicit sizes, weights, line-heights, and letter-spacing.
  Headlines get tighter leading and tracking; body copy gets generous line-height (~1.5–1.7).
- **Load fonts properly** (self-host or use a reliable CDN), set `font-display: swap`, and
  always declare fallbacks.

---

## 4. Color

- **Choose a palette of 4–6 named hex values** derived from the subject or reference — not a
  framework default.
- Anchor on a confident neutral base, add **one** disciplined accent, and use it sparingly.
- Ensure text/background contrast meets **WCAG AA** (4.5:1 for body, 3:1 for large text).
- If you want energy, get it from composition, type, and a single bold accent — not from a
  gradient.

---

## 5. Layout & composition

- The hero is a thesis: open with the most characteristic thing about the subject, not a
  centered slogan + two buttons + stat row.
- Use real composition — asymmetry, an editorial grid, intentional whitespace. Vary section
  rhythm; don't stack identical centered blocks.
- Structural devices (numbers, eyebrows, dividers, labels) must encode something true.
  Don't add `01 / 02 / 03` unless the content is genuinely a sequence.
- Match complexity to the vision: minimal directions need precise spacing and detail;
  maximal directions need committed execution.

---

## 6. Motion (optional, never decorative)

- Use motion only where it serves the subject: a considered page-load reveal, a scroll-
  triggered moment, a subtle hover micro-interaction.
- One orchestrated moment beats scattered effects. Excess animation reads as AI-generated.
- Always respect `prefers-reduced-motion`.

---

## 7. Responsive: desktop AND mobile, every time

Non-negotiable. The site must look intentional at every width.

- **Build mobile-first**, then scale up. Test at minimum **375px, 768px, 1024px, 1440px**.
- Type, spacing, and layout all adapt — don't just let a desktop layout shrink.
- Tap targets ≥ 44×44px; no horizontal scroll; no overlapping or clipped elements on small
  screens.
- Images and media are responsive (`max-width: 100%`, correct aspect ratios, sensible
  `srcset` where relevant).
- Navigation collapses sensibly on mobile (and the mobile menu actually works).

---

## 8. Quality floor (build this in silently)

- Visible keyboard focus states on all interactive elements.
- Semantic HTML, alt text on meaningful images, labelled form controls.
- `prefers-reduced-motion` respected.
- Watch CSS specificity — don't let `.section` and element selectors cancel each other's
  padding/margins. Verify spacing actually applies.

---

## 9. Always check your work when done

After building, **do a real review pass before calling it finished.** Do not just stop when
the code runs.

1. **Screenshot / preview** the page at desktop and mobile widths if the environment allows.
   A picture is worth 1000 tokens.
2. **Run the vibe-code checklist** below. If any box is checked, fix it.
3. **Read your own copy** — does it sound like an interchangeable SaaS template? Rewrite it
   to be specific and plain.
4. **Click through** key interactions (nav, mobile menu, buttons, forms) and confirm they work.
5. Apply Chanel's rule: look at the finished page and remove one thing that isn't earning its
   place.
6. Report back what you checked and what you changed.

### Vibe-code checklist (every item must be NO)
- [ ] Is purple/violet the dominant color?
- [ ] Are there any purple/blue/pink gradients?
- [ ] Are any headline words gradient-filled?
- [ ] Is there a row of giant meaningless stats?
- [ ] Are there emoji in headings?
- [ ] Is there a "Why Choose us?" or generic SaaS-slogan section?
- [ ] Is everything centered in one column?
- [ ] Is the type just default Inter/system with no display face?
- [ ] Do cards have frosted-glass + soft-glow styling?
- [ ] Does it break or look unstyled on mobile?

---

## 10. Process summary

Brainstorm → pin the brief / match the reference → draft a small token system (color, type,
layout, one signature element) → critique the plan against this file (would I produce this for
*any* site? then change it) → build → check your work (§9) → critique again.

Distinctiveness comes from the subject. Restraint makes it look designed. Beautiful type and a
clean responsive build are the floor, not the goal.