import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { aiTools } from './data/aiTools';
import { CategorySection } from './components/CategorySection';
import { FilterTabs } from './components/FilterTabs';
import { StatsSection } from './components/StatsSection';
import Footer from './components/Footer';
import { AITool } from './types';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    'all', 'writing', 'coding', 'design', 'productivity', 
    'research', 'media', 'business', 'education', 'healthcare'
  ];

  const filteredTools = useMemo(() => {
    return aiTools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);

  const groupedTools = useMemo(() => {
    if (activeCategory !== 'all') {
      return { [activeCategory]: filteredTools };
    }
    
    const result: Record<string, AITool[]> = {};
    categories.slice(1).forEach(category => {
      result[category] = filteredTools.filter(tool => tool.category === category);
    });
    return result;
  }, [filteredTools, activeCategory]);

  const totalTools = aiTools.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto px-5 py-10 lg:px-8">
        {/* Header */}
       <header className="text-center mb-15 text-white">
  {/* Author & Socials */}
  <div className="flex flex-col items-center gap-2 mb-6">
    <span className="text-sm lg:text-base text-blue-100/80 italic">
      Done by <span className="font-semibold">Yehya Alkhateeb</span> – Helping people find the perfect AI tools beautifully
    </span>
    <div className="flex gap-4">
      <a href="https://www.linkedin.com/in/yehya-alkhateeb" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <i className="fab fa-linkedin text-blue-400 text-xl"></i>
      </a>
      <a href="https://github.com/YehyaAlkhateeb" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
        <i className="fab fa-github text-gray-300 text-xl"></i>
      </a>
      <a href="mailto:yehya.alkhateeb@gmail.com" className="hover:scale-110 transition-transform">
        <i className="fas fa-envelope text-red-400 text-xl"></i>
      </a>
    </div>
  </div>

  {/* Title */}
  <h1 className="text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
    AI Compass
  </h1>

  {/* Subtitle */}
  <p className="text-xl mb-4 lg:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
    Illuminate your path to the perfect AI tools for every need — Over {totalTools}+ curated AI solutions organized and ready to explore.
  </p>
</header>


        {/* Stats Section */}
        <StatsSection totalTools={totalTools} />

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8 relative">
          <div className="relative">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              className="w-full py-5 pl-14 pr-6 text-lg bg-white/95 backdrop-blur-md border-0 rounded-full shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30 focus:transform focus:scale-105 transition-all duration-300"
              placeholder="Search AI tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <FilterTabs 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Results Count */}
        {searchTerm && (
          <div className="text-center text-white/90 mb-8">
            <p className="text-lg">
              Found {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} matching "{searchTerm}"
            </p>
          </div>
        )}

        {/* Categories */}
        <div className="space-y-12">
          {Object.entries(groupedTools).map(([category, tools]) => {
            if (tools.length === 0) return null;
            
            return (
              <CategorySection 
                key={category}
                category={category}
                tools={tools}
              />
            );
          })}
        </div>

        {/* No Results */}
        {filteredTools.length === 0 && searchTerm && (
          <div className="text-center py-16">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">No tools found</h3>
              <p className="text-white/80 mb-6">
                Try searching for a different term or browse our categories above.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-8 py-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all duration-300"
              >
                Clear Search
              </button>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;