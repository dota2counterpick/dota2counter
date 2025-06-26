
import React from 'react';
import { CounterRecommendation } from '../types/hero';

interface CounterRecommendationsProps {
  recommendations: CounterRecommendation[];
  onHeroSelect: (hero: CounterRecommendation) => void;
}

export const CounterRecommendations: React.FC<CounterRecommendationsProps> = ({ 
  recommendations, 
  onHeroSelect 
}) => {
  const getScoreCategory = (score: number) => {
    if (score >= 6) return { label: 'Excellent', color: 'text-green-400' };
    if (score >= 3) return { label: 'Good', color: 'text-blue-400' };
    if (score >= 0) return { label: 'Neutral', color: 'text-yellow-400' };
    return { label: 'Risky', color: 'text-red-400' };
  };

  const topRecommendations = recommendations.slice(0, 12);

  return (
    <div className="bg-slate-800 rounded-lg p-6 h-fit">
      <h2 className="text-xl font-bold mb-4 text-yellow-400">Counter Pick Recommendations</h2>
      
      {recommendations.length === 0 ? (
        <p className="text-slate-400 text-center py-8">
          Select enemy heroes to see counter recommendations
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {topRecommendations.map((hero) => {
            const category = getScoreCategory(hero.score);
            return (
              <div
                key={hero.id}
                onClick={() => onHeroSelect(hero)}
                className="bg-slate-700 hover:bg-slate-600 rounded-lg p-3 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 p-0.5 rounded-md flex-shrink-0">
                    <div className="w-full h-full bg-slate-900 rounded-sm overflow-hidden">
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
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white text-sm truncate">{hero.name}</h3>
                    <p className={`text-xs ${category.color}`}>{category.label}</p>
                    <p className="text-xs text-slate-400">Score: {hero.score}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      
      <div className="mt-6 p-4 bg-slate-900 rounded-lg">
        <h3 className="font-medium text-white mb-2">How it works:</h3>
        <div className="text-xs text-slate-400 space-y-1">
          <p>• +3 points for each enemy hero countered</p>
          <p>• -2 points for each enemy hero that counters you</p>
          <p>• <span className="text-green-400">Excellent (6+)</span>: Strong counters</p>
          <p>• <span className="text-blue-400">Good (3-5)</span>: Solid potential</p>
          <p>• <span className="text-yellow-400">Neutral (0-2)</span>: Balanced</p>
          <p>• <span className="text-red-400">Risky (negative)</span>: Likely countered</p>
        </div>
      </div>
    </div>
  );
};
