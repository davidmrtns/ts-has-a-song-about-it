import { Component, Input } from '@angular/core';
import { MatchResult } from '@app-types';

@Component({
  selector: 'app-match-result',
  imports: [],
  templateUrl: './match-result.component.html',
  styleUrl: './match-result.component.scss',
})
export class MatchResultComponent {
  @Input()
  matchResult?: MatchResult | null = undefined;
}
