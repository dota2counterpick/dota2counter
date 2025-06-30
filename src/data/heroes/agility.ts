
import { Hero } from '../../types/hero';

export const agilityHeroes: Hero[] = [
  {
    id: 'anti_mage',
    name: 'Anti-Mage',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png',
    counters: ['invoker', 'storm_spirit', 'tinker', 'outworld_destroyer', 'medusa'],
    counteredBy: ['axe', 'legion_commander', 'bloodseeker', 'doom', 'disruptor']
  },
  {
    id: 'bloodseeker',
    name: 'Bloodseeker',
    attribute: 'Agility',
    roles: ['Carry', 'Disabler', 'Initiator', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bloodseeker.png',
    counters: ['anti_mage', 'storm_spirit', 'queen_of_pain', 'slark', 'weaver'],
    counteredBy: ['omniknight', 'abaddon', 'lifestealer', 'juggernaut', 'phantom_lancer']
  },
  {
    id: 'bounty_hunter',
    name: 'Bounty Hunter',
    attribute: 'Agility',
    roles: ['Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bounty_hunter.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'nature_prophet', 'techies'],
    counteredBy: ['slardar', 'spirit_breaker', 'clockwerk', 'zeus', 'spectre']
  },
  {
    id: 'broodmother',
    name: 'Broodmother',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/broodmother.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven', 'axe', 'legion_commander']
  },
  {
    id: 'clinkz',
    name: 'Clinkz',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/clinkz.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['slardar', 'spirit_breaker', 'clockwerk', 'zeus', 'bounty_hunter']
  },
  {
    id: 'drow_ranger',
    name: 'Drow Ranger',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/drow_ranger.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_lancer', 'meepo'],
    counteredBy: ['clockwerk', 'spirit_breaker', 'storm_spirit', 'queen_of_pain', 'pudge']
  },
  {
    id: 'ember_spirit',
    name: 'Ember Spirit',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Nuker', 'Disabler', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ember_spirit.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight', 'broodmother', 'naga_siren'],
    counteredBy: ['silencer', 'doom', 'disruptor', 'outworld_destroyer', 'invoker']
  },
  {
    id: 'faceless_void',
    name: 'Faceless Void',
    attribute: 'Agility',
    roles: ['Carry', 'Initiator', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_lancer', 'enigma'],
    counteredBy: ['lifestealer', 'ursa', 'troll_warlord', 'bloodseeker', 'ancient_apparition']
  },
  {
    id: 'gyrocopter',
    name: 'Gyrocopter',
    attribute: 'Agility',
    roles: ['Carry', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/gyrocopter.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight', 'broodmother', 'visage'],
    counteredBy: ['clockwerk', 'storm_spirit', 'queen_of_pain', 'pudge', 'doom']
  },
  {
    id: 'hoodwink',
    name: 'Hoodwink',
    attribute: 'Agility',
    roles: ['Support', 'Nuker', 'Escape', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/hoodwink.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['storm_spirit', 'spirit_breaker', 'clockwerk', 'pudge', 'doom']
  },
  {
    id: 'juggernaut',
    name: 'Juggernaut',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_lancer', 'beastmaster'],
    counteredBy: ['axe', 'legion_commander', 'bloodseeker', 'disruptor', 'doom']
  },
  {
    id: 'kez',
    name: 'Kez',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/kez.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['axe', 'legion_commander', 'bloodseeker', 'disruptor', 'doom']
  },
  {
    id: 'lone_druid',
    name: 'Lone Druid',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lone_druid.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['sven', 'ember_spirit', 'earthshaker', 'winter_wyvern', 'batrider']
  },
  {
    id: 'luna',
    name: 'Luna',
    attribute: 'Agility',
    roles: ['Carry', 'Nuker', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/luna.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight', 'broodmother', 'visage'],
    counteredBy: ['clockwerk', 'storm_spirit', 'queen_of_pain', 'pudge', 'doom']
  },
  {
    id: 'medusa',
    name: 'Medusa',
    attribute: 'Agility',
    roles: ['Carry', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/medusa.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight', 'broodmother', 'naga_siren'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'nyx_assassin', 'lion', 'invoker']
  },
  {
    id: 'meepo',
    name: 'Meepo',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Nuker', 'Disabler', 'Initiator', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/meepo.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven', 'lich', 'winter_wyvern']
  },
  {
    id: 'mirana',
    name: 'Mirana',
    attribute: 'Agility',
    roles: ['Carry', 'Support', 'Escape', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/mirana.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['slardar', 'spirit_breaker', 'clockwerk', 'zeus', 'bounty_hunter']
  },
  {
    id: 'monkey_king',
    name: 'Monkey King',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Disabler', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/monkey_king.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'phantom_lancer'],
    counteredBy: ['timbersaw', 'batrider', 'tango_carriers', 'winter_wyvern', 'doom']
  },
  {
    id: 'morphling',
    name: 'Morphling',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Durable', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/morphling.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['ancient_apparition', 'lion', 'anti_mage', 'outworld_destroyer', 'invoker']
  },
  {
    id: 'naga_siren',
    name: 'Naga Siren',
    attribute: 'Agility',
    roles: ['Carry', 'Support', 'Pusher', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/naga_siren.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven', 'gyrocopter', 'kunkka']
  },
  {
    id: 'phantom_assassin',
    name: 'Phantom Assassin',
    attribute: 'Agility',
    roles: ['Carry', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'lina'],
    counteredBy: ['axe', 'legion_commander', 'monkey_king', 'tinker', 'bloodseeker']
  },
  {
    id: 'phantom_lancer',
    name: 'Phantom Lancer',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_lancer.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'lina'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven', 'gyrocopter', 'kunkka']
  },
  {
    id: 'razor',
    name: 'Razor',
    attribute: 'Agility',
    roles: ['Carry', 'Durable', 'Nuker', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/razor.png',
    counters: ['phantom_assassin', 'anti_mage', 'drow_ranger', 'sniper', 'troll_warlord'],
    counteredBy: ['outworld_destroyer', 'invoker', 'silencer', 'doom', 'disruptor']
  },
  {
    id: 'riki',
    name: 'Riki',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['slardar', 'spirit_breaker', 'clockwerk', 'zeus', 'bounty_hunter']
  },
  {
    id: 'shadow_fiend',
    name: 'Shadow Fiend',
    attribute: 'Agility',
    roles: ['Carry', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/nevermore.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'lina'],
    counteredBy: ['clockwerk', 'storm_spirit', 'queen_of_pain', 'pudge', 'doom']
  },
  {
    id: 'slark',
    name: 'Slark',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/slark.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['ancient_apparition', 'bloodseeker', 'disruptor', 'doom', 'axe']
  },
  {
    id: 'sniper',
    name: 'Sniper',
    attribute: 'Agility',
    roles: ['Carry', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'lina'],
    counteredBy: ['clockwerk', 'storm_spirit', 'spirit_breaker', 'pudge', 'doom']
  },
  {
    id: 'templar_assassin',
    name: 'Templar Assassin',
    attribute: 'Agility',
    roles: ['Carry', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/templar_assassin.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'zeus', 'lina'],
    counteredBy: ['jakiro', 'venomancer', 'viper', 'leshrac', 'necrophos']
  },
  {
    id: 'terrorblade',
    name: 'Terrorblade',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/terrorblade.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_lancer', 'meepo'],
    counteredBy: ['ancient_apparition', 'lion', 'anti_mage', 'outworld_destroyer', 'axe']
  },
  {
    id: 'troll_warlord',
    name: 'Troll Warlord',
    attribute: 'Agility',
    roles: ['Carry', 'Pusher', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/troll_warlord.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['ancient_apparition', 'bane', 'disruptor', 'winter_wyvern', 'doom']
  },
  {
    id: 'ursa',
    name: 'Ursa',
    attribute: 'Agility',
    roles: ['Carry', 'Jungler', 'Durable', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ursa.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['phantom_lancer', 'anti_mage', 'razor', 'viper', 'kunkka']
  },
  {
    id: 'vengeful_spirit',
    name: 'Vengeful Spirit',
    attribute: 'Agility',
    roles: ['Support', 'Disabler', 'Initiator', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/vengefulspirit.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer', 'doom', 'silencer']
  },
  {
    id: 'viper',
    name: 'Viper',
    attribute: 'Agility',
    roles: ['Carry', 'Durable', 'Initiator', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/viper.png',
    counters: ['huskar', 'phantom_assassin', 'anti_mage', 'templar_assassin', 'ursa'],
    counteredBy: ['outworld_destroyer', 'invoker', 'silencer', 'doom', 'disruptor']
  },
  {
    id: 'weaver',
    name: 'Weaver',
    attribute: 'Agility',
    roles: ['Carry', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/weaver.png',
    counters: ['crystal_maiden', 'invoker', 'tinker', 'phantom_assassin', 'sniper'],
    counteredBy: ['slardar', 'spirit_breaker', 'clockwerk', 'zeus', 'ancient_apparition']
  }
];
