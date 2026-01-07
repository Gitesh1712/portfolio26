import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ExperienceTimeline = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      id: 1,
      role: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      period: '2023 - Present',
      location: 'Remote',
      description: 'Leading full-stack development of enterprise applications, mentoring junior developers, and architecting scalable microservices solutions.',
      achievements: [
        'Reduced application load time by 60% through optimization',
        'Led migration to microservices architecture',
        'Mentored team of 5 junior developers'
      ],
      technologies: ['React', 'Spring Boot', 'AWS', 'PostgreSQL'],
      icon: 'Briefcase',
      color: 'var(--color-primary)'
    },
    {
      id: 2,
      role: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2021 - 2023',
      location: 'Hybrid',
      description: 'Developed and maintained multiple client-facing applications, implemented CI/CD pipelines, and improved code quality standards.',
      achievements: [
        'Built 10+ production-ready applications',
        'Implemented automated testing reducing bugs by 40%',
        'Established coding standards and best practices'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      icon: 'Code2',
      color: 'var(--color-secondary)'
    },
    {
      id: 3,
      role: 'Software Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2021',
      location: 'On-site',
      description: 'Contributed to product development from concept to launch, collaborated with cross-functional teams, and delivered features on tight deadlines.',
      achievements: [
        'Launched MVP in 3 months',
        'Integrated payment gateway and analytics',
        'Achieved 99.9% uptime in production'
      ],
      technologies: ['JavaScript', 'Express', 'MySQL', 'Git'],
      icon: 'Rocket',
      color: 'var(--color-accent)'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <Icon name="Clock" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm text-primary font-medium">Career Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Professional Experience
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            5+ years of building impactful solutions across diverse industries
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-border lg:-ml-px"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences?.map((exp, index) => (
              <div
                key={exp?.id}
                className={`relative flex flex-col lg:flex-row gap-6 md:gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/2 lg:pr-8">
                  {index % 2 === 0 && (
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-purple ml-12 md:ml-16 lg:ml-0">
                      <div className="flex items-start gap-4 mb-4 md:mb-6">
                        <div
                          className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${exp?.color}20` }}
                        >
                          <Icon name={exp?.icon} size={24} className="md:w-7 md:h-7" color={exp?.color} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 md:mb-2">
                            {exp?.role}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm md:text-base text-muted-foreground">
                            <span className="font-medium">{exp?.company}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{exp?.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs md:text-sm text-primary font-medium mb-4 md:mb-6">
                        <Icon name="Calendar" size={16} />
                        <span>{exp?.period}</span>
                      </div>

                      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                        {exp?.description}
                      </p>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        {exp?.achievements?.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Icon
                              name="CheckCircle2"
                              size={16}
                              className="mt-0.5 flex-shrink-0"
                              color="var(--color-success)"
                            />
                            <span className="text-xs md:text-sm text-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp?.technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-primary/10 text-xs md:text-sm text-primary font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="absolute left-4 md:left-8 lg:left-1/2 lg:-ml-4 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center z-10"
                  style={{ backgroundColor: exp?.color, top: '24px' }}>
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </div>

                <div className="lg:w-1/2 lg:pl-8">
                  {index % 2 !== 0 && (
                    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-purple ml-12 md:ml-16 lg:ml-0">
                      <div className="flex items-start gap-4 mb-4 md:mb-6">
                        <div
                          className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${exp?.color}20` }}
                        >
                          <Icon name={exp?.icon} size={24} className="md:w-7 md:h-7" color={exp?.color} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-1 md:mb-2">
                            {exp?.role}
                          </h3>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm md:text-base text-muted-foreground">
                            <span className="font-medium">{exp?.company}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{exp?.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs md:text-sm text-primary font-medium mb-4 md:mb-6">
                        <Icon name="Calendar" size={16} />
                        <span>{exp?.period}</span>
                      </div>

                      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                        {exp?.description}
                      </p>

                      <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                        {exp?.achievements?.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Icon
                              name="CheckCircle2"
                              size={16}
                              className="mt-0.5 flex-shrink-0"
                              color="var(--color-success)"
                            />
                            <span className="text-xs md:text-sm text-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp?.technologies?.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-lg bg-primary/10 text-xs md:text-sm text-primary font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => navigate('/experience')}
          >
            View Full Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;