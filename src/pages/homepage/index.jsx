import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SkillsPreview from './components/SkillsPreview.jsx';
import FeaturedProjects from './components/FeaturedProjects';
import ExperienceTimeline from './components/ExperienceTimeline';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SkillsPreview />
        <FeaturedProjects />
        <ExperienceTimeline />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;