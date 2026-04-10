import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import Button from "../../components/ui/Button";
import TimelineItem from "./components/TimelineItem";
import StatsCard from "./components/StatsCard";
import CertificationCard from "./components/CertificationCard";
import SkillEvolutionChart from "./components/SkillEvolutionChart";
import {
  experiences,
  careerStats,
  certifications,
  skillEvolution,
} from "../../data/experience";

const RESUME_FILE = 'https://raw.githubusercontent.com/Gitesh1712/resume/main/Gitesh_cv.pdf';

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleDownloadResume = async () => {
    const response = await fetch(RESUME_FILE);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "Gitesh_cv.pdf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
  };

  const filteredExperiences =
    activeFilter === "all"
      ? experiences
      : experiences?.filter(
          (exp) => exp?.isCurrent === (activeFilter === "current")
        );

  return (
    <>
      <Helmet>
        <title>Professional Experience - GiteshDev Portfolio</title>
        <meta
          name="description"
          content="Explore Gitesh's professional journey as a Senior Software Engineer with 4+ years of experience in full-stack development, delivering scalable solutions and leading development teams."
        />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 md:pt-28 md:pb-16 md:px-6 lg:pt-32 lg:pb-20 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 md:mb-6">
                <Icon
                  name="Briefcase"
                  size={16}
                  className="text-primary md:w-5 md:h-5"
                />
                <span className="text-xs font-medium text-primary md:text-sm">
                  Professional Journey
                </span>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4 md:text-4xl lg:text-5xl">
                Experience & Career Growth
              </h1>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto md:text-base lg:text-lg">
                A progressive career journey showcasing technical expertise,
                leadership development, and measurable impact across diverse
                projects and technologies
              </p>
            </div>

            {/* Career Stats */}
            <div className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-2 md:gap-6 md:mb-12 lg:grid-cols-4 lg:gap-8 lg:mb-16">
              {careerStats?.map((stat, idx) => (
                <StatsCard key={idx} stat={stat} />
              ))}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center mb-8 md:gap-3 md:mb-12 lg:mb-16">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("all")}
              >
                All Positions
              </Button>
              <Button
                variant={activeFilter === "current" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("current")}
              >
                Current Role
              </Button>
              <Button
                variant={activeFilter === "previous" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter("previous")}
              >
                Previous Roles
              </Button>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="pb-12 px-4 md:pb-16 md:px-6 lg:pb-20 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8 md:text-3xl md:mb-12 lg:text-4xl lg:mb-16">
              Career Timeline
            </h2>
            <div className="space-y-0">
              {filteredExperiences?.map((experience, idx) => (
                <TimelineItem
                  key={experience?.id}
                  experience={experience}
                  isLast={idx === filteredExperiences?.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Evolution */}
        {/* <section className="pb-12 px-4 md:pb-16 md:px-6 lg:pb-20 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <SkillEvolutionChart skillEvolution={skillEvolution} />
          </div>
        </section> */}

        {/* Certifications */}
        {/* <section className="pb-12 px-4 md:pb-16 md:px-6 lg:pb-20 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12 lg:mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-3 md:text-3xl lg:text-4xl">
                Professional Certifications
              </h2>
              <p className="text-sm text-muted-foreground md:text-base lg:text-lg">
                Industry-recognized credentials validating technical expertise
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
              {certifications?.map((cert, idx) => (
                <CertificationCard key={idx} certification={cert} />
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="pb-16 px-4 md:pb-20 md:px-6 lg:pb-24 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-lg border border-primary/20 p-6 text-center md:p-8 lg:p-12">
              <Icon
                name="FileText"
                size={40}
                className="text-primary mx-auto mb-4 md:w-12 md:h-12 lg:w-14 lg:h-14"
              />
              <h3 className="text-xl font-bold text-foreground mb-3 md:text-2xl lg:text-3xl">
                Download Detailed Resume
              </h3>
              <p className="text-sm text-muted-foreground mb-6 md:text-base lg:text-lg">
                Get a comprehensive PDF version with complete work history,
                technical skills, and project details
              </p>
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-xs text-muted-foreground md:text-sm">
              &copy; {new Date()?.getFullYear()} GiteshDev. All rights reserved.
              Building digital solutions that matter.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Experience;
