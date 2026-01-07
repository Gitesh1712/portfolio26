import React from 'react';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const philosophies = [
    {
      icon: "Target",
      title: "Problem-First Approach",
      description: "I believe in understanding the problem deeply before jumping to solutions. Every line of code should serve a purpose and solve a real challenge.",
      color: "var(--color-primary)"
    },
    {
      icon: "Layers",
      title: "Scalable Architecture",
      description: "Building systems that grow with your needs. I design solutions that are maintainable, testable, and ready for future expansion.",
      color: "var(--color-secondary)"
    },
    {
      icon: "Heart",
      title: "User-Centric Design",
      description: "Technology should serve people, not complicate their lives. I prioritize intuitive interfaces and seamless user experiences in every project.",
      color: "var(--color-accent)"
    },
    {
      icon: "BookOpen",
      title: "Continuous Learning",
      description: "The tech landscape evolves rapidly, and so do I. I'm committed to staying current with emerging technologies and best practices.",
      color: "var(--color-primary)"
    },
    {
      icon: "Users",
      title: "Collaborative Spirit",
      description: "Great software is built by great teams. I value open communication, knowledge sharing, and collective problem-solving.",
      color: "var(--color-secondary)"
    },
    {
      icon: "Shield",
      title: "Quality & Reliability",
      description: "I take pride in writing clean, well-documented code that stands the test of time. Quality isn't negotiable—it's fundamental.",
      color: "var(--color-accent)"
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon name="Lightbulb" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary">My Philosophy</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Core Principles That Guide My Work
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            These aren't just buzzwords—they're the foundation of how I approach every project, every challenge, and every line of code I write.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {philosophies?.map((philosophy, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-purple"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={philosophy?.icon} size={20} color={philosophy?.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {philosophy?.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {philosophy?.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 p-6 md:p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <Icon name="Quote" size={24} color="var(--color-primary)" />
            </div>
            <div className="flex-1">
              <p className="text-base md:text-lg lg:text-xl text-foreground font-medium italic mb-2">
                "Code is like humor. When you have to explain it, it's bad."
              </p>
              <p className="text-xs md:text-sm text-muted-foreground">
                This quote resonates with my belief in writing self-documenting, intuitive code that speaks for itself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;