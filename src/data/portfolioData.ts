export interface Project {
  id: string;
  index: string;
  title: string;
  style: string;
  role: string;
  tools: string[];
  year: string;
  runtime: string;
  oneLiner: string;
  thumbnailUrl: string;
  previewVideoUrl: string;
  fullVideoUrl: string;
}



export interface ShowreelChapter {
  timecode: string;
  seconds: number;
  title: string;
  projectIndex: string;
}

export const PORTFOLIO_DATA = {
  name: "ABI KURIAN VARGHESE",
  roleTitle: "VIDEO EDITOR — KOCHI, KERALA",
  location: "Kochi, Kerala",
  hero: {
    meta: "VIDEO EDITING & COLOR — BASED IN KOCHI",
    headlineLine1: "I cut",
    headlineLine2: "stories to",
    headlineLine3: "the ",
    headlineAccent: "beat.",
    subtext: "Rhythmic, high-impact cuts with 10-bit S-Log color grading and beat-synced sound design.",
    heroVideoUrl: "/videos/hero-loop.mp4",
  },
  about: {
    statement: "I turn raw, unedited footage into sharp, rhythmic visual narratives that hold attention from the first frame to the final cut.",
    bio: "Based in Kochi, Kerala, I specialize in 10-bit S-Log color workflows, high-energy event highlights, beat-synced edits, and cinematic narrative cuts. Focused on editor's discipline for pacing, precision node-tree grading, and custom audio mixing.",
    facts: [
      { label: "EXPERIENCE", value: "4+ YRS" },
      { label: "SPECIALTY", value: "10-Bit Color & Beat Edits" },
      { label: "AVAILABILITY", value: "Open for Freelance & Remote" },
      { label: "LOCATION", value: "Kochi, Kerala" },
    ],
  },
  projects: [
    {
      id: "kinetic-fast-cut",
      index: "01",
      title: "Kinetic Fast Cut",
      style: "Rhythmic Beat Sync",
      role: "Lead Editor & Sound Designer",
      tools: ["DaVinci Resolve", "Sony S-Log3", "FL Studio"],
      year: "2024",
      runtime: "01:15",
      oneLiner: "High-octane rhythmic beat-synced edit featuring transient audio hits, rapid cuts, and speed ramps.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/fast-cut-preview.mp4",
      fullVideoUrl: "/videos/fast-cut-full.mp4",
    },
    {
      id: "high-energy-event-highlight",
      index: "02",
      title: "High-Energy Event Highlight",
      style: "Kinetic Event Cut",
      role: "Lead Editor & Colorist",
      tools: ["DaVinci Resolve", "Sony S-Log3", "FL Studio"],
      year: "2024",
      runtime: "01:45",
      oneLiner: "Fast-cut event highlight video driven by aggressive audio transients, speed ramps, and 10-bit color pop.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/fuginiz-preview.mp4",
      fullVideoUrl: "/videos/showreel-full.mp4",
    },
    {
      id: "whispers-of-motion",
      index: "03",
      title: "Whispers of Motion",
      style: "Atmospheric Narrative Short",
      role: "Editor, Sound Designer & Colorist",
      tools: ["Sony S-Log3", "DaVinci Resolve"],
      year: "2024",
      runtime: "03:12",
      oneLiner: "A quiet visual study on light and stillness, graded in 10-bit S-Log3 with film print emulation.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/project-2-preview.mp4",
      fullVideoUrl: "/videos/showreel-full.mp4",
    },
    {
      id: "rhythm-and-steel",
      index: "04",
      title: "Rhythm & Steel",
      style: "Automotive Beat Cut",
      role: "Beat Sync Editor & Compositor",
      tools: ["Premiere Pro", "After Effects", "FL Studio"],
      year: "2023",
      runtime: "00:58",
      oneLiner: "Ultra-fast cuts synchronized frame-by-frame with engine revs and transient audio hits.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/project-3-preview.mp4",
      fullVideoUrl: "/videos/showreel-full.mp4",
    },
    {
      id: "grade-and-grain",
      index: "05",
      title: "Grade & Grain",
      style: "10-Bit Color Breakdown",
      role: "Colorist",
      tools: ["DaVinci Resolve Studio", "Sony S-Log3"],
      year: "2023",
      runtime: "02:15",
      oneLiner: "Step-by-step node tree transformation from flat S-Log3 footage to Kodak film print contrast.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/project-4-preview.mp4",
      fullVideoUrl: "/videos/showreel-full.mp4",
    }
  ] as Project[],

  showreel: {
    title: "2025 EDITING SHOWREEL",
    showreelVideoUrl: "/videos/showreel-full.mp4",
    duration: "01:30",
    totalSeconds: 90,
    chapters: [
      { timecode: "00:00", seconds: 0, title: "01 — Kinetic Fast Cut", projectIndex: "01" },
      { timecode: "00:18", seconds: 18, title: "02 — High-Energy Event Highlight", projectIndex: "02" },
      { timecode: "00:42", seconds: 42, title: "03 — Whispers of Motion Narrative", projectIndex: "03" },
      { timecode: "01:05", seconds: 65, title: "04 — Rhythm & Steel Automotive", projectIndex: "04" },
      { timecode: "01:20", seconds: 80, title: "05 — 10-Bit S-Log Color Grade", projectIndex: "05" },
    ] as ShowreelChapter[],
  },

  toolsAndProcess: {
    tracks: [
      {
        name: "V1",
        label: "VIDEO",
        blocks: [
          { title: "Assembly", width: "w-1/5", highlight: false },
          { title: "Rough Cut", width: "w-1/4", highlight: false },
          { title: "Fine Cut", width: "w-1/4", highlight: true },
          { title: "Color Grade", width: "w-1/6", highlight: false },
          { title: "Export", width: "w-1/12", highlight: false },
        ]
      },
      {
        name: "A1",
        label: "AUDIO",
        blocks: [
          { title: "Music / Beat Map", width: "w-1/3", highlight: false },
          { title: "Sound Design & Foley", width: "w-1/3", highlight: false },
          { title: "Final Mix & Master", width: "w-1/3", highlight: false },
        ]
      },
      {
        name: "FX",
        label: "EFFECTS",
        blocks: [
          { title: "Speed Ramps & Transitions", width: "w-2/5", highlight: false },
          { title: "Compositing & Titling", width: "w-3/5", highlight: false },
        ]
      }
    ],
    toolsList: ["DaVinci Resolve", "Premiere Pro", "FL Studio"],
  },

  contact: {
    headline: "Got footage? Let's cut it.",
    email: "abikurianvarghese@gmail.com",
    socials: [
      { name: "INSTAGRAM", url: "https://instagram.com/abii.aep" },
      { name: "YOUTUBE", url: "https://youtube.com" },
      { name: "LINKEDIN", url: "https://linkedin.com" },
      { name: "BEHANCE", url: "https://behance.net" },
    ],
    footerLocation: "Designed & edited in Kochi, Kerala",
  }
};
