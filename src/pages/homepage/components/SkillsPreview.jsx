import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillsPreview = () => {
  const navigate = useNavigate();
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      category: 'Frontend',
      icon: 'Layout',
      color: 'var(--color-primary)',
      skills: [
        { name: 'React', level: 95, icon: 'Code2' },
        { name: 'JavaScript', level: 92, icon: 'FileCode' },
        { name: 'TypeScript', level: 88, icon: 'FileType' },
        { name: 'Tailwind CSS', level: 90, icon: 'Palette' }
      ]
    },
    {
      category: 'Backend',
      icon: 'Server',
      color: 'var(--color-secondary)',
      skills: [
        { name: 'Spring Boot', level: 93, icon: 'Database' },
        { name: 'Node.js', level: 89, icon: 'Cpu' },
        { name: 'PostgreSQL', level: 87, icon: 'HardDrive' },
        { name: 'REST APIs', level: 94, icon: 'Globe' }
      ]
    },
    {
      category: 'DevOps',
      icon: 'Cloud',
      color: 'var(--color-accent)',
      skills: [
        { name: 'AWS', level: 85, icon: 'CloudCog' },
        { name: 'Docker', level: 82, icon: 'Container' },
        { name: 'Git', level: 91, icon: 'GitBranch' },
        { name: 'CI/CD', level: 80, icon: 'Workflow' }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 md:mb-6">
            <Icon name="Sparkles" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm text-primary font-medium">Technical Arsenal</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Skills & Expertise
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastering modern technologies to build scalable, performant, and user-centric applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {skillCategories?.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-purple"
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name={category?.icon} size={24} className="md:w-7 md:h-7" color={category?.color} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">{category?.category}</h3>
              </div>

              <div className="space-y-4 md:space-y-5">
                {category?.skills?.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon
                          name={skill?.icon}
                          size={16}
                          className="md:w-5 md:h-5"
                          color="var(--color-muted-foreground)"
                        />
                        <span className="text-sm md:text-base text-foreground font-medium">
                          {skill?.name}
                        </span>
                      </div>
                      <span className="text-xs md:text-sm text-primary font-semibold">
                        {skill?.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill?.level}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
            onClick={() => navigate('/skills')}
          >
            Explore All Skills
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;