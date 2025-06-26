
import { Hero } from '../../types/hero';
import { strengthHeroes } from './strength';
import { agilityHeroes } from './agility';
import { intelligenceHeroes } from './intelligence';

export const heroesData: Hero[] = [
  ...strengthHeroes,
  ...agilityHeroes,
  ...intelligenceHeroes
];

export { strengthHeroes, agilityHeroes, intelligenceHeroes };
