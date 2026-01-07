import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsOverview = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-8">
      <div className="bg-card rounded-xl border border-border p-4 md:p-5 lg:p-6 hover:shadow-purple transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="FolderOpen" size={20} className="text-primary" />
          </div>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            {stats?.totalProjects}
          </span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">Total Projects</p>
      </div>
      <div className="bg-card rounded-xl border border-border p-4 md:p-5 lg:p-6 hover:shadow-purple transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-success/10 rounded-lg">
            <Icon name="CheckCircle2" size={20} className="text-success" />
          </div>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            {stats?.completed}
          </span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">Completed</p>
      </div>
      <div className="bg-card rounded-xl border border-border p-4 md:p-5 lg:p-6 hover:shadow-purple transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-warning/10 rounded-lg">
            <Icon name="Code2" size={20} className="text-warning" />
          </div>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            {stats?.technologies}
          </span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">Technologies</p>
      </div>
      <div className="bg-card rounded-xl border border-border p-4 md:p-5 lg:p-6 hover:shadow-purple transition-shadow duration-300">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-info/10 rounded-lg">
            <Icon name="Users" size={20} className="text-info" />
          </div>
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            {stats?.totalUsers}
          </span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground">Total Users</p>
      </div>
    </div>
  );
};

export default StatsOverview;