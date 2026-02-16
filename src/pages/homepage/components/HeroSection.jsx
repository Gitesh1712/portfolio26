import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const codeLines = [
    'const developer = new FullStackEngineer();',
    'developer.solve(complexProblems);',
    'developer.build(scalableSolutions);',
    'developer.deliver(cleanCode);'
  ];

  useEffect(() => {
    const currentLine = codeLines?.[currentLineIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText?.length < currentLine?.length) {
          setTypedText(currentLine?.slice(0, typedText?.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText?.length > 0) {
          setTypedText(typedText?.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentLineIndex((currentLineIndex + 1) % codeLines?.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentLineIndex]);

  const stats = [
    { value: '350+', label: 'LeetCode Problems', icon: 'Code2' },
    { value: '300+', label: 'GeeksforGeeks Solutions', icon: 'Trophy' },
    { value: '3+', label: 'Years Experience', icon: 'Briefcase' },
    { value: '20+', label: 'Projects Worked On', icon: 'Rocket' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4 md:px-6 lg:px-8 pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-xs md:text-sm text-primary font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              Hi, I'm <span className="text-gradient">Gitesh</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Senior Software Engineer
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Building digital solutions that matter through clean code, scalable architecture, and user-centric design. Specializing in full-stack development with React, Spring Boot, and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="default"
                size="lg"
                iconName="Briefcase"
                iconPosition="left"
                onClick={() => navigate('/projects')}
                className="w-full sm:w-auto"
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                onClick={() => navigate('/contact')}
                className="w-full sm:w-auto"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start pt-4">
              {['React', 'Spring Boot', 'Node.js', 'PostgreSQL','MySql', 'AWS']?.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-card border border-border text-xs md:text-sm text-foreground font-medium hover:border-primary/50 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 shadow-purple-lg">
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-error"></div>
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground ml-2">live-coding.js</span>
              </div>

              <div className="space-y-3 md:space-y-4 font-mono text-xs md:text-sm lg:text-base">
                <div className="text-muted-foreground">
                  <span className="text-accent">const</span>{' '}
                  <span className="text-foreground">developer</span> ={' '}
                  <span className="text-accent">new</span>{' '}
                  <span className="text-primary">FullStackEngineer</span>();
                </div>
                <div className="text-muted-foreground">
                  developer.<span className="text-secondary">skills</span> = [
                </div>
                <div className="pl-4 md:pl-6 text-muted-foreground">
                  <span className="text-success">'React'</span>,{' '},
                  <span className="text-success">'Spring Boot'</span>,{' '}
                  <span className="text-success">'MySql'</span>,
                </div>
                <div className="pl-4 md:pl-6 text-muted-foreground">
                  <span className="text-success">'Node.js'</span>,{' '}
                  <span className="text-success">'PostgreSQL'</span>{' '},
                  <span className="text-success">'AWS'</span>
                </div>
                <div className="text-muted-foreground">];</div>
                <div className="h-6 md:h-8 flex items-center">
                  <span className="text-foreground">{typedText}</span>
                  <span className="inline-block w-2 h-4 md:h-5 bg-primary ml-1 animate-pulse"></span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-12 md:mt-16 lg:mt-20">
          {stats?.map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-4 md:p-6 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-purple"
            >
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon name={stat?.icon} size={20} className="md:w-6 md:h-6 lg:w-7 lg:h-7" color="var(--color-primary)" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-1 md:mb-2">
                {stat?.value}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} color="var(--color-muted-foreground)" />
      </div>
    </section>
  );
};

export default HeroSection;