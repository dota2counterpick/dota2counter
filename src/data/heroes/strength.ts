
import { Hero } from '../../types/hero';

export const strengthHeroes: Hero[] = [
  {
    id: 'abaddon',
    name: 'Abaddon',
    attribute: 'Strength',
    roles: ['Support', 'Carry', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png',
    counters: ['phantom_assassin', 'huskar', 'zeus'],
    counteredBy: ['ancient_apparition', 'outworld_destroyer', 'invoker']
  },
  {
    id: 'alchemist',
    name: 'Alchemist',
    attribute: 'Strength',
    roles: ['Carry', 'Support', 'Durable', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png',
    counters: ['anti_mage', 'lifestealer', 'ancient_apparition'],
    counteredBy: ['phantom_lancer', 'chaos_knight', 'sven']
  },
  {
    id: 'axe',
    name: 'Axe',
    attribute: 'Strength',
    roles: ['Initiator', 'Durable', 'Disabler', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png',
    counters: ['crystal_maiden', 'invoker', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'viper']
  },
  {
    id: 'bristleback',
    name: 'Bristleback',
    attribute: 'Strength',
    roles: ['Carry', 'Durable', 'Initiator', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png',
    counters: ['crystal_maiden', 'invoker', 'lion'],
    counteredBy: ['silver_edge_carriers', 'ancient_apparition', 'viper']
  },
  {
    id: 'centaur',
    name: 'Centaur Warrunner',
    attribute: 'Strength',
    roles: ['Durable', 'Initiator', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png',
    counters: ['phantom_assassin', 'anti_mage', 'pudge'],
    counteredBy: ['lifestealer', 'ursa', 'enchantress']
  },
  {
    id: 'chaos_knight',
    name: 'Chaos Knight',
    attribute: 'Strength',
    roles: ['Carry', 'Durable', 'Pusher', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png',
    counters: ['crystal_maiden', 'invoker', 'shadow_fiend'],
    counteredBy: ['sven', 'earthshaker', 'ember_spirit']
  },
  {
    id: 'doom_bringer',
    name: 'Doom',
    attribute: 'Strength',
    roles: ['Carry', 'Initiator', 'Durable', 'Disabler', 'Jungler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png',
    counters: ['invoker', 'storm_spirit', 'tinker'],
    counteredBy: ['phantom_lancer', 'anti_mage', 'lifestealer']
  },
  {
    id: 'dragon_knight',
    name: 'Dragon Knight',
    attribute: 'Strength',
    roles: ['Carry', 'Durable', 'Pusher', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker'],
    counteredBy: ['lifestealer', 'ursa', 'viper']
  },
  {
    id: 'earthshaker',
    name: 'Earthshaker',
    attribute: 'Strength',
    roles: ['Support', 'Initiator', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png',
    counters: ['phantom_lancer', 'chaos_knight', 'meepo'],
    counteredBy: ['lifestealer', 'anti_mage', 'queen_of_pain']
  },
  {
    id: 'huskar',
    name: 'Huskar',
    attribute: 'Strength',
    roles: ['Carry', 'Durable', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png',
    counters: ['zeus', 'lina', 'lion'],
    counteredBy: ['ancient_apparition', 'phantom_assassin', 'viper']
  },
  {
    id: 'kunkka',
    name: 'Kunkka',
    attribute: 'Strength',
    roles: ['Carry', 'Support', 'Disabler', 'Initiator', 'Durable', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png',
    counters: ['phantom_lancer', 'crystal_maiden', 'invoker'],
    counteredBy: ['lifestealer', 'anti_mage', 'storm_spirit']
  },
  {
    id: 'legion_commander',
    name: 'Legion Commander',
    attribute: 'Strength',
    roles: ['Carry', 'Disabler', 'Initiator', 'Durable', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png',
    counters: ['crystal_maiden', 'invoker', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_assassin']
  },
  {
    id: 'lifestealer',
    name: 'Lifestealer',
    attribute: 'Strength',
    roles: ['Carry', 'Durable', 'Jungler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png',
    counters: ['axe', 'centaur', 'bristleback'],
    counteredBy: ['phantom_lancer', 'anti_mage', 'ursa']
  },
  {
    id: 'mars',
    name: 'Mars',
    attribute: 'Strength',
    roles: ['Carry', 'Initiator', 'Durable', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png',
    counters: ['phantom_assassin', 'sniper', 'drow_ranger'],
    counteredBy: ['lifestealer', 'ursa', 'monkey_king']
  },
  {
    id: 'night_stalker',
    name: 'Night Stalker',
    attribute: 'Strength',
    roles: ['Carry', 'Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'omniknight',
    name: 'Omniknight',
    attribute: 'Strength',
    roles: ['Support', 'Durable', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png',
    counters: ['phantom_assassin', 'huskar', 'pudge'],
    counteredBy: ['invoker', 'diffusal_blade_carriers', 'oracle']
  },
  {
    id: 'slardar',
    name: 'Slardar',
    attribute: 'Strength',
    roles: ['Carry', 'Durable', 'Initiator', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png',
    counters: ['phantom_assassin', 'riki', 'bounty_hunter'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'spirit_breaker',
    name: 'Spirit Breaker',
    attribute: 'Strength',
    roles: ['Carry', 'Initiator', 'Durable', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'sven',
    name: 'Sven',
    attribute: 'Strength',
    roles: ['Carry', 'Disabler', 'Initiator', 'Durable', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png',
    counters: ['phantom_lancer', 'chaos_knight', 'meepo'],
    counteredBy: ['lifestealer', 'ursa', 'ancient_apparition']
  },
  {
    id: 'tidehunter',
    name: 'Tidehunter',
    attribute: 'Strength',
    roles: ['Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png',
    counters: ['phantom_lancer', 'crystal_maiden', 'invoker'],
    counteredBy: ['lifestealer', 'anti_mage', 'storm_spirit']
  },
  {
    id: 'timbersaw',
    name: 'Timbersaw',
    attribute: 'Strength',
    roles: ['Nuker', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png',
    counters: ['axe', 'centaur', 'pudge'],
    counteredBy: ['silencer', 'outworld_destroyer', 'ancient_apparition']
  },
  {
    id: 'tiny',
    name: 'Tiny',
    attribute: 'Strength',
    roles: ['Carry', 'Nuker', 'Pusher', 'Initiator', 'Durable', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png',
    counters: ['phantom_lancer', 'crystal_maiden', 'invoker'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_assassin']
  },
  {
    id: 'underlord',
    name: 'Underlord',
    attribute: 'Strength',
    roles: ['Support', 'Nuker', 'Disabler', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abyssal_underlord.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_assassin']
  },
  {
    id: 'wraith_king',
    name: 'Wraith King',
    attribute: 'Strength',
    roles: ['Carry', 'Support', 'Durable', 'Disabler', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'invoker']
  },
  {
    id: 'beastmaster',
    name: 'Beastmaster',
    attribute: 'Strength',
    roles: ['Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png',
    counters: ['tinker', 'invoker', 'storm_spirit'],
    counteredBy: ['phantom_lancer', 'anti_mage', 'juggernaut']
  },
  {
    id: 'brewmaster',
    name: 'Brewmaster',
    attribute: 'Strength',
    roles: ['Carry', 'Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png',
    counters: ['phantom_assassin', 'sniper', 'drow_ranger'],
    counteredBy: ['outworld_destroyer', 'invoker', 'silencer']
  },
  {
    id: 'lycan',
    name: 'Lycan',
    attribute: 'Strength',
    roles: ['Carry', 'Pusher', 'Jungler', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven']
  }
];
