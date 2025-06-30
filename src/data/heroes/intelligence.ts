
import { Hero } from '../../types/hero';

export const intelligenceHeroes: Hero[] = [
  {
    id: 'ancient_apparition',
    name: 'Ancient Apparition',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png',
    counters: ['alchemist', 'huskar', 'morphling', 'terrorblade', 'abaddon'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'puck', 'anti_mage', 'clockwerk']
  },
  {
    id: 'chen',
    name: 'Chen',
    attribute: 'Intelligence',
    roles: ['Support', 'Pusher', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png',
    counters: ['phantom_assassin', 'huskar', 'pudge', 'axe', 'legion_commander'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'storm_spirit', 'invoker', 'tinker']
  },
  {
    id: 'crystal_maiden',
    name: 'Crystal Maiden',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'chaos_knight', 'naga_siren'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'clockwerk', 'spirit_breaker', 'pudge']
  },
  {
    id: 'dark_seer',
    name: 'Dark Seer',
    attribute: 'Intelligence',
    roles: ['Initiator', 'Jungler', 'Escape', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight', 'naga_siren', 'broodmother'],
    counteredBy: ['anti_mage', 'lifestealer', 'doom', 'silencer', 'outworld_destroyer']
  },
  {
    id: 'dark_willow',
    name: 'Dark Willow',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png',
    counters: ['phantom_assassin', 'sniper', 'drow_ranger', 'shadow_fiend', 'invoker'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'lifestealer', 'clockwerk']
  },
  {
    id: 'disruptor',
    name: 'Disruptor',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png',
    counters: ['storm_spirit', 'queen_of_pain', 'anti_mage', 'phantom_lancer', 'enigma'],
    counteredBy: ['lifestealer', 'pudge', 'clockwerk', 'spirit_breaker', 'doom']
  },
  {
    id: 'enchantress',
    name: 'Enchantress',
    attribute: 'Intelligence',
    roles: ['Support', 'Jungler', 'Durable', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png',
    counters: ['phantom_assassin', 'troll_warlord', 'huskar', 'ursa', 'sven'],
    counteredBy: ['invoker', 'tinker', 'storm_spirit', 'queen_of_pain', 'clockwerk']
  },
  {
    id: 'grimstroke',
    name: 'Grimstroke',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight', 'phantom_assassin', 'invoker'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'lifestealer', 'clockwerk']
  },
  {
    id: 'invoker',
    name: 'Invoker',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker', 'Disabler', 'Escape', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png',
    counters: ['crystal_maiden', 'tinker', 'zeus', 'lina', 'lion'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'nyx_assassin', 'clockwerk']
  },
  {
    id: 'jakiro',
    name: 'Jakiro',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Pusher', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png',
    counters: ['templar_assassin', 'huskar', 'phantom_assassin', 'broodmother', 'meepo'],
    counteredBy: ['anti_mage', 'storm_spirit', 'queen_of_pain', 'clockwerk', 'pudge']
  },
  {
    id: 'keeper_of_the_light',
    name: 'Keeper of the Light',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'chaos_knight', 'naga_siren'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'nyx_assassin']
  },
  {
    id: 'leshrac',
    name: 'Leshrac',
    attribute: 'Intelligence',
    roles: ['Carry', 'Support', 'Nuker', 'Pusher', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'templar_assassin', 'huskar'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'nyx_assassin', 'clockwerk']
  },
  {
    id: 'lich',
    name: 'Lich',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'chaos_knight', 'naga_siren'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'pudge']
  },
  {
    id: 'lina',
    name: 'Lina',
    attribute: 'Intelligence',
    roles: ['Support', 'Carry', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'lion'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'pudge']
  },
  {
    id: 'lion',
    name: 'Lion',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'morphling', 'terrorblade'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'lifestealer', 'clockwerk']
  },
  {
    id: 'muerta',
    name: 'Muerta',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png',
    counters: ['phantom_assassin', 'sniper', 'drow_ranger', 'shadow_fiend', 'invoker'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'spirit_breaker']
  },
  {
    id: 'necrophos',
    name: 'Necrophos',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker', 'Durable', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/necrolyte.png',
    counters: ['huskar', 'phantom_assassin', 'pudge', 'axe', 'abaddon'],
    counteredBy: ['anti_mage', 'storm_spirit', 'queen_of_pain', 'silencer', 'outworld_destroyer']
  },
  {
    id: 'oracle',
    name: 'Oracle',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png',
    counters: ['phantom_assassin', 'huskar', 'pudge', 'batrider', 'doom'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'silencer']
  },
  {
    id: 'outworld_destroyer',
    name: 'Outworld Destroyer',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/obsidian_destroyer.png',
    counters: ['invoker', 'storm_spirit', 'tinker', 'zeus', 'necrophos'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'lifestealer', 'clockwerk', 'nyx_assassin']
  },
  {
    id: 'puck',
    name: 'Puck',
    attribute: 'Intelligence',
    roles: ['Initiator', 'Disabler', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'shadow_fiend', 'sniper'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'silencer']
  },
  {
    id: 'pugna',
    name: 'Pugna',
    attribute: 'Intelligence',
    roles: ['Nuker', 'Pusher', 'Support'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pugna.png',
    counters: ['invoker', 'storm_spirit', 'tinker', 'zeus', 'lina'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'clockwerk', 'nyx_assassin', 'pudge']
  },
  {
    id: 'queen_of_pain',
    name: 'Queen of Pain',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'shadow_fiend'],
    counteredBy: ['storm_spirit', 'anti_mage', 'clockwerk', 'pudge', 'doom']
  },
  {
    id: 'ringmaster',
    name: 'Ringmaster',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ringmaster.png',
    counters: ['phantom_assassin', 'sniper', 'drow_ranger', 'shadow_fiend', 'invoker'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'lifestealer']
  },
  {
    id: 'rubick',
    name: 'Rubick',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png',
    counters: ['invoker', 'enigma', 'magnus', 'tidehunter', 'earthshaker'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'pudge']
  },
  {
    id: 'shadow_demon',
    name: 'Shadow Demon',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Initiator', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_demon.png',
    counters: ['phantom_assassin', 'troll_warlord', 'huskar', 'ursa', 'sven'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'lifestealer', 'clockwerk']
  },
  {
    id: 'shadow_shaman',
    name: 'Shadow Shaman',
    attribute: 'Intelligence',
    roles: ['Support', 'Pusher', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png',
    counters: ['phantom_assassin', 'sniper', 'drow_ranger', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'lifestealer', 'clockwerk']
  },
  {
    id: 'silencer',
    name: 'Silencer',
    attribute: 'Intelligence',
    roles: ['Carry', 'Support', 'Disabler', 'Initiator', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png',
    counters: ['invoker', 'storm_spirit', 'enigma', 'tidehunter', 'magnus'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'clockwerk', 'pudge', 'doom']
  },
  {
    id: 'skywrath_mage',
    name: 'Skywrath Mage',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'lina'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'pudge']
  },
  {
    id: 'storm_spirit',
    name: 'Storm Spirit',
    attribute: 'Intelligence',
    roles: ['Carry', 'Escape', 'Nuker', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'shadow_fiend'],
    counteredBy: ['anti_mage', 'doom', 'silencer', 'bloodseeker', 'outworld_destroyer']
  },
  {
    id: 'tinker',
    name: 'Tinker',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png',
    counters: ['crystal_maiden', 'invoker', 'zeus', 'lina', 'lion'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'nyx_assassin']
  },
  {
    id: 'warlock',
    name: 'Warlock',
    attribute: 'Intelligence',
    roles: ['Support', 'Initiator', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'chaos_knight', 'naga_siren'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'doom']
  },
  {
    id: 'winter_wyvern',
    name: 'Winter Wyvern',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png',
    counters: ['phantom_assassin', 'troll_warlord', 'huskar', 'ursa', 'sven'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'lifestealer']
  },
  {
    id: 'witch_doctor',
    name: 'Witch Doctor',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png',
    counters: ['phantom_lancer', 'meepo', 'broodmother', 'chaos_knight', 'naga_siren'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'pudge']
  },
  {
    id: 'zeus',
    name: 'Zeus',
    attribute: 'Intelligence',
    roles: ['Nuker', 'Support'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'nature_prophet', 'spectre'],
    counteredBy: ['storm_spirit', 'anti_mage', 'queen_of_pain', 'clockwerk', 'pudge']
  }
];
