import React, { useState, useMemo } from "react";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";
import ProjectModal from "./components/ProjectModal";
import StatsOverview from "./components/StatsOverview";
import CmsLogo from "../../assets/images/CMSAdmin.jpg";
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");
  const [selectedComplexity, setSelectedComplexity] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const projects = [
    {
      id: 1,
      title: "MediaCMS Platform",
      description:
        "Full-stack CMS for a media company with a public website and admin panel for managing posts, layouts, themes, and users.",
      fullDescription:
        "A CMS featuring a public-facing website and an admin panel for content creation, review, and design. Team members collaborate on drafts, editors approve posts, and the design team adds media and final layouts. Built with React.js, Node.js/Express, and MongoDB for seamless content updates and member management.",
      category: "fullstack",
      complexity: "Intermediate-Advanced",
      status: "Live",
      image: CmsLogo,
      imageAlt:
        "Admin panel dashboard showing post previews, layout tools, and user management",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "CSS3",
        "HTML5",
        "REST APIs",
        "JWT Authentication",
      ],
      liveUrl: "https://mediacms-demo.example.com",
      githubUrl: "https://github.com/example/mediacms-platform",
      metrics: {
        users: "100+",
        performance: "96/100",
        rating: "4.7/5",
      },
      architecture:
        "React frontend with Node.js/Express backend, MongoDB for content storage, JWT-based role management, and REST APIs for CRUD operations and theme handling.",
      features: [
        "Public-facing website for posts and multimedia",
        "Admin panel for creating and reviewing content",
        "Collaborative workflow with draft, review, and approval stages",
        "Media library with drag-and-drop integration",
        "Dynamic theming and layouts",
        "Role-based user management",
        "Responsive design",
        "Versioning and activity logs",
      ],
      codeMetrics: {
        coverage: "90%",
        maintainability: "A",
        security: "A",
        performance: "95/100",
      },
      challenges: [
        {
          problem: "Collaborative Editing",
          description:
            "Multiple users needed to work on content without overwriting each other.",
          solution:
            "Implemented draft, review, and approval stages with versioning for safe edits.",
        },
        {
          problem: "Media Management",
          description:
            "Integrating images and videos consistently into posts was tricky.",
          solution:
            "Built a media library with drag-and-drop and auto-resizing for layouts.",
        },
      ],
      impact:
        "Streamlined content creation and approval, improved design consistency, and enabled timely publishing for the team.",
      results: [
        { value: "40%", metric: "Faster Content Approval" },
        { value: "99.5%", metric: "System Uptime" },
        { value: "500+", metric: "Active Creators" },
        { value: "1.8s", metric: "Average Page Load Time" },
      ],
    },
    {
      id: 2,
      title: "E-Commerce Platform with Real-time Analytics",
      description:
        "Full-stack e-commerce solution with advanced analytics dashboard, real-time inventory management, and seamless payment integration",
      fullDescription:
        "A comprehensive e-commerce platform built with modern web technologies, featuring real-time analytics, inventory management, secure payment processing, and an intuitive admin dashboard. The platform handles thousands of concurrent users with sub-second response times and provides detailed business insights through interactive data visualizations.",
      category: "fullstack",
      complexity: "Advanced",
      status: "Live",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1d6ec7e4a-1764660533966.png",
      imageAlt:
        "Modern e-commerce dashboard displaying colorful analytics charts and graphs on multiple computer monitors in professional office setting",
      technologies: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "Redis",
        "Docker",
        "AWS",
        "Stripe API",
        "WebSocket",
      ],
      liveUrl: "https://ecommerce-demo.giteshdev.com",
      githubUrl: "https://github.com/Gitesh1712/ecommerce-platform",
      metrics: {
        users: "15K+",
        performance: "98/100",
        rating: "4.8/5",
      },
      architecture:
        "Microservices architecture with React frontend, Spring Boot backend services, PostgreSQL for transactional data, Redis for caching, and AWS infrastructure. Implemented event-driven communication using Apache Kafka for real-time updates and scalability.",
      features: [
        "Real-time inventory synchronization across multiple warehouses",
        "Advanced product search with Elasticsearch integration",
        "Secure payment processing with Stripe and PayPal",
        "Interactive analytics dashboard with D3.js visualizations",
        "Automated email notifications and order tracking",
        "Multi-vendor support with separate admin panels",
        "Mobile-responsive design with PWA capabilities",
        "AI-powered product recommendations",
      ],

      codeMetrics: {
        coverage: "92%",
        maintainability: "A",
        security: "A+",
        performance: "95/100",
      },
      challenges: [
        {
          problem: "Handling High Traffic During Sales",
          description:
            "The platform experienced significant slowdowns during flash sales with 10,000+ concurrent users, leading to cart abandonment and lost revenue.",
          solution:
            "Implemented Redis caching for product data, optimized database queries with proper indexing, added horizontal scaling with load balancers, and introduced queue-based order processing to handle traffic spikes efficiently.",
        },
        {
          problem: "Real-time Inventory Synchronization",
          description:
            "Multiple warehouses needed instant inventory updates to prevent overselling, but traditional polling created database bottlenecks.",
          solution:
            "Developed WebSocket-based real-time communication system with event-driven architecture using Apache Kafka, ensuring instant inventory updates across all channels while maintaining data consistency.",
        },
      ],

      impact:
        "The platform successfully processed over $2.5M in transactions within the first six months, serving 15,000+ active users with 99.9% uptime. The real-time analytics helped merchants increase conversion rates by 35% through data-driven decision making.",
      results: [
        { value: "35%", metric: "Increase in Conversion Rate" },
        { value: "99.9%", metric: "System Uptime" },
        { value: "$2.5M", metric: "Revenue Processed" },
        { value: "2.1s", metric: "Average Page Load Time" },
      ],
    },
    {
      id: 3,
      title: "Social Media Analytics Dashboard",
      description:
        "Advanced analytics platform for tracking social media metrics, engagement rates, and audience insights across multiple platforms",
      fullDescription:
        "A powerful analytics dashboard that aggregates data from multiple social media platforms, providing real-time insights, trend analysis, and comprehensive reporting tools. Features AI-powered sentiment analysis and predictive analytics for content optimization.",
      category: "web",
      complexity: "Intermediate",
      status: "Live",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1cc153126-1764661263087.png",
      imageAlt:
        "Modern analytics dashboard on laptop screen showing colorful social media metrics graphs and engagement statistics in bright office environment",
      technologies: [
        "React",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Chart.js",
        "TensorFlow",
        "Docker",
      ],
      liveUrl: "https://analytics-demo.giteshdev.com",
      githubUrl: "https://github.com/Gitesh1712/social-analytics",
      metrics: {
        users: "5K+",
        performance: "94/100",
        rating: "4.7/5",
      },
      architecture:
        "React frontend with Python FastAPI backend, PostgreSQL for structured data storage, Redis for caching frequently accessed metrics, and TensorFlow for AI-powered sentiment analysis. Implemented scheduled data fetching from social media APIs with rate limiting and error handling.",
      features: [
        "Multi-platform integration (Twitter, Facebook, Instagram, LinkedIn)",
        "Real-time engagement tracking and notifications",
        "AI-powered sentiment analysis of comments and mentions",
        "Competitor analysis and benchmarking tools",
        "Automated report generation with customizable templates",
        "Content performance prediction using machine learning",
        "Hashtag and keyword trend analysis",
        "Team collaboration features with role-based permissions",
      ],

      codeMetrics: {
        coverage: "85%",
        maintainability: "B+",
        security: "A",
        performance: "91/100",
      },
      challenges: [
        {
          problem: "API Rate Limiting from Social Platforms",
          description:
            "Social media APIs imposed strict rate limits, causing data fetching delays and incomplete analytics for users with multiple accounts.",
          solution:
            "Implemented intelligent request queuing system with priority-based scheduling, distributed rate limit tracking across multiple API keys, and smart caching strategies to minimize API calls while maintaining data freshness.",
        },
        {
          problem: "Real-time Data Processing at Scale",
          description:
            "Processing millions of social media posts in real-time for sentiment analysis created performance bottlenecks and increased infrastructure costs.",
          solution:
            "Developed asynchronous processing pipeline using Celery workers, implemented batch processing for non-critical data, optimized TensorFlow models for faster inference, and used Redis for caching processed results.",
        },
      ],

      impact:
        "The platform helps 5,000+ marketers and businesses optimize their social media strategies, resulting in an average 50% increase in engagement rates and 30% improvement in content performance. The AI-powered insights have saved users an estimated 20 hours per week in manual analysis.",
      results: [
        { value: "50%", metric: "Average Engagement Increase" },
        { value: "30%", metric: "Content Performance Improvement" },
        { value: "20hrs", metric: "Time Saved Per Week" },
        { value: "5K+", metric: "Active Users" },
      ],
    },
    {
      id: 4,
      title: "Learning Management System",
      description:
        "Interactive online learning platform with video courses, quizzes, progress tracking, and certification management",
      fullDescription:
        "A comprehensive learning management system that enables educators to create and deliver engaging online courses with multimedia content, interactive assessments, and detailed progress tracking. Features include live classes, discussion forums, and automated certification.",
      category: "web",
      complexity: "Advanced",
      status: "Live",
      image:
        "https://img.rocket.new/generatedImages/rocket_gen_img_1e32c9d5e-1766805495998.png",
      imageAlt:
        "Student using laptop for online learning with video conference call showing teacher and classmates on screen in modern home office",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "WebRTC",
        "AWS",
        "FFmpeg",
        "Socket.io",
        "Redis",
      ],
      liveUrl: "https://lms-demo.giteshdev.com",
      githubUrl: "https://github.com/Gitesh1712/learning-management",
      metrics: {
        users: "12K+",
        performance: "93/100",
        rating: "4.8/5",
      },
      architecture:
        "React frontend with Node.js backend, MongoDB for flexible course content storage, WebRTC for live video classes, AWS S3 and CloudFront for video content delivery, FFmpeg for video processing, and Socket.io for real-time collaboration features.",
      features: [
        "Course creation tools with drag-and-drop interface",
        "Video hosting with adaptive streaming and subtitles",
        "Interactive quizzes with multiple question types",
        "Live video classes with screen sharing and whiteboard",
        "Discussion forums and peer-to-peer learning",
        "Progress tracking and learning analytics",
        "Automated certificate generation upon course completion",
        "Mobile-responsive design with offline content access",
      ],

      codeMetrics: {
        coverage: "90%",
        maintainability: "A",
        security: "A",
        performance: "94/100",
      },
      challenges: [
        {
          problem: "Video Streaming Performance",
          description:
            "Large video files caused slow loading times and buffering issues, especially for users with slower internet connections, impacting learning experience.",
          solution:
            "Implemented adaptive bitrate streaming using HLS protocol, integrated AWS CloudFront CDN for global content delivery, added video compression pipeline using FFmpeg, and created progressive download fallback for poor connections.",
        },
        {
          problem: "Live Class Scalability",
          description:
            "Live video classes with 100+ participants experienced lag, audio sync issues, and connection drops, disrupting the learning experience.",
          solution:
            "Architected scalable WebRTC infrastructure with selective forwarding units (SFU), implemented connection quality monitoring with automatic quality adjustment, added recording capabilities for later viewing, and created breakout room functionality for smaller group discussions.",
        },
      ],

      impact:
        "The platform serves 12,000+ students across 50+ courses, with 95% course completion rate and 4.8/5 average student satisfaction. Educators report 60% reduction in administrative time, and the platform has issued 8,000+ certificates.",
      results: [
        { value: "95%", metric: "Course Completion Rate" },
        { value: "12K+", metric: "Active Students" },
        { value: "8K+", metric: "Certificates Issued" },
        { value: "60%", metric: "Admin Time Reduction" },
      ],
    },
  ];

  const stats = {
    totalProjects: projects?.length,
    completed: projects?.filter((p) => p?.status === "Live")?.length,
    technologies: [...new Set(projects.flatMap((p) => p.technologies))]?.length,
    totalUsers:
      projects?.reduce((sum, p) => {
        const users = p?.metrics?.users?.replace(/[K+]/g, "");
        return sum + parseFloat(users) * 1000;
      }, 0) /
        1000 +
      "K+",
  };

  const filteredProjects = useMemo(() => {
    return projects?.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project?.category === selectedCategory;
      const matchesTech =
        selectedTech === "all" || project?.technologies?.includes(selectedTech);
      const matchesComplexity =
        selectedComplexity === "all" ||
        project?.complexity?.toLowerCase() === selectedComplexity;
      const matchesSearch =
        searchQuery === "" ||
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description
          ?.toLowerCase()
          ?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some((tech) =>
          tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
        );

      return (
        matchesCategory && matchesTech && matchesComplexity && matchesSearch
      );
    });
  }, [
    selectedCategory,
    selectedTech,
    selectedComplexity,
    searchQuery,
    projects,
  ]);

  const handleReset = () => {
    setSelectedCategory("all");
    setSelectedTech("all");
    setSelectedComplexity("all");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Icon name="Briefcase" size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Portfolio Showcase
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Projects Universe
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore my comprehensive collection of full-stack projects,
              featuring detailed case studies, live demonstrations, and
              technical deep-dives into modern web development solutions
            </p>
          </div>

          {/* 
          =========================STATS OVERVIEW REMOVED========================
          <StatsOverview stats={stats} /> */}

          <div className="mb-6 md:mb-8">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 bg-card border border-border rounded-xl text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          <ProjectFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedTech={selectedTech}
            onTechChange={setSelectedTech}
            selectedComplexity={selectedComplexity}
            onComplexityChange={setSelectedComplexity}
            onReset={handleReset}
          />

          {filteredProjects?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filteredProjects?.map((project) => (
                <ProjectCard
                  key={project?.id}
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 md:py-16 lg:py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-muted rounded-full mb-4">
                <Icon
                  name="SearchX"
                  size={32}
                  className="text-muted-foreground"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                No Projects Found
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Try adjusting your filters or search query to find what you're
                looking for
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Icon name="RotateCcw" size={20} />
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </main>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
