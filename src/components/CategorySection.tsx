import React from 'react';
import { ToolCard } from './ToolCard';
import { categoryIcons, categoryColors } from '../data/categories';
import { AITool } from '../types';

interface CategorySectionProps {
  category: string;
  tools: AITool[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category, tools }) => {
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1');
  
  return (
    <div 
      className={`bg-white/95 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 hover:shadow-3xl hover:transform hover:scale-[1.02] transition-all duration-500 ${categoryColors[category]}`}
      data-category={category}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <div className={`text-4xl lg:text-5xl p-4 rounded-2xl mr-6 ${categoryColors[category]} gradient-icon`}>
            {categoryIcons[category]}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
            {categoryName === 'Writing' ? 'Writing & Content' : categoryName}
          </h2>
        </div>
        <div className="bg-indigo-100 text-indigo-700 px-6 py-3 rounded-2xl font-semibold text-lg">
          {tools.length} tool{tools.length !== 1 ? 's' : ''}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {tools.map((tool, index) => (
          <ToolCard key={`${tool.name}-${index}`} tool={tool} />
        ))}
      </div>
    </div>
  );
};