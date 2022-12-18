import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxStarsModule } from 'ngx-stars';

import { StarsRatingComponent } from './stars-rating.component';

describe('StarsRatingComponent', () => {
  let component: StarsRatingComponent;
  let fixture: ComponentFixture<StarsRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxStarsModule],
      declarations: [StarsRatingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StarsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
