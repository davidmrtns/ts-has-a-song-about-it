import { Injectable } from '@angular/core';
import { abbreviations, dictionary } from '../dictionaries/dictionaries';
import { SONGS } from '../data/songs';
import { MatchResult } from '../types/types';
import { SONG_SCENARIOS } from '../data/song-scenarios';

@Injectable({
  providedIn: 'root',
})
export class Matcher {
  private preprocess(input: string): { normalizedInput: string; normalizedTokens: string[] } {
    return {
      normalizedInput: input.toLowerCase(),
      normalizedTokens: input
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split(/\s+/)
        .map((token) => abbreviations[token] || token),
    };
  }

  match(input: string): MatchResult | null {
    const { normalizedInput, normalizedTokens } = this.preprocess(input);

    const detectedTags = new Set<string>();

    for (const scenario of SONG_SCENARIOS) {
      const matches = scenario.triggers.filter(
        (trigger) => normalizedInput.includes(trigger) || normalizedTokens.includes(trigger),
      );

      if (matches.length >= scenario.minMatches) {
        const song = this.findSong(scenario.songTitle);
        if (!song) return null;

        return {
          song: song,
          quote: scenario.quote,
          score: matches.length,
          isExactMatch: true,
        };
      }
    }

    for (const key in dictionary) {
      if (key.includes(' ')) {
        // phrase
        if (normalizedInput.includes(key)) {
          dictionary[key].forEach((tag) => detectedTags.add(tag));
        }
      } else {
        // word
        if (normalizedTokens.includes(key)) {
          dictionary[key].forEach((tag) => detectedTags.add(tag));
        }
      }
    }

    let bestMatch: MatchResult | null = null;

    for (const song of SONGS) {
      const score = song.tags.filter((tag) => detectedTags.has(tag)).length;

      if (!bestMatch || score > bestMatch.score) {
        bestMatch = { song, score };
      }
    }

    if (!bestMatch || bestMatch.score === 0) {
      return null;
    }

    return bestMatch;
  }

  findSong(title: string) {
    return SONGS.find((song) => song.title === title) || null;
  }
}
