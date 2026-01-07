import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillCard = ({ skill, onSelect, isSelected }) => {
  const getColorClasses = (proficiency) => {
    if (proficiency >= 90) return 'from-purple-500 to-purple-600';
    if (proficiency >= 75) return 'from-purple-400 to-purple-500';
    if (proficiency >= 60) return 'from-purple-300 to-purple-400';
    return 'from-purple-200 to-purple-300';
  };

  return (
    <div
      onClick={() => onSelect(skill)}
      className={`group relative bg-card rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-purple-lg border ${
        isSelected ? 'border-primary shadow-purple' : 'border-border'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorClasses(skill?.proficiency)} flex items-center justify-center`}>
            <Icon name={skill?.icon} size={24} color="#ffffff" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{skill?.name}</h3>
            <p className="text-sm text-muted-foreground">{skill?.category}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">{skill?.proficiency}%</div>
          <div className="text-xs text-muted-foreground">{skill?.experience}</div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">Proficiency</span>
          <span className="text-sm font-medium text-foreground">{skill?.level}</span>
        </div>
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${getColorClasses(skill?.proficiency)} transition-all duration-500`}
            style={{ width: `${skill?.proficiency}%` }}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {skill?.projects?.map((project, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md"
          >
            {project}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Icon name="Calendar" size={14} strokeWidth={2} />
          <span>Since {skill?.startYear}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Icon name="TrendingUp" size={14} strokeWidth={2} />
          <span>{skill?.growth}</span>
        </div>
      </div>
      {isSelected && (
        <div className="absolute inset-0 border-2 border-primary rounded-xl pointer-events-none" />
      )}
    </div>
  );
};

export default SkillCard;