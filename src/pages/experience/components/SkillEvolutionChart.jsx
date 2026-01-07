import React from 'react';
import Icon from '../../../components/AppIcon';

const SkillEvolutionChart = ({ skillEvolution }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6 lg:p-8">
      <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2 md:text-xl lg:text-2xl">
        <Icon name="TrendingUp" size={20} className="text-primary md:w-6 md:h-6 lg:w-7 lg:h-7" />
        Skills Evolution Timeline
      </h3>
      <div className="space-y-4 md:space-y-6">
        {skillEvolution?.map((evolution, idx) => (
          <div key={idx} className="relative">
            <div className="flex items-center gap-3 mb-2 md:gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 md:w-10 md:h-10 lg:w-12 lg:h-12">
                <Icon name="Code2" size={14} className="text-primary md:w-4 md:h-4 lg:w-5 lg:h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-foreground md:text-base lg:text-lg">
                  {evolution?.year}
                </h4>
                <p className="text-xs text-muted-foreground md:text-sm">
                  {evolution?.phase}
                </p>
              </div>
            </div>
            <div className="ml-11 flex flex-wrap gap-2 md:ml-14 lg:ml-16">
              {evolution?.skills?.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="px-2 py-1 bg-muted text-foreground text-xs rounded-md border border-border md:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillEvolutionChart;