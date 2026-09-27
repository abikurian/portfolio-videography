# Abi Kurian Varghese | Video Editing Portfolio

A sleek, high-performance portfolio website designed to showcase fast-paced editing, 10-bit S-Log color grading workflows, and beat-synced sound design. 

Built with **Astro** and **React** for maximum speed and minimal JavaScript overhead, ensuring that heavy video assets load instantly without compromising performance.

## 🚀 Tech Stack

*   **Framework:** [Astro](https://astro.build/) (Static Site Generation)
*   **UI Components:** [React](https://reactjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Deployment:** [Vercel](https://vercel.com/)
*   **Version Control:** Git & GitHub

## 📁 Media Architecture & Asset Management

To ensure optimal performance and avoid build-time bundling issues, all media assets are stored statically and routed via absolute paths.

1.  **Placement:** All video files must be placed directly into the `public/videos/` directory.
2.  **Referencing:** Videos are referenced in the code and data files (`src/data/portfolioData.ts`) using absolute paths from the root, dropping the word `public`. 
    *   *Correct:* `src="/videos/fast-cut-preview.mp4"`
    *   *Incorrect:* `src="../public/videos/fast-cut-preview.mp4"`

### Video Export Guidelines (Web Optimized)
To respect GitHub's 100 MB file limit and ensure instantaneous playback on mobile and desktop, all video assets must be encoded with the following specifications:

*   **Format/Codec:** MP4 / H.264
*   **Resolution:** 1080p (Do not upload 4K source files)
*   **Bitrate (Previews):** 4,000 Kbps (Constant Bitrate), completely muted/no audio track.
*   **Bitrate (Full Cuts):** 8,000 Kbps (Constant Bitrate), AAC audio.
*   **Color Space:** Tagged as Rec.709 Gamma 2.4 to prevent web browser gamma shifts.

## 🛠️ Local Development

1. **Clone the repository and install dependencies:**
   ```bash
   npm install
Start the local development server:

Bash
npm run dev
The site will be available at http://localhost:4321/.

Build for production:

Bash
npm run build
🌐 Deployment
This project is linked to Vercel with continuous integration. Pushing to the main branch on GitHub will automatically trigger a new production build.

Bash
git add .
git commit -m "your commit message"
git push origin main
Note: Ensure the node_modules folder is included in the .gitignore file to prevent Vercel build permission errors (Exit Code 126).

Designed & Developed in Kochi, Kerala