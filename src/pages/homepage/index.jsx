import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';

const SkillsPreview = lazy(() => import('./components/SkillsPreview.jsx'));
const FeaturedProjects = lazy(() => import('./components/FeaturedProjects'));
const ExperienceTimeline = lazy(() => import('./components/ExperienceTimeline'));
const CTASection = lazy(() => import('./components/CTASection'));
const Footer = lazy(() => import('./components/Footer'));

const DeferredSection = ({ children, minHeight = '340px' }) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || visible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '320px 0px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <section ref={containerRef} style={{ minHeight }}>
      {visible ? children : null}
    </section>
  );
};

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DeferredSection>
          <Suspense fallback={null}>
            <SkillsPreview />
          </Suspense>
        </DeferredSection>
        <DeferredSection>
          <Suspense fallback={null}>
            <FeaturedProjects />
          </Suspense>
        </DeferredSection>
        <DeferredSection>
          <Suspense fallback={null}>
            <ExperienceTimeline />
          </Suspense>
        </DeferredSection>
        <DeferredSection minHeight="260px">
          <Suspense fallback={null}>
            <CTASection />
          </Suspense>
        </DeferredSection>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Homepage;