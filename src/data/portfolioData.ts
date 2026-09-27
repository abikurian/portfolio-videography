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
    statement: "I turn raw, unedited footage into sharp, rhythmic visual narratives that hold attention from the first frame to the final cut.",
    bio: "Based in Kochi, Kerala, I specialize in S-Log color workflows, high-energy event highlights, beat-synced edits, and cinematic narrative cuts. Focused on editor's discipline for pacing, precision node-tree grading, and custom audio mixing.",
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
      title: "Kinetic Fast Edit",
      style: "Rhythmic Beat Sync",
      role: "Lead Editor & Sound Designer",
      tools: ["DaVinci Resolve", "After Effects"],
      year: "2026",
      runtime: "01:15",
      oneLiner: "High-octane rhythmic beat-synced edit featuring transient audio hits, rapid cuts, and speed ramps.",
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
      year: "2024",
      runtime: "01:45",
      oneLiner: "Fast-cut event highlight video driven by aggressive audio transients, speed ramps, and vivid color pop.",
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
      runtime: "03:12",
      oneLiner: "High-impact promo featuring specialized 3D typography, kinetic motion graphics, and heavy S-Log color grade.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/project-2-preview.mp4",
      fullVideoUrl: "/videos/project-2.mp4",
    },
    {
      id: "rhythm-and-steel",
      index: "04",
      title: "Rhythm & Steel",
      style: "Automotive Beat Cut",
      role: "Beat Sync Editor & Compositor",
      tools: ["DaVinci Resolve", "After Effects"],
      year: "2023",
      runtime: "00:58",
      oneLiner: "Ultra-fast cuts synchronized frame-by-frame with engine revs and transient audio hits.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/project-3-preview.mp4",
      fullVideoUrl: "/videos/hero-loop.mp4",
    },
    {
      id: "grade-and-grain",
      index: "05",
      title: "Grade & Grain",
      style: "Color Grading Breakdown",
      role: "Colorist",
      tools: ["DaVinci Resolve", "Photoshop", "Lightroom"],
      year: "2023",
      runtime: "02:15",
      oneLiner: "Step-by-step node tree transformation from flat S-Log footage to Kodak film print contrast.",
      thumbnailUrl: "",
      previewVideoUrl: "/videos/project-4-preview.mp4",
      fullVideoUrl: "/videos/fast-cut-full.mp4",
    }
  ] as Project[],

  showreel: {
    title: "2025 EDITING SHOWREEL",
    showreelVideoUrl: "/videos/showreel-full.mp4",
    duration: "01:30",
    totalSeconds: 90,
    chapters: [
      { timecode: "00:00", seconds: 0, title: "01 — Kinetic Fast Edit", projectIndex: "01" },
      { timecode: "00:18", seconds: 18, title: "02 — Goa IV Fast Edit", projectIndex: "02" },
      { timecode: "00:42", seconds: 42, title: "03 — Fuginiz Tech Fest Promo", projectIndex: "03" },
      { timecode: "01:05", seconds: 65, title: "04 — Rhythm & Steel Automotive", projectIndex: "04" },
      { timecode: "01:20", seconds: 80, title: "05 — S-Log Color Grade", projectIndex: "05" },
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
    toolsList: ["DaVinci Resolve", "After Effects", "Blender", "Photoshop", "Lightroom"],
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
