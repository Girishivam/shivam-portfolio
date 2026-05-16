export const profile = {
  name: "Shivam Giri",
  role: "Full Stack Developer · AI Enthusiast · Cloud & Creative Technologist",
  tagline:
    "B.Tech CS-AI Student passionate about building immersive digital experiences, modern web applications, and exploring AI & cloud technologies.",
  email: "shivamgiri.tech22@gmail.com",
  socials: {
    github: "https://github.com/Girishivam",
    linkedin:"https://www.linkedin.com/in/shivam-giri-6a890a2a7",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
  },
};

export const aboutHighlights = [
  { value: "2026", label: "B.Tech CS-AI" },
  { value: "5+", label: "Personal Projects" },
  { value: "10+", label: "Technologies" },
  { value: "∞", label: "Curiosity" },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: "Intermediate" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "HTML & CSS", level: "Intermediate" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Git & GitHub", level: "Intermediate" },
      { name: "VS Code", level: "Intermediate" },
    ],
  },
  {
    title: "Currently Exploring",
    skills: [
      { name: "Machine Learning", level: "Learning" },
      { name: "Deep Learning", level: "Learning" },
      { name: "Computer Vision", level: "Learning" },
      { name: "AWS Cloud", level: "Exploring" },
    ],
  },
];

export const levelMeta: Record<string, { pct: number; color: string }> = {
  Intermediate: { pct: 70, color: "var(--neon-cyan)" },
  Learning: { pct: 50, color: "var(--neon-purple)" },
  Exploring: { pct: 30, color: "var(--neon-magenta)" },
};

export const projects = [
  {
    title: "AI-Powered Blind Assistance System",
    category: "Academic · AI",
    tech: ["Python", "OpenCV", "OCR", "Speech Recognition"],
    description:
      "A smart assistant prototype designed to help visually impaired users through object detection, text reading, and voice feedback.",
    features: ["Object detection", "Text-to-speech", "Real-time camera input"],
    accent: "from-cyan-400/30 to-blue-500/30",
  },
  {
    title: "LeetCode-Style Practice Platform",
    category: "Personal · Full Stack",
    tech: ["React", "Node.js", "MongoDB"],
    description:
      "A coding-practice platform with authentication, problem listings, and a clean problem-solving UI.",
    features: ["JWT auth", "Problem CRUD", "Submission history"],
    accent: "from-emerald-400/30 to-cyan-500/30",
  },
  {
    title: "Cosmic Solar System Visualizer",
    category: "Creative · Frontend",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "An immersive animated solar system built with vanilla web technologies, focused on motion and atmosphere.",
    features: ["Orbital animation", "Interactive zoom", "Ambient soundscape"],
    accent: "from-indigo-400/30 to-purple-500/30",
  },
  {
    title: "Smart Irrigation System",
    category: "Hardware · IoT",
    tech: ["Arduino", "Sensors", "C++"],
    description:
      "An automated irrigation prototype that optimizes water usage with soil moisture and weather sensors.",
    features: ["Moisture sensing", "Auto valves", "Low-power"],
    accent: "from-green-400/30 to-emerald-500/30",
  },
  {
    title: "Modern Gym Website",
    category: "Personal · Frontend",
    tech: ["React", "JavaScript", "CSS"],
    description:
      "A responsive fitness website with bold typography, smooth motion, and a strong modern visual identity.",
    features: ["Responsive UI", "Animated hero", "Class schedule"],
    accent: "from-orange-400/30 to-rose-500/30",
  },
];

export const journey = [
  {
    year: "2022",
    title: "Started B.Tech CS-AI",
    detail:
      "Began undergraduate studies in Computer Science & Artificial Intelligence with a focus on fundamentals.",
  },
  {
    year: "2023",
    title: "Dove into Web Development",
    detail:
      "Built first full-stack projects with React, Node.js and MongoDB. Started exploring creative frontend.",
  },
  {
    year: "2024",
    title: "Explored AI & Computer Vision",
    detail:
      "Worked on academic ML projects including pneumonia detection and an assistive vision prototype.",
  },
  {
    year: "2025",
    title: "Cloud, 3D & Immersive UI",
    detail:
      "Currently learning AWS fundamentals, deployment workflows, and building Three.js-powered interfaces.",
  },
  {
    year: "2026",
    title: "Graduating · Open to Roles",
    detail:
      "Graduating soon and actively looking for opportunities to contribute, learn, and build at scale.",
  },
];

export const achievements = [
  {
    title: "Project Builder",
    detail: "Designed and shipped 10+ personal and academic projects across web, AI, and IoT.",
  },
  {
    title: "Creative Frontend",
    detail: "Strong interest in immersive UI — 3D, motion design, and futuristic interfaces.",
  },
  {
    title: "AI Exploration",
    detail: "Hands-on learning with computer vision, deep learning fundamentals and Python tooling.",
  },
  {
    title: "Cloud Learning",
    detail: "Actively studying AWS fundamentals, deployment, and modern cloud architecture concepts.",
  },
  {
    title: "Problem Solver",
    detail: "Consistent practice with data structures, algorithms, and full-stack problem solving.",
  },
  {
    title: "Continuous Learner",
    detail: "Growth-oriented mindset — always exploring new frameworks, tools, and design patterns.",
  },
];
