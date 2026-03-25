/**
 * Single source of truth for all project data.
 *
 * Each project has:
 *  - Full detail fields used by the Projects page and ProjectModal
 *  - `tags`            – up to 4 tech labels shown on the homepage card
 *  - `featuredMetrics` – 3 stat objects shown on the homepage card
 *  - `featured`        – set to true to appear in the homepage FeaturedProjects section
 */

export const projects = [
  {
    id: 1,
    title: "Survey Platform — BIADA",
    description:
      "Production-grade government survey platform for Bihar Industrial Area Development Authority (BIADA), enabling field data collection across distributed surveyor teams and replacing a fully manual process with a digitized, auditable workflow.",
    fullDescription:
      "Delivered a production-grade government survey platform for BIADA, enabling secure field data collection across distributed surveyor teams. The platform replaced a fully manual process with a digitized, auditable workflow — featuring AES-256 encryption, geo-fencing, GPS tracking, IP logging, and RBAC to secure sensitive government survey data end-to-end. Hosted on AWS (EC2, RDS, S3) with JWT authentication and query optimization to handle high-concurrency field submissions during peak survey drives.",
    category: "fullstack",
    complexity: "Advanced",
    status: "Live",
    featured: true,
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1d6ec7e4a-1764660533966.png",
    imageAlt:
      "Government survey platform dashboard showing field data collection, GPS tracking, and report generation",
    tags: ["Spring Boot", "React", "AWS", "MySQL"],
    featuredMetrics: [
      { label: "Reporting", value: "-30%", icon: "TrendingDown" },
      { label: "Uptime", value: "100%", icon: "Activity" },
      { label: "Security", value: "AES-256", icon: "Shield" },
    ],
    technologies: [
      "Spring Boot",
      "React",
      "MySQL",
      "AWS EC2",
      "AWS RDS",
      "AWS S3",
      "JWT",
      "AES-256",
      "REST APIs",
      "RBAC",
    ],
    liveUrl: "https://surveyadmin.pareekshn.com",
    githubUrl: "https://github.com/Gitesh1712",
    metrics: {
      users: "500+",
      performance: "99/100",
      rating: "4.9/5",
    },
    architecture:
      "Spring Boot backend serving a React web client and Kotlin mobile app. Data secured with AES-256 encryption, geo-fencing, and IP logging. Hosted on AWS (EC2, RDS, S3) with JWT authentication and RBAC. PDF/Excel reports generated server-side and delivered via automated pipelines.",
    features: [
      "GPS tracking and geo-fencing for field surveyors",
      "AES-256 encryption for all sensitive survey data",
      "Role-based access control (RBAC) for multi-level permissions",
      "IP logging and audit trail for tamper detection",
      "Automated PDF and Excel report generation",
      "Real-time analytics dashboards for decision-makers",
      "High-concurrency field submission handling on AWS",
      "Zero-downtime design during peak survey drives",
    ],
    codeMetrics: {
      coverage: "88%",
      maintainability: "A",
      security: "A+",
      performance: "97/100",
    },
    challenges: [
      {
        problem: "Data Tampering Risk",
        description:
          "Field survey data was vulnerable to tampering across distributed surveyor teams.",
        solution:
          "Implemented AES-256 encryption, geo-fencing, GPS tracking, IP logging, and RBAC to secure data end-to-end.",
      },
      {
        problem: "High-Concurrency Field Submissions",
        description:
          "Peak survey drives required the platform to handle many simultaneous field submissions without downtime.",
        solution:
          "Deployed on AWS (EC2, RDS, S3) with JWT auth and optimized queries to ensure zero downtime under load.",
      },
    ],
    impact:
      "Replaced a fully manual government survey process with a digitized, auditable workflow. Eliminated data tampering risk and reduced reporting turnaround by 30% via automated PDF/Excel generation and real-time analytics.",
    results: [
      { value: "30%", metric: "Faster Reporting Turnaround" },
      { value: "100%", metric: "Data Tamper Prevention" },
      { value: "0", metric: "Downtime During Peak Drives" },
      { value: "500+", metric: "Field Surveyors Supported" },
    ],
  },
  {
    id: 2,
    title: "Pareekshn — Assessment Admin Panel",
    description:
      "End-to-end assessment administration platform consolidating exam creation, candidate allocation, scheduling, real-time scoring, and result publishing into a single unified system.",
    fullDescription:
      "Owned end-to-end delivery of the Pareekshn admin platform, reducing assessment setup time by consolidating exam creation, candidate allocation, scheduling, and result publishing into a single unified system. Engineered a real-time scoring engine supporting concurrent assessments across multiple roles (assessor, admin, candidate), ensuring result accuracy and eliminating manual score computation. Cut post-assessment processing time by automating PDF/Excel result generation and audit logging, removing a multi-hour manual effort per assessment cycle.",
    category: "fullstack",
    complexity: "Advanced",
    status: "Live",
    featured: true,
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_11b6b117c-1767258777980.png",
    imageAlt:
      "Assessment admin panel showing exam management, candidate allocation, and real-time scoring dashboard",
    tags: ["Spring Boot", "React", "PostgreSQL", "Node.js"],
    featuredMetrics: [
      { label: "Users", value: "1K+", icon: "Users" },
      { label: "Uptime", value: "99.5%", icon: "Activity" },
      { label: "Processing", value: "Automated", icon: "Zap" },
    ],
    technologies: [
      "Spring Boot",
      "React",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "JWT",
      "REST APIs",
      "AWS",
      "Docker",
      "Redis",
    ],
    liveUrl: "https://pareekshn.com",
    githubUrl: "https://github.com/Gitesh1712",
    metrics: {
      users: "1K+",
      performance: "97/100",
      rating: "4.8/5",
    },
    architecture:
      "Spring Boot backend with React frontend. Real-time scoring engine handles concurrent multi-role assessments. PostgreSQL/MySQL for data storage, Redis for caching. Automated PDF/Excel generation pipeline and full audit logging. Deployed on AWS with Docker.",
    features: [
      "Unified exam creation and configuration interface",
      "Candidate allocation and scheduling management",
      "Real-time scoring engine for concurrent multi-role assessments",
      "Result accuracy validation eliminating manual score computation",
      "Automated PDF and Excel result generation",
      "Full audit logging for compliance and transparency",
      "Role-based dashboards for assessors, admins, and candidates",
      "Result publishing and notification system",
    ],
    codeMetrics: {
      coverage: "90%",
      maintainability: "A",
      security: "A",
      performance: "95/100",
    },
    challenges: [
      {
        problem: "Concurrent Assessment Scoring",
        description:
          "Multiple roles (assessor, admin, candidate) needed accurate real-time scores across simultaneous assessments.",
        solution:
          "Engineered a dedicated real-time scoring engine with concurrency controls to ensure accuracy across all active sessions.",
      },
      {
        problem: "Post-Assessment Processing Time",
        description:
          "Generating result reports was a multi-hour manual effort after each assessment cycle.",
        solution:
          "Automated PDF/Excel result generation and audit logging, removing the manual bottleneck entirely.",
      },
    ],
    impact:
      "Consolidated the full assessment lifecycle into a single platform. Reduced assessment setup time significantly, eliminated manual score computation, and cut post-assessment processing from hours to seconds.",
    results: [
      { value: "100%", metric: "Manual Scoring Eliminated" },
      { value: "1K+", metric: "Daily Active Users" },
      { value: "Multi-hr", metric: "Processing Cut to Seconds" },
      { value: "99.5%", metric: "System Uptime" },
    ],
  },
  {
    id: 3,
    title: "RAG Chatbot — Legal & Policy Q&A",
    description:
      "Citation-enforced Retrieval-Augmented Generation pipeline for structured legal document Q&A (Acts, Circulars, Orders) with structure-aware chunking and a retrieval confidence gate to prevent hallucinations.",
    fullDescription:
      "Designed a citation-enforced RAG pipeline for structured legal document Q&A covering Acts, Circulars, and Orders. Built structure-aware chunking with legal section detection using regex and LangChain, and BAAI/bge-large-en embeddings (1024-dim) for high-precision retrieval. Implemented a retrieval confidence gate — the LLM is never called if the similarity score falls below threshold, preventing hallucinations. Containerized with Docker Compose (FastAPI + pgvector + Nginx); supports GPT-4, Gemini, Claude, and local Llama 3 as pluggable LLM providers.",
    category: "ai",
    complexity: "Advanced",
    status: "Live",
    featured: true,
    image:
      "https://img.rocket.new/generatedImages/rocket_gen_img_1ac6f7ff3-1765294603648.png",
    imageAlt:
      "RAG chatbot interface showing legal document Q&A with citations and source references",
    tags: ["FastAPI", "pgvector", "Python", "Docker"],
    featuredMetrics: [
      { label: "Hallucinations", value: "0", icon: "Shield" },
      { label: "LLM Providers", value: "4+", icon: "Cpu" },
      { label: "Response", value: "<500ms", icon: "Timer" },
    ],
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Python",
      "LangChain",
      "Docker",
      "NGINX",
      "BAAI/bge-large-en",
      "GPT-4",
      "Llama 3",
    ],
    liveUrl: "",
    githubUrl: "https://github.com/Gitesh1712",
    metrics: {
      users: "Side Project",
      performance: "95/100",
      rating: "4.7/5",
    },
    architecture:
      "FastAPI backend with PostgreSQL + pgvector for vector storage. Structure-aware chunking pipeline using regex + LangChain for legal section detection. BAAI/bge-large-en embeddings (1024-dim). Retrieval confidence gate prevents LLM calls on low-similarity results. Containerized with Docker Compose. Pluggable LLM provider interface supports GPT-4, Gemini, Claude, and local Llama 3.",
    features: [
      "Citation-enforced answers with source document references",
      "Structure-aware chunking for legal sections (Acts, Circulars, Orders)",
      "BAAI/bge-large-en embeddings (1024-dim) for high-precision retrieval",
      "Retrieval confidence gate preventing LLM calls on weak matches",
      "Pluggable LLM providers: GPT-4, Gemini, Claude, local Llama 3",
      "pgvector-powered semantic search in PostgreSQL",
      "Fully containerized with Docker Compose",
      "NGINX reverse proxy for production deployment",
    ],
    codeMetrics: {
      coverage: "85%",
      maintainability: "A",
      security: "A",
      performance: "93/100",
    },
    challenges: [
      {
        problem: "Hallucination Prevention",
        description:
          "LLMs could generate confident-sounding but incorrect answers when retrieval quality was poor.",
        solution:
          "Implemented a retrieval confidence gate — the LLM is never invoked if the similarity score falls below a defined threshold, ensuring only high-quality context triggers generation.",
      },
      {
        problem: "Legal Document Structure",
        description:
          "Legal documents have complex hierarchical structures (sections, sub-sections, clauses) that generic chunking strategies lose.",
        solution:
          "Built structure-aware chunking with legal section detection using regex patterns and LangChain text splitters to preserve semantic boundaries.",
      },
    ],
    impact:
      "Enables precise, citation-backed Q&A over government legal documents — removing the need to manually search through hundreds of pages of Acts, Circulars, and Orders.",
    results: [
      { value: "0", metric: "Hallucinations (gated)" },
      { value: "4", metric: "Pluggable LLM Providers" },
      { value: "1024d", metric: "Embedding Dimensions" },
      { value: "<500ms", metric: "Average Query Response" },
    ],
  },
];
