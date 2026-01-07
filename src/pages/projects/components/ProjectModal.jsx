import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';


const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
    { id: 'technical', label: 'Technical Details', icon: 'Code2' },
    { id: 'challenges', label: 'Challenges & Solutions', icon: 'Lightbulb' },
    { id: 'results', label: 'Results & Impact', icon: 'TrendingUp' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-2xl border border-border shadow-purple-lg overflow-hidden">
        <div className="sticky top-0 z-10 bg-card border-b border-border px-4 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
              <Icon name="FolderOpen" size={24} className="text-primary" />
            </div>
            <div className="min-w-0">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground truncate">
                {project?.title}
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground truncate">
                {project?.category} • {project?.complexity}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors flex-shrink-0 ml-2"
            aria-label="Close modal"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          <div className="relative h-64 md:h-80 lg:h-96">
            <Image
              src={project?.image}
              alt={project?.imageAlt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {project?.liveUrl && (
                <a
                  href={project?.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  <Icon name="ExternalLink" size={16} />
                  Live Demo
                </a>
              )}
              {project?.githubUrl && (
                <a
                  href={project?.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card text-foreground rounded-lg hover:bg-muted transition-colors text-sm font-medium"
                >
                  <Icon name="Github" size={16} />
                  View Code
                </a>
              )}
            </div>
          </div>

          <div className="p-4 md:p-6 lg:p-8">
            <div className="flex overflow-x-auto gap-2 mb-6 pb-2 border-b border-border">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeTab === tab?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  {tab?.label}
                </button>
              ))}
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                    Project Description
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project?.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                    Technology Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-muted rounded-lg text-sm text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Users" size={20} className="text-primary" />
                      <span className="text-2xl font-bold text-foreground">
                        {project?.metrics?.users}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Active Users</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Zap" size={20} className="text-success" />
                      <span className="text-2xl font-bold text-foreground">
                        {project?.metrics?.performance}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Performance Score</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Star" size={20} className="text-warning" />
                      <span className="text-2xl font-bold text-foreground">
                        {project?.metrics?.rating}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">User Rating</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'technical' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                    Architecture Overview
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {project?.architecture}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-success flex-shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                    Code Quality Metrics
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 bg-muted rounded-lg text-center">
                      <div className="text-xl md:text-2xl font-bold text-success mb-1">
                        {project?.codeMetrics?.coverage}
                      </div>
                      <div className="text-xs text-muted-foreground">Test Coverage</div>
                    </div>
                    <div className="p-3 bg-muted rounded-lg text-center">
                      <div className="text-xl md:text-2xl font-bold text-primary mb-1">
                        {project?.codeMetrics?.maintainability}
                      </div>
                      <div className="text-xs text-muted-foreground">Maintainability</div>
                    </div>
                    <div className="p-3 bg-muted rounded-lg text-center">
                      <div className="text-xl md:text-2xl font-bold text-warning mb-1">
                        {project?.codeMetrics?.security}
                      </div>
                      <div className="text-xs text-muted-foreground">Security Score</div>
                    </div>
                    <div className="p-3 bg-muted rounded-lg text-center">
                      <div className="text-xl md:text-2xl font-bold text-info mb-1">
                        {project?.codeMetrics?.performance}
                      </div>
                      <div className="text-xs text-muted-foreground">Performance</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'challenges' && (
              <div className="space-y-6">
                {project?.challenges?.map((challenge, index) => (
                  <div key={index} className="p-4 md:p-5 bg-muted rounded-lg">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-warning/20 rounded-lg flex-shrink-0">
                        <Icon name="AlertCircle" size={20} className="text-warning" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                          {challenge?.problem}
                        </h4>
                        <p className="text-sm md:text-base text-muted-foreground mb-3">
                          {challenge?.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pl-11">
                      <div className="p-2 bg-success/20 rounded-lg flex-shrink-0">
                        <Icon name="CheckCircle2" size={20} className="text-success" />
                      </div>
                      <div className="min-w-0">
                        <h5 className="text-sm md:text-base font-semibold text-foreground mb-2">
                          Solution
                        </h5>
                        <p className="text-sm md:text-base text-muted-foreground">
                          {challenge?.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'results' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                    Project Impact
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {project?.impact}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project?.results?.map((result, index) => (
                    <div key={index} className="p-4 bg-muted rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon name="TrendingUp" size={20} className="text-success" />
                        <span className="text-2xl md:text-3xl font-bold text-foreground">
                          {result?.value}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{result?.metric}</p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                    Testimonial
                  </h3>
                  <div className="p-4 md:p-5 bg-muted rounded-lg border-l-4 border-primary">
                    <p className="text-sm md:text-base text-muted-foreground italic mb-3">
                      "{project?.testimonial?.quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={project?.testimonial?.avatar}
                        alt={project?.testimonial?.avatarAlt}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {project?.testimonial?.author}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {project?.testimonial?.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;