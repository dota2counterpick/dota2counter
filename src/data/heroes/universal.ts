
import { Hero } from '../../types/hero';

export const universalHeroes: Hero[] = [
  {
    id: 'abaddon',
    name: 'Abaddon',
    attribute: 'Universal',
    roles: ['Support', 'Carry', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png',
    counters: ['phantom_assassin', 'huskar', 'zeus'],
    counteredBy: ['ancient_apparition', 'outworld_destroyer', 'invoker']
  },
  {
    id: 'arc_warden',
    name: 'Arc Warden',
    attribute: 'Universal',
    roles: ['Carry', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'spirit_breaker', 'clockwerk']
  },
  {
    id: 'bane',
    name: 'Bane',
    attribute: 'Universal',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png',
    counters: ['troll_warlord', 'ursa', 'phantom_assassin'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'batrider',
    name: 'Batrider',
    attribute: 'Universal',
    roles: ['Initiator', 'Disabler', 'Nuker', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png',
    counters: ['monkey_king', 'treant_protector', 'nature_prophet'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'beastmaster',
    name: 'Beastmaster',
    attribute: 'Universal',
    roles: ['Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png',
    counters: ['tinker', 'invoker', 'storm_spirit'],
    counteredBy: ['phantom_lancer', 'anti_mage', 'juggernaut']
  },
  {
    id: 'brewmaster',
    name: 'Brewmaster',
    attribute: 'Universal',
    roles: ['Carry', 'Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png',
    counters: ['phantom_assassin', 'sniper', 'drow_ranger'],
    counteredBy: ['outworld_destroyer', 'invoker', 'silencer']
  },
  {
    id: 'dazzle',
    name: 'Dazzle',
    attribute: 'Universal',
    roles: ['Support', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png',
    counters: ['phantom_assassin', 'huskar', 'pudge'],
    counteredBy: ['ancient_apparition', 'axe', 'culling_blade']
  },
  {
    id: 'death_prophet',
    name: 'Death Prophet',
    attribute: 'Universal',
    roles: ['Carry', 'Pusher', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'diffusal_blade_carriers']
  },
  {
    id: 'enigma',
    name: 'Enigma',
    attribute: 'Universal',
    roles: ['Initiator', 'Jungler', 'Disabler', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['silencer', 'doom_bringer', 'disruptors']
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
    id: 'magnus',
    name: 'Magnus',
    attribute: 'Universal',
    roles: ['Initiator', 'Disabler', 'Nuker', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png',
    counters: ['phantom_lancer', 'crystal_maiden', 'invoker'],
    counteredBy: ['lifestealer', 'anti_mage', 'storm_spirit']
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
    id: 'nature_prophet',
    name: 'Nature\'s Prophet',
    attribute: 'Universal',
    roles: ['Carry', 'Jungler', 'Pusher', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'clockwerk', 'bounty_hunter']
  },
  {
    id: 'nyx_assassin',
    name: 'Nyx Assassin',
    attribute: 'Universal',
    roles: ['Disabler', 'Nuker', 'Initiator', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png',
    counters: ['invoker', 'storm_spirit', 'tinker'],
    counteredBy: ['slardar', 'dust_carriers', 'gem_carriers']
  },
  {
    id: 'pangolier',
    name: 'Pangolier',
    attribute: 'Universal',
    roles: ['Carry', 'Initiator', 'Disabler', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
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
    id: 'spectre',
    name: 'Spectre',
    attribute: 'Universal',
    roles: ['Carry', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'diffusal_blade_carriers']
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
    id: 'venomancer',
    name: 'Venomancer',
    attribute: 'Universal',
    roles: ['Support', 'Nuker', 'Initiator', 'Pusher', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png',
    counters: ['templar_assassin', 'huskar', 'phantom_assassin'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
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
  }
];
