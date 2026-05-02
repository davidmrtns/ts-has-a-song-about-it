import { Album, SongScenario } from '../types/types';

export const SONG_SCENARIOS: SongScenario[] = [
  {
    songTitle: 'Foolish One',
    album: Album.SPEAK_NOW,
    triggers: [
      // PT
      'mensagem', 'esperando', 'nao responde', 'nao me quer',
      // EN
      'message', 'waiting', 'no reply', 'doesnt reply', 'doesnt love me'
    ],
    minMatches: 2,
    quote: "stop checking your mailbox for confessions of love that ain't never gonna come",
  },
  {
    songTitle: 'Foolish One',
    album: Album.SPEAK_NOW,
    triggers: [
      // PT
      'vai mudar', 'um dia ele', 'esperar ele mudar',
      // EN
      'he will change', 'waiting for him to change', 'one day he will'
    ],
    minMatches: 1,
    quote: 'you are not the exception',
  },
];
