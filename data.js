// Centralized Portfolio Configuration Data for Youssef Tamer
const PORTFOLIO_DATA = {
  profile: {
    name: "Youssef Tamer",
    roles: [
      "AI-Native Developer",
      "Android Developer",
      "Kotlin & Flutter Developer"
    ],
    bio: "I am a Computer Science graduate from Sinai University with practical experience in Android Development using Kotlin and Jetpack Compose. I thrive on building scalable mobile applications and have a keen passion for AI-native development.",
    avatar: "./avatar.jpg",
    resumeUrl: "#",
    stats: [
      { label: "Completed Projects", value: "7+" },
      { label: "Internships Completed", value: "2" },
      { label: "Languages Spoken", value: "2" }
    ]
  },
  contact: {
    email: "yousseftamer951@gmail.com",
    phone: "01203598649",
    whatsapp: "https://wa.me/201203598649", // Direct wa.me Egyptian code
    github: "https://github.com/tayson202",
    linkedin: "https://www.linkedin.com/in/youssef-tamer-169827248",
    location: "ismailia, Egypt"
  },
  focus: [
    {
      title: "Android Development",
      desc: "Building native applications using Kotlin, Jetpack Compose, Retrofit, Room Database, and MVVM architecture.",
      icon: "fa-brands fa-android"
    },
    {
      title: "Cross-Platform Mobile",
      desc: "Creating high-fidelity, fluid mobile apps for Android and iOS using Flutter and Dart.",
      icon: "fa-solid fa-mobile-screen"
    },
    {
      title: "AI-Native Development",
      desc: "Architecting intelligent applications, integrating LLMs, generative AI APIs, and autonomous workflows.",
      icon: "fa-solid fa-brain"
    }
  ],
  skills: {
    "Android & Mobile Development": [
      { name: "Kotlin", level: 90, icon: "fa-brands fa-android" },
      { name: "Flutter & Dart", level: 82, icon: "fa-solid fa-mobile-screen" },
      { name: "Jetpack Compose", level: 85, icon: "fa-brands fa-android" },
      { name: "Java Programming", level: 75, icon: "fa-brands fa-java" }
    ],
    "Architecture & APIs": [
      { name: "MVVM Architectural Pattern", level: 88, icon: "fa-solid fa-layer-group" },
      { name: "Retrofit & REST APIs", level: 85, icon: "fa-solid fa-network-wired" },
      { name: "Room Database (SQLite)", level: 80, icon: "fa-solid fa-database" },
      { name: "Dagger Dependency Injection", level: 70, icon: "fa-solid fa-syringe" }
    ],
    "AI & Data Tools": [
      { name: "Python Programming", level: 85, icon: "fa-brands fa-python" },
      { name: "LLM & AI APIs Integration", level: 80, icon: "fa-solid fa-brain" },
      { name: "SQL & Relational Databases", level: 85, icon: "fa-solid fa-database" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "OmniDoc & Resume AI — Universal AI Document & Career Studio",
      category: "AI & Web Development",
      description: "An enterprise-grade AI document intelligence & career platform. Features multi-format parsing (PDF, Word, Excel, PPT), interactive RAG AI Chat with verified page citations, automated multi-level document summarization, AI Study Suite (3D flashcards, quizzes & Feynman explainer), 10+ language neural translation, and an ATS-optimized resume builder with 1-click export.",
      image: "./omnidoc_1.png",
      images: [
        "./omnidoc_1.png",
        "./omnidoc_2.png",
        "./omnidoc_3.png",
        "./omnidoc_4.png",
        "./omnidoc_5.png"
      ],
      github: "https://github.com/tayson202/pdf-assist",
      live: "https://tayson202.github.io/pdf-assist/",
      tags: ["AI / RAG", "FastAPI", "Python", "Flutter", "pgvector", "PostgreSQL", "OpenAI"],
      details: {
        problem: "Professionals and students struggle to quickly extract insights, synthesize knowledge, and navigate dense multi-format documents (PDF, Word, Excel, PowerPoint) while verifying factual grounding without hallucinations or manual cross-referencing.",
        solution: "Architected OmniDoc & Resume: an end-to-end AI document ecosystem combining FastAPI, PyMuPDF, and pgvector cosine retrieval with sliding-window chunking, grounded LLM prompts with exact page-level citations, an interactive AI Study Suite with 3D flashcards and Feynman learning models, multi-language neural translation, and an ATS resume studio.",
        impact: "Deployed live web application and full-stack Flutter client with 100% automated test coverage across authentication, cross-tenant isolation, OCR detection guards, and deep-link citation jumps directly into document reader pages."
      }
    },
    {
      id: 2,
      title: "News App",
      category: "Android & Mobile Development",
      description: "A modern news application featuring offline local caching, clean MVVM separation, and asynchronous networking.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?fit=crop&w=600&h=400&q=80",
      github: "https://github.com/tayson202",
      live: "https://github.com/tayson202",
      tags: ["Kotlin", "Jetpack Compose", "Room DB", "Retrofit"],
      details: {
        problem: "Users needed a reliable news feed that retains articles offline and loads feeds dynamically without UI freezes on sluggish networks.",
        solution: "Configured Room Database as an offline cache. Hooked Retrofit for API retrieval, built with Dagger dependencies, and designed under MVVM structure.",
        impact: "Successfully developed and deployed the app, eliminating background thread freezes and improving user retention when offline."
      }
    },
    {
      id: 2,
      title: "Gym Unity — Fitness & Wellness Platform",
      category: "Android & Mobile Development",
      description: "A comprehensive Flutter fitness platform featuring a Coach Marketplace, AI-powered TAIYO coaching assistant, in-app product store, nutrition tracking, weekly check-ins, and progress mapping — all wrapped in a premium minimal UI.",
      image: "./gymunity_4.jpg",
      images: [
        "./gymunity_4.jpg",
        "./gymunity_1.jpg",
        "./gymunity_2.jpg",
        "./gymunity_3.jpg",
        "./gymunity_5.jpg"
      ],
      github: "https://github.com/tayson202",
      live: "#",
      tags: ["Flutter", "Dart", "Firebase", "MVVM", "AI Coaching"],
      details: {
        problem: "Fitness apps are often cluttered, overwhelming, and fail to connect users with the right coaches or provide holistic wellness guidance — leading to low engagement and poor habit formation.",
        solution: "Built Gym Unity with Flutter featuring a curated Coach Marketplace (HIIT, Strength, Yoga, Nutrition, CrossFit), an AI coaching assistant (TAIYO) for daily guidance, a verified GymUnity Store with persistent cart, nutrition and hydration tracking, weekly check-ins, and a transformation progress map — all with a clean, low-noise design.",
        impact: "Delivered a full wellness ecosystem in a single app with 9-day active streak tracking, premium member tiers, real-time coach browsing by specialty and city, and TAIYO-powered personalized store picks — significantly improving user engagement and retention."
      }
    },
    {
      id: 3,
      title: "Media Capture & Playback App",
      category: "Android & Mobile Development",
      description: "A hardware-integrated application allowing recording, saving, and smooth audio/video multimedia playback.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?fit=crop&w=600&h=400&q=80",
      github: "https://github.com/tayson202",
      live: "#",
      tags: ["Kotlin", "Media Recorder API", "Android SDK"],
      details: {
        problem: "Capturing high-resolution media asynchronously can cause buffer overflows and main-thread delays on budget devices.",
        solution: "Engineered audio and video recorder configurations that output compressed file payloads and run on background worker threads.",
        impact: "Integrated safe record and play routines, preventing frame-drop anomalies and eliminating system block crashes."
      }
    },
    {
      id: 4,
      title: "DBLKK — Egyptian Streetwear Platform",
      category: "Web Development",
      description: "A premium Egyptian fashion & athletic lifestyle brand platform. Built with Next.js featuring a full e-commerce store, run community events (Four Fridays Tour), gym gear section, and dark-mode UI with burgundy branding.",
      image: "./dblkk_1.png",
      images: [
        "./dblkk_1.png",
        "./dblkk_2.png",
        "./dblkk_3.png",
        "./dblkk_4.png"
      ],
      github: "https://github.com/tayson202",
      live: "https://dblkk-eg.vercel.app/",
      tags: ["Next.js", "React", "Tailwind CSS", "Vercel", "E-Commerce"],
      details: {
        problem: "DBLKK needed a high-performance, brand-forward web platform that could serve both as a premium e-commerce store for Egyptian streetwear and as a community hub for their Four Fridays run club events.",
        solution: "Built a full-stack Next.js platform with dark/light theme support, animated hero sections, a product store (DROP 01), community events calendar, gym gear section, COD checkout, and order tracking — all deployed on Vercel.",
        impact: "Delivered a premium, mobile-first storefront and community platform that elevated the DBLKK brand identity online, supporting product launches, run club registrations, and athletic community growth across Cairo, Alexandria, and Ismailia."
      }
    }
  ],
  tools: [
    { name: "Android Studio", category: "IDE / Editor", icon: "fa-brands fa-android" },
    { name: "VS Code", category: "Code Editor", icon: "fa-solid fa-code" },
    { name: "Git & GitHub", category: "Version Control", icon: "fa-brands fa-git-alt" },
    { name: "Python Scripting", category: "Language Core", icon: "fa-brands fa-python" },
    { name: "SQL & Room Database", category: "Database Suite", icon: "fa-solid fa-database" },
    { name: "ETL Processing Tools", category: "Data pipeline", icon: "fa-solid fa-gears" },
    { name: "Dagger & Injection", category: "Framework Support", icon: "fa-solid fa-syringe" },
    { name: "Retrofit APIs", category: "Network Layer", icon: "fa-solid fa-network-wired" }
  ],
  experience: [
    {
      type: "work",
      role: "Android Developer Intern",
      company: "DEPI",
      period: "11/2024 - 05/2025",
      description: "Developed a News App using Kotlin and Jetpack Compose. Integrated Retrofit and Room Database. Managed dependencies using Dagger and implemented clean MVVM separation patterns."
    },
    {
      type: "work",
      role: "Data Engineer Intern",
      company: "ITI",
      period: "08/2025 - 09/2025",
      description: "Trained in Python, SQL, and ETL pipeline design. Handled data processing concepts, streaming protocols, and pipeline integration."
    },
    {
      type: "education",
      role: "Bachelor of Computer Science",
      company: "Sinai University",
      period: "09/2022 - 06/2026",
      description: "Focusing on Software Engineering, mobile architectures, database interfaces, and algorithms."
    }
  ],
  certifications: [
    { name: "Data Engineering Track", issuer: "DataCamp" },
    { name: "Flutter Development Course", issuer: "Udemy" },
    { name: "DEPI Mobile Development Program", issuer: "DEPI" }
  ]
};

// Export configuration globally
window.PORTFOLIO_DATA = PORTFOLIO_DATA;
