import { Album, Song } from '../types/types';

export const SONGS: Song[] = [
  {
    title: 'Love Story',
    album: Album.FEARLESS,
    tags: ['love', 'romance', 'fairytale'],
  },
  {
    title: 'You Belong With Me',
    album: Album.FEARLESS,
    tags: ['love', 'heartbreak', 'unrequited'],
  },
  {
    title: 'The Smallest Man Who Ever Lived',
    album: Album.THE_TORTURED_POETS_DEPARTMENT,
    tags: ['cheating', 'heartbreak'],
  },
  {
    title: 'Blank Space',
    album: Album.NINETEEN_EIGHTY_NINE,
    tags: ['love', 'satire', 'media'],
  },
  {
    title: 'Shake It Off',
    album: Album.NINETEEN_EIGHTY_NINE,
    tags: ['self-empowerment', 'positivity', 'dance'],
  },
  {
    title: 'All Too Well',
    album: Album.RED,
    tags: ['heartbreak', 'cheating'],
  },
  {
    title: 'Foolish One',
    album: Album.SPEAK_NOW,
    tags: ['unrequited', 'yearning', 'waiting', 'idealization', 'delusion', 'confession'],
  },
];
