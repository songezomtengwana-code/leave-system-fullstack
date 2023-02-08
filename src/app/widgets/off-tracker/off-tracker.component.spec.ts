import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffTrackerComponent } from './off-tracker.component';

describe('OffTrackerComponent', () => {
  let component: OffTrackerComponent;
  let fixture: ComponentFixture<OffTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffTrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
