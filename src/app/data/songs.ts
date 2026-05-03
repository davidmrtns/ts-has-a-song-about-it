import { AlbumTitle, Song } from '../types/types';
import { ALBUMS } from './albums';

export const SONGS: Song[] = [
  {
    title: 'Love Story',
    album: ALBUMS['Fearless'],
    tags: ['love', 'romance', 'fairytale'],
  },
  {
    title: 'You Belong With Me',
    album: ALBUMS['Fearless'],
    tags: ['love', 'heartbreak', 'unrequited'],
  },
  {
    title: 'The Smallest Man Who Ever Lived',
    album: ALBUMS['The Tortured Poets Department'],
    tags: ['cheating', 'heartbreak'],
  },
  {
    title: 'Blank Space',
    album: ALBUMS['1989'],
    tags: ['love', 'satire', 'media'],
  },
  {
    title: 'Shake It Off',
    album: ALBUMS['1989'],
    tags: ['self-empowerment', 'positivity', 'dance'],
  },
  {
    title: 'All Too Well',
    album: ALBUMS['Red'],
    tags: ['heartbreak', 'cheating'],
  },
  {
    title: 'Foolish One',
    album: ALBUMS['Speak Now'],
    tags: ['unrequited', 'yearning', 'waiting', 'idealization', 'delusion', 'confession'],
  },
  {
    title: 'the 1',
    album: ALBUMS['Folklore'],
    tags: ['regret', 'nostalgia', 'what ifs'],
  },
  {
    title: 'seven',
    album: ALBUMS['Folklore'],
    tags: ['love', 'youth', 'nostalgia', 'longing'],
  },
];
