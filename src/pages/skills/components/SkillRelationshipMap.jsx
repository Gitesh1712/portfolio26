import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillRelationshipMap = ({ relationships, onSkillClick }) => {
  return (
    <div className="space-y-6">
      {relationships?.map((relationship, index) => (
        <div key={index} className="bg-card border border-border rounded-xl p-4 md:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name={relationship?.icon} size={20} color="#ffffff" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold text-foreground">{relationship?.category}</h3>
              <p className="text-xs md:text-sm text-muted-foreground">{relationship?.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {relationship?.skills?.map((skill, skillIndex) => (
              <button
                key={skillIndex}
                onClick={() => onSkillClick(skill)}
                className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-primary/10 hover:border-primary border border-transparent transition-all duration-200 group"
              >
                <div className="w-8 h-8 rounded-md bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={skill?.icon} size={16} color="var(--color-primary)" strokeWidth={2} />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {skill?.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{skill?.proficiency}%</div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground">Used together in:</span>
              {relationship?.projects?.map((project, projectIndex) => (
                <span
                  key={projectIndex}
                  className="px-2 py-1 text-xs bg-accent/20 text-accent-foreground rounded-md"
                >
                  {project}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillRelationshipMap;