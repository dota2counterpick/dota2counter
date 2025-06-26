
import React from 'react';
import { Hero } from '../types/hero';

interface HeroGridProps {
  heroes: Hero[];
  onHeroSelect: (hero: Hero) => void;
  selectedHeroes: Hero[];
}

export const HeroGrid: React.FC<HeroGridProps> = ({ heroes, onHeroSelect, selectedHeroes }) => {
  const isHeroSelected = (heroId: string) => {
    return selectedHeroes.some(h => h.id === heroId);
  };

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2 mt-4">
      {heroes.map((hero) => (
        <div
          key={hero.id}
          onClick={() => !isHeroSelected(hero.id) && onHeroSelect(hero)}
          className={`relative aspect-square cursor-pointer transition-all duration-200 ${
            isHeroSelected(hero.id)
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:scale-105 hover:z-10'
          }`}
        >
          <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-1 rounded-lg">
            <div className="w-full h-full bg-slate-900 rounded-md overflow-hidden">
              <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/placeholder.svg';
                }}
              />
            </div>
          </div>
          
          {/* Hero name tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
            {hero.name}
          </div>
        </div>
      ))}
    </div>
  );
};
