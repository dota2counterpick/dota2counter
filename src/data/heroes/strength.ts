
import { Hero } from '../../types/hero';

export const strengthHeroes: Hero[] = [
  {
    id: 'alchemist',
    name: 'Alchemist',
    attribute: 'Strength',
    roles: ['Carry', 'Support', 'Durable', 'Disabler', 'Initiator', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['ancient_apparition', 'anti_mage', 'phantom_lancer', 'invoker', 'necrophos']
  },
  {
    id: 'axe',
    name: 'Axe',
    attribute: 'Strength',
    roles: ['Initiator', 'Durable', 'Disabler', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png',
    counters: ['phantom_assassin', 'anti_mage', 'juggernaut', 'troll_warlord', 'monkey_king'],
    counteredBy: ['lifestealer', 'ursa', 'dazzle', 'oracle', 'winter_wyvern']
  },
  {
    id: 'bristleback',
    name: 'Bristleback',
    attribute: 'Strength',
    roles: ['Carry', 'Durable', 'Initiator', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['ancient_apparition', 'anti_mage', 'phantom_lancer', 'necrophos', 'viper']
  },
  {
    id: 'centaur_warrunner',
    name: 'Centaur Warrunner',
    attribute: 'Strength',
    roles: ['Durable', 'Initiator', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png',
    counters: ['phantom_assassin', 'anti_mage', 'phantom_lancer', 'meepo', 'broodmother'],
    counteredBy: ['ancient_apparition', 'necrophos', 'outworld_destroyer', 'invoker', 'tinker']
  },
  {
    id: 'chaos_knight',
    name: 'Chaos Knight',
    attribute: 'Strength',
    roles: ['Carry', 'Disabler', 'Durable', 'Pusher', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'anti_mage'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven', 'gyrocopter', 'kunkka']
  },
  {
    id: 'clockwerk',
    name: 'Clockwerk',
    attribute: 'Strength',
    roles: ['Initiator', 'Disabler', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png',
    counters: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'nature_prophet', 'tinker'],
    counteredBy: ['lifestealer', 'phantom_lancer', 'omniknight', 'abaddon', 'oracle']
  },
  {
    id: 'dawnbreaker',
    name: 'Dawnbreaker',
    attribute: 'Strength',
    roles: ['Carry', 'Support', 'Initiator', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'phantom_assassin', 'anti_mage'],
    counteredBy: ['ancient_apparition', 'necrophos', 'outworld_destroyer', 'invoker', 'tinker']
  },
  {
    id: 'doom',
    name: 'Doom',
    attribute: 'Strength',
    roles: ['Carry', 'Initiator', 'Durable', 'Disabler', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/doom_bringer.png',
    counters: ['storm_spirit', 'anti_mage', 'invoker', 'enigma', 'tidehunter'],
    counteredBy: ['lifestealer', 'phantom_lancer', 'shadow_demon', 'oracle', 'abaddon']
  },
  {
    id: 'dragon_knight',
    name: 'Dragon Knight',
    attribute: 'Strength',
    roles: ['Carry', 'Durable', 'Pusher', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dragon_knight.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['ancient_apparition', 'necrophos', 'outworld_destroyer', 'invoker', 'viper']
  },
  {
    id: 'earth_spirit',
    name: 'Earth Spirit',
    attribute: 'Strength',
    roles: ['Nuker', 'Escape', 'Disabler', 'Initiator', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png',
    counters: ['phantom_assassin', 'anti_mage', 'phantom_lancer', 'invoker', 'tinker'],
    counteredBy: ['lifestealer', 'ursa', 'doom', 'silencer', 'outworld_destroyer']
  },
  {
    id: 'earthshaker',
    name: 'Earthshaker',
    attribute: 'Strength',
    roles: ['Support', 'Initiator', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earthshaker.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'chaos_knight', 'naga_siren'],
    counteredBy: ['lifestealer', 'anti_mage', 'storm_spirit', 'queen_of_pain', 'clockwerk']
  },
  {
    id: 'elder_titan',
    name: 'Elder Titan',
    attribute: 'Strength',
    roles: ['Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png',
    counters: ['phantom_assassin', 'anti_mage', 'phantom_lancer', 'morphling', 'dragon_knight'],
    counteredBy: ['lifestealer', 'storm_spirit', 'queen_of_pain', 'clockwerk', 'doom']
  },
  {
    id: 'huskar',
    name: 'Huskar',
    attribute: 'Strength',
    roles: ['Carry', 'Durable', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/huskar.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'zeus'],
    counteredBy: ['ancient_apparition', 'necrophos', 'viper', 'outworld_destroyer', 'pure_damage']
  },
  {
    id: 'kunkka',
    name: 'Kunkka',
    attribute: 'Strength',
    roles: ['Carry', 'Support', 'Disabler', 'Initiator', 'Durable', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kunkka.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'chaos_knight', 'naga_siren'],
    counteredBy: ['lifestealer', 'anti_mage', 'storm_spirit', 'queen_of_pain', 'clockwerk']
  },
  {
    id: 'legion_commander',
    name: 'Legion Commander',
    attribute: 'Strength',
    roles: ['Carry', 'Disabler', 'Initiator', 'Durable', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/legion_commander.png',
    counters: ['phantom_assassin', 'anti_mage', 'juggernaut', 'troll_warlord', 'ursa'],
    counteredBy: ['lifestealer', 'phantom_lancer', 'shadow_demon', 'winter_wyvern', 'bane']
  },
  {
    id: 'lifestealer',
    name: 'Lifestealer',
    attribute: 'Strength',
    roles: ['Carry', 'Durable', 'Jungler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/life_stealer.png',
    counters: ['dragon_knight', 'doom', 'axe', 'clockwerk', 'pudge'],
    counteredBy: ['phantom_lancer', 'anti_mage', 'diffusal_carriers', 'necrophos', 'ancient_apparition']
  },
  {
    id: 'lycan',
    name: 'Lycan',
    attribute: 'Strength',
    roles: ['Carry', 'Pusher', 'Jungler', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven', 'gyrocopter', 'kunkka']
  },
  {
    id: 'mars',
    name: 'Mars',
    attribute: 'Strength',
    roles: ['Carry', 'Initiator', 'Disabler', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mars.png',
    counters: ['phantom_assassin', 'anti_mage', 'phantom_lancer', 'drow_ranger', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'doom', 'ancient_apparition', 'necrophos']
  },
  {
    id: 'night_stalker',
    name: 'Night Stalker',
    attribute: 'Strength',
    roles: ['Carry', 'Initiator', 'Durable', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/night_stalker.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer', 'doom', 'ancient_apparition']
  },
  {
    id: 'ogre_magi',
    name: 'Ogre Magi',
    attribute: 'Strength',
    roles: ['Support', 'Nuker', 'Disabler', 'Durable', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ogre_magi.png',
    counters: ['phantom_assassin', 'anti_mage', 'phantom_lancer', 'invoker', 'tinker'],
    counteredBy: ['ancient_apparition', 'necrophos', 'outworld_destroyer', 'anti_mage', 'doom']
  },
  {
    id: 'omniknight',
    name: 'Omniknight',
    attribute: 'Strength',
    roles: ['Support', 'Durable', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/omniknight.png',
    counters: ['phantom_assassin', 'huskar', 'pudge', 'axe', 'bloodseeker'],
    counteredBy: ['invoker', 'diffusal_carriers', 'doom', 'oracle', 'enchantress']
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    attribute: 'Strength',
    roles: ['Support', 'Nuker', 'Initiator', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'phantom_assassin', 'huskar'],
    counteredBy: ['invoker', 'tinker', 'storm_spirit', 'queen_of_pain', 'silencer']
  },
  {
    id: 'primal_beast',
    name: 'Primal Beast',
    attribute: 'Strength',
    roles: ['Initiator', 'Durable', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png',
    counters: ['phantom_assassin', 'anti_mage', 'phantom_lancer', 'invoker', 'tinker'],
    counteredBy: ['lifestealer', 'ursa', 'doom', 'ancient_apparition', 'necrophos']
  },
  {
    id: 'pudge',
    name: 'Pudge',
    attribute: 'Strength',
    roles: ['Support', 'Disabler', 'Initiator', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'sniper', 'drow_ranger'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer', 'doom', 'ancient_apparition']
  },
  {
    id: 'slardar',
    name: 'Slardar',
    attribute: 'Strength',
    roles: ['Carry', 'Initiator', 'Durable', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slardar.png',
    counters: ['riki', 'clinkz', 'bounty_hunter', 'weaver', 'nyx_assassin'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer', 'ancient_apparition', 'kunkka']
  },
  {
    id: 'spirit_breaker',
    name: 'Spirit Breaker',
    attribute: 'Strength',
    roles: ['Carry', 'Initiator', 'Disabler', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spirit_breaker.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'sniper', 'drow_ranger'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer', 'linken_carriers', 'faceless_void']
  },
  {
    id: 'sven',
    name: 'Sven',
    attribute: 'Strength',
    roles: ['Carry', 'Disabler', 'Initiator', 'Durable', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'chaos_knight', 'naga_siren'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer', 'razor', 'viper']
  },
  {
    id: 'tidehunter',
    name: 'Tidehunter',
    attribute: 'Strength',
    roles: ['Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'chaos_knight', 'naga_siren'],
    counteredBy: ['lifestealer', 'anti_mage', 'storm_spirit', 'queen_of_pain', 'doom']
  },
  {
    id: 'timbersaw',
    name: 'Timbersaw',
    attribute: 'Strength',
    roles: ['Nuker', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shredder.png',
    counters: ['phantom_assassin', 'anti_mage', 'monkey_king', 'nature_prophet', 'treant_protector'],
    counteredBy: ['ancient_apparition', 'necrophos', 'outworld_destroyer', 'invoker', 'silencer']
  },
  {
    id: 'tiny',
    name: 'Tiny',
    attribute: 'Strength',
    roles: ['Carry', 'Support', 'Disabler', 'Initiator', 'Durable', 'Nuker', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'chaos_knight', 'naga_siren'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer', 'ancient_apparition', 'necrophos']
  },
  {
    id: 'treant_protector',
    name: 'Treant Protector',
    attribute: 'Strength',
    roles: ['Support', 'Initiator', 'Durable', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png',
    counters: ['phantom_assassin', 'anti_mage', 'phantom_lancer', 'invoker', 'tinker'],
    counteredBy: ['timbersaw', 'batrider', 'monkey_king', 'nature_prophet', 'invoker']
  },
  {
    id: 'tusk',
    name: 'Tusk',
    attribute: 'Strength',
    roles: ['Support', 'Initiator', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png',
    counters: ['phantom_assassin', 'anti_mage', 'phantom_lancer', 'invoker', 'tinker'],
    counteredBy: ['lifestealer', 'ursa', 'doom', 'ancient_apparition', 'necrophos']
  },
  {
    id: 'underlord',
    name: 'Underlord',
    attribute: 'Strength',
    roles: ['Support', 'Initiator', 'Durable', 'Disabler', 'Nuker', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abyssal_underlord.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'phantom_assassin', 'anti_mage'],
    counteredBy: ['ancient_apparition', 'necrophos', 'outworld_destroyer', 'invoker', 'lifestealer']
  },
  {
    id: 'undying',
    name: 'Undying',
    attribute: 'Strength',
    roles: ['Support', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'phantom_assassin', 'anti_mage'],
    counteredBy: ['ancient_apparition', 'necrophos', 'outworld_destroyer', 'invoker', 'lifestealer']
  },
  {
    id: 'wraith_king',
    name: 'Wraith King',
    attribute: 'Strength',
    roles: ['Carry', 'Support', 'Durable', 'Disabler', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skeleton_king.png',
    counters: ['phantom_assassin', 'anti_mage', 'phantom_lancer', 'invoker', 'tinker'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'invoker', 'lion', 'nyx_assassin']
  }
];
