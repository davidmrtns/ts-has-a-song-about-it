import { Injectable } from '@angular/core';
import { dictionary, synonyms, abbreviations } from '@dictionaries';
import { SONGS, SONG_SCENARIOS, MATCH_REACTIONS } from '@data';
import { MatchResult } from '@app-types';

@Injectable({
  providedIn: 'root',
})
export class MatcherService {
  private preprocess(input: string): { normalizedInput: string; normalizedTokens: string[] } {
    const normalized = input
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    const tokens = normalized.split(/\s+/).map((token) => {
      const expanded = abbreviations[token] || token;
      const translated = synonyms[expanded] || expanded;
      const singular = this.singularize(translated);
      return singular;
    });

    return {
      normalizedInput: tokens.join(' '), // reconstructs the input
      normalizedTokens: tokens,
    };
  }

  private singularize(token: string): string {
    if (token.endsWith('s') && token.length > 3) {
      return token.slice(0, -1);
    }
    return token;
  }

  private findSong(title: string) {
    return SONGS.find((song) => song.title === title) || null;
  }

  private findReaction(score: number) {
    const reactions = MATCH_REACTIONS.filter((r) => r.score === score);

    if (reactions.length === 0) {
      return {
        score,
        quote: 'Interesting combination of tags!',
      };
    }

    const randomIndex = Math.floor(Math.random() * reactions.length);
    return reactions[randomIndex];
  }

  public match(input: string): MatchResult | null {
    const { normalizedInput, normalizedTokens } = this.preprocess(input);

    console.log('Normalized Input:', normalizedInput);
    console.log('Normalized Tokens:', normalizedTokens);

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
          reaction: this.findReaction(999),
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
      const reaction = this.findReaction(score);

      if (!bestMatch || score > bestMatch.score) {
        bestMatch = { song, score, reaction };
      }
    }

    if (!bestMatch || bestMatch.score === 0) {
      return null;
    }

    return bestMatch;
  }
}
