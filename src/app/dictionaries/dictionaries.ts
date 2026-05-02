import { Tag } from './tags';

export const dictionary: Record<string, Tag[]> = {
  amor: ['love', 'romance'],
  ansia: ['yearning', 'waiting'],
  'coração partido': ['heartbreak'],
  confissao: ['confession'],
  'conto de fadas': ['fairytale'],
  dança: ['dance'],
  empodera: ['self-empowerment', 'positivity'],
  espera: ['waiting', 'yearning'],
  ghosted: ['unrequited', 'heartbreak', 'cheating'],
  'me trocou': ['unrequited', 'heartbreak', 'cheating'],
  midia: ['media', 'satire'],
  'nao correspondido': ['unrequited', 'heartbreak'],
  satira: ['satire', 'media'],
  traiu: ['cheating', 'heartbreak'],
};

export const abbreviations: Record<string, string> = {
  amg: 'amigo',
  cmg: 'comigo',
  cvs: 'conversa',
  ft: 'foto',
  msc: 'musica',
  msg: 'mensagem',
  n: 'nao',
  namo: 'namorado',
  pq: 'porque',
  q: 'que',
  tb: 'tambem',
  vc: 'voce',
};
