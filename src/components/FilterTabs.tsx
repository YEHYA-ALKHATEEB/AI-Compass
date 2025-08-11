import React from 'react';
import { categoryIcons } from '../data/categories';

interface FilterTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  const getCategoryName = (category: string) => {
    if (category === 'all') return 'All Tools';
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1');
    return categoryName === 'Writing' ? 'Writing & Content' : categoryName;
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-12">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md border border-white/20 flex items-center gap-2 ${
            activeCategory === category
              ? 'bg-white/30 text-white shadow-lg transform scale-105'
              : 'bg-white/10 text-white/90 hover:bg-white/20 hover:transform hover:scale-105'
          }`}
        >
          {category !== 'all' && (
            <span className="text-lg">
              {categoryIcons[category]}
            </span>
          )}
          {getCategoryName(category)}
        </button>
      ))}
    </div>
  );
};