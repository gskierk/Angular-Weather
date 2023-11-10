import { Component } from '@angular/core';
import { WeatherWidgetService } from './weather-widget.service';
import { WeatherWidget } from './weather-widget.interface';

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
    this.refreshCurrentWeatherData()
  }

  public onChangeUnits(event: Event) {
    this.unit = (event.target as any).value
    this.refreshCurrentWeatherData()
  }

  private refreshCurrentWeatherData() {
    this.weatherWidgetService.getCurrentWeatherData(this.unit).subscribe((data: any) => {
      this.weather = data
    })
  }
}
