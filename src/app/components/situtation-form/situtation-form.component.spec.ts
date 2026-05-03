import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitutationForm } from './situtation-form.component';

describe('SitutationForm', () => {
  let component: SitutationForm;
  let fixture: ComponentFixture<SitutationForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SitutationForm],
    }).compileComponents();

    fixture = TestBed.createComponent(SitutationForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
