import { Tag } from './tags';

/**
 * Interpretation dictionary mapping words/phrases to thematic tags.
 */
export const dictionary: Record<string, Tag[]> = {
  love: ['love', 'romance'],
  yearning: ['yearning', 'waiting'],
  waiting: ['waiting', 'yearning'],
  heartbreak: ['heartbreak'],
  confession: ['confession'],
  fairytale: ['fairytale'],
  dance: ['dance'],
  empowerment: ['self-empowerment', 'positivity'],
  media: ['media', 'satire'],
  satire: ['satire', 'media'],
  unrequited: ['unrequited', 'heartbreak'],
  cheating: ['cheating', 'heartbreak'],
};
