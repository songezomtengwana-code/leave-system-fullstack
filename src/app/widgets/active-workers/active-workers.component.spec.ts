import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWorkersComponent } from './active-workers.component';

describe('ActiveWorkersComponent', () => {
  let component: ActiveWorkersComponent;
  let fixture: ComponentFixture<ActiveWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveWorkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
