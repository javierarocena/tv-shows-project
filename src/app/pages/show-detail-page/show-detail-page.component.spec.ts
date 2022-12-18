import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ShowDetailPageComponent } from './show-detail-page.component';

describe('ShowDetailPageComponent', () => {
  let component: ShowDetailPageComponent;
  let fixture: ComponentFixture<ShowDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [ShowDetailPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
