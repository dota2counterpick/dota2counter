
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
    
    // Bonus points for role synergy
    const roleBonus = calculateRoleBonus(hero, enemy);
    score += roleBonus;
  });
  
  return score;
};

const calculateRoleBonus = (hero: Hero, enemy: Hero): number => {
  let bonus = 0;
  
  // Initiators are good against squishy supports and carries
  if (hero.roles.includes('Initiator') && 
      (enemy.roles.includes('Support') || enemy.roles.includes('Carry'))) {
    bonus += 0.5;
  }
  
  // Disablers are effective against carries and escape heroes
  if (hero.roles.includes('Disabler') && 
      (enemy.roles.includes('Carry') || enemy.roles.includes('Escape'))) {
    bonus += 0.5;
  }
  
  // Durable heroes are good against nukers
  if (hero.roles.includes('Durable') && enemy.roles.includes('Nuker')) {
    bonus += 0.5;
  }
  
  // Escape heroes are good against slow, non-mobile heroes
  if (hero.roles.includes('Escape') && 
      !enemy.roles.includes('Escape') && !enemy.roles.includes('Initiator')) {
    bonus += 0.3;
  }
  
  return bonus;
};
