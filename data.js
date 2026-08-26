// Centralized Portfolio Configuration Data for Youssef Tamer
const PORTFOLIO_DATA = {
  profile: {
    name: "Youssef Tamer",
    roles: [
      "Kotlin & Flutter Developer",
      "Android Developer",
      "Data Engineering Enthusiast"
    ],
    bio: "I am a Computer Science student at Sinai University with practical experience in Android Development using Kotlin and Jetpack Compose. I thrive on building scalable mobile applications and have a keen interest in Data Engineering.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fit=crop&w=400&h=400&q=80", // Premium stock male developer profile
    resumeUrl: "#",
    stats: [
      { label: "Completed Projects", value: "5+" },
      { label: "Internships Completed", value: "2" },
      { label: "Languages Spoken", value: "2" }
    ]
  },
  contact: {
    email: "yousseftamer951@gmail.com",
    phone: "01203598649",
    whatsapp: "https://wa.me/201203598649", // Direct wa.me Egyptian code
    github: "https://github.com",
    linkedin: "https://linkedin.com/in/youssef-tamer-169827248",
    location: "Sinai, Egypt"
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
      title: "Data Engineering",
      desc: "Designing and developing ETL pipelines, processing data collections, and working with Python, SQL, and database systems.",
      icon: "fa-solid fa-database"
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
    "Data Engineering & Tools": [
      { name: "Python Programming", level: 80, icon: "fa-brands fa-python" },
      { name: "SQL & Relational Databases", level: 85, icon: "fa-solid fa-database" },
      { name: "ETL Pipelines & Processing", level: 75, icon: "fa-solid fa-gears" }
    ]
  },
  projects: [
    {
      id: 1,
      title: "News App",
      category: "Android & Mobile Development",
      description: "A modern news application featuring offline local caching, clean MVVM separation, and asynchronous networking.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?fit=crop&w=600&h=400&q=80",
      github: "https://github.com",
      live: "https://github.com",
      tags: ["Kotlin", "Jetpack Compose", "Room DB", "Retrofit"],
      details: {
        problem: "Users needed a reliable news feed that retains articles offline and loads feeds dynamically without UI freezes on sluggish networks.",
        solution: "Configured Room Database as an offline cache. Hooked Retrofit for API retrieval, built with Dagger dependencies, and designed under MVVM structure.",
        impact: "Successfully developed and deployed the app, eliminating background thread freezes and improving user retention when offline."
      }
    },
    {
      id: 2,
      title: "Android Fitness Application",
      category: "Android & Mobile Development",
      description: "A native tracking application supporting calorie math, workout session logging, and interactive metrics.",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?fit=crop&w=600&h=400&q=80",
      github: "https://github.com",
      live: "#",
      tags: ["Kotlin", "MVVM Pattern", "Jetpack Compose"],
      details: {
        problem: "Fitness trackers often suffer from layout bloating and complex inputs, which discourages daily log updates.",
        solution: "Created single-tap log screens using Jetpack Compose state mapping, standardizing data updates through a central repository layer.",
        impact: "Achieved seamless UI flow at 60fps, simplifying calculations and reducing typical log times to under 5 seconds."
      }
    },
    {
      id: 3,
      title: "Media Capture & Playback App",
      category: "Android & Mobile Development",
      description: "A hardware-integrated application allowing recording, saving, and smooth audio/video multimedia playback.",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?fit=crop&w=600&h=400&q=80",
      github: "https://github.com",
      live: "#",
      tags: ["Kotlin", "Media Recorder API", "Android SDK"],
      details: {
        problem: "Capturing high-resolution media asynchronously can cause buffer overflows and main-thread delays on budget devices.",
        solution: "Engineered audio and video recorder configurations that output compressed file payloads and run on background worker threads.",
        impact: "Integrated safe record and play routines, preventing frame-drop anomalies and eliminating system block crashes."
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
