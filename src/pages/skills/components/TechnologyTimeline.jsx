import React from 'react';
import Icon from '../../../components/AppIcon';

const TechnologyTimeline = ({ timelineData }) => {
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />
      <div className="space-y-8 md:space-y-12">
        {timelineData?.map((item, index) => (
          <div key={index} className="relative pl-12 md:pl-20">
            <div className="absolute left-0 md:left-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-purple">
              <Icon name={item?.icon} size={16} color="#ffffff" strokeWidth={2.5} />
            </div>
            
            <div className="bg-card border border-border rounded-xl p-4 md:p-6 hover:shadow-purple transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">{item?.year}</h3>
                <span className="text-sm text-primary font-medium">{item?.milestone}</span>
              </div>
              
              <p className="text-sm md:text-base text-muted-foreground mb-4">{item?.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {item?.technologies?.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs md:text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyTimeline;