import React, { useState, useMemo } from 'react';
import { HeroGrid } from '../components/HeroGrid';
import { TeamDisplay } from '../components/TeamDisplay';
import { CounterRecommendations } from '../components/CounterRecommendations';
import { FilterBar } from '../components/FilterBar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { heroesData } from '../data/heroes';
import { calculateCounterScore } from '../utils/counterLogic';
import { Hero } from '../types/hero';

const Index = () => {
  const [myTeam, setMyTeam] = useState<Hero[]>([]);
  const [enemyTeam, setEnemyTeam] = useState<Hero[]>([]);
  const [selectedTab, setSelectedTab] = useState<'my' | 'enemy'>('enemy');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAttribute, setSelectedAttribute] = useState<string>('All');
  const [selectedRole, setSelectedRole] = useState<string>('All');

  const filteredHeroes = useMemo(() => {
    return heroesData.filter(hero => {
      const matchesSearch = hero.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesAttribute = selectedAttribute === 'All' || hero.attribute === selectedAttribute;
      const matchesRole = selectedRole === 'All' || hero.roles.includes(selectedRole);
      
      return matchesSearch && matchesAttribute && matchesRole;
    });
  }, [searchQuery, selectedAttribute, selectedRole]);

  const counterRecommendations = useMemo(() => {
    if (enemyTeam.length === 0) return [];

    const recommendations = heroesData
      .filter(hero => !myTeam.some(teamHero => teamHero.id === hero.id))
      .filter(hero => !enemyTeam.some(enemyHero => enemyHero.id === hero.id))
      .map(hero => ({
        ...hero,
        score: calculateCounterScore(hero, enemyTeam)
      }))
      .sort((a, b) => b.score - a.score);

    return recommendations;
  }, [enemyTeam, myTeam]);

  const handleHeroSelect = (hero: Hero) => {
    if (selectedTab === 'my') {
      if (myTeam.length < 5 && !myTeam.some(h => h.id === hero.id)) {
        setMyTeam([...myTeam, hero]);
      }
    } else {
      if (enemyTeam.length < 5 && !enemyTeam.some(h => h.id === hero.id)) {
        setEnemyTeam([...enemyTeam, hero]);
      }
    }
  };

  const handleHeroRemove = (heroId: string, team: 'my' | 'enemy') => {
    if (team === 'my') {
      setMyTeam(myTeam.filter(h => h.id !== heroId));
    } else {
      setEnemyTeam(enemyTeam.filter(h => h.id !== heroId));
    }
  };

  const handleReset = () => {
    setMyTeam([]);
    setEnemyTeam([]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header onReset={handleReset} />
      
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Left Column - Hero Selection */}
          <div className="xl:col-span-2 space-y-6">
            {/* Team Selection Tabs */}
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedTab('my')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedTab === 'my'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                My Team ({myTeam.length}/5)
              </button>
              <button
                onClick={() => setSelectedTab('enemy')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  selectedTab === 'enemy'
                    ? 'bg-red-600 text-white'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Enemy Team ({enemyTeam.length}/5)
              </button>
            </div>

            {/* Selected Teams Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TeamDisplay
                title="Your Team"
                heroes={myTeam}
                onHeroRemove={(heroId) => handleHeroRemove(heroId, 'my')}
                teamColor="blue"
              />
              <TeamDisplay
                title="Enemy Team"
                heroes={enemyTeam}
                onHeroRemove={(heroId) => handleHeroRemove(heroId, 'enemy')}
                teamColor="red"
              />
            </div>

            {/* Hero Selection Section */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-yellow-400">
                Select {selectedTab === 'my' ? 'Your' : 'Enemy'} Team
              </h2>
              
              <FilterBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedAttribute={selectedAttribute}
                onAttributeChange={setSelectedAttribute}
                selectedRole={selectedRole}
                onRoleChange={setSelectedRole}
              />

              <HeroGrid
                heroes={filteredHeroes}
                onHeroSelect={handleHeroSelect}
                selectedHeroes={[...myTeam, ...enemyTeam]}
              />
            </div>
          </div>

          {/* Right Column - Counter Recommendations */}
          <div className="xl:col-span-1">
            <CounterRecommendations
              recommendations={counterRecommendations}
              onHeroSelect={handleHeroSelect}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
