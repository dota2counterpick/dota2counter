
import { Hero } from '../types/hero';

export const heroesData: Hero[] = [
  // Strength Heroes
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
    id: 'clockwerk',
    name: 'Clockwerk',
    attribute: 'Strength',
    roles: ['Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rattletrap.png',
    counters: ['tinker', 'sniper', 'invoker'],
    counteredBy: ['phantom_lancer', 'lifestealer', 'ursa']
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
    id: 'earth_spirit',
    name: 'Earth Spirit',
    attribute: 'Strength',
    roles: ['Nuker', 'Initiator', 'Disabler', 'Escape', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/earth_spirit.png',
    counters: ['crystal_maiden', 'invoker', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'silencer']
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
    id: 'elder_titan',
    name: 'Elder Titan',
    attribute: 'Strength',
    roles: ['Initiator', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/elder_titan.png',
    counters: ['phantom_assassin', 'anti_mage', 'morphling'],
    counteredBy: ['lifestealer', 'ursa', 'silencer']
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
    id: 'io',
    name: 'Io',
    attribute: 'Strength',
    roles: ['Support', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/wisp.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'spirit_breaker', 'clockwerk']
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
    id: 'lycan',
    name: 'Lycan',
    attribute: 'Strength',
    roles: ['Carry', 'Pusher', 'Jungler', 'Durable', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lycan.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven']
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
    id: 'primal_beast',
    name: 'Primal Beast',
    attribute: 'Strength',
    roles: ['Durable', 'Initiator', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/primal_beast.png',
    counters: ['crystal_maiden', 'invoker', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'pudge',
    name: 'Pudge',
    attribute: 'Strength',
    roles: ['Durable', 'Disabler', 'Initiator', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png',
    counters: ['crystal_maiden', 'invoker', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'sand_king',
    name: 'Sand King',
    attribute: 'Strength',
    roles: ['Initiator', 'Disabler', 'Nuker', 'Support', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sand_king.png',
    counters: ['phantom_lancer', 'crystal_maiden', 'invoker'],
    counteredBy: ['lifestealer', 'anti_mage', 'storm_spirit']
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
    id: 'treant',
    name: 'Treant Protector',
    attribute: 'Strength',
    roles: ['Support', 'Initiator', 'Durable', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/treant.png',
    counters: ['phantom_assassin', 'riki', 'bounty_hunter'],
    counteredBy: ['battlEfury_carriers', 'ember_spirit', 'timbersaw']
  },
  {
    id: 'tusk',
    name: 'Tusk',
    attribute: 'Strength',
    roles: ['Initiator', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tusk.png',
    counters: ['crystal_maiden', 'invoker', 'sniper'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
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
    id: 'undying',
    name: 'Undying',
    attribute: 'Strength',
    roles: ['Support', 'Durable', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/undying.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
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

  // Agility Heroes
  {
    id: 'anti_mage',
    name: 'Anti-Mage',
    attribute: 'Agility',
    roles: ['Carry', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png',
    counters: ['invoker', 'storm_spirit', 'tinker'],
    counteredBy: ['axe', 'legion_commander', 'blood_seeker']
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

  // Intelligence Heroes
  {
    id: 'ancient_apparition',
    name: 'Ancient Apparition',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/ancient_apparition.png',
    counters: ['huskar', 'alchemist', 'morphling'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'bane',
    name: 'Bane',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bane.png',
    counters: ['troll_warlord', 'ursa', 'phantom_assassin'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'batrider',
    name: 'Batrider',
    attribute: 'Intelligence',
    roles: ['Initiator', 'Disabler', 'Nuker', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/batrider.png',
    counters: ['monkey_king', 'treant_protector', 'nature_prophet'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'chen',
    name: 'Chen',
    attribute: 'Intelligence',
    roles: ['Support', 'Jungler', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chen.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker'],
    counteredBy: ['earthshaker', 'ember_spirit', 'sven']
  },
  {
    id: 'crystal_maiden',
    name: 'Crystal Maiden',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'clockwerk']
  },
  {
    id: 'dark_seer',
    name: 'Dark Seer',
    attribute: 'Intelligence',
    roles: ['Initiator', 'Escape', 'Disabler', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_seer.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'dark_willow',
    name: 'Dark Willow',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/dark_willow.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'death_prophet',
    name: 'Death Prophet',
    attribute: 'Intelligence',
    roles: ['Carry', 'Pusher', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/death_prophet.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['anti_mage', 'phantom_lancer', 'diffusal_blade_carriers']
  },
  {
    id: 'disruptor',
    name: 'Disruptor',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker', 'Initiator'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/disruptor.png',
    counters: ['storm_spirit', 'anti_mage', 'queen_of_pain'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'enchantress',
    name: 'Enchantress',
    attribute: 'Intelligence',
    roles: ['Support', 'Jungler', 'Pusher', 'Durable'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enchantress.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker'],
    counteredBy: ['magic_damage_dealers', 'burst_heroes', 'nukers']
  },
  {
    id: 'enigma',
    name: 'Enigma',
    attribute: 'Intelligence',
    roles: ['Initiator', 'Jungler', 'Disabler', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/enigma.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['silencer', 'doom_bringer', 'disruptors']
  },
  {
    id: 'grimstroke',
    name: 'Grimstroke',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/grimstroke.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'invoker',
    name: 'Invoker',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker', 'Disabler', 'Escape', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png',
    counters: ['crystal_maiden', 'phantom_lancer', 'meepo'],
    counteredBy: ['anti_mage', 'storm_spirit', 'queen_of_pain']
  },
  {
    id: 'jakiro',
    name: 'Jakiro',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Pusher', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/jakiro.png',
    counters: ['templar_assassin', 'phantom_assassin', 'huskar'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'keeper_of_the_light',
    name: 'Keeper of the Light',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler', 'Jungler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/keeper_of_the_light.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'leshrac',
    name: 'Leshrac',
    attribute: 'Intelligence',
    roles: ['Carry', 'Support', 'Nuker', 'Pusher', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/leshrac.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['anti_mage', 'storm_spirit', 'queen_of_pain']
  },
  {
    id: 'lich',
    name: 'Lich',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'lina',
    name: 'Lina',
    attribute: 'Intelligence',
    roles: ['Support', 'Carry', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png',
    counters: ['huskar', 'phantom_assassin', 'anti_mage'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'lion',
    name: 'Lion',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png',
    counters: ['morphling', 'anti_mage', 'storm_spirit'],
    counteredBy: ['lifestealer', 'ursa', 'phantom_lancer']
  },
  {
    id: 'muerta',
    name: 'Muerta',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/muerta.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'nature_prophet',
    name: 'Nature\'s Prophet',
    attribute: 'Intelligence',
    roles: ['Carry', 'Jungler', 'Pusher', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/furion.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'clockwerk', 'bounty_hunter']
  },
  {
    id: 'necrophos',
    name: 'Necrophos',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker', 'Durable', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/necrolyte.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker'],
    counteredBy: ['ancient_apparition', 'pugna', 'outworld_destroyer']
  },
  {
    id: 'oracle',
    name: 'Oracle',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/oracle.png',
    counters: ['omniknight', 'abaddon', 'dazzle'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'outworld_destroyer',
    name: 'Outworld Destroyer',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/obsidian_destroyer.png',
    counters: ['abaddon', 'brewmaster', 'necrophos'],
    counteredBy: ['anti_mage', 'storm_spirit', 'queen_of_pain']
  },
  {
    id: 'puck',
    name: 'Puck',
    attribute: 'Intelligence',
    roles: ['Initiator', 'Disabler', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/puck.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'pugna',
    name: 'Pugna',
    attribute: 'Intelligence',
    roles: ['Nuker', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pugna.png',
    counters: ['necrophos', 'death_prophet', 'invoker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'queen_of_pain',
    name: 'Queen of Pain',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/queenofpain.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'anti_mage', 'pugna']
  },
  {
    id: 'rubick',
    name: 'Rubick',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/rubick.png',
    counters: ['invoker', 'enigma', 'tidehunter'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'shadow_demon',
    name: 'Shadow Demon',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Initiator', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_demon.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'shadow_shaman',
    name: 'Shadow Shaman',
    attribute: 'Intelligence',
    roles: ['Support', 'Pusher', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/shadow_shaman.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'silencer',
    name: 'Silencer',
    attribute: 'Intelligence',
    roles: ['Carry', 'Support', 'Disabler', 'Initiator', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/silencer.png',
    counters: ['invoker', 'storm_spirit', 'enigma'],
    counteredBy: ['anti_mage', 'storm_spirit', 'queen_of_pain']
  },
  {
    id: 'skywrath_mage',
    name: 'Skywrath Mage',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/skywrath_mage.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'snapfire',
    name: 'Snapfire',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Disabler', 'Escape'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/snapfire.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'storm_spirit',
    name: 'Storm Spirit',
    attribute: 'Intelligence',
    roles: ['Carry', 'Escape', 'Nuker', 'Initiator', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/storm_spirit.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['anti_mage', 'bloodseeker', 'orchid_carriers']
  },
  {
    id: 'techies',
    name: 'Techies',
    attribute: 'Intelligence',
    roles: ['Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/techies.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['nature_prophet', 'illusion_heroes', 'gem_carriers']
  },
  {
    id: 'tinker',
    name: 'Tinker',
    attribute: 'Intelligence',
    roles: ['Carry', 'Nuker', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tinker.png',
    counters: ['crystal_maiden', 'phantom_lancer', 'meepo'],
    counteredBy: ['storm_spirit', 'clockwerk', 'nyx_assassin']
  },
  {
    id: 'visage',
    name: 'Visage',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker', 'Durable', 'Disabler', 'Pusher'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/visage.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'void_spirit',
    name: 'Void Spirit',
    attribute: 'Intelligence',
    roles: ['Carry', 'Escape', 'Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/void_spirit.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'warlock',
    name: 'Warlock',
    attribute: 'Intelligence',
    roles: ['Support', 'Initiator', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/warlock.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'windranger',
    name: 'Windranger',
    attribute: 'Intelligence',
    roles: ['Carry', 'Support', 'Disabler', 'Escape', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/windrunner.png',
    counters: ['crystal_maiden', 'invoker', 'tinker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'winter_wyvern',
    name: 'Winter Wyvern',
    attribute: 'Intelligence',
    roles: ['Support', 'Disabler', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/winter_wyvern.png',
    counters: ['phantom_assassin', 'anti_mage', 'invoker'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'witch_doctor',
    name: 'Witch Doctor',
    attribute: 'Intelligence',
    roles: ['Support', 'Nuker'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/witch_doctor.png',
    counters: ['phantom_lancer', 'meepo', 'chaos_knight'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  },
  {
    id: 'zeus',
    name: 'Zeus',
    attribute: 'Intelligence',
    roles: ['Nuker', 'Disabler'],
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png',
    counters: ['huskar', 'phantom_assassin', 'anti_mage'],
    counteredBy: ['storm_spirit', 'queen_of_pain', 'mobile_heroes']
  }
];
