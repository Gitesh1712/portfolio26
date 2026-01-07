import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import JourneyTimeline from './components/JourneyTimeline';
import SkillsEvolution from './components/SkillsEvolution';
import TestimonialsSection from './components/TestimonialsSection';
import PersonalInsights from './components/PersonalInsights';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <PhilosophySection />
        <JourneyTimeline />
        <SkillsEvolution />
        <TestimonialsSection />
        <PersonalInsights />
      </main>
    </div>
  );
};

export default About;