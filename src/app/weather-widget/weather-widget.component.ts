import { Component } from '@angular/core';
import { WeatherWidgetService } from './weather-widget.service';
import { WeatherWidget } from './weather-widget.interface';
import { EventType } from '@angular/router';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.sass']
})
export class WeatherWidgetComponent {
  public weather: WeatherWidget | undefined;
  public units: string[] = [
    'standard',
    'metric',
    'imperial'
  ]
  public unit: string = 'standard'

  public constructor (private readonly weatherWidgetService: WeatherWidgetService) {}

  public ngOnInit() {
    this.weatherWidgetService.getCurrentWeatherData('standard').subscribe((data: any) => {
      this.weather = data
    })
  }

  public onChangeUnits(event: Event) {
    this.unit = (event.target as any).value
  }
}
