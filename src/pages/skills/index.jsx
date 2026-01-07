import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import SkillCard from './components/SkillCard';
import SkillRadarChart from './components/SkillRadarChart';
import TechnologyTimeline from './components/TechnologyTimeline';
import CertificationBadge from './components/CertificationBadge';
import SkillRelationshipMap from './components/SkillRelationshipMap';
import LearningPathCard from './components/LearningPathCard';
import SkillComparisonMode from './components/SkillComparisonMode';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud & DevOps', 'Tools & Others'];

  const skills = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    icon: "Code2",
    proficiency: 95,
    level: "Expert",
    experience: "4+ years",
    startYear: 2020,
    growth: "+15% YoY",
    projects: ["E-commerce Platform", "Admin Dashboard", "Social Media App"],
    description: "Advanced React development with hooks, context, and performance optimization"
  },
  {
    id: 2,
    name: "JavaScript",
    category: "Frontend",
    icon: "FileCode",
    proficiency: 92,
    level: "Expert",
    experience: "5+ years",
    startYear: 2019,
    growth: "+12% YoY",
    projects: ["Web Applications", "API Integration", "Interactive UIs"],
    description: "Modern ES6+ JavaScript with async/await, promises, and functional programming"
  },
  {
    id: 3,
    name: "TypeScript",
    category: "Frontend",
    icon: "Code",
    proficiency: 88,
    level: "Advanced",
    experience: "3+ years",
    startYear: 2021,
    growth: "+20% YoY",
    projects: ["Enterprise Apps", "Type-safe APIs", "Component Libraries"],
    description: "Strong typing, interfaces, generics, and advanced TypeScript patterns"
  },
  {
    id: 4,
    name: "Spring Boot",
    category: "Backend",
    icon: "Server",
    proficiency: 90,
    level: "Expert",
    experience: "4+ years",
    startYear: 2020,
    growth: "+18% YoY",
    projects: ["REST APIs", "Microservices", "Enterprise Systems"],
    description: "RESTful API development, security, and microservices architecture"
  },
  {
    id: 5,
    name: "Java",
    category: "Backend",
    icon: "Coffee",
    proficiency: 93,
    level: "Expert",
    experience: "5+ years",
    startYear: 2019,
    growth: "+10% YoY",
    projects: ["Backend Services", "Data Processing", "System Integration"],
    description: "Core Java, collections, streams, multithreading, and design patterns"
  },
  {
    id: 6,
    name: "Node.js",
    category: "Backend",
    icon: "Hexagon",
    proficiency: 85,
    level: "Advanced",
    experience: "3+ years",
    startYear: 2021,
    growth: "+22% YoY",
    projects: ["API Servers", "Real-time Apps", "Serverless Functions"],
    description: "Express.js, middleware, authentication, and scalable server architecture"
  },
  {
    id: 7,
    name: "PostgreSQL",
    category: "Database",
    icon: "Database",
    proficiency: 87,
    level: "Advanced",
    experience: "4+ years",
    startYear: 2020,
    growth: "+14% YoY",
    projects: ["Data Modeling", "Query Optimization", "Database Design"],
    description: "Complex queries, indexing, transactions, and database optimization"
  },
  {
    id: 8,
    name: "MongoDB",
    category: "Database",
    icon: "Database",
    proficiency: 82,
    level: "Advanced",
    experience: "3+ years",
    startYear: 2021,
    growth: "+16% YoY",
    projects: ["NoSQL Solutions", "Document Storage", "Aggregation Pipelines"],
    description: "Document modeling, aggregation framework, and performance tuning"
  },
  {
    id: 9,
    name: "AWS",
    category: "Cloud & DevOps",
    icon: "Cloud",
    proficiency: 80,
    level: "Intermediate",
    experience: "2+ years",
    startYear: 2022,
    growth: "+25% YoY",
    projects: ["Cloud Deployment", "S3 Storage", "Lambda Functions"],
    description: "EC2, S3, Lambda, RDS, and cloud infrastructure management"
  },
  {
    id: 10,
    name: "Docker",
    category: "Cloud & DevOps",
    icon: "Container",
    proficiency: 78,
    level: "Intermediate",
    experience: "2+ years",
    startYear: 2022,
    growth: "+28% YoY",
    projects: ["Containerization", "Multi-stage Builds", "Docker Compose"],
    description: "Container orchestration, image optimization, and deployment strategies"
  },
  {
    id: 11,
    name: "Git",
    category: "Tools & Others",
    icon: "GitBranch",
    proficiency: 94,
    level: "Expert",
    experience: "5+ years",
    startYear: 2019,
    growth: "+8% YoY",
    projects: ["Version Control", "Collaboration", "Code Review"],
    description: "Advanced Git workflows, branching strategies, and team collaboration"
  },
  {
    id: 12,
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "Palette",
    proficiency: 91,
    level: "Expert",
    experience: "3+ years",
    startYear: 2021,
    growth: "+19% YoY",
    projects: ["Responsive Design", "Component Styling", "Custom Themes"],
    description: "Utility-first CSS, responsive design, and custom configuration"
  }];


  const timelineData = [
  {
    year: "2026",
    milestone: "Advanced Architecture",
    icon: "Rocket",
    description: "Focusing on system design, microservices architecture, and cloud-native development with Kubernetes and advanced DevOps practices.",
    technologies: ["Kubernetes", "GraphQL", "Rust", "WebAssembly"]
  },
  {
    year: "2025",
    milestone: "Full-Stack Mastery",
    icon: "Award",
    description: "Achieved expert-level proficiency in React, Spring Boot, and cloud technologies. Leading development of enterprise-scale applications.",
    technologies: ["React 18", "Spring Boot 3", "AWS", "Docker"]
  },
  {
    year: "2024",
    milestone: "Cloud & DevOps",
    icon: "Cloud",
    description: "Expanded expertise into cloud platforms and DevOps practices. Implemented CI/CD pipelines and containerized applications.",
    technologies: ["AWS", "Docker", "Jenkins", "Terraform"]
  },
  {
    year: "2023",
    milestone: "Backend Specialization",
    icon: "Server",
    description: "Deep dive into backend development with Spring Boot and microservices architecture. Built scalable REST APIs and database systems.",
    technologies: ["Spring Boot", "PostgreSQL", "Redis", "Kafka"]
  },
  {
    year: "2022",
    milestone: "Modern Frontend",
    icon: "Layout",
    description: "Mastered modern frontend development with React, TypeScript, and state management. Created responsive and performant web applications.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"]
  },
  {
    year: "2021",
    milestone: "JavaScript Ecosystem",
    icon: "Code2",
    description: "Explored the JavaScript ecosystem including Node.js, npm packages, and modern build tools. Built full-stack applications.",
    technologies: ["Node.js", "Express", "Webpack", "Babel"]
  },
  {
    year: "2020",
    milestone: "Web Development Foundation",
    icon: "BookOpen",
    description: "Started professional web development journey. Learned HTML, CSS, JavaScript fundamentals and basic React concepts.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React Basics"]
  },
  {
    year: "2019",
    milestone: "Programming Fundamentals",
    icon: "Code",
    description: "Began learning programming with Java. Studied data structures, algorithms, and object-oriented programming principles.",
    technologies: ["Java", "Data Structures", "Algorithms", "OOP"]
  }];


  const certifications = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_166f1efe1-1764661435735.png",
    badgeAlt: "AWS certification badge with orange and white cloud logo on blue background showing Solutions Architect Associate credential",
    issueDate: "Jan 2024",
    expiryDate: "Jan 2027",
    verificationUrl: "https://aws.amazon.com/verification"
  },
  {
    id: 2,
    name: "Oracle Certified Professional: Java SE 11 Developer",
    issuer: "Oracle",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_18cf36c4b-1765031720849.png",
    badgeAlt: "Oracle Java certification badge with red Oracle logo and Java coffee cup icon on white background",
    issueDate: "Mar 2023",
    expiryDate: "Lifetime",
    verificationUrl: "https://oracle.com/verification"
  },
  {
    id: 3,
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Facebook)",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_129c5b7d4-1764661436023.png",
    badgeAlt: "Meta certification badge with blue infinity symbol logo and Front-End Developer text on white background",
    issueDate: "Jun 2022",
    expiryDate: "Lifetime",
    verificationUrl: "https://coursera.org/verification"
  },
  {
    id: 4,
    name: "Docker Certified Associate",
    issuer: "Docker Inc.",
    badge: "https://img.rocket.new/generatedImages/rocket_gen_img_10dadbd09-1767113199618.png",
    badgeAlt: "Docker certification badge with blue whale logo carrying containers on ocean background",
    issueDate: "Sep 2023",
    expiryDate: "Sep 2025",
    verificationUrl: "https://docker.com/verification"
  }];


  const relationshipData = [
  {
    category: "Full-Stack Web Development",
    icon: "Layers",
    description: "Complete web application development stack",
    skills: [
    { name: "React", icon: "Code2", proficiency: 95 },
    { name: "Spring Boot", icon: "Server", proficiency: 90 },
    { name: "PostgreSQL", icon: "Database", proficiency: 87 },
    { name: "Tailwind CSS", icon: "Palette", proficiency: 91 }],

    projects: ["E-commerce Platform", "Admin Dashboard", "Social Media App"]
  },
  {
    category: "Modern JavaScript Stack",
    icon: "FileCode",
    description: "Contemporary JavaScript development ecosystem",
    skills: [
    { name: "JavaScript", icon: "FileCode", proficiency: 92 },
    { name: "TypeScript", icon: "Code", proficiency: 88 },
    { name: "Node.js", icon: "Hexagon", proficiency: 85 },
    { name: "React", icon: "Code2", proficiency: 95 }],

    projects: ["API Services", "Real-time Applications", "Interactive UIs"]
  },
  {
    category: "Backend & Database",
    icon: "Database",
    description: "Server-side development and data management",
    skills: [
    { name: "Java", icon: "Coffee", proficiency: 93 },
    { name: "Spring Boot", icon: "Server", proficiency: 90 },
    { name: "PostgreSQL", icon: "Database", proficiency: 87 },
    { name: "MongoDB", icon: "Database", proficiency: 82 }],

    projects: ["REST APIs", "Microservices", "Data Processing Systems"]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    description: "Cloud infrastructure and deployment automation",
    skills: [
    { name: "AWS", icon: "Cloud", proficiency: 80 },
    { name: "Docker", icon: "Container", proficiency: 78 },
    { name: "Git", icon: "GitBranch", proficiency: 94 }],

    projects: ["Cloud Deployment", "CI/CD Pipelines", "Container Orchestration"]
  }];


  const learningPaths = [
  {
    id: 1,
    title: "Advanced System Design",
    icon: "Network",
    duration: "6 months",
    description: "Master distributed systems, microservices architecture, and scalable system design patterns.",
    goal: "Design enterprise-scale systems",
    targetDate: "Jun 2026",
    steps: [
    {
      title: "Distributed Systems Fundamentals",
      description: "CAP theorem, consistency models, distributed consensus",
      completed: true,
      current: false
    },
    {
      title: "Microservices Architecture",
      description: "Service decomposition, API gateway, service mesh",
      completed: true,
      current: false
    },
    {
      title: "Scalability Patterns",
      description: "Load balancing, caching strategies, database sharding",
      completed: false,
      current: true
    },
    {
      title: "System Design Case Studies",
      description: "Design Twitter, Netflix, Uber-like systems",
      completed: false,
      current: false
    }]

  },
  {
    id: 2,
    title: "Cloud Native Development",
    icon: "CloudCog",
    duration: "4 months",
    description: "Build and deploy cloud-native applications using Kubernetes and serverless architectures.",
    goal: "Kubernetes certification",
    targetDate: "Apr 2026",
    steps: [
    {
      title: "Kubernetes Fundamentals",
      description: "Pods, services, deployments, and configurations",
      completed: true,
      current: false
    },
    {
      title: "Container Orchestration",
      description: "Scaling, rolling updates, health checks",
      completed: false,
      current: true
    },
    {
      title: "Serverless Architecture",
      description: "AWS Lambda, API Gateway, event-driven design",
      completed: false,
      current: false
    },
    {
      title: "Cloud Security",
      description: "IAM, secrets management, network policies",
      completed: false,
      current: false
    }]

  },
  {
    id: 3,
    title: "Advanced Frontend Performance",
    icon: "Zap",
    duration: "3 months",
    description: "Optimize React applications for maximum performance and user experience.",
    goal: "Sub-second load times",
    targetDate: "Mar 2026",
    steps: [
    {
      title: "React Performance Optimization",
      description: "Memoization, lazy loading, code splitting",
      completed: true,
      current: false
    },
    {
      title: "Web Vitals & Metrics",
      description: "LCP, FID, CLS optimization techniques",
      completed: true,
      current: false
    },
    {
      title: "Advanced Rendering Patterns",
      description: "SSR, SSG, ISR with Next.js",
      completed: false,
      current: true
    },
    {
      title: "Performance Monitoring",
      description: "Lighthouse, Web Vitals, custom metrics",
      completed: false,
      current: false
    }]

  }];


  const comparisonData = [
  { skill: "React", 2024: 85, 2025: 92, 2026: 95 },
  { skill: "Spring Boot", 2024: 78, 2025: 87, 2026: 90 },
  { skill: "TypeScript", 2024: 70, 2025: 82, 2026: 88 },
  { skill: "AWS", 2024: 60, 2025: 75, 2026: 80 },
  { skill: "PostgreSQL", 2024: 75, 2025: 84, 2026: 87 },
  { skill: "Docker", 2024: 55, 2025: 70, 2026: 78 }];


  const filteredSkills = selectedCategory === 'All' ?
  skills :
  skills?.filter((skill) => skill?.category === selectedCategory);

  const handleSkillClick = (skill) => {
    setSelectedSkill(selectedSkill?.id === skill?.id ? null : skill);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Icon name="Sparkles" size={16} color="var(--color-primary)" strokeWidth={2} />
              <span className="text-sm font-medium text-primary">Technical Arsenal</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive overview of technical capabilities with interactive proficiency indicators,
              learning paths, and technology relationships
            </p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {categories?.map((category) =>
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category ?
                  'bg-primary text-primary-foreground shadow-purple' :
                  'bg-muted text-muted-foreground hover:bg-muted/80'}`
                  }>

                    {category}
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`
                  }>

                  <Icon name="Grid3x3" size={20} strokeWidth={2} />
                </button>
                <button
                  onClick={() => setViewMode('radar')}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                  viewMode === 'radar' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`
                  }>

                  <Icon name="Radar" size={20} strokeWidth={2} />
                </button>
              </div>
            </div>

            {viewMode === 'grid' ?
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredSkills?.map((skill) =>
              <SkillCard
                key={skill?.id}
                skill={skill}
                onSelect={handleSkillClick}
                isSelected={selectedSkill?.id === skill?.id} />

              )}
              </div> :

            <div className="bg-card border border-border rounded-xl p-4 md:p-8">
                <div className="w-full h-96 md:h-[500px]">
                  <SkillRadarChart skills={filteredSkills} selectedCategory={selectedCategory} />
                </div>
              </div>
            }
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="TrendingUp" size={20} color="#ffffff" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Skill Comparison</h2>
                <p className="text-sm text-muted-foreground">Track proficiency growth over time</p>
              </div>
            </div>
            <SkillComparisonMode comparisonData={comparisonData} />
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Network" size={20} color="#ffffff" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Technology Relationships</h2>
                <p className="text-sm text-muted-foreground">How different skills complement each other</p>
              </div>
            </div>
            <SkillRelationshipMap
              relationships={relationshipData}
              onSkillClick={handleSkillClick} />

          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Target" size={20} color="#ffffff" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Learning Paths</h2>
                <p className="text-sm text-muted-foreground">Continuous skill development trajectory</p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {learningPaths?.map((path) =>
              <LearningPathCard key={path?.id} path={path} />
              )}
            </div>
          </div>

          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Clock" size={20} color="#ffffff" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Technology Timeline</h2>
                <p className="text-sm text-muted-foreground">Journey of skill acquisition and growth</p>
              </div>
            </div>
            <TechnologyTimeline timelineData={timelineData} />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Award" size={20} color="#ffffff" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Certifications</h2>
                <p className="text-sm text-muted-foreground">Professional credentials and achievements</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {certifications?.map((cert) =>
              <CertificationBadge key={cert?.id} certification={cert} />
              )}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Icon name="Code2" size={32} color="#ffffff" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Let's discuss how these skills can bring your project to life. I'm always excited to tackle new challenges and create innovative solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center gap-2">
                    <Icon name="Mail" size={18} strokeWidth={2} />
                    <span>Get in Touch</span>
                  </button>
                  <button className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors duration-200 flex items-center justify-center gap-2">
                    <Icon name="Download" size={18} strokeWidth={2} />
                    <span>Download Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Code2" size={20} color="#ffffff" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-foreground">GiteshDev</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date()?.getFullYear()} GiteshDev. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Icon name="Github" size={20} strokeWidth={2} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Icon name="Linkedin" size={20} strokeWidth={2} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <Icon name="Mail" size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

};

export default Skills;