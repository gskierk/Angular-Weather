import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { WeatherWidgetModule } from './weather-widget/weather-widget.module';

import { AppComponent } from './app.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WeatherWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
