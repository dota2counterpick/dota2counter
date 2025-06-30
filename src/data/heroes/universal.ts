
import { Hero } from '../../types/hero';

export const universalHeroes: Hero[] = [
  {
    id: 'abaddon',
    name: 'Abaddon',
    attribute: 'Universal',
    roles: ['Support', 'Carry', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png',
    counters: ['phantom_assassin', 'huskar', 'zeus', 'necrophos', 'pudge'],
    counteredBy: ['ancient_apparition', 'outworld_destroyer', 'invoker', 'silencer', 'doom']
  },
  {
    id: 'arc_warden',
    name: 'Arc Warden',
    attribute: 'Universal',
    roles: ['Carry', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'shadow_fiend', 'sniper'],
    counteredBy: ['storm_spirit', 'spirit_breaker', 'clockwerk', 'phantom_assassin', 'anti_mage']
  },
  {
    id: 'bane',
    name: 'Bane',
    attribute: 'Universal',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png',
    counters: ['troll_warlord', 'ursa', 'phantom_assassin', 'juggernaut', 'sven'],
    counteredBy: ['lifestealer', 'phantom_lancer', 'manta_style_carriers', 'lotus_orb_carriers', 'rubick']
  },
  {
    id: 'batrider',
    name: 'Batrider',
    attribute: 'Universal',
    roles: ['Initiator', 'Disabler', 'Nuker', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png',
    counters: ['monkey_king', 'treant_protector', 'nature_prophet', 'broodmother', 'lone_druid'],
    counteredBy: ['lifestealer', 'pudge', 'clockwerk', 'oracle', 'abaddon']
  },
  {
    id: 'beastmaster',
    name: 'Beastmaster',
    attribute: 'Universal',
    roles: ['Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png',
    counters: ['tinker', 'invoker', 'storm_spirit', 'shadow_fiend', 'templar_assassin'],
    counteredBy: ['phantom_lancer', 'anti_mage', 'juggernaut', 'ember_spirit', 'gyrocopter']
  },
  {
    id: 'brewmaster',
    name: 'Brewmaster',
    attribute: 'Universal',
    roles: ['Carry', 'Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png',
    counters: ['phantom_assassin', 'sniper', 'drow_ranger', 'luna', 'shadow_fiend'],
    counteredBy: ['outworld_destroyer', 'invoker', 'silencer', 'keeper_of_the_light', 'queen_of_pain']
  },
  {
    id: 'dazzle',
    name: 'Dazzle',
    attribute: 'Universal',
    roles: ['Support', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png',
    counters: ['phantom_assassin', 'huskar', 'pudge', 'axe', 'legion_commander'],
    counteredBy: ['ancient_apparition', 'outworld_destroyer', 'invoker', 'zeus', 'tinker']
  },
  {
    id: 'death_prophet',
    name: 'Death Prophet',
    attribute: 'Universal',
    roles: ['Carry', 'Pusher', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'lina'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'storm_spirit', 'queen_of_pain', 'silencer']
  },
  {
    id: 'enigma',
    name: 'Enigma',
    attribute: 'Universal',
    roles: ['Initiator', 'Jungler', 'Disabler', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight', 'naga_siren', 'broodmother'],
    counteredBy: ['silencer', 'doom', 'disruptor', 'rubick', 'faceless_void']
  },
  {
    id: 'io',
    name: 'Io',
    attribute: 'Universal',
    roles: ['Support', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'lina'],
    counteredBy: ['storm_spirit', 'spirit_breaker', 'clockwerk', 'bounty_hunter', 'riki']
  },
  {
    id: 'magnus',
    name: 'Magnus',
    attribute: 'Universal',
    roles: ['Initiator', 'Disabler', 'Nuker', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/magnataur.png',
    counters: ['phantom_lancer', 'crystal_maiden', 'invoker', 'meepo', 'broodmother'],
    counteredBy: ['lifestealer', 'anti_mage', 'storm_spirit', 'queen_of_pain', 'puck']
  },
  {
    id: 'marci',
    name: 'Marci',
    attribute: 'Universal',
    roles: ['Support', 'Disabler', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/marci.png',
    counters: ['crystal_maiden', 'invoker', 'sniper', 'shadow_fiend', 'drow_ranger'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer', 'chaos_knight', 'sven']
  },
  {
    id: 'nature_prophet',
    name: 'Nature\'s Prophet',
    attribute: 'Universal',
    roles: ['Carry', 'Jungler', 'Pusher', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'techies', 'pudge'],
    counteredBy: ['storm_spirit', 'clockwerk', 'bounty_hunter', 'spirit_breaker', 'spectre']
  },
  {
    id: 'nyx_assassin',
    name: 'Nyx Assassin',
    attribute: 'Universal',
    roles: ['Disabler', 'Nuker', 'Initiator', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png',
    counters: ['invoker', 'storm_spirit', 'tinker', 'outworld_destroyer', 'zeus'],
    counteredBy: ['slardar', 'bounty_hunter', 'bloodseeker', 'spirit_breaker', 'clockwerk']
  },
  {
    id: 'pangolier',
    name: 'Pangolier',
    attribute: 'Universal',
    roles: ['Carry', 'Initiator', 'Disabler', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_lancer', 'meepo'],
    counteredBy: ['lifestealer', 'ursa', 'troll_warlord', 'chaos_knight', 'sven']
  },
  {
    id: 'sand_king',
    name: 'Sand King',
    attribute: 'Universal',
    roles: ['Initiator', 'Disabler', 'Nuker', 'Support', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png',
    counters: ['phantom_lancer', 'crystal_maiden', 'invoker', 'meepo', 'broodmother'],
    counteredBy: ['lifestealer', 'anti_mage', 'storm_spirit', 'queen_of_pain', 'clockwerk']
  },
  {
    id: 'snapfire',
    name: 'Snapfire',
    attribute: 'Universal',
    roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_lancer', 'meepo'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'anti_mage', 'clockwerk', 'spirit_breaker']
  },
  {
    id: 'spectre',
    name: 'Spectre',
    attribute: 'Universal',
    roles: ['Carry', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'nature_prophet'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'juggernaut', 'troll_warlord', 'ursa']
  },
  {
    id: 'techies',
    name: 'Techies',
    attribute: 'Universal',
    roles: ['Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_lancer', 'meepo'],
    counteredBy: ['nature_prophet', 'phantom_lancer', 'naga_siren', 'bounty_hunter', 'zeus']
  },
  {
    id: 'venomancer',
    name: 'Venomancer',
    attribute: 'Universal',
    roles: ['Support', 'Nuker', 'Initiator', 'Pusher', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png',
    counters: ['templar_assassin', 'huskar', 'phantom_assassin', 'axe', 'pudge'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer', 'juggernaut', 'abaddon']
  },
  {
    id: 'visage',
    name: 'Visage',
    attribute: 'Universal',
    roles: ['Support', 'Nuker', 'Durable', 'Disabler', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker', 'tinker', 'zeus'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'clockwerk', 'gyrocopter', 'luna']
  },
  {
    id: 'void_spirit',
    name: 'Void Spirit',
    attribute: 'Universal',
    roles: ['Carry', 'Escape', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'shadow_fiend', 'sniper'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'anti_mage', 'phantom_assassin', 'bloodseeker']
  },
  {
    id: 'windranger',
    name: 'Windranger',
    attribute: 'Universal',
    roles: ['Carry', 'Support', 'Disabler', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'lina'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'clockwerk', 'spirit_breaker', 'phantom_assassin']
  }
];
