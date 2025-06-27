
import { Hero } from '../../types/hero';

export const universalHeroes: Hero[] = [
  {
    id: 'dark_willow',
    name: 'Dark Willow',
    attribute: 'Universal',
    roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'dawnbreaker',
    name: 'Dawnbreaker',
    attribute: 'Universal',
    roles: ['Carry', 'Initiator', 'Durable', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dawnbreaker.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'earth_spirit',
    name: 'Earth Spirit',
    attribute: 'Universal',
    roles: ['Nuker', 'Initiator', 'Disabler', 'Escape', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png',
    counters: ['crystal_maiden', 'invoker', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'silencer']
  },
  {
    id: 'elder_titan',
    name: 'Elder Titan',
    attribute: 'Universal',
    roles: ['Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png',
    counters: ['phantom_assassin', 'anti_mage', 'morphling'],
    counteredBy: ['lifestealer', 'ursa', 'silencer']
  },
  {
    id: 'marci',
    name: 'Marci',
    attribute: 'Universal',
    roles: ['Support', 'Disabler', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png',
    counters: ['crystal_maiden', 'invoker', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'mirana',
    name: 'Mirana',
    attribute: 'Universal',
    roles: ['Carry', 'Support', 'Escape', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['slardar', 'dust_carriers', 'gem_carriers']
  },
  {
    id: 'muerta',
    name: 'Muerta',
    attribute: 'Universal',
    roles: ['Carry', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'nature_prophet',
    name: 'Nature\'s Prophet',
    attribute: 'Universal',
    roles: ['Carry', 'Jungler', 'Pusher', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'clockwerk', 'bounty_hunter']
  },
  {
    id: 'phoenix',
    name: 'Phoenix',
    attribute: 'Universal',
    roles: ['Support', 'Nuker', 'Initiator', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phoenix.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'primal_beast',
    name: 'Primal Beast',
    attribute: 'Universal',
    roles: ['Durable', 'Initiator', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png',
    counters: ['crystal_maiden', 'invoker', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'pudge',
    name: 'Pudge',
    attribute: 'Universal',
    roles: ['Durable', 'Disabler', 'Initiator', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png',
    counters: ['crystal_maiden', 'invoker', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'rubick',
    name: 'Rubick',
    attribute: 'Universal',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png',
    counters: ['invoker', 'enigma', 'tidehunter'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'sand_king',
    name: 'Sand King',
    attribute: 'Universal',
    roles: ['Initiator', 'Disabler', 'Nuker', 'Support', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png',
    counters: ['phantom_lancer', 'crystal_maiden', 'invoker'],
    counteredBy: ['lifestealer', 'anti_mage', 'storm_spirit']
  },
  {
    id: 'snapfire',
    name: 'Snapfire',
    attribute: 'Universal',
    roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'techies',
    name: 'Techies',
    attribute: 'Universal',
    roles: ['Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['nature_prophet', 'illusion_heroes', 'gem_carriers']
  },
  {
    id: 'treant',
    name: 'Treant Protector',
    attribute: 'Universal',
    roles: ['Support', 'Initiator', 'Durable', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png',
    counters: ['phantom_assassin', 'riki', 'bounty_hunter'],
    counteredBy: ['battlEfury_carriers', 'ember_spirit', 'timbersaw']
  },
  {
    id: 'tusk',
    name: 'Tusk',
    attribute: 'Universal',
    roles: ['Initiator', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png',
    counters: ['crystal_maiden', 'invoker', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'undying',
    name: 'Undying',
    attribute: 'Universal',
    roles: ['Support', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'vengeful_spirit',
    name: 'Vengeful Spirit',
    attribute: 'Universal',
    roles: ['Support', 'Disabler', 'Initiator', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'venomancer',
    name: 'Venomancer',
    attribute: 'Universal',
    roles: ['Support', 'Nuker', 'Initiator', 'Pusher', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png',
    counters: ['templar_assassin', 'huskar', 'phantom_assassin'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'viper',
    name: 'Viper',
    attribute: 'Universal',
    roles: ['Carry', 'Durable', 'Initiator', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png',
    counters: ['huskar', 'phantom_assassin', 'anti_mage'],
    counteredBy: ['outworld_destroyer', 'invoker', 'silencer']
  },
  {
    id: 'visage',
    name: 'Visage',
    attribute: 'Universal',
    roles: ['Support', 'Nuker', 'Durable', 'Disabler', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'void_spirit',
    name: 'Void Spirit',
    attribute: 'Universal',
    roles: ['Carry', 'Escape', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'windranger',
    name: 'Windranger',
    attribute: 'Universal',
    roles: ['Carry', 'Support', 'Disabler', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'io',
    name: 'Io',
    attribute: 'Universal',
    roles: ['Support', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'spirit_breaker', 'clockwerk']
  },
  {
    id: 'clockwerk',
    name: 'Clockwerk',
    attribute: 'Universal',
    roles: ['Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png',
    counters: ['tinker', 'sniper', 'invoker'],
    counteredBy: ['phantom_lancer', 'lifestealer', 'ursa']
  },
  {
    id: 'monkey_king',
    name: 'Monkey King',
    attribute: 'Universal',
    roles: ['Carry', 'Escape', 'Disabler', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['timbersaw', 'batrider', 'quelling_blade_carriers']
  },
  {
    id: 'kez',
    name: 'Kez',
    attribute: 'Universal',
    roles: ['Carry', 'Escape', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kez.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['axe', 'legion_commander', 'blood_seeker']
  },
  {
    id: 'ringmaster',
    name: 'Ringmaster',
    attribute: 'Universal',
    roles: ['Support', 'Disabler', 'Nuker', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ringmaster.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'bounty_hunter_duplicate',
    name: 'Bounty Hunter',
    attribute: 'Universal',
    roles: ['Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['slardar', 'dust_carriers', 'gem_carriers']
  }
];
