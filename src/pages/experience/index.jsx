import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TimelineItem from './components/TimelineItem';
import StatsCard from './components/StatsCard';
import CertificationCard from './components/CertificationCard';
import SkillEvolutionChart from './components/SkillEvolutionChart';

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const experiences = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    companyLogo: "https://images.unsplash.com/photo-1715950227433-4cd241cc50b2",
    companyLogoAlt: "Modern tech company office building with glass facade and blue sky background",
    companyDescription: "Leading enterprise software solutions provider specializing in cloud-native applications and microservices architecture",
    duration: "Jan 2024 - Present",
    location: "Bangalore, India",
    isCurrent: true,
    responsibilities: [
    "Architected and implemented scalable microservices using Spring Boot and React, serving 500K+ daily active users",
    "Led a team of 5 developers in delivering critical features for enterprise clients, improving delivery velocity by 40%",
    "Optimized database queries and implemented caching strategies, reducing API response time by 60%",
    "Established CI/CD pipelines using Jenkins and Docker, reducing deployment time from 2 hours to 15 minutes",
    "Mentored junior developers through code reviews and technical workshops, improving team code quality by 35%",
    "Collaborated with product managers and designers to translate business requirements into technical solutions"],

    achievements: [
    {
      icon: "TrendingUp",
      metric: "60%",
      description: "Performance improvement in API response times"
    },
    {
      icon: "Users",
      metric: "500K+",
      description: "Daily active users served by applications"
    },
    {
      icon: "Award",
      metric: "40%",
      description: "Increase in team delivery velocity"
    }],

    technologies: [
    "React 18",
    "Spring Boot",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Kubernetes",
    "AWS",
    "Jenkins",
    "Git",
    "REST APIs",
    "GraphQL",
    "Microservices"],

    projects: [
    {
      name: "Enterprise Dashboard Platform",
      description: "Built comprehensive analytics dashboard with real-time data visualization serving 100K+ users",
      impact: "Reduced data processing time by 70% and improved user engagement by 45%"
    },
    {
      name: "Payment Gateway Integration",
      description: "Integrated multiple payment providers with robust error handling and transaction monitoring",
      impact: "Processed $5M+ in transactions with 99.9% success rate"
    }]

  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_16ccd4d83-1766407248861.png",
    companyLogoAlt: "Corporate office building with modern architecture featuring steel and glass construction",
    companyDescription: "Digital transformation consultancy helping businesses modernize their technology stack and processes",
    duration: "Mar 2022 - Dec 2023",
    location: "Mumbai, India",
    isCurrent: false,
    responsibilities: [
    "Developed and maintained 15+ client-facing web applications using React, Node.js, and MongoDB",
    "Implemented responsive designs ensuring seamless experience across desktop, tablet, and mobile devices",
    "Integrated third-party APIs including payment gateways, social media platforms, and analytics tools",
    "Participated in agile ceremonies and contributed to sprint planning and retrospectives",
    "Created comprehensive technical documentation for codebases and deployment procedures"],

    achievements: [
    {
      icon: "Zap",
      metric: "15+",
      description: "Client applications delivered successfully"
    },
    {
      icon: "Star",
      metric: "98%",
      description: "Client satisfaction rating achieved"
    },
    {
      icon: "Clock",
      metric: "30%",
      description: "Reduction in development time through reusable components"
    }],

    technologies: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Tailwind CSS",
    "Git",
    "REST APIs",
    "JWT",
    "AWS S3",
    "Stripe API"],

    projects: [
    {
      name: "E-commerce Platform",
      description: "Built full-featured online shopping platform with cart, checkout, and order management",
      impact: "Generated $2M+ in revenue within first 6 months of launch"
    },
    {
      name: "Customer Portal",
      description: "Developed self-service portal for customers to manage accounts and track orders",
      impact: "Reduced customer support tickets by 50%"
    }]

  },
  {
    id: 3,
    role: "Junior Software Developer",
    company: "StartUp Ventures",
    companyLogo: "https://img.rocket.new/generatedImages/rocket_gen_img_1deaeeb0d-1767076524125.png",
    companyLogoAlt: "Modern startup office space with open floor plan and collaborative work environment",
    companyDescription: "Fast-growing startup focused on building innovative SaaS products for small and medium businesses",
    duration: "Jun 2020 - Feb 2022",
    location: "Pune, India",
    isCurrent: false,
    responsibilities: [
    "Developed frontend components using React and implemented state management with Redux",
    "Built RESTful APIs using Node.js and Express for various application features",
    "Fixed bugs and implemented feature enhancements based on user feedback",
    "Collaborated with cross-functional teams to deliver features on tight deadlines",
    "Wrote unit tests and integration tests to ensure code quality and reliability"],

    achievements: [
    {
      icon: "Code2",
      metric: "50+",
      description: "Features and bug fixes delivered"
    },
    {
      icon: "GitBranch",
      metric: "1000+",
      description: "Code commits contributing to product growth"
    },
    {
      icon: "CheckCircle",
      metric: "95%",
      description: "Test coverage maintained across codebase"
    }],

    technologies: [
    "React",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Git",
    "Jest"],

    projects: [
    {
      name: "Task Management System",
      description: "Built collaborative task tracking application with real-time updates and notifications",
      impact: "Improved team productivity by 35% through better task organization"
    }]

  }];


  const careerStats = [
  {
    icon: "Briefcase",
    value: "4+",
    label: "Years Experience",
    description: "Progressive career growth in software development"
  },
  {
    icon: "FolderGit2",
    value: "30+",
    label: "Projects Delivered",
    description: "Successfully completed client and internal projects"
  },
  {
    icon: "Users",
    value: "500K+",
    label: "Users Impacted",
    description: "Total users served across all applications"
  },
  {
    icon: "Award",
    value: "12+",
    label: "Technologies Mastered",
    description: "Expertise across full-stack development"
  }];


  const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Nov 2023",
    credentialId: "AWS-CSA-2023-1234",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_170dd5082-1764674270965.png",
    logoAlt: "AWS certification badge with orange and white cloud computing logo on professional background"
  },
  {
    name: "Oracle Certified Professional Java SE",
    issuer: "Oracle Corporation",
    date: "Aug 2023",
    credentialId: "OCP-JAVA-2023-5678",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_18cf36c4b-1765031720849.png",
    logoAlt: "Oracle Java certification emblem featuring red coffee cup logo on white background"
  },
  {
    name: "React Advanced Certification",
    issuer: "Meta (Facebook)",
    date: "May 2023",
    credentialId: "META-REACT-2023-9012",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1cd01d406-1764674757506.png",
    logoAlt: "Meta React certification badge with blue gradient and atomic symbol design"
  }];


  const skillEvolution = [
  {
    year: "2024-Present",
    phase: "Advanced Full-Stack & Architecture",
    skills: ["Microservices", "Kubernetes", "GraphQL", "System Design", "Team Leadership", "DevOps"]
  },
  {
    year: "2022-2023",
    phase: "Full-Stack Development Mastery",
    skills: ["React Advanced", "Node.js", "MongoDB", "AWS", "CI/CD", "Agile Methodologies"]
  },
  {
    year: "2020-2021",
    phase: "Foundation & Core Technologies",
    skills: ["React Basics", "JavaScript ES6+", "REST APIs", "Git", "HTML5/CSS3", "Redux"]
  }];


  const handleDownloadResume = () => {
    // Mock resume download functionality
    console.log('Downloading resume...');
  };

  const filteredExperiences = activeFilter === 'all' ?
  experiences :
  experiences?.filter((exp) => exp?.isCurrent === (activeFilter === 'current'));

  return (
    <>
      <Helmet>
        <title>Professional Experience - GiteshDev Portfolio</title>
        <meta name="description" content="Explore Gitesh's professional journey as a Senior Software Engineer with 4+ years of experience in full-stack development, delivering scalable solutions and leading development teams." />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 md:pt-28 md:pb-16 md:px-6 lg:pt-32 lg:pb-20 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 md:mb-6">
                <Icon name="Briefcase" size={16} className="text-primary md:w-5 md:h-5" />
                <span className="text-xs font-medium text-primary md:text-sm">Professional Journey</span>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4 md:text-4xl lg:text-5xl">
                Experience & Career Growth
              </h1>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto md:text-base lg:text-lg">
                A progressive career journey showcasing technical expertise, leadership development, and measurable impact across diverse projects and technologies
              </p>
            </div>

            {/* Career Stats */}
            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 md:gap-6 md:mb-12 lg:grid-cols-4 lg:gap-8 lg:mb-16">
              {careerStats?.map((stat, idx) =>
              <StatsCard key={idx} stat={stat} />
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center mb-8 md:gap-3 md:mb-12 lg:mb-16">
              <Button
                variant={activeFilter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter('all')}>

                All Positions
              </Button>
              <Button
                variant={activeFilter === 'current' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter('current')}>

                Current Role
              </Button>
              <Button
                variant={activeFilter === 'previous' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter('previous')}>

                Previous Roles
              </Button>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="pb-12 px-4 md:pb-16 md:px-6 lg:pb-20 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 md:text-3xl md:mb-12 lg:text-4xl lg:mb-16">
              Career Timeline
            </h2>
            <div className="space-y-0">
              {filteredExperiences?.map((experience, idx) =>
              <TimelineItem
                key={experience?.id}
                experience={experience}
                isLast={idx === filteredExperiences?.length - 1} />

              )}
            </div>
          </div>
        </section>

        {/* Skills Evolution */}
        <section className="pb-12 px-4 md:pb-16 md:px-6 lg:pb-20 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SkillEvolutionChart skillEvolution={skillEvolution} />
          </div>
        </section>

        {/* Certifications */}
        <section className="pb-12 px-4 md:pb-16 md:px-6 lg:pb-20 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-3 md:text-3xl lg:text-4xl">
                Professional Certifications
              </h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                Industry-recognized credentials validating technical expertise
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
              {certifications?.map((cert, idx) =>
              <CertificationCard key={idx} certification={cert} />
              )}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-16 px-4 md:pb-20 md:px-6 lg:pb-24 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg border border-primary/20 p-6 text-center md:p-8 lg:p-12">
              <Icon name="FileText" size={40} className="text-primary mx-auto mb-4 md:w-12 md:h-12 lg:w-14 lg:h-14" />
              <h3 className="text-xl font-bold text-foreground mb-3 md:text-2xl lg:text-3xl">
                Download Detailed Resume
              </h3>
              <p className="text-sm text-muted-foreground mb-6 md:text-base lg:text-lg">
                Get a comprehensive PDF version with complete work history, technical skills, and project details
              </p>
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadResume}>

                Download Resume
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs text-muted-foreground md:text-sm">
              &copy; {new Date()?.getFullYear()} GiteshDev. All rights reserved. Building digital solutions that matter.
            </p>
          </div>
        </footer>
      </div>
    </>);

};

export default Experience;