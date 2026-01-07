import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsCard = ({ stat }) => {
  return (
    <div className="bg-card rounded-lg border border-border p-4 hover:shadow-purple transition-all duration-300 md:p-6 lg:p-8">
      <div className="flex items-start gap-3 mb-3 md:gap-4">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 md:w-12 md:h-12 lg:w-14 lg:h-14">
          <Icon name={stat?.icon} size={20} className="text-primary md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-2xl font-bold text-foreground mb-1 md:text-3xl lg:text-4xl">
            {stat?.value}
          </div>
          <div className="text-xs text-muted-foreground md:text-sm lg:text-base">
            {stat?.label}
          </div>
        </div>
      </div>
      <p className="text-xs text-muted-foreground md:text-sm">
        {stat?.description}
      </p>
    </div>
  );
};

export default StatsCard;