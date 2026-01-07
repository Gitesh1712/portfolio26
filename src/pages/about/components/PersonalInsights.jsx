import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PersonalInsights = () => {
  const insights = [
  {
    icon: "Coffee",
    title: "Coffee-Driven Development",
    description: "I believe the best code is written with a good cup of coffee. My debugging sessions are fueled by espresso, and my breakthrough moments often happen during coffee breaks."
  },
  {
    icon: "Music",
    title: "Code to the Beat",
    description: "Music is my coding companion. From lo-fi beats during deep focus sessions to energetic tracks during refactoring marathons, the right soundtrack makes all the difference."
  },
  {
    icon: "BookOpen",
    title: "Perpetual Student",
    description: "I read at least one technical book per month and follow 20+ tech blogs. Learning isn't just a habit—it's a lifestyle that keeps me sharp and innovative."
  },
  {
    icon: "Users",
    title: "Community Contributor",
    description: "I actively participate in developer communities, answer questions on Stack Overflow, and contribute to open-source projects. Giving back is how I grow."
  }];


  const workEnvironment = [
  {
    image: "https://images.unsplash.com/photo-1550483513-b4fd222ce32e",
    imageAlt: "Modern minimalist workspace with MacBook Pro laptop, external monitor displaying code, mechanical keyboard, and coffee mug on clean white desk near window with natural lighting",
    caption: "My Daily Workspace"
  },
  {
    image: "https://images.unsplash.com/photo-1573495627361-d9b87960b12d",
    imageAlt: "Close-up of hands typing on laptop keyboard with multiple programming windows open showing React code, terminal, and documentation on dual monitor setup",
    caption: "Deep in Code"
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10e170712-1767099622987.png",
    imageAlt: "Collaborative team meeting with developers gathered around large monitor discussing system architecture diagrams and code review in modern tech office with glass walls",
    caption: "Team Collaboration"
  },
  {
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1599f8c4f-1766988297081.png",
    imageAlt: "Group of diverse developers brainstorming at whiteboard covered with flowcharts, wireframes, and technical diagrams during agile planning session in bright startup office",
    caption: "Problem Solving Sessions"
  }];


  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
            <Icon name="Heart" size={16} color="var(--color-primary)" />
            <span className="text-xs md:text-sm font-medium text-primary">Personal Insights</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Beyond the Code
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
            Get to know the person behind the keyboard—my habits, passions, and what makes me tick as a developer.
          </p>
        </div>

        {/* Personal Traits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          {insights?.map((insight, index) =>
          <div
            key={index}
            className="group p-6 md:p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:shadow-purple">

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={insight?.icon} size={24} color="var(--color-primary)" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {insight?.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {insight?.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Work Environment Gallery */}
        <div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground text-center mb-6 md:mb-8 lg:mb-12">
            My Work Environment
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {workEnvironment?.map((item, index) =>
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-purple-lg">

                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                  src={item?.image}
                  alt={item?.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-sm md:text-base font-medium text-foreground">{item?.caption}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 md:mt-16 lg:mt-20 p-6 md:p-8 lg:p-10 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl">
          <div className="text-center mb-6 md:mb-8">
            <Icon name="Sparkles" size={32} color="var(--color-primary)" className="mx-auto mb-4" />
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2">Quick Facts About Me</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Years Coding</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">50+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-accent mb-1">1000+</div>
              <div className="text-xs md:text-sm text-muted-foreground">Commits This Year</div>
            </div>
            <div className="text-center p-4 bg-card/50 rounded-lg">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">∞</div>
              <div className="text-xs md:text-sm text-muted-foreground">Passion for Code</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default PersonalInsights;