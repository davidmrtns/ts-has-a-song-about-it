import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-situtation-form',
  imports: [ReactiveFormsModule],
  templateUrl: './situtation-form.component.html',
  styleUrl: './situtation-form.component.scss',
})
export class SitutationFormComponent {
  @Output() submitSituation = new EventEmitter<string>();
  situationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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
      const formValue = this.situationForm.value.situation;
      this.submitSituation.emit(formValue);
    } else {
      console.log('Form is invalid');
    }
  }
}
