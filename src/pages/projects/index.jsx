import React, { useState, useMemo } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import StatsOverview from './components/StatsOverview';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTech, setSelectedTech] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
  {
    id: 1,
    title: "E-Commerce Platform with Real-time Analytics",
    description: "Full-stack e-commerce solution with advanced analytics dashboard, real-time inventory management, and seamless payment integration",
    fullDescription: "A comprehensive e-commerce platform built with modern web technologies, featuring real-time analytics, inventory management, secure payment processing, and an intuitive admin dashboard. The platform handles thousands of concurrent users with sub-second response times and provides detailed business insights through interactive data visualizations.",
    category: "fullstack",
    complexity: "Advanced",
    status: "Live",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d6ec7e4a-1764660533966.png",
    imageAlt: "Modern e-commerce dashboard displaying colorful analytics charts and graphs on multiple computer monitors in professional office setting",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Redis", "Docker", "AWS", "Stripe API", "WebSocket"],
    liveUrl: "https://ecommerce-demo.giteshdev.com",
    githubUrl: "https://github.com/giteshdev/ecommerce-platform",
    metrics: {
      users: "15K+",
      performance: "98/100",
      rating: "4.8/5"
    },
    architecture: "Microservices architecture with React frontend, Spring Boot backend services, PostgreSQL for transactional data, Redis for caching, and AWS infrastructure. Implemented event-driven communication using Apache Kafka for real-time updates and scalability.",
    features: [
    "Real-time inventory synchronization across multiple warehouses",
    "Advanced product search with Elasticsearch integration",
    "Secure payment processing with Stripe and PayPal",
    "Interactive analytics dashboard with D3.js visualizations",
    "Automated email notifications and order tracking",
    "Multi-vendor support with separate admin panels",
    "Mobile-responsive design with PWA capabilities",
    "AI-powered product recommendations"],

    codeMetrics: {
      coverage: "92%",
      maintainability: "A",
      security: "A+",
      performance: "95/100"
    },
    challenges: [
    {
      problem: "Handling High Traffic During Sales",
      description: "The platform experienced significant slowdowns during flash sales with 10,000+ concurrent users, leading to cart abandonment and lost revenue.",
      solution: "Implemented Redis caching for product data, optimized database queries with proper indexing, added horizontal scaling with load balancers, and introduced queue-based order processing to handle traffic spikes efficiently."
    },
    {
      problem: "Real-time Inventory Synchronization",
      description: "Multiple warehouses needed instant inventory updates to prevent overselling, but traditional polling created database bottlenecks.",
      solution: "Developed WebSocket-based real-time communication system with event-driven architecture using Apache Kafka, ensuring instant inventory updates across all channels while maintaining data consistency."
    }],

    impact: "The platform successfully processed over $2.5M in transactions within the first six months, serving 15,000+ active users with 99.9% uptime. The real-time analytics helped merchants increase conversion rates by 35% through data-driven decision making.",
    results: [
    { value: "35%", metric: "Increase in Conversion Rate" },
    { value: "99.9%", metric: "System Uptime" },
    { value: "$2.5M", metric: "Revenue Processed" },
    { value: "2.1s", metric: "Average Page Load Time" }],

    testimonial: {
      quote: "Gitesh delivered an exceptional e-commerce platform that exceeded our expectations. The real-time analytics and seamless user experience have transformed our business operations.",
      author: "Sarah Johnson",
      role: "CEO, TechMart Solutions",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ca9b4e24-1763293534250.png",
      avatarAlt: "Professional headshot of Sarah Johnson, blonde woman in navy business suit with warm smile"
    }
  },
  {
    id: 2,
    title: "Healthcare Management System",
    description: "Comprehensive healthcare platform for patient management, appointment scheduling, and electronic health records with HIPAA compliance",
    fullDescription: "A secure and scalable healthcare management system designed to streamline hospital operations, manage patient records, schedule appointments, and facilitate telemedicine consultations. Built with strict HIPAA compliance and advanced security measures to protect sensitive medical data.",
    category: "web",
    complexity: "Advanced",
    status: "Live",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13e1de3b8-1764646515688.png",
    imageAlt: "Modern hospital reception area with digital check-in kiosks and healthcare professionals using tablet computers for patient management",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "JWT", "AWS S3", "Twilio", "Docker"],
    liveUrl: "https://healthcare-demo.giteshdev.com",
    githubUrl: "https://github.com/giteshdev/healthcare-system",
    metrics: {
      users: "8K+",
      performance: "96/100",
      rating: "4.9/5"
    },
    architecture: "Monolithic architecture with React frontend and Node.js backend, MongoDB for flexible document storage, AWS S3 for secure medical document storage, and Socket.io for real-time communication. Implemented role-based access control and end-to-end encryption for data security.",
    features: [
    "Electronic Health Records (EHR) management with version control",
    "Appointment scheduling with automated reminders via SMS and email",
    "Telemedicine video consultation integration",
    "Prescription management and e-prescription generation",
    "Lab results tracking and patient portal access",
    "Insurance verification and billing integration",
    "Multi-language support for diverse patient populations",
    "HIPAA-compliant data encryption and audit logging"],

    codeMetrics: {
      coverage: "88%",
      maintainability: "A",
      security: "A+",
      performance: "93/100"
    },
    challenges: [
    {
      problem: "HIPAA Compliance and Data Security",
      description: "Ensuring complete HIPAA compliance while maintaining system performance and user experience was challenging, especially with real-time features.",
      solution: "Implemented end-to-end encryption for all patient data, role-based access control with multi-factor authentication, comprehensive audit logging, and regular security audits. Used AWS KMS for key management and encrypted data at rest and in transit."
    },
    {
      problem: "Telemedicine Video Quality",
      description: "Video consultations experienced quality issues and connection drops, affecting patient-doctor communication and satisfaction.",
      solution: "Integrated WebRTC with adaptive bitrate streaming, implemented fallback mechanisms for poor connections, added connection quality indicators, and optimized video compression algorithms to ensure smooth consultations even on slower networks."
    }],

    impact: "The system now serves 8,000+ patients across 5 healthcare facilities, reducing appointment no-shows by 40% through automated reminders and improving patient satisfaction scores by 45%. The platform has processed over 50,000 appointments and maintains 99.8% uptime.",
    results: [
    { value: "40%", metric: "Reduction in No-shows" },
    { value: "45%", metric: "Patient Satisfaction Increase" },
    { value: "50K+", metric: "Appointments Processed" },
    { value: "99.8%", metric: "System Uptime" }],

    testimonial: {
      quote: "This healthcare management system has revolutionized how we operate. The telemedicine features and automated scheduling have significantly improved our efficiency and patient care quality.",
      author: "Dr. Michael Chen",
      role: "Chief Medical Officer, HealthFirst Clinic",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_194e533c3-1763301316823.png",
      avatarAlt: "Professional headshot of Dr. Michael Chen, Asian male doctor in white coat with stethoscope and confident expression"
    }
  },
  {
    id: 3,
    title: "Social Media Analytics Dashboard",
    description: "Advanced analytics platform for tracking social media metrics, engagement rates, and audience insights across multiple platforms",
    fullDescription: "A powerful analytics dashboard that aggregates data from multiple social media platforms, providing real-time insights, trend analysis, and comprehensive reporting tools. Features AI-powered sentiment analysis and predictive analytics for content optimization.",
    category: "web",
    complexity: "Intermediate",
    status: "Live",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc153126-1764661263087.png",
    imageAlt: "Modern analytics dashboard on laptop screen showing colorful social media metrics graphs and engagement statistics in bright office environment",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Redis", "Chart.js", "TensorFlow", "Docker"],
    liveUrl: "https://analytics-demo.giteshdev.com",
    githubUrl: "https://github.com/giteshdev/social-analytics",
    metrics: {
      users: "5K+",
      performance: "94/100",
      rating: "4.7/5"
    },
    architecture: "React frontend with Python FastAPI backend, PostgreSQL for structured data storage, Redis for caching frequently accessed metrics, and TensorFlow for AI-powered sentiment analysis. Implemented scheduled data fetching from social media APIs with rate limiting and error handling.",
    features: [
    "Multi-platform integration (Twitter, Facebook, Instagram, LinkedIn)",
    "Real-time engagement tracking and notifications",
    "AI-powered sentiment analysis of comments and mentions",
    "Competitor analysis and benchmarking tools",
    "Automated report generation with customizable templates",
    "Content performance prediction using machine learning",
    "Hashtag and keyword trend analysis",
    "Team collaboration features with role-based permissions"],

    codeMetrics: {
      coverage: "85%",
      maintainability: "B+",
      security: "A",
      performance: "91/100"
    },
    challenges: [
    {
      problem: "API Rate Limiting from Social Platforms",
      description: "Social media APIs imposed strict rate limits, causing data fetching delays and incomplete analytics for users with multiple accounts.",
      solution: "Implemented intelligent request queuing system with priority-based scheduling, distributed rate limit tracking across multiple API keys, and smart caching strategies to minimize API calls while maintaining data freshness."
    },
    {
      problem: "Real-time Data Processing at Scale",
      description: "Processing millions of social media posts in real-time for sentiment analysis created performance bottlenecks and increased infrastructure costs.",
      solution: "Developed asynchronous processing pipeline using Celery workers, implemented batch processing for non-critical data, optimized TensorFlow models for faster inference, and used Redis for caching processed results."
    }],

    impact: "The platform helps 5,000+ marketers and businesses optimize their social media strategies, resulting in an average 50% increase in engagement rates and 30% improvement in content performance. The AI-powered insights have saved users an estimated 20 hours per week in manual analysis.",
    results: [
    { value: "50%", metric: "Average Engagement Increase" },
    { value: "30%", metric: "Content Performance Improvement" },
    { value: "20hrs", metric: "Time Saved Per Week" },
    { value: "5K+", metric: "Active Users" }],

    testimonial: {
      quote: "The AI-powered insights from this platform have completely transformed our social media strategy. We\'ve seen remarkable improvements in engagement and ROI.",
      author: "Emily Rodriguez",
      role: "Social Media Director, BrandBoost Agency",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_117446712-1763296393343.png",
      avatarAlt: "Professional headshot of Emily Rodriguez, Hispanic woman with long dark hair in modern business attire with friendly smile"
    }
  },
  {
    id: 4,
    title: "Real Estate Property Management",
    description: "Complete property management solution with tenant portals, maintenance tracking, and automated rent collection",
    fullDescription: "An all-in-one property management platform designed for landlords and property managers to streamline operations, manage multiple properties, track maintenance requests, and automate rent collection with integrated payment processing.",
    category: "fullstack",
    complexity: "Intermediate",
    status: "Live",
    image: "https://images.unsplash.com/photo-1706325744132-eb032e86080d",
    imageAlt: "Luxury modern apartment building exterior with glass windows and balconies during golden hour sunset lighting",
    technologies: ["React", "Spring Boot", "MySQL", "Stripe", "AWS", "SendGrid", "Docker", "Kubernetes"],
    liveUrl: "https://realestate-demo.giteshdev.com",
    githubUrl: "https://github.com/giteshdev/property-management",
    metrics: {
      users: "3K+",
      performance: "95/100",
      rating: "4.6/5"
    },
    architecture: "Microservices architecture with React frontend, Spring Boot backend services for property management, tenant management, and payment processing. MySQL for relational data, AWS S3 for document storage, and Kubernetes for container orchestration.",
    features: [
    "Multi-property management dashboard",
    "Tenant portal for rent payments and maintenance requests",
    "Automated rent collection with late fee calculation",
    "Maintenance request tracking with vendor assignment",
    "Lease agreement management and e-signature integration",
    "Financial reporting and expense tracking",
    "Tenant screening and background check integration",
    "Mobile app for on-the-go property management"],

    codeMetrics: {
      coverage: "87%",
      maintainability: "A-",
      security: "A",
      performance: "92/100"
    },
    challenges: [
    {
      problem: "Payment Processing Reliability",
      description: "Automated rent collection faced issues with failed payments, duplicate charges, and reconciliation problems, causing tenant complaints and accounting headaches.",
      solution: "Implemented idempotent payment processing with unique transaction IDs, added retry logic with exponential backoff for failed payments, created comprehensive payment reconciliation system, and integrated multiple payment gateways for redundancy."
    },
    {
      problem: "Document Management and Storage",
      description: "Managing thousands of lease agreements, inspection reports, and tenant documents required secure storage with quick retrieval and version control.",
      solution: "Developed document management system using AWS S3 with intelligent tiering for cost optimization, implemented full-text search using Elasticsearch, added version control for document updates, and created automated backup system."
    }],

    impact: "The platform manages 3,000+ properties across 15 cities, processing $5M+ in monthly rent payments with 99.5% collection rate. Property managers report saving 15 hours per week on administrative tasks, and tenant satisfaction has increased by 40%.",
    results: [
    { value: "99.5%", metric: "Rent Collection Rate" },
    { value: "$5M+", metric: "Monthly Payments Processed" },
    { value: "15hrs", metric: "Time Saved Per Week" },
    { value: "40%", metric: "Tenant Satisfaction Increase" }],

    testimonial: {
      quote: "This platform has simplified our property management operations tremendously. The automated rent collection and maintenance tracking features are game-changers.",
      author: "Robert Williams",
      role: "Property Manager, Urban Living Properties",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15d8f3cac-1763293072587.png",
      avatarAlt: "Professional headshot of Robert Williams, middle-aged Caucasian man in gray suit with confident business expression"
    }
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Interactive online learning platform with video courses, quizzes, progress tracking, and certification management",
    fullDescription: "A comprehensive learning management system that enables educators to create and deliver engaging online courses with multimedia content, interactive assessments, and detailed progress tracking. Features include live classes, discussion forums, and automated certification.",
    category: "web",
    complexity: "Advanced",
    status: "Live",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e32c9d5e-1766805495998.png",
    imageAlt: "Student using laptop for online learning with video conference call showing teacher and classmates on screen in modern home office",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "FFmpeg", "Socket.io", "Redis"],
    liveUrl: "https://lms-demo.giteshdev.com",
    githubUrl: "https://github.com/giteshdev/learning-management",
    metrics: {
      users: "12K+",
      performance: "93/100",
      rating: "4.8/5"
    },
    architecture: "React frontend with Node.js backend, MongoDB for flexible course content storage, WebRTC for live video classes, AWS S3 and CloudFront for video content delivery, FFmpeg for video processing, and Socket.io for real-time collaboration features.",
    features: [
    "Course creation tools with drag-and-drop interface",
    "Video hosting with adaptive streaming and subtitles",
    "Interactive quizzes with multiple question types",
    "Live video classes with screen sharing and whiteboard",
    "Discussion forums and peer-to-peer learning",
    "Progress tracking and learning analytics",
    "Automated certificate generation upon course completion",
    "Mobile-responsive design with offline content access"],

    codeMetrics: {
      coverage: "90%",
      maintainability: "A",
      security: "A",
      performance: "94/100"
    },
    challenges: [
    {
      problem: "Video Streaming Performance",
      description: "Large video files caused slow loading times and buffering issues, especially for users with slower internet connections, impacting learning experience.",
      solution: "Implemented adaptive bitrate streaming using HLS protocol, integrated AWS CloudFront CDN for global content delivery, added video compression pipeline using FFmpeg, and created progressive download fallback for poor connections."
    },
    {
      problem: "Live Class Scalability",
      description: "Live video classes with 100+ participants experienced lag, audio sync issues, and connection drops, disrupting the learning experience.",
      solution: "Architected scalable WebRTC infrastructure with selective forwarding units (SFU), implemented connection quality monitoring with automatic quality adjustment, added recording capabilities for later viewing, and created breakout room functionality for smaller group discussions."
    }],

    impact: "The platform serves 12,000+ students across 50+ courses, with 95% course completion rate and 4.8/5 average student satisfaction. Educators report 60% reduction in administrative time, and the platform has issued 8,000+ certificates.",
    results: [
    { value: "95%", metric: "Course Completion Rate" },
    { value: "12K+", metric: "Active Students" },
    { value: "8K+", metric: "Certificates Issued" },
    { value: "60%", metric: "Admin Time Reduction" }],

    testimonial: {
      quote: "This LMS has transformed how we deliver education. The interactive features and seamless video streaming have significantly improved student engagement and outcomes.",
      author: "Prof. Jennifer Martinez",
      role: "Dean of Online Education, TechEdu University",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_122a110d7-1763296387737.png",
      avatarAlt: "Professional headshot of Professor Jennifer Martinez, Hispanic woman with glasses in academic attire with warm professional smile"
    }
  },
  {
    id: 6,
    title: "Restaurant Management System",
    description: "Complete restaurant operations platform with POS, inventory management, online ordering, and kitchen display system",
    fullDescription: "An integrated restaurant management solution that streamlines front-of-house and back-of-house operations, from order taking and payment processing to inventory tracking and kitchen workflow management. Includes customer-facing online ordering and delivery integration.",
    category: "fullstack",
    complexity: "Intermediate",
    status: "Live",
    image: "https://images.unsplash.com/photo-1711183835743-898db45778d1",
    imageAlt: "Modern restaurant interior with waiter using tablet for order taking while customers dine at elegant tables with ambient lighting",
    technologies: ["React", "Spring Boot", "PostgreSQL", "Redis", "Stripe", "Twilio", "Docker", "RabbitMQ"],
    liveUrl: "https://restaurant-demo.giteshdev.com",
    githubUrl: "https://github.com/giteshdev/restaurant-management",
    metrics: {
      users: "2K+",
      performance: "96/100",
      rating: "4.7/5"
    },
    architecture: "Microservices architecture with React frontend for POS and admin panel, Spring Boot backend services for order management, inventory, and payments. PostgreSQL for transactional data, Redis for caching menu items, and RabbitMQ for asynchronous order processing.",
    features: [
    "Point of Sale (POS) system with table management",
    "Kitchen Display System (KDS) for order tracking",
    "Real-time inventory management with low-stock alerts",
    "Online ordering with delivery integration",
    "Menu management with pricing and availability control",
    "Staff scheduling and time tracking",
    "Customer loyalty program and promotions",
    "Sales analytics and reporting dashboard"],

    codeMetrics: {
      coverage: "86%",
      maintainability: "B+",
      security: "A",
      performance: "93/100"
    },
    challenges: [
    {
      problem: "Order Synchronization Across Systems",
      description: "Orders from POS, online platform, and third-party delivery services needed real-time synchronization to prevent kitchen confusion and order delays.",
      solution: "Implemented event-driven architecture using RabbitMQ for order routing, created unified order management system with priority queuing, added real-time kitchen display updates via WebSocket, and built reconciliation system for order tracking."
    },
    {
      problem: "Inventory Accuracy and Waste Reduction",
      description: "Manual inventory tracking led to stockouts, overstocking, and food waste, impacting profitability and customer satisfaction.",
      solution: "Developed automated inventory deduction based on recipe ingredients, implemented predictive ordering using historical sales data, added expiration date tracking with alerts, and created waste tracking system for cost analysis."
    }],

    impact: "The system serves 2,000+ restaurants, processing 500K+ orders monthly with average order preparation time reduced by 25%. Restaurants report 30% reduction in food waste and 20% increase in table turnover rate.",
    results: [
    { value: "25%", metric: "Faster Order Preparation" },
    { value: "30%", metric: "Food Waste Reduction" },
    { value: "500K+", metric: "Monthly Orders" },
    { value: "20%", metric: "Table Turnover Increase" }],

    testimonial: {
      quote: "This system has revolutionized our restaurant operations. The integrated POS and kitchen display have dramatically improved our efficiency and customer service.",
      author: "Marco Rossi",
      role: "Owner, Bella Italia Restaurant Group",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_185692eac-1763296572334.png",
      avatarAlt: "Professional headshot of Marco Rossi, Italian male restaurant owner in chef whites with confident friendly expression"
    }
  }];


  const stats = {
    totalProjects: projects?.length,
    completed: projects?.filter((p) => p?.status === 'Live')?.length,
    technologies: [...new Set(projects.flatMap((p) => p.technologies))]?.length,
    totalUsers: projects?.reduce((sum, p) => {
      const users = p?.metrics?.users?.replace(/[K+]/g, '');
      return sum + parseFloat(users) * 1000;
    }, 0) / 1000 + 'K+'
  };

  const filteredProjects = useMemo(() => {
    return projects?.filter((project) => {
      const matchesCategory = selectedCategory === 'all' || project?.category === selectedCategory;
      const matchesTech = selectedTech === 'all' || project?.technologies?.includes(selectedTech);
      const matchesComplexity = selectedComplexity === 'all' || project?.complexity?.toLowerCase() === selectedComplexity;
      const matchesSearch = searchQuery === '' ||
      project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      project?.technologies?.some((tech) => tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()));

      return matchesCategory && matchesTech && matchesComplexity && matchesSearch;
    });
  }, [selectedCategory, selectedTech, selectedComplexity, searchQuery, projects]);

  const handleReset = () => {
    setSelectedCategory('all');
    setSelectedTech('all');
    setSelectedComplexity('all');
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Icon name="Briefcase" size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">Portfolio Showcase</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Projects Universe
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore my comprehensive collection of full-stack projects, featuring detailed case studies, live demonstrations, and technical deep-dives into modern web development solutions
            </p>
          </div>

          <StatsOverview stats={stats} />

          <div className="mb-6 md:mb-8">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 bg-card border border-border rounded-xl text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />

            </div>
          </div>

          <ProjectFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedTech={selectedTech}
            onTechChange={setSelectedTech}
            selectedComplexity={selectedComplexity}
            onComplexityChange={setSelectedComplexity}
            onReset={handleReset} />


          {filteredProjects?.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filteredProjects?.map((project) =>
            <ProjectCard
              key={project?.id}
              project={project}
              onViewDetails={setSelectedProject} />

            )}
            </div> :

          <div className="text-center py-12 md:py-16 lg:py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-muted rounded-full mb-4">
                <Icon name="SearchX" size={32} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                No Projects Found
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Try adjusting your filters or search query to find what you're looking for
              </p>
              <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">

                <Icon name="RotateCcw" size={20} />
                Reset Filters
              </button>
            </div>
          }
        </div>
      </main>
      {selectedProject &&
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)} />

      }
    </div>);

};

export default Projects;