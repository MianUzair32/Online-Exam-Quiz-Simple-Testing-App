import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserrankingComponent } from './userranking.component';

describe('UserrankingComponent', () => {
  let component: UserrankingComponent;
  let fixture: ComponentFixture<UserrankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserrankingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserrankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
