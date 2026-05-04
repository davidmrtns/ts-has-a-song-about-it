import { Component } from '@angular/core';
import { SitutationForm } from '@components/situtation-form';
import { MainHeaderComponent } from '@components/main-header';
import { MatchResultComponent } from '@components/match-result';
import { MainFooterComponent } from '@components/main-footer';
import { MatchResult } from '@app-types';
import { MatcherService } from '@services/matcher';

@Component({
  selector: 'app-homepage',
  imports: [SitutationForm, MainHeaderComponent, MatchResultComponent, MainFooterComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  matchResult?: MatchResult | null = undefined;

  constructor(private matcherService: MatcherService) {}

  match(input: string) {
    this.matchResult = this.matcherService.match(input);
  }
}
