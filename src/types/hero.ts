
export interface Hero {
  id: string;
  name: string;
  attribute: 'Strength' | 'Agility' | 'Intelligence' | 'Universal';
  roles: string[];
  image: string;
  counters: string[]; // Hero IDs that this hero counters
  counteredBy: string[]; // Hero IDs that counter this hero
}

export interface CounterRecommendation extends Hero {
  score: number;
}
