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
    subtext: "Rhythmic, high-impact cuts with S-Log color workflows and beat-synced sound design.",
    heroVideoUrl: "/videos/hero-loop.mp4",
  },
  about: {
    statement: "I turn raw footage into rhythmic edits with S-Log color workflows and beat-synced audio.",
    bio: "Based in Kochi, Kerala. I work with S-Log color workflows, event highlights, beat-synced edits, and narrative cuts, with a focus on pacing and audio mixing.",
    facts: [
      { label: "EXPERIENCE", value: "4+ YRS" },
      { label: "SPECIALTY", value: "Color Grading & Beat Edits" },
      { label: "AVAILABILITY", value: "Open for Freelance & Remote" },
      { label: "LOCATION", value: "Kochi, Kerala" },
    ],
  },
  projects: [
    {
      id: "kinetic-fast-edit",
      index: "01",
      title: "Onam Fast Kinetic Edit",
      style: "Rhythmic Beat Sync",
      role: "Lead Editor & Sound Designer",
      tools: ["DaVinci Resolve", "After Effects"],
      year: "2026",
      runtime: "",
      oneLiner: "Fast-paced Onam cultural edit with beat-synced cuts and sound design.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/fast-cut-preview.mp4",
      fullVideoUrl: "/videos/fast-cut-full.mp4",
    },
    {
      id: "goa-iv-fast-edit",
      index: "02",
      title: "Goa IV Fast Edit",
      style: "Kinetic Event Cut",
      role: "Lead Editor & Colorist",
      tools: ["DaVinci Resolve", "After Effects"],
      year: "2026",
      oneLiner: "Event highlight edit using audio transients, speed ramps, and vivid color.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/hero-loop.mp4",
      fullVideoUrl: "/videos/hero-loop.mp4",
    },
    {
      id: "fuginiz-tech-fest-promo",
      index: "03",
      title: "Fuginiz Tech Fest Promo",
      style: "Typography & Kinetic FX Edit",
      role: "Editor, Sound Designer & Colorist",
      tools: ["DaVinci Resolve", "After Effects", "Blender"],
      year: "2024",
      oneLiner: "Promo with 3D typography, motion graphics, and an S-Log color grade.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/project-2-preview.mp4",
      fullVideoUrl: "/videos/project-2.mp4",
    },
    {
      id: "onam-promo",
      index: "04",
      title: "Onam Promo",
      style: "Fast Cuts & Sound Design",
      role: "Lead Editor & Sound Designer",
      tools: [],
      year: "2024",
      runtime: "",
      oneLiner: "a video made for an Onam promo that shows Onam culture, with fast cuts and sound design.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/project-3-preview.mp4",
      fullVideoUrl: "/videos/project-3-preview.mp4",
    },
    {
      id: "tech-fest-fast-edit",
      index: "05",
      title: "Tech Fest Fast Edit",
      style: "Fast Edit",
      role: "Editor & Colorist",
      tools: [],
      year: "2024",
      runtime: "",
      oneLiner: "fast-paced edit from the Tech Fest.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/project-4-preview.mp4",
      fullVideoUrl: "/videos/project-4.mp4",
    }
  ] as Project[],

  showreel: {
    title: "2025 EDITING SHOWREEL",
    showreelVideoUrl: "/videos/showreel-full.mp4",
    duration: "00:25",
    totalSeconds: 25,
    chapters: [
      { timecode: "00:00", seconds: 0, title: "01 — Onam Fast Kinetic Edit", projectIndex: "01" },
      { timecode: "00:05", seconds: 5, title: "02 — Goa IV Fast Edit", projectIndex: "02" },
      { timecode: "00:11", seconds: 11, title: "03 — Fuginiz Tech Fest Promo", projectIndex: "03" },
      { timecode: "00:17", seconds: 17, title: "04 — Onam Promo", projectIndex: "04" },
      { timecode: "00:22", seconds: 22, title: "05 — Tech Fest Fast Edit", projectIndex: "05" },
    ] as ShowreelChapter[],
  },

  toolsAndProcess: {
    tracks: [
      {
        name: "V1",
        label: "CUT & COLOR",
        blocks: [
          { title: "FOOTAGE SORT & S-LOG LUT", width: "w-1/4", highlight: false },
          { title: "AFTER EFFECTS FAST CUTS", width: "w-1/3", highlight: false },
          { title: "RESOLVE CLIP-BY-CLIP GRADE", width: "w-1/3", highlight: true },
          { title: "EXPORT", width: "w-1/12", highlight: false },
        ]
      },
      {
        name: "A1",
        label: "AUDIO & SYNC",
        blocks: [
          { title: "BGM SELECTION", width: "w-1/3", highlight: false },
          { title: "RHYTHMIC BEAT SYNC", width: "w-1/3", highlight: false },
          { title: "RESOLVE SOUND DESIGN & MIX", width: "w-1/3", highlight: false },
        ]
      },
      {
        name: "FX",
        label: "3D & MOTION",
        blocks: [
          { title: "BLENDER 3D SCENES", width: "w-1/3", highlight: false },
          { title: "AE TYPOGRAPHY & COMPOSITING", width: "w-1/3", highlight: false },
          { title: "LOG EXPORT TO DAVINCI", width: "w-1/3", highlight: false },
        ]
      }
    ],
    toolsList: ["DaVinci Resolve", "After Effects", "Blender"],
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
