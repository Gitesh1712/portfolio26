/**
 * Single source of truth for all experience-related data.
 *
 * Exports:
 *  - experiences       – work history, used by experience page, homepage timeline, about journey
 *  - careerStats       – summary stat cards on the experience page
 *  - certifications    – used by experience page and skills page
 *  - skillEvolution    – phase-based skill progression (experience page)
 *  - technologyTimeline – year-by-year technology milestones (skills page)
 *  - journeyMilestones – about page journey timeline
 */

// ---------------------------------------------------------------------------
// Work Experience
// ---------------------------------------------------------------------------
// Field guide:
//   period           – display string "Month YYYY – Present/Month YYYY"
//   description      – single-paragraph summary used on the homepage timeline
//   responsibilities – bullet array used on the full experience page
//   achievements     – [{icon, metric, description}] for the stats grid on the experience page
//   highlights       – string[] bullet points used on the homepage timeline
//   icon / color     – Lucide icon name + CSS color var for the homepage timeline dot

export const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Pareekshn Online Assessments",
    companyLogo:
      "https://surveyadmin.pareekshn.com/assets/logo-hd-ZLVGU1mN.png",
    companyLogoAlt: "Pareekshn Online Assessments company logo",
    companyDescription:
      "Pareekshn is a secure, scalable platform providing digital assessments for skills, knowledge, and aptitude",
    period: "Jun 2024 - Present",
    location: "Noida, India",
    isCurrent: true,
    icon: "Briefcase",
    color: "var(--color-primary)",
    description:
      "Designing and delivering scalable systems using Spring Boot and Node.js, building secure REST APIs, optimizing MySQL queries, and handling concurrency for high-load workflows. Developing React.js interfaces with clean state management and seamless API integration.",
    responsibilities: [
      "Designing and delivering scalable systems using Spring Boot and Node.js for high-load assessment workflows",
      "Building secure REST APIs with proper authentication, authorization, and concurrency handling",
      "Optimizing MySQL queries and database performance for large-scale data operations",
      "Developing React.js interfaces with clean state management and seamless API integration",
      "Handling concurrency challenges in real-time scoring engines serving concurrent assessments",
    ],
    achievements: [
      {
        icon: "TrendingUp",
        metric: "60%",
        description: "Performance improvement in API response times",
      },
      {
        icon: "Users",
        metric: "1K+",
        description: "Daily active users served by applications",
      },
      {
        icon: "Award",
        metric: "40%",
        description: "Increase in team delivery velocity",
      },
    ],
    highlights: [
      "Built real-time scoring engine supporting concurrent multi-role assessments",
      "Delivered production-grade government survey platform for BIADA",
      "Automated PDF/Excel result generation cutting multi-hour manual effort per cycle",
    ],
    technologies: [
      "React Js",
      "Spring Boot",
      "PostgreSQL",
      "Node.js",
      "Redis",
      "Data Analytics",
      "AWS-EC2,S3,RDS",
      "Jenkins",
      "Git",
      "REST APIs",
      "Microservices",
    ],
    projects: [
      {
        name: "Survey Platform",
        description:
          "Spring Boot backend, React web client, Kotlin mobile app for government land surveys",
        impact:
          "Enabled secure data collection, analysis, and automated Excel/PDF report generation",
      },
      {
        name: "Pareekshn Admin Panel",
        description:
          "Back-office platform with Spring Boot, JSP, JS/jQuery for managing assessments and results",
        impact:
          "Optimized database queries and real-time scoring, improving analytics speed and platform usability",
      },
    ],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Your Webstore",
    companyLogo:
      "https://yourwebstore.in/wp-content/uploads/2022/02/Original-size-your-1-e1647102567651-200x50.png",
    companyLogoAlt: "Your Webstore company logo",
    companyDescription:
      "Your Webstore is a web solutions company specializing in e-commerce store development, responsive websites, and digital storefronts for businesses",
    period: "Jan 2023 - Feb 2024",
    location: "Remote",
    isCurrent: false,
    icon: "ShoppingCart",
    color: "var(--color-secondary)",
    description:
      "Built and maintained e-commerce stores and responsive websites with a strong focus on performance, usability, and clean code. Worked across the full stack using Java, Node.js, and React to deliver polished client-facing storefronts and backend integrations.",
    responsibilities: [
      "Developed and maintained e-commerce storefronts with responsive, cross-browser-compatible layouts",
      "Built server-side logic using Node.js and Java with JSP for dynamic page rendering",
      "Created interactive UI components in React.js and Vanilla JS for improved user experience",
      "Optimized page load performance through code splitting, lazy loading, and asset optimization",
      "Integrated third-party APIs for payment gateways, inventory management, and shipping",
      "Collaborated with designers to translate wireframes into pixel-perfect implementations",
    ],
    achievements: [
      {
        icon: "ShoppingBag",
        metric: "10+",
        description: "E-commerce stores built and delivered",
      },
      {
        icon: "Zap",
        metric: "40%",
        description: "Average page load time improvement",
      },
      {
        icon: "Star",
        metric: "100%",
        description: "Client delivery satisfaction rate",
      },
    ],
    highlights: [
      "Delivered 10+ production e-commerce stores across diverse business verticals",
      "Improved page load times by 40% through performance optimization techniques",
      "Built reusable React component library speeding up storefront development",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Java",
      "JSP",
      "Vanilla JS",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git",
    ],
    projects: [
      {
        name: "E-Commerce Storefronts",
        description:
          "Full-featured online stores built with React.js frontend and Node.js/Java backends",
        impact:
          "Delivered performant, conversion-optimised storefronts with integrated payment and inventory systems",
      },
      {
        name: "Responsive Business Websites",
        description:
          "Marketing and business websites with JSP server-side rendering and Vanilla JS interactivity",
        impact:
          "Improved client online presence with fast, mobile-first websites across multiple industries",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Career Stats  (experience page hero section)
// ---------------------------------------------------------------------------

export const careerStats = [
  {
    icon: "Briefcase",
    value: "3+",
    label: "Years Experience",
    description: "Progressive career growth in software development",
  },
  {
    icon: "FolderGit2",
    value: "15+",
    label: "Projects Worked On",
    description:
      "Successfully completed projects accross various domains and technologies",
  },
  {
    icon: "Users",
    value: "10K+",
    label: "Users Impacted",
    description: "Total users served across all applications",
  },
  {
    icon: "Award",
    value: "10+",
    label: "Technologies Mastered",
    description: "Expertise across full-stack development",
  },
];

// ---------------------------------------------------------------------------
// Certifications  (experience page + skills page)
// ---------------------------------------------------------------------------
// Field guide:
//   badge / badgeAlt  – image URL & alt text (canonical names)
//   issueDate         – "Mon YYYY" string
//   expiryDate        – "Mon YYYY" or "Lifetime"
//   credentialId      – credential/license ID string
//   verificationUrl   – public verification link

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    badge:
      "https://img.rocket.new/generatedImages/rocket_gen_img_166f1efe1-1764661435735.png",
    badgeAlt:
      "AWS certification badge with orange and white cloud logo on blue background showing Solutions Architect Associate credential",
    issueDate: "Jan 2024",
    expiryDate: "Jan 2027",
    credentialId: "AWS-CSA-2023-1234",
    verificationUrl: "https://aws.amazon.com/verification",
  },
  {
    id: 2,
    name: "Oracle Certified Professional: Java SE 11 Developer",
    issuer: "Oracle Corporation",
    badge:
      "https://img.rocket.new/generatedImages/rocket_gen_img_18cf36c4b-1765031720849.png",
    badgeAlt:
      "Oracle Java certification badge with red Oracle logo and Java coffee cup icon on white background",
    issueDate: "Mar 2023",
    expiryDate: "Lifetime",
    credentialId: "OCP-JAVA-2023-5678",
    verificationUrl: "https://oracle.com/verification",
  },
  {
    id: 3,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    badge:
      "https://img.rocket.new/generatedImages/rocket_gen_img_129c5b7d4-1764661436023.png",
    badgeAlt:
      "Meta certification badge with blue infinity symbol logo and Front-End Developer text on white background",
    issueDate: "Jun 2022",
    expiryDate: "Lifetime",
    credentialId: "META-REACT-2023-9012",
    verificationUrl: "https://coursera.org/verification",
  },
  {
    id: 4,
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    badge:
      "https://img.rocket.new/generatedImages/rocket_gen_img_10dadbd09-1767113199618.png",
    badgeAlt:
      "Docker certification badge with blue whale logo carrying containers on ocean background",
    issueDate: "Sep 2023",
    expiryDate: "Sep 2025",
    credentialId: "DCA-2023-0001",
    verificationUrl: "https://docker.com/verification",
  },
];

// ---------------------------------------------------------------------------
// Skill Evolution Phases  (experience page – currently hidden, ready to enable)
// ---------------------------------------------------------------------------

export const skillEvolution = [
  {
    year: "2024-Present",
    phase: "Advanced Full-Stack & Architecture",
    skills: [
      "Microservices",
      "Kubernetes",
      "GraphQL",
      "System Design",
      "Team Leadership",
      "DevOps",
    ],
  },
  {
    year: "2022-2023",
    phase: "Full-Stack Development Mastery",
    skills: [
      "React Advanced",
      "Node.js",
      "MongoDB",
      "AWS",
      "CI/CD",
      "Agile Methodologies",
    ],
  },
  {
    year: "2020-2021",
    phase: "Foundation & Core Technologies",
    skills: [
      "React Basics",
      "JavaScript ES6+",
      "REST APIs",
      "Git",
      "HTML5/CSS3",
      "Redux",
    ],
  },
];

// ---------------------------------------------------------------------------
// Technology Timeline  (skills page)
// ---------------------------------------------------------------------------

export const technologyTimeline = [
  {
    year: "2026",
    milestone: "Advanced Architecture",
    icon: "Rocket",
    description:
      "Focusing on system design, microservices architecture, and cloud-native development with Kubernetes and advanced DevOps practices.",
    technologies: ["Kubernetes", "GraphQL", "Rust", "WebAssembly"],
  },
  {
    year: "2025",
    milestone: "Full-Stack Mastery",
    icon: "Award",
    description:
      "Achieved expert-level proficiency in React, Spring Boot, and cloud technologies. Leading development of enterprise-scale applications.",
    technologies: ["React 18", "Spring Boot 3", "AWS", "Docker"],
  },
  {
    year: "2024",
    milestone: "Cloud & DevOps",
    icon: "Cloud",
    description:
      "Expanded expertise into cloud platforms and DevOps practices. Implemented CI/CD pipelines and containerized applications.",
    technologies: ["AWS", "Docker", "Jenkins", "Terraform"],
  },
  {
    year: "2023",
    milestone: "Backend Specialization",
    icon: "Server",
    description:
      "Deep dive into backend development with Spring Boot and microservices architecture. Built scalable REST APIs and database systems.",
    technologies: ["Spring Boot", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    year: "2022",
    milestone: "Modern Frontend",
    icon: "Layout",
    description:
      "Mastered modern frontend development with React, TypeScript, and state management. Created responsive and performant web applications.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    year: "2021",
    milestone: "JavaScript Ecosystem",
    icon: "Code2",
    description:
      "Explored the JavaScript ecosystem including Node.js, npm packages, and modern build tools. Built full-stack applications.",
    technologies: ["Node.js", "Express", "Webpack", "Babel"],
  },
  {
    year: "2020",
    milestone: "Web Development Foundation",
    icon: "BookOpen",
    description:
      "Started professional web development journey. Learned HTML, CSS, JavaScript fundamentals and basic React concepts.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React Basics"],
  },
  {
    year: "2019",
    milestone: "Programming Fundamentals",
    icon: "Code",
    description:
      "Began learning programming with Java. Studied data structures, algorithms, and object-oriented programming principles.",
    technologies: ["Java", "Data Structures", "Algorithms", "OOP"],
  },
];

// ---------------------------------------------------------------------------
// Journey Milestones  (about page)
// ---------------------------------------------------------------------------

export const journeyMilestones = [
  {
    id: 1,
    year: "2024",
    title: "Senior Software Engineer",
    company: "Pareekshn Online Assessments",
    type: "career",
    icon: "Briefcase",
    color: "var(--color-primary)",
    summary:
      "Designing scalable systems and delivering production-grade government and assessment platforms",
    details:
      "Designing and delivering scalable systems using Spring Boot and Node.js, building secure REST APIs, optimizing MySQL queries, and handling concurrency for high-load workflows. Delivered the BIADA government survey platform and the Pareekshn assessment admin panel — both production systems with real-world impact.",
    achievements: [
      "Delivered production-grade government survey platform for BIADA",
      "Engineered real-time scoring engine for concurrent multi-role assessments",
      "Automated PDF/Excel result generation cutting multi-hour manual effort per cycle",
      "Implemented AES-256 encryption, geo-fencing, and RBAC for government data security",
    ],
  },
  {
    id: 2,
    year: "2024",
    title: "RAG Chatbot Side Project",
    company: "Self-Initiated",
    type: "achievement",
    icon: "Brain",
    color: "var(--color-accent)",
    summary: "Built a citation-enforced RAG pipeline for legal document Q&A",
    details:
      "Designed a RAG pipeline for structured legal document Q&A using FastAPI + PostgreSQL + pgvector. Built structure-aware chunking with legal section detection, BAAI/bge-large-en embeddings, and a retrieval confidence gate to prevent hallucinations. Containerized with Docker Compose, supporting GPT-4, Gemini, Claude, and local Llama 3.",
    achievements: [
      "Retrieval confidence gate — LLM never called on low-similarity results",
      "Structure-aware chunking preserving legal document hierarchy",
      "Pluggable LLM providers: GPT-4, Gemini, Claude, Llama 3",
      "Fully containerized with Docker Compose + NGINX",
    ],
  },
  {
    id: 3,
    year: "2023",
    title: "Software Developer",
    company: "Your Webstore",
    type: "career",
    icon: "ShoppingCart",
    color: "var(--color-secondary)",
    summary:
      "Built e-commerce stores and responsive websites with a focus on performance, usability, and clean code",
    details:
      "Worked at Your Webstore as a Software Developer, building end-to-end e-commerce storefronts and responsive business websites. Used Java, Node.js, JSP, React.js, and Vanilla JS across projects — contributing from UI development to server-side logic and third-party API integrations.",
    achievements: [
      "Delivered 10+ production e-commerce stores across diverse business verticals",
      "Improved average page load time by 40% through performance optimization",
      "Built reusable React component library accelerating storefront delivery",
      "Integrated payment gateways, inventory management, and shipping APIs",
    ],
  },
  {
    id: 4,
    year: "2023",
    title: "LeetCode Milestone",
    company: "Problem Solving Journey",
    type: "achievement",
    icon: "Trophy",
    color: "var(--color-primary)",
    summary: "Crossed 350+ problems on LeetCode and 300+ on GeeksforGeeks",
    details:
      "Dedicated consistent effort to mastering data structures, algorithms, and system-level problem solving. Achieved strong proficiency in array manipulation, trees, graphs, dynamic programming, and concurrency patterns — directly applicable to real-world backend development.",
    achievements: [
      "350+ problems solved on LeetCode",
      "300+ solutions on GeeksforGeeks",
      "Mastered 15+ algorithm and DSA patterns",
      "Applied DSA knowledge to production query optimization",
    ],
  },
  {
    id: 5,
    year: "2022",
    title: "B.Tech — Computer Science & Engineering",
    company: "IMS Engineering College, Ghaziabad",
    type: "education",
    icon: "BookOpen",
    color: "var(--color-accent)",
    summary: "Graduated in CSE with 7.3/10 GPA",
    details:
      "Completed comprehensive coursework in software engineering, algorithms, databases, operating systems, and computer networks at IMS Engineering College, Ghaziabad (2018–2022). Built a strong foundation in CS fundamentals that underpins all professional engineering work.",
    achievements: [
      "Graduated with 7.3/10 GPA",
      "Coursework: DSA, OOPs, DBMS, OS, Computer Networks",
      "B.Tech in Computer Science & Engineering (2018–2022)",
    ],
  },
];
