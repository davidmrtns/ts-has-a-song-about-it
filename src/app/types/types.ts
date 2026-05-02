import { Tag } from '../dictionaries/tags';

export enum Album {
  DEBUT = 'Taylor Swift',
  FEARLESS = 'Fearless',
  SPEAK_NOW = 'Speak Now',
  RED = 'Red',
  NINETEEN_EIGHTY_NINE = '1989',
  REPUTATION = 'Reputation',
  LOVER = 'Lover',
  FOLKLORE = 'Folklore',
  EVERMORE = 'Evermore',
  MIDNIGHTS = 'Midnights',
  THE_TORTURED_POETS_DEPARTMENT = 'The Tortured Poets Department',
  THE_LIFE_OF_A_SHOWGIRL = 'The Life of a Showgirl',
}

export interface Song {
  title: string;
  album: Album;
  tags: Tag[];
}

export interface SongScenario {
  songTitle: string;
  album: Album;
  triggers: string[];
  minMatches: number;
  quote: string;
}

export interface MatchResult {
  song: Song;
  score: number;
  quote?: string;
  isExactMatch?: boolean;
}
