import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const SkillRadarChart = ({ skills, selectedCategory }) => {
  const radarData = skills?.filter(skill => !selectedCategory || skill?.category === selectedCategory)?.slice(0, 8)?.map(skill => ({
      skill: skill?.name,
      proficiency: skill?.proficiency,
      fullMark: 100
    }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-purple">
          <p className="text-sm font-semibold text-foreground">{payload?.[0]?.payload?.skill}</p>
          <p className="text-sm text-primary">{payload?.[0]?.value}% Proficiency</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={radarData}>
          <PolarGrid stroke="rgba(139, 92, 246, 0.2)" />
          <PolarAngleAxis
            dataKey="skill"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{ fill: '#94a3b8', fontSize: 10 }}
          />
          <Radar
            name="Proficiency"
            dataKey="proficiency"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.6}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillRadarChart;