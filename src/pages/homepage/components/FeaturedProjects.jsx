import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedProjects = () => {
  const navigate = useNavigate();

  const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment gateway integration, and advanced analytics dashboard. Built with React, Spring Boot, and PostgreSQL.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb7c1cb3-1764655134961.png",
    imageAlt: 'Modern e-commerce website interface showing product grid layout with shopping cart and checkout features on desktop screen',
    tags: ['React', 'Spring Boot', 'PostgreSQL', 'AWS'],
    metrics: [
    { label: 'Performance', value: '98/100', icon: 'Zap' },
    { label: 'Users', value: '10K+', icon: 'Users' },
    { label: 'Uptime', value: '99.9%', icon: 'Activity' }],

    link: '/projects'
  },
  {
    id: 2,
    title: 'Real-Time Analytics Dashboard',
    description: 'Enterprise-grade analytics platform with live data visualization, custom reporting, and predictive insights. Handles millions of data points with sub-second query performance.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11b6b117c-1767258777980.png",
    imageAlt: 'Professional analytics dashboard displaying colorful charts, graphs, and data visualization panels with real-time metrics on large monitor',
    tags: ['React', 'Node.js', 'MongoDB', 'D3.js'],
    metrics: [
    { label: 'Data Points', value: '5M+', icon: 'Database' },
    { label: 'Response', value: '<500ms', icon: 'Timer' },
    { label: 'Accuracy', value: '99.5%', icon: 'Target' }],

    link: '/projects'
  },
  {
    id: 3,
    title: 'Social Media Management Tool',
    description: 'Comprehensive social media management platform with scheduling, analytics, and engagement tracking across multiple platforms. Streamlines content creation and distribution.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ac6f7ff3-1765294603648.png",
    imageAlt: 'Social media management interface showing multiple platform feeds, scheduling calendar, and engagement metrics on laptop screen',
    tags: ['React', 'Express', 'Redis', 'OAuth'],
    metrics: [
    { label: 'Platforms', value: '8+', icon: 'Share2' },
    { label: 'Posts/Day', value: '1000+', icon: 'Send' },
    { label: 'Engagement', value: '+45%', icon: 'TrendingUp' }],

    link: '/projects'
  }];


  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <Icon name="Rocket" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm text-primary font-medium">Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Recent Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming ideas into scalable solutions with measurable impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mb-12">
          {projects?.map((project) =>
          <div
            key={project?.id}
            className="bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-purple-lg group cursor-pointer"
            onClick={() => navigate(project?.link)}>

              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                src={project?.image}
                alt={project?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 line-clamp-2">
                  {project?.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 line-clamp-3">
                  {project?.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {project?.tags?.map((tag, index) =>
                <span
                  key={index}
                  className="px-3 py-1 rounded-lg bg-primary/10 text-xs md:text-sm text-primary font-medium">

                      {tag}
                    </span>
                )}
                </div>

                <div className="grid grid-cols-3 gap-3 md:gap-4 pt-4 md:pt-6 border-t border-border">
                  {project?.metrics?.map((metric, index) =>
                <div key={index} className="text-center">
                      <div className="flex justify-center mb-1 md:mb-2">
                        <Icon name={metric?.icon} size={16} className="md:w-5 md:h-5" color="var(--color-primary)" />
                      </div>
                      <div className="text-sm md:text-base font-bold text-foreground whitespace-nowrap">
                        {metric?.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric?.label}
                      </div>
                    </div>
                )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => navigate('/projects')}>

            View All Projects
          </Button>
        </div>
      </div>
    </section>);

};

export default FeaturedProjects;