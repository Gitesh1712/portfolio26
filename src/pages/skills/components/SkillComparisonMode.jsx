import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SkillComparisonMode = ({ comparisonData }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-purple">
          <p className="text-sm font-semibold text-foreground mb-2">{payload?.[0]?.payload?.skill}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.name}: {entry?.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card border border-border rounded-xl p-4 md:p-6">
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">Skill Comparison</h3>
        <p className="text-sm text-muted-foreground">Compare proficiency levels across different time periods</p>
      </div>

      <div className="w-full h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(139, 92, 246, 0.1)" />
            <XAxis
              dataKey="skill"
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis
              tick={{ fill: '#94a3b8', fontSize: 12 }}
              domain={[0, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
            />
            <Bar dataKey="2024" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            <Bar dataKey="2025" fill="#a78bfa" radius={[8, 8, 0, 0]} />
            <Bar dataKey="2026" fill="#c4b5fd" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
            <span className="text-sm font-medium text-foreground">2024</span>
          </div>
          <p className="text-xs text-muted-foreground">Initial proficiency levels</p>
        </div>
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#a78bfa]" />
            <span className="text-sm font-medium text-foreground">2025</span>
          </div>
          <p className="text-xs text-muted-foreground">Current skill levels</p>
        </div>
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-[#c4b5fd]" />
            <span className="text-sm font-medium text-foreground">2026</span>
          </div>
          <p className="text-xs text-muted-foreground">Projected growth</p>
        </div>
      </div>
    </div>
  );
};

export default SkillComparisonMode;