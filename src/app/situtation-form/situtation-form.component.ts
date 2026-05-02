import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Matcher } from '../services/matcher.service';

@Component({
  selector: 'app-situtation-form',
  imports: [ReactiveFormsModule],
  templateUrl: './situtation-form.component.html',
  styleUrl: './situtation-form.component.scss',
})
export class SitutationForm {
  situationForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matcher: Matcher,
  ) {}

  ngOnInit() {
    this.situationForm = this.fb.group({
      situation: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get situation() {
    return this.situationForm.get('situation');
  }

  onSubmit() {
    if (this.situationForm.valid) {
      console.log('Submitted Situation:', this.situationForm.value);
      const matchResult = this.matcher.match(this.situationForm.value.situation);
      console.log('Match Result:', matchResult);
    } else {
      console.log('Form is invalid');
    }
  }
}
