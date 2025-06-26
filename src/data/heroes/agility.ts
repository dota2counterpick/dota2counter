
import { Hero } from '../../types/hero';

export const agilityHeroes: Hero[] = [
  {
    id: 'anti_mage',
    name: 'Anti-Mage',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png',
    counters: ['invoker', 'storm_spirit', 'tinker'],
    counteredBy: ['axe', 'legion_commander', 'bloodseeker']
  },
  {
    id: 'arc_warden',
    name: 'Arc Warden',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/arc_warden.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'spirit_breaker', 'clockwerk']
  },
  {
    id: 'bloodseeker',
    name: 'Bloodseeker',
    attribute: 'Agility',
    roles: ['Carry', 'Disabler', 'Initiator', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png',
    counters: ['anti_mage', 'storm_spirit', 'queen_of_pain'],
    counteredBy: ['teleport_scroll_carriers', 'omniknight', 'abaddon']
  },
  {
    id: 'bounty_hunter',
    name: 'Bounty Hunter',
    attribute: 'Agility',
    roles: ['Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['slardar', 'dust_carriers', 'gem_carriers']
  },
  {
    id: 'broodmother',
    name: 'Broodmother',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven']
  },
  {
    id: 'clinkz',
    name: 'Clinkz',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['slardar', 'dust_carriers', 'gem_carriers']
  },
  {
    id: 'dazzle',
    name: 'Dazzle',
    attribute: 'Agility',
    roles: ['Support', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dazzle.png',
    counters: ['phantom_assassin', 'huskar', 'pudge'],
    counteredBy: ['ancient_apparition', 'axe', 'culling_blade']
  },
  {
    id: 'drow_ranger',
    name: 'Drow Ranger',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['clockwerk', 'spirit_breaker', 'storm_spirit']
  },
  {
    id: 'ember_spirit',
    name: 'Ember Spirit',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Nuker', 'Disabler', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['silencer', 'doom_bringer', 'disruptors']
  },
  {
    id: 'faceless_void',
    name: 'Faceless Void',
    attribute: 'Agility',
    roles: ['Carry', 'Initiator', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'gyrocopter',
    name: 'Gyrocopter',
    attribute: 'Agility',
    roles: ['Carry', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['clockwerk', 'storm_spirit', 'queen_of_pain']
  },
  {
    id: 'hoodwink',
    name: 'Hoodwink',
    attribute: 'Agility',
    roles: ['Support', 'Nuker', 'Escape', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'spirit_breaker', 'clockwerk']
  },
  {
    id: 'juggernaut',
    name: 'Juggernaut',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['axe', 'legion_commander', 'blood_seeker']
  },
  {
    id: 'lone_druid',
    name: 'Lone Druid',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['sven', 'ember_spirit', 'earthshaker']
  },
  {
    id: 'luna',
    name: 'Luna',
    attribute: 'Agility',
    roles: ['Carry', 'Nuker', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['clockwerk', 'storm_spirit', 'queen_of_pain']
  },
  {
    id: 'medusa',
    name: 'Medusa',
    attribute: 'Agility',
    roles: ['Carry', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'diffusal_blade_carriers']
  },
  {
    id: 'meepo',
    name: 'Meepo',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Nuker', 'Disabler', 'Initiator', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven']
  },
  {
    id: 'mirana',
    name: 'Mirana',
    attribute: 'Agility',
    roles: ['Carry', 'Support', 'Escape', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['slardar', 'dust_carriers', 'gem_carriers']
  },
  {
    id: 'monkey_king',
    name: 'Monkey King',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Disabler', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['timbersaw', 'batrider', 'quelling_blade_carriers']
  },
  {
    id: 'morphling',
    name: 'Morphling',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Durable', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['ancient_apparition', 'lion', 'mana_burn_abilities']
  },
  {
    id: 'naga_siren',
    name: 'Naga Siren',
    attribute: 'Agility',
    roles: ['Carry', 'Support', 'Pusher', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven']
  },
  {
    id: 'nyx_assassin',
    name: 'Nyx Assassin',
    attribute: 'Agility',
    roles: ['Disabler', 'Nuker', 'Initiator', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nyx_assassin.png',
    counters: ['invoker', 'storm_spirit', 'tinker'],
    counteredBy: ['slardar', 'dust_carriers', 'gem_carriers']
  },
  {
    id: 'phantom_assassin',
    name: 'Phantom Assassin',
    attribute: 'Agility',
    roles: ['Carry', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['axe', 'legion_commander', 'monkey_king']
  },
  {
    id: 'phantom_lancer',
    name: 'Phantom Lancer',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven']
  },
  {
    id: 'razor',
    name: 'Razor',
    attribute: 'Agility',
    roles: ['Carry', 'Durable', 'Nuker', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png',
    counters: ['phantom_assassin', 'anti_mage', 'drow_ranger'],
    counteredBy: ['outworld_destroyer', 'invoker', 'silencer']
  },
  {
    id: 'riki',
    name: 'Riki',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['slardar', 'dust_carriers', 'gem_carriers']
  },
  {
    id: 'shadow_fiend',
    name: 'Shadow Fiend',
    attribute: 'Agility',
    roles: ['Carry', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['clockwerk', 'storm_spirit', 'queen_of_pain']
  },
  {
    id: 'slark',
    name: 'Slark',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['ancient_apparition', 'bloodseeker', 'disruptors']
  },
  {
    id: 'sniper',
    name: 'Sniper',
    attribute: 'Agility',
    roles: ['Carry', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['clockwerk', 'storm_spirit', 'spirit_breaker']
  },
  {
    id: 'spectre',
    name: 'Spectre',
    attribute: 'Agility',
    roles: ['Carry', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/spectre.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'diffusal_blade_carriers']
  },
  {
    id: 'templar_assassin',
    name: 'Templar Assassin',
    attribute: 'Agility',
    roles: ['Carry', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['jakiro', 'venomancer', 'damage_over_time']
  },
  {
    id: 'terrorblade',
    name: 'Terrorblade',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['ancient_apparition', 'lion', 'mana_burn_abilities']
  },
  {
    id: 'troll_warlord',
    name: 'Troll Warlord',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['ancient_apparition', 'bane', 'disruptors']
  },
  {
    id: 'ursa',
    name: 'Ursa',
    attribute: 'Agility',
    roles: ['Carry', 'Jungler', 'Durable', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['phantom_lancer', 'anti_mage', 'kiting_heroes']
  },
  {
    id: 'vengeful_spirit',
    name: 'Vengeful Spirit',
    attribute: 'Agility',
    roles: ['Support', 'Disabler', 'Initiator', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'venomancer',
    name: 'Venomancer',
    attribute: 'Agility',
    roles: ['Support', 'Nuker', 'Initiator', 'Pusher', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/venomancer.png',
    counters: ['templar_assassin', 'huskar', 'phantom_assassin'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'viper',
    name: 'Viper',
    attribute: 'Agility',
    roles: ['Carry', 'Durable', 'Initiator', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png',
    counters: ['huskar', 'phantom_assassin', 'anti_mage'],
    counteredBy: ['outworld_destroyer', 'invoker', 'silencer']
  },
  {
    id: 'weaver',
    name: 'Weaver',
    attribute: 'Agility',
    roles: ['Carry', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['slardar', 'dust_carriers', 'gem_carriers']
  },
  {
    id: 'pangolier',
    name: 'Pangolier',
    attribute: 'Agility',
    roles: ['Carry', 'Initiator', 'Disabler', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pangolier.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'kez',
    name: 'Kez',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kez.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['axe', 'legion_commander', 'blood_seeker']
  },
  {
    id: 'fymryn',
    name: 'Fymryn',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/fymryn.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['slardar', 'dust_carriers', 'gem_carriers']
  }
];
