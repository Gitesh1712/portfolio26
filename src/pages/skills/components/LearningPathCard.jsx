import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningPathCard = ({ path }) => {
  const completedSteps = path?.steps?.filter(step => step?.completed)?.length;
  const progressPercentage = (completedSteps / path?.steps?.length) * 100;

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6 hover:shadow-purple transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Icon name={path?.icon} size={24} color="#ffffff" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{path?.title}</h3>
            <p className="text-sm text-muted-foreground">{path?.duration}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">{Math.round(progressPercentage)}%</div>
          <div className="text-xs text-muted-foreground">Complete</div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{path?.description}</p>
      <div className="mb-4">
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      <div className="space-y-3">
        {path?.steps?.map((step, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 p-3 rounded-lg transition-colors duration-200 ${
              step?.completed ? 'bg-success/10' : step?.current ? 'bg-primary/10' : 'bg-muted'
            }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
              step?.completed ? 'bg-success' : step?.current ? 'bg-primary' : 'bg-muted-foreground'
            }`}>
              {step?.completed ? (
                <Icon name="Check" size={14} color="#ffffff" strokeWidth={3} />
              ) : (
                <span className="text-xs text-white font-semibold">{index + 1}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className={`text-sm font-medium mb-1 ${
                step?.completed ? 'text-success' : step?.current ? 'text-primary' : 'text-foreground'
              }`}>
                {step?.title}
              </div>
              <div className="text-xs text-muted-foreground">{step?.description}</div>
              {step?.current && (
                <div className="mt-2 flex items-center gap-2 text-xs text-primary">
                  <Icon name="Clock" size={12} strokeWidth={2} />
                  <span>In Progress</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Target" size={14} strokeWidth={2} />
            <span>Goal: {path?.goal}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Icon name="Calendar" size={14} strokeWidth={2} />
            <span>{path?.targetDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathCard;