import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-card rounded-xl overflow-hidden border border-border transition-all duration-500 hover:shadow-purple-lg hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={project?.image}
          alt={project?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          {/* {project?.liveUrl && (
            <a
              href={project?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary rounded-lg hover:bg-primary/90 transition-colors"
              aria-label={`View live demo of ${project?.title}`}
            >
              <Icon name="ExternalLink" size={20} color="#ffffff" />
            </a>
          )} */}
          {project?.githubUrl && (
            <a
              href={project?.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-card rounded-lg hover:bg-muted transition-colors"
              aria-label={`View GitHub repository for ${project?.title}`}
            >
              <Icon name="Github" size={20} />
            </a>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${project?.status === 'Live' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'}`}>
              {project?.status}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
              {project?.complexity}
            </span>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-5 lg:p-6">
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 line-clamp-1">
          {project?.title}
        </h3>
        
        <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-2">
          {project?.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies?.slice(0, 4)?.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-muted rounded-md text-xs text-foreground"
            >
              {tech}
            </span>
          ))}
          {project?.technologies?.length > 4 && (
            <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
              +{project?.technologies?.length - 4}
            </span>
          )}
        </div>

        {/* 
        ============================PROJECT STATS REMOVED============================
        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4 pb-4 border-b border-border">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Icon name="Users" size={16} className="text-primary" />
              <span className="text-lg md:text-xl font-bold text-foreground whitespace-nowrap">
                {project?.metrics?.users}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Users</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Icon name="Zap" size={16} className="text-success" />
              <span className="text-lg md:text-xl font-bold text-foreground whitespace-nowrap">
                {project?.metrics?.performance}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Speed</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Icon name="Star" size={16} className="text-warning" />
              <span className="text-lg md:text-xl font-bold text-foreground whitespace-nowrap">
                {project?.metrics?.rating}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Rating</p>
          </div>
        </div> */}

        <Button
          variant="outline"
          fullWidth
          iconName="ArrowRight"
          iconPosition="right"
          onClick={() => onViewDetails(project)}
          className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
        >
          View Case Study
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;