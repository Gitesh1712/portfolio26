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
import resumeFile from '../../assets/docs/Gitesh_cv_24March_SE.pdf';
import { certifications, technologyTimeline } from '../../data/experience';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const handleDownloadResume = () => {
    const anchor = document.createElement('a');
    anchor.href = resumeFile;
    anchor.download = 'Gitesh_cv_24March_SE.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud & DevOps', 'Tools & Others'];

  const skills = [
  {
    id: 1,
    name: "Java",
    category: "Backend",
    icon: "Coffee",
    proficiency: 92,
    level: "Expert",
    experience: "4+ years",
    startYear: 2020,
    growth: "+10% YoY",
    projects: ["Survey Platform", "Pareekshn Admin Panel", "Backend Services"],
    description: "Core Java, OOPs, collections, streams, multithreading, and design patterns"
  },
  {
    id: 2,
    name: "JavaScript",
    category: "Frontend",
    icon: "FileCode",
    proficiency: 88,
    level: "Expert",
    experience: "4+ years",
    startYear: 2020,
    growth: "+12% YoY",
    projects: ["Web Applications", "API Integration", "Interactive UIs"],
    description: "Modern ES6+ JavaScript with async/await, promises, and functional programming"
  },
  {
    id: 3,
    name: "Python",
    category: "Backend",
    icon: "Terminal",
    proficiency: 78,
    level: "Advanced",
    experience: "2+ years",
    startYear: 2022,
    growth: "+20% YoY",
    projects: ["RAG Chatbot", "Data Processing", "FastAPI Services"],
    description: "FastAPI, LangChain, data pipelines, and AI/ML integrations"
  },
  {
    id: 4,
    name: "React.js",
    category: "Frontend",
    icon: "Code2",
    proficiency: 90,
    level: "Expert",
    experience: "4+ years",
    startYear: 2020,
    growth: "+15% YoY",
    projects: ["Survey Platform", "Pareekshn Admin Panel", "Portfolio"],
    description: "Hooks, context, state management, and clean API integration"
  },
  {
    id: 5,
    name: "Tailwind CSS",
    category: "Frontend",
    icon: "Palette",
    proficiency: 85,
    level: "Advanced",
    experience: "2+ years",
    startYear: 2022,
    growth: "+19% YoY",
    projects: ["Portfolio", "Admin Dashboards", "Responsive UIs"],
    description: "Utility-first CSS, responsive design, and custom configuration"
  },
  {
    id: 6,
    name: "Spring Boot",
    category: "Backend",
    icon: "Server",
    proficiency: 92,
    level: "Expert",
    experience: "4+ years",
    startYear: 2020,
    growth: "+18% YoY",
    projects: ["Survey Platform", "Pareekshn Admin Panel", "REST APIs"],
    description: "RESTful API development, security, microservices, and performance optimization"
  },
  {
    id: 7,
    name: "Node.js",
    category: "Backend",
    icon: "Hexagon",
    proficiency: 85,
    level: "Advanced",
    experience: "3+ years",
    startYear: 2021,
    growth: "+22% YoY",
    projects: ["Pareekshn Platform", "API Servers", "Real-time Services"],
    description: "Express.js, middleware, authentication, and scalable server architecture"
  },
  {
    id: 8,
    name: "FastAPI",
    category: "Backend",
    icon: "Zap",
    proficiency: 78,
    level: "Advanced",
    experience: "1+ years",
    startYear: 2024,
    growth: "+30% YoY",
    projects: ["RAG Chatbot", "Legal Q&A API"],
    description: "Async Python APIs, dependency injection, and OpenAPI documentation"
  },
  {
    id: 9,
    name: "MySQL",
    category: "Database",
    icon: "Database",
    proficiency: 90,
    level: "Expert",
    experience: "4+ years",
    startYear: 2020,
    growth: "+14% YoY",
    projects: ["Survey Platform", "Pareekshn", "Query Optimization"],
    description: "Schema design, query optimization, indexing, and high-load performance tuning"
  },
  {
    id: 10,
    name: "PostgreSQL",
    category: "Database",
    icon: "Database",
    proficiency: 85,
    level: "Advanced",
    experience: "3+ years",
    startYear: 2021,
    growth: "+14% YoY",
    projects: ["Pareekshn Admin Panel", "pgvector RAG"],
    description: "Complex queries, indexing, pgvector for semantic search, and optimization"
  },
  {
    id: 11,
    name: "MongoDB",
    category: "Database",
    icon: "Layers",
    proficiency: 78,
    level: "Advanced",
    experience: "2+ years",
    startYear: 2022,
    growth: "+16% YoY",
    projects: ["NoSQL Solutions", "Document Storage"],
    description: "Document modeling, aggregation framework, and performance tuning"
  },
  {
    id: 12,
    name: "pgvector",
    category: "Database",
    icon: "Brain",
    proficiency: 72,
    level: "Intermediate",
    experience: "1+ years",
    startYear: 2024,
    growth: "+40% YoY",
    projects: ["RAG Chatbot", "Semantic Search"],
    description: "Vector similarity search in PostgreSQL for AI/RAG applications"
  },
  {
    id: 13,
    name: "AWS (EC2/RDS/S3)",
    category: "Cloud & DevOps",
    icon: "Cloud",
    proficiency: 80,
    level: "Advanced",
    experience: "2+ years",
    startYear: 2022,
    growth: "+25% YoY",
    projects: ["Survey Platform", "BIADA Deployment", "Cloud Infrastructure"],
    description: "EC2, RDS, S3 for production deployments with high availability"
  },
  {
    id: 14,
    name: "Docker",
    category: "Cloud & DevOps",
    icon: "Container",
    proficiency: 78,
    level: "Advanced",
    experience: "2+ years",
    startYear: 2022,
    growth: "+28% YoY",
    projects: ["RAG Chatbot", "Containerization", "Docker Compose"],
    description: "Docker Compose, multi-service orchestration, and image optimization"
  },
  {
    id: 15,
    name: "NGINX",
    category: "Cloud & DevOps",
    icon: "Globe",
    proficiency: 74,
    level: "Intermediate",
    experience: "2+ years",
    startYear: 2022,
    growth: "+20% YoY",
    projects: ["RAG Chatbot", "Reverse Proxy", "Load Balancing"],
    description: "Reverse proxy, load balancing, and production server configuration"
  },
  {
    id: 16,
    name: "Git / CI/CD",
    category: "Tools & Others",
    icon: "GitBranch",
    proficiency: 92,
    level: "Expert",
    experience: "4+ years",
    startYear: 2020,
    growth: "+8% YoY",
    projects: ["All Projects", "Team Collaboration", "Automated Pipelines"],
    description: "Advanced Git workflows, branching strategies, and CI/CD pipelines"
  },
  {
    id: 17,
    name: "DSA / OOPs",
    category: "Tools & Others",
    icon: "Code",
    proficiency: 90,
    level: "Expert",
    experience: "4+ years",
    startYear: 2020,
    growth: "+10% YoY",
    projects: ["350+ LeetCode", "300+ GFG", "System Design"],
    description: "Data structures, algorithms, OOP principles, and problem solving (350+ LeetCode)"
  }];

  // timelineData and certifications are imported from src/data/experience.js

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
            <TechnologyTimeline timelineData={technologyTimeline} />
          </div>

          {/* <div>
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
          </div> */}

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
                  <button onClick={handleDownloadResume} className="px-6 py-3 bg-card border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors duration-200 flex items-center justify-center gap-2">
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
