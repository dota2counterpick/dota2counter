
import { Hero } from '../../types/hero';
import { strengthHeroes } from './strength';
import { agilityHeroes } from './agility';
import { intelligenceHeroes } from './intelligence';
import { universalHeroes } from './universal';

export const heroesData: Hero[] = [
  ...strengthHeroes,
  ...agilityHeroes,
  ...intelligenceHeroes,
  ...universalHeroes
];

export { strengthHeroes, agilityHeroes, intelligenceHeroes, universalHeroes };
