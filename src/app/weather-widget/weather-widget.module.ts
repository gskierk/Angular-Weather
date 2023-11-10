import { NgModule } from '@angular/core';

import { HttpClientModule } from  '@angular/common/http';

import { WeatherWidgetComponent } from './../weather-widget/weather-widget.component';
import { WeatherWidgetService } from './../weather-widget/weather-widget.service';

@NgModule({
  declarations: [
    WeatherWidgetComponent
  ],
  exports: [
    WeatherWidgetComponent
  ],
  imports: [
    HttpClientModule
  ],
  providers: [
    WeatherWidgetService
  ]
})

export class WeatherWidgetModule { }
