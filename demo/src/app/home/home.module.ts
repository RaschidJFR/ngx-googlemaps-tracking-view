import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { NgxGooglemapsTrackingViewModule } from 'ngx-googlemaps-tracking-view';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  providers: [],
  imports: [
    NgxGooglemapsTrackingViewModule,
    HttpClientModule,
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
