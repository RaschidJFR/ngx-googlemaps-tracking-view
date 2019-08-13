import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfowindowComponent } from './infowindow.component';

describe('InfowindowComponent', () => {
  let component: InfowindowComponent;
  let fixture: ComponentFixture<InfowindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfowindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfowindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
