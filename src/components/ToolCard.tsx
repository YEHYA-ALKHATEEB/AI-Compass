import React from 'react';
import { ExternalLink } from 'lucide-react';
import { AITool } from '../types';

interface ToolCardProps {
  tool: AITool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const pricingColors = {
    free: 'bg-green-100 text-green-700',
    freemium: 'bg-orange-100 text-orange-700',
    paid: 'bg-blue-100 text-blue-700'
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 lg:p-7 border-2 border-transparent hover:border-indigo-200 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300 relative overflow-hidden group">
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 leading-tight">
          {tool.name}
        </h3>
        <span className={`px-3 py-1 rounded-xl text-sm font-medium ${pricingColors[tool.pricing]} whitespace-nowrap ml-3`}>
          {tool.pricing.charAt(0).toUpperCase() + tool.pricing.slice(1)}
        </span>
      </div>
      
      <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-5 line-clamp-3">
        {tool.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {tool.features.map((feature, index) => (
          <span 
            key={index}
            className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-xl text-sm font-medium"
          >
            {feature}
          </span>
        ))}
      </div>
      
      <div className="flex gap-3">
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-full font-semibold text-center hover:from-indigo-600 hover:to-purple-600 hover:shadow-lg hover:transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          Try {tool.name}
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};