import React, { useState, useMemo } from "react";
import Header from "../../components/ui/Header";
import Icon from "../../components/AppIcon";
import ProjectCard from "./components/ProjectCard";
import ProjectFilter from "./components/ProjectFilter";
import ProjectModal from "./components/ProjectModal";
import StatsOverview from "./components/StatsOverview";
import { projects } from "../../data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");
  const [selectedComplexity, setSelectedComplexity] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const stats = {
    totalProjects: projects?.length,
    completed: projects?.filter((p) => p?.status === "Live")?.length,
    technologies: [...new Set(projects.flatMap((p) => p.technologies))]?.length,
    totalUsers:
      projects?.reduce((sum, p) => {
        const users = p?.metrics?.users?.replace(/[K+]/g, "");
        return sum + parseFloat(users) * 1000;
      }, 0) /
        1000 +
      "K+",
  };

  const filteredProjects = useMemo(() => {
    return projects?.filter((project) => {
      const matchesCategory =
        selectedCategory === "all" || project?.category === selectedCategory;
      const matchesTech =
        selectedTech === "all" || project?.technologies?.includes(selectedTech);
      const matchesComplexity =
        selectedComplexity === "all" ||
        project?.complexity?.toLowerCase() === selectedComplexity;
      const matchesSearch =
        searchQuery === "" ||
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description
          ?.toLowerCase()
          ?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some((tech) =>
          tech?.toLowerCase()?.includes(searchQuery?.toLowerCase()),
        );

      return (
        matchesCategory && matchesTech && matchesComplexity && matchesSearch
      );
    });
  }, [
    selectedCategory,
    selectedTech,
    selectedComplexity,
    searchQuery,
    projects,
  ]);

  const handleReset = () => {
    setSelectedCategory("all");
    setSelectedTech("all");
    setSelectedComplexity("all");
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Icon name="Briefcase" size={20} className="text-primary" />
              <span className="text-sm font-medium text-primary">
                Portfolio Showcase
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Projects Universe
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore my comprehensive collection of full-stack projects,
              featuring detailed case studies, live demonstrations, and
              technical deep-dives into modern web development solutions
            </p>
          </div>

          {/* 
          =========================STATS OVERVIEW REMOVED========================
          <StatsOverview stats={stats} /> */}

          <div className="mb-6 md:mb-8">
            <div className="relative">
              <Icon
                name="Search"
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <input
                type="text"
                placeholder="Search projects by name, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 bg-card border border-border rounded-xl text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
          </div>

          <ProjectFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedTech={selectedTech}
            onTechChange={setSelectedTech}
            selectedComplexity={selectedComplexity}
            onComplexityChange={setSelectedComplexity}
            onReset={handleReset}
          />

          {filteredProjects?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {filteredProjects?.map((project) => (
                <ProjectCard
                  key={project?.id}
                  project={project}
                  onViewDetails={setSelectedProject}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 md:py-16 lg:py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-muted rounded-full mb-4">
                <Icon
                  name="SearchX"
                  size={32}
                  className="text-muted-foreground"
                />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                No Projects Found
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6">
                Try adjusting your filters or search query to find what you're
                looking for
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Icon name="RotateCcw" size={20} />
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </main>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;
