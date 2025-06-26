
import React from 'react';
import { Hero } from '../types/hero';
import { X } from 'lucide-react';

interface TeamDisplayProps {
  title: string;
  heroes: Hero[];
  onHeroRemove: (heroId: string) => void;
  teamColor: 'blue' | 'red';
}

export const TeamDisplay: React.FC<TeamDisplayProps> = ({ title, heroes, onHeroRemove, teamColor }) => {
  const emptySlots = Array.from({ length: 5 - heroes.length }, (_, i) => i);
  const colorClass = teamColor === 'blue' ? 'bg-blue-900/50 border-blue-700' : 'bg-red-900/50 border-red-700';

  return (
    <div className={`${colorClass} border rounded-lg p-4`}>
      <h3 className="font-bold mb-3 text-white">{title}</h3>
      <div className="flex gap-2">
        {heroes.map((hero) => (
          <div key={hero.id} className="relative group">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 p-0.5 rounded-lg">
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
            <button
              onClick={() => onHeroRemove(hero.id)}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X size={10} className="text-white" />
            </button>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 px-1 py-0.5 bg-slate-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {hero.name}
            </div>
          </div>
        ))}
        {emptySlots.map((_, index) => (
          <div key={index} className="w-12 h-12 border-2 border-dashed border-slate-600 rounded-lg"></div>
        ))}
      </div>
    </div>
  );
};
