import React from 'react';

interface StatsSectionProps {
  totalTools: number;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ totalTools }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl text-center text-white border border-white/10">
        <div className="text-4xl lg:text-5xl font-bold mb-2">
          {totalTools}+
        </div>
        <div className="text-lg opacity-90">AI Tools</div>
      </div>
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl text-center text-white border border-white/10">
        <div className="text-4xl lg:text-5xl font-bold mb-2">9</div>
        <div className="text-lg opacity-90">Categories</div>
      </div>
      <div className="bg-white/20 backdrop-blur-md p-8 rounded-2xl text-center text-white border border-white/10">
        <div className="text-4xl lg:text-5xl font-bold mb-2">Daily</div>
        <div className="text-lg opacity-90">Updates</div>
      </div>
    </div>
  );
};