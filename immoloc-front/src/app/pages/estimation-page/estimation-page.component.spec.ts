import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimationPageComponent } from './estimation-page.component';

describe('EstimationPageComponent', () => {
  let component: EstimationPageComponent;
  let fixture: ComponentFixture<EstimationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstimationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstimationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
