import { Component } from '@angular/core';
import { WeatherWidgetService } from './weather-widget.service';
import { City, WeatherWidget } from './weather-widget.interface';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.sass']
})
export class WeatherWidgetComponent {
  public weather: WeatherWidget | undefined;

  public cities: City[] = [
    {
      name: 'Szczecin',
      lat: '53.429',
      lon: '14.553'
    },
    {
      name: 'Stockholm',
      lat: '59.333',
      lon: '18.065'
    }
  ]
  public city: City = this.cities[0]

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

  public onChangeCities(event: Event) {
    const name = (event.target as any).value

    this.city = this.cities.find((city: City): boolean => {
      return city.name === name
    }) ?? this.cities[0]
    this.refreshCurrentWeatherData()
  }

  public onChangeUnits(event: Event) {
    this.unit = (event.target as any).value
    this.refreshCurrentWeatherData()
  }

  private refreshCurrentWeatherData() {
    this.weatherWidgetService.getCurrentWeatherData(this.city.lat, this.city.lon, this.unit).subscribe((data: any) => {
      this.weather = data
    })
  }
}
