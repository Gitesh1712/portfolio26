import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineItem = ({ experience, isLast }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent md:left-8 lg:left-10" />
      )}
      {/* Timeline Node */}
      <div className="absolute left-3 top-8 w-6 h-6 rounded-full bg-primary shadow-purple flex items-center justify-center md:left-5 md:w-8 md:h-8 lg:left-7 lg:w-10 lg:h-10">
        <Icon name="Briefcase" size={12} color="#ffffff" className="md:w-4 md:h-4 lg:w-5 lg:h-5" />
      </div>
      {/* Content Card */}
      <div className="ml-12 mb-8 md:ml-16 lg:ml-20">
        <div className="bg-card rounded-lg border border-border p-4 hover:shadow-purple-lg transition-all duration-300 md:p-6 lg:p-8">
          {/* Header */}
          <div className="flex flex-col gap-3 mb-4 md:flex-row md:items-start md:justify-between md:gap-4 lg:gap-6">
            <div className="flex-1">
              <div className="flex items-start gap-3 mb-2 md:gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-muted md:w-14 md:h-14 lg:w-16 lg:h-16">
                  <Image
                    src={experience?.companyLogo}
                    alt={experience?.companyLogoAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground mb-1 md:text-xl lg:text-2xl">
                    {experience?.role}
                  </h3>
                  <p className="text-sm text-primary font-medium md:text-base lg:text-lg">
                    {experience?.company}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground md:text-sm lg:text-base">
                {experience?.companyDescription}
              </p>
            </div>

            <div className="flex flex-col gap-2 md:items-end">
              <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm lg:text-base">
                <Icon name="Calendar" size={14} className="md:w-4 md:h-4 lg:w-5 lg:h-5" />
                <span>{experience?.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground md:text-sm lg:text-base">
                <Icon name="MapPin" size={14} className="md:w-4 md:h-4 lg:w-5 lg:h-5" />
                <span>{experience?.location}</span>
              </div>
              {experience?.isCurrent && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full md:text-sm">
                  <Icon name="Zap" size={12} className="md:w-3 md:h-3" />
                  Current Role
                </span>
              )}
            </div>
          </div>

          {/* Key Responsibilities */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2 md:text-base lg:text-lg">
              <Icon name="Target" size={16} className="text-primary md:w-5 md:h-5 lg:w-6 lg:h-6" />
              Key Responsibilities
            </h4>
            <ul className="space-y-2">
              {experience?.responsibilities?.slice(0, isExpanded ? undefined : 3)?.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground md:text-sm lg:text-base">
                  <Icon name="ChevronRight" size={14} className="text-secondary flex-shrink-0 mt-0.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2 md:text-base lg:text-lg">
              <Icon name="Award" size={16} className="text-primary md:w-5 md:h-5 lg:w-6 lg:h-6" />
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {experience?.achievements?.map((achievement, idx) => (
                <div key={idx} className="bg-muted/50 rounded-lg p-3 border border-border/50 md:p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center md:w-10 md:h-10 lg:w-12 lg:h-12">
                      <Icon name={achievement?.icon} size={16} className="text-primary md:w-5 md:h-5 lg:w-6 lg:h-6" />
                    </div>
                    <span className="text-lg font-bold text-primary md:text-xl lg:text-2xl">
                      {achievement?.metric}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    {achievement?.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          {isExpanded && (
            <div className="mb-4 animate-fade-in">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2 md:text-base lg:text-lg">
                <Icon name="Code2" size={16} className="text-primary md:w-5 md:h-5 lg:w-6 lg:h-6" />
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience?.technologies?.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 md:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Projects */}
          {isExpanded && experience?.projects && (
            <div className="mb-4 animate-fade-in">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2 md:text-base lg:text-lg">
                <Icon name="FolderGit2" size={16} className="text-primary md:w-5 md:h-5 lg:w-6 lg:h-6" />
                Major Projects
              </h4>
              <div className="space-y-3">
                {experience?.projects?.map((project, idx) => (
                  <div key={idx} className="bg-muted/30 rounded-lg p-3 border border-border/30 md:p-4">
                    <h5 className="text-sm font-semibold text-foreground mb-1 md:text-base">
                      {project?.name}
                    </h5>
                    <p className="text-xs text-muted-foreground mb-2 md:text-sm">
                      {project?.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-primary md:text-sm">
                      <Icon name="TrendingUp" size={12} className="md:w-3 md:h-3" />
                      <span>{project?.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expand/Collapse Button */}
          {experience?.responsibilities?.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors duration-200 font-medium md:text-base"
            >
              <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
              <Icon
                name={isExpanded ? 'ChevronUp' : 'ChevronDown'}
                size={16}
                className="md:w-5 md:h-5"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;