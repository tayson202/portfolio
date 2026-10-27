// Portfolio Configuration Data
const PORTFOLIO_CONFIG = {
  profile: {
    name: "Youssef Tamer",
    roles: [
      "Software Developer",
      "Flutter & Android (Kotlin) Developer",
      "AI-Native Developer"
    ],
    subheading: "Computer Science graduate from Sinai University focused on building modern, scalable, AI-powered software.",
    bio: "Computer Science graduate from Sinai University with experience in Android development using Kotlin and Jetpack Compose, plus Flutter for cross-platform apps. Experienced in AI-native development and vibe coding for web and mobile, focused on building modern, scalable, AI-powered software.",
    avatar: "./avatar.jpg",
    location: "Ismailia, Egypt",
    email: "yousseftamer951@gmail.com",
    resume: "./Youssef_Tamer_CV.pdf",
    socials: {
      github: "https://github.com/tayson202",
      linkedin: "https://www.linkedin.com/in/youssef-tamer-169827248"
    }
  },
  stats: [
    { label: "Completed Projects", value: "24+" },
    { label: "Years Experience", value: "5+" },
    { label: "Happy Clients", value: "98%" }
  ],
  skills: [
    { name: "HTML5 / CSS3 / SASS", category: "Frontend", level: 95 },
    { name: "JavaScript (ES6+)", category: "Frontend", level: 90 },
    { name: "React / Vue / Next.js", category: "Frontend", level: 85 },
    { name: "UI/UX Design & Figma", category: "Design", level: 90 },
    { name: "Web Animations (GSAP / Keyframes)", category: "Design", level: 80 },
    { name: "Git / CI/CD / Docker", category: "Tools", level: 85 },
    { name: "Responsive Web Design", category: "Design", level: 95 },
    { name: "Performance Optimization", category: "Tools", level: 80 }
  ],
  projects: [
    {
      id: 1,
      title: "OmniDoc & Resume AI — Universal AI Document & Career Studio",
      description: "Universal AI-powered document workspace for PDF, Word, Excel, and PowerPoint, featuring interactive RAG AI Chat with page citations, automated summaries, AI study suite, and ATS resume studio.",
      category: "AI & Web",
      tags: ["FastAPI", "Python", "Flutter", "pgvector", "OpenAI"],
      image: "./omnidoc_1.png",
      demoUrl: "https://tayson202.github.io/pdf-assist/",
      githubUrl: "https://github.com/tayson202/pdf-assist"
    },
    {
      id: 2,
      title: "3M DAHAB OS — Gold & Jewelry Enterprise ERP & Live Bullion Exchange",
      description: "A mission-critical gold bullion arbitrage, jewelry atelier management & real-time Sagha exchange platform with live Daleelak API synchronization, multi-karat cascade pricing, and POS counters.",
      category: "Web Development",
      tags: ["React", "Node.js", "Vercel", "WebSockets", "Financial ERP", "Tailwind CSS"],
      image: "./dahab_4.png",
      demoUrl: "https://jewelry-management-system-backend.vercel.app",
      githubUrl: "https://github.com/tayson202"
    },
    {
      id: 2,
      title: "Aetherial E-Commerce Portal",
      description: "An immersive digital storefront featuring dynamic 3D-like hover product previews, rapid checkout flow, and custom micro-animations.",
      category: "Design",
      tags: ["UI/UX Design", "Figma", "Web Animations"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=600&h=400&q=80",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Vortex Collaborative Canvas",
      description: "A digital workspace allowing remote teams to brainstorm, prototype, and draw on a shared canvas in real-time.",
      category: "Tools",
      tags: ["JavaScript", "HTML5 Canvas", "WebSockets"],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?fit=crop&w=600&h=400&q=80",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Apex Crypto Tracker",
      description: "A live crypto market ticker with customizable watchlists, push notifications, and beautiful SVG trend lines.",
      category: "Frontend",
      tags: ["JavaScript", "REST APIs", "CSS Grid"],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?fit=crop&w=600&h=400&q=80",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Nova Portfolio Concept",
      description: "An experimental, liquid-motion portfolio template designed with extensive CSS grid layouts and smooth section transitions.",
      category: "Design",
      tags: ["UI/UX Design", "CSS Grid", "Interactions"],
      image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?fit=crop&w=600&h=400&q=80",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "SyncTask Team Workspace",
      description: "A minimalist Kanban board designed for software developers, featuring drag-and-drop mechanics and keyboard shortcuts.",
      category: "Tools",
      tags: ["JavaScript", "LocalStorage", "Drag & Drop"],
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ea29?fit=crop&w=600&h=400&q=80",
      demoUrl: "#",
      githubUrl: "#"
    }
  ],
  experience: [
    {
      type: "work",
      role: "Lead Creative Developer",
      company: "Aether Technologies",
      period: "2024 - Present",
      description: "Spearheaded front-end design architectural patterns. Managed a cross-functional team that decreased bundle sizes by 35% and introduced component UI consistency guidelines."
    },
    {
      type: "work",
      role: "UI/UX Engineer",
      company: "Stellar Web Lab",
      period: "2022 - 2024",
      description: "Designed and engineered complex web solutions. Partnered with graphic designers and product managers to map and transition high-fidelity mockups to production-ready CSS/JS."
    },
    {
      type: "education",
      role: "M.S. in Computer Interaction",
      company: "Pacific University of Design",
      period: "2020 - 2022",
      description: "Conducted research on cognitive load in interface structures, focusing on user behaviors in layout transitions and web typography."
    },
    {
      type: "education",
      role: "B.S. in Computer Science",
      company: "Apex Tech Institute",
      period: "2016 - 2020",
      description: "Specialized in Web Software Engineering, graphic representation systems, and database interfaces."
    }
  ]
};

// Export config if Node/ESM is used, otherwise define globally in window scope
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_CONFIG;
} else {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
