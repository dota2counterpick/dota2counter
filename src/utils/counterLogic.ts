
import { Hero } from '../types/hero';

export const calculateCounterScore = (hero: Hero, enemyTeam: Hero[]): number => {
  let score = 0;
  
  enemyTeam.forEach(enemy => {
    // +3 points if this hero counters the enemy
    if (hero.counters.includes(enemy.id)) {
      score += 3;
    }
    
    // -2 points if the enemy counters this hero
    if (hero.counteredBy.includes(enemy.id)) {
      score -= 2;
    }
  });
  
  return score;
};
