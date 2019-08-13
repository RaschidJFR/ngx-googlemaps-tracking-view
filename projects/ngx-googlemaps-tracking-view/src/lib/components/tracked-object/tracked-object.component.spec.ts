import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackedObjectComponent } from './tracked-object.component';

describe('TrackedObjectComponent', () => {
  let component: TrackedObjectComponent;
  let fixture: ComponentFixture<TrackedObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackedObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackedObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
