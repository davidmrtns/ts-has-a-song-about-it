import { SongScenario } from '../types/types';
import { ALBUMS } from './albums';

export const SONG_SCENARIOS: SongScenario[] = [
  {
    songTitle: 'Foolish One',
    album: ALBUMS['Speak Now'],
    triggers: [
      // PT
      'mensagem',
      'esperando',
      'nao responde',
      'nao me quer',
      // EN
      'message',
      'looking for',
      'waiting',
      'no reply',
      'doesnt reply',
      'doesnt love me',
    ],
    minMatches: 2,
    quote: "stop checking your mailbox for confessions of love that ain't never gonna come",
  },
  {
    songTitle: 'Foolish One',
    album: ALBUMS['Speak Now'],
    triggers: [
      // PT
      'vai mudar',
      'um dia ele',
      'esperar ele mudar',
      // EN
      'he will change',
      'waiting for him to change',
      'one day he will',
    ],
    minMatches: 1,
    quote: 'you are not the exception',
  },
  {
    songTitle: 'the 1',
    album: ALBUMS['Folklore'],
    triggers: [
      // PT
      'como seria',
      'tivesse dado certo',
      'se funcionasse',
      'se fosse ele',
      'se tivesse',
      'dado certo',
      // EN
      'what if',
      'it had been',
      'it was him',
      'it worked out',
      'it had worked out',
      'he was the one',
      'she was the one',
      'it was the one',
    ],
    minMatches: 3,
    quote: "but it would've been fun if you would've been the one",
  },
  {
    songTitle: 'seven',
    album: ALBUMS['Folklore'],
    triggers: [
      // PT
      'lua',
      'saturno',
      // EN
      'moon',
      'saturn',
    ],
    minMatches: 2,
    quote: 'love you to the moon and to Saturn',
  },
];
