import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilter = ({ 
  selectedCategory, 
  onCategoryChange, 
  selectedTech, 
  onTechChange,
  selectedComplexity,
  onComplexityChange,
  onReset 
}) => {
  const categories = [
    { value: 'all', label: 'All Projects', icon: 'Grid3x3' },
    { value: 'web', label: 'Web Apps', icon: 'Globe' },
    { value: 'mobile', label: 'Mobile', icon: 'Smartphone' },
    { value: 'fullstack', label: 'Full Stack', icon: 'Layers' },
    { value: 'api', label: 'API/Backend', icon: 'Server' }
  ];

  const technologies = [
    'React', 'Spring Boot', 'Node.js', 'MongoDB', 'PostgreSQL', 
    'TypeScript', 'Java', 'Python', 'Docker', 'AWS'
  ];

  const complexityLevels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const hasActiveFilters = selectedCategory !== 'all' || selectedTech !== 'all' || selectedComplexity !== 'all';

  return (
    <div className="bg-card rounded-xl border border-border p-4 md:p-5 lg:p-6 mb-6 md:mb-8">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-foreground flex items-center gap-2">
          <Icon name="Filter" size={20} className="text-primary" />
          Filter Projects
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            iconName="X"
            iconPosition="left"
            onClick={onReset}
          >
            Clear All
          </Button>
        )}
      </div>
      <div className="space-y-4 md:space-y-5">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2 md:mb-3">
            Project Type
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {categories?.map((category) => (
              <button
                key={category?.value}
                onClick={() => onCategoryChange(category?.value)}
                className={`flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category?.value
                    ? 'bg-primary text-primary-foreground shadow-purple'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Icon name={category?.icon} size={16} />
                <span className="hidden md:inline">{category?.label}</span>
                <span className="md:hidden">{category?.label?.split(' ')?.[0]}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2 md:mb-3">
            Technology Stack
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => onTechChange('all')}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                selectedTech === 'all' ?'bg-primary text-primary-foreground' :'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              All
            </button>
            {technologies?.map((tech) => (
              <button
                key={tech}
                onClick={() => onTechChange(tech)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedTech === tech
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2 md:mb-3">
            Complexity Level
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {complexityLevels?.map((level) => (
              <button
                key={level?.value}
                onClick={() => onComplexityChange(level?.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedComplexity === level?.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {level?.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;