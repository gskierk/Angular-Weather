import { Injectable } from '@angular/core';

import { HttpClient } from  '@angular/common/http';
import { Observable, map } from 'rxjs';
import { WeatherWidget } from './weather-widget.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherWidgetService {
  public constructor(private readonly httpClient: HttpClient) {}

  public getCurrentWeatherData = (units: string): Observable<WeatherWidget> => {
    const apiKey = 'e026a928dae7445909d4a21ae142ce66';

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=${units}&appid=${apiKey}`;

    return this.httpClient.get(URL).pipe(map((data: any): WeatherWidget => {
      return {
        temp: data?.main?.temp,
        tempFeelsLike: data?.main?.feels_like,
        tempMax: data?.main?.temp_max,
        tempMin: data?.main?.temp_min
      }
    }));
  }
}
