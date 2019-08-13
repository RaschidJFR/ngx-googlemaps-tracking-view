import { NgModule } from '@angular/core';
import { NgxGooglemapsTrackingViewComponent } from './ngx-googlemaps-tracking-view.component';
import { TrackedObjectComponent } from './components/tracked-object/tracked-object.component';
import { CommonModule } from '@angular/common';
import { GoogleMapsWrapper } from './services/googlemaps-wrapper';
import { InfowindowComponent } from './components/infowindow/infowindow.component';

@NgModule({
  declarations: [NgxGooglemapsTrackingViewComponent, TrackedObjectComponent, InfowindowComponent],
  imports: [
    CommonModule
  ],
  providers: [GoogleMapsWrapper],
  exports: [NgxGooglemapsTrackingViewComponent, InfowindowComponent]
})
export class NgxGooglemapsTrackingViewModule { }
