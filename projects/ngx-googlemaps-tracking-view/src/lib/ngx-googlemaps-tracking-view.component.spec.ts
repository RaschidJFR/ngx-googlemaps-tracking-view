import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxGooglemapsTrackingViewComponent } from './ngx-googlemaps-tracking-view.component';

describe('NgxGooglemapsTrackingViewComponent', () => {
  let component: NgxGooglemapsTrackingViewComponent;
  let fixture: ComponentFixture<NgxGooglemapsTrackingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxGooglemapsTrackingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxGooglemapsTrackingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
