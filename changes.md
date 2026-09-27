# Portfolio Revisions (changes.md)

## 1. Fix "AI-Looking" Hero Layout & Typography
The current hero section looks fragmented and generic. Apply the following strict overrides to the layout and Tailwind classes:
*   **Hero Layout:** Stop splitting the screen. The text must sit in the **bottom-left corner** of the viewport, overlaying the full-bleed background video.
*   **Typography (Headlines):** The main headline ("I cut stories to the beat.") looks too standard. Add `tracking-tight` (or `tracking-tighter`) and `leading-[0.9]` to compress the line height. Ensure the `Archivo` font weight is at least `font-extrabold` (800) for the main text, while the word "beat" remains `Instrument Serif` italic. 
*   **Buttons & Boxes:** Remove the blocky white "WATCH THE REEL" button. Replace it with a minimal aesthetic: transparent background, 1px solid `--line` border, and uppercase mono text. 

## 2. Content Pivot: Remove "College" & "Client" framing
Since this is an early-career portfolio, do not frame projects as official client work. Frame them around the *style* and *skill*.
*   **Update "Fuginiz":** Rename this project to "High-Energy Event Promo" or "Kinetic Event Highlight". 
*   **Remove "Client" labels:** Change the metadata labels from `CLIENT / ROLE / YEAR` to `STYLE / TOOLS / RUNTIME`. For example: `STYLE: Kinetic Promo / TOOLS: DaVinci Resolve, Sony S-Log3`.

## 3. New Architecture: Short-Form / Reels Section
Standard 16:9 video wells look terrible with vertical video. We need a dedicated layout for Instagram/TikTok style reels.
*   **Add Section:** `02.5 — SHORT-FORM & REELS` (Place this right under 'Selected Work').
*   **Grid Layout:** Create a responsive CSS grid: 4 columns on desktop (`grid-cols-4`), 2 on mobile (`grid-cols-2`). 
*   **Video Wells:** Force the containers to a `aspect-[9/16]` ratio. 
*   **Behavior:** Just like the main work, these should be muted, looping auto-playing videos on hover. No text descriptions needed under them; let the vertical visuals speak for themselves.