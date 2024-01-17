import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackcheckComponent } from './feedbackcheck.component';

describe('FeedbackcheckComponent', () => {
  let component: FeedbackcheckComponent;
  let fixture: ComponentFixture<FeedbackcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackcheckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
