import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-card to-background py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 bg-secondary rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-4 md:space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full">
              <Icon name="Sparkles" size={16} color="var(--color-primary)" />
              <span className="text-xs md:text-sm font-medium text-primary">The Analytical Problem Solver</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Building Digital Solutions That{' '}
              <span className="text-gradient">Matter</span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
              I'm Gitesh, a Senior Software Engineer who doesn't just write code—I craft digital experiences that solve real-world problems. With precision, innovation, and reliability at the core of my work, I transform complex challenges into elegant, scalable solutions.
            </p>

            <div className="flex flex-wrap gap-3 md:gap-4">
              <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-card border border-border rounded-lg">
                <Icon name="Code2" size={18} color="var(--color-primary)" />
                <span className="text-xs md:text-sm font-medium text-foreground">Clean Code Philosophy</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-card border border-border rounded-lg">
                <Icon name="Users" size={18} color="var(--color-secondary)" />
                <span className="text-xs md:text-sm font-medium text-foreground">User-Centric Focus</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 bg-card border border-border rounded-lg">
                <Icon name="Zap" size={18} color="var(--color-accent)" />
                <span className="text-xs md:text-sm font-medium text-foreground">Forward-Thinking</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 pt-4 md:pt-6">
              <div className="text-center p-3 md:p-4 bg-card/50 border border-border rounded-lg">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">350+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">LeetCode Solved</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-card/50 border border-border rounded-lg">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">300+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">GFG Solutions</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-card/50 border border-border rounded-lg">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent">5+</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-purple-lg">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1a27f6e00-1763291739163.png"
                  alt="Professional portrait of Gitesh, a software engineer with confident smile wearing casual business attire against modern office background with natural lighting"
                  className="w-full h-full object-cover" />

              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;