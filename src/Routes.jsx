import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

const PortfolioAssistant = lazy(() => import("components/PortfolioAssistant"));
const NotFound = lazy(() => import("pages/NotFound"));
const Contact = lazy(() => import("./pages/contact"));
const Experience = lazy(() => import("./pages/experience"));
const Skills = lazy(() => import("./pages/skills"));
const Projects = lazy(() => import("./pages/projects"));
const About = lazy(() => import("./pages/about"));
const Homepage = lazy(() => import("./pages/homepage"));

const RouteSkeleton = () => <div className="min-h-screen bg-background" aria-hidden="true" />;

const Routes = () => {
  const [mountAssistant, setMountAssistant] = useState(false);

  useEffect(() => {
    const onFirstIntent = () => setMountAssistant(true);
    const supportsIdle = typeof window.requestIdleCallback === "function";
    const idleId = supportsIdle
      ? window.requestIdleCallback(() => setMountAssistant(true), { timeout: 3000 })
      : window.setTimeout(() => setMountAssistant(true), 3000);

    window.addEventListener("pointerdown", onFirstIntent, { once: true, passive: true });
    window.addEventListener("keydown", onFirstIntent, { once: true });

    return () => {
      window.removeEventListener("pointerdown", onFirstIntent);
      window.removeEventListener("keydown", onFirstIntent);

      if (supportsIdle) {
        window.cancelIdleCallback(idleId);
      } else {
        window.clearTimeout(idleId);
      }
    };
  }, []);

  return (
    <BrowserRouter basename="/portfolio">
      <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={<RouteSkeleton />}>
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </Suspense>
      {mountAssistant && (
        <Suspense fallback={null}>
          <PortfolioAssistant />
        </Suspense>
      )}
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
