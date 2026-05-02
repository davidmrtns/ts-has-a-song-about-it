import { Album, SongScenario } from '../types/types';

export const SONG_SCENARIOS: SongScenario[] = [
  {
    songTitle: 'Foolish One',
    album: Album.SPEAK_NOW,
    triggers: ['mensagem', 'esperando', 'nao responde', 'nao me quer'],
    minMatches: 2,
    quote: "stop checking your mailbox for confessions of love that ain't never gonna come",
  },
  {
    songTitle: 'Foolish One',
    album: Album.SPEAK_NOW,
    triggers: ['vai mudar', 'um dia ele', 'esperar ele mudar'],
    minMatches: 1,
    quote: 'you are not the exception',
  },
];
