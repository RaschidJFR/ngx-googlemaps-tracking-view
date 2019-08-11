import { TestBed } from '@angular/core/testing';

import { NgxGooglemapsTrackingViewService } from './ngx-googlemaps-tracking-view.service';

describe('NgxGooglemapsTrackingViewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxGooglemapsTrackingViewService = TestBed.get(NgxGooglemapsTrackingViewService);
    expect(service).toBeTruthy();
  });
});
