import { Injectable } from '@angular/core';

import { HttpClient } from  '@angular/common/http';
import { Observable, map } from 'rxjs';
import { WeatherWidget } from './weather-widget.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherWidgetService {
  private readonly weatherApiKey = 'e026a928dae7445909d4a21ae142ce66'
  private readonly forecastApiKey = 'b1b15e88fa797225412429c1c50c122a1'

  public constructor(private readonly httpClient: HttpClient) {}

  public getCurrentWeatherData = (lat: string, lon: string, units: string): Observable<WeatherWidget> => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${this.weatherApiKey}`;

    return this.httpClient.get(URL).pipe(map((data: any): WeatherWidget => {
      return {
        temp: data?.main?.temp,
        tempFeelsLike: data?.main?.feels_like,
        tempMax: data?.main?.temp_max,
        tempMin: data?.main?.temp_min,
        icon: `https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`
      }
    }));
  }

  public getHourlyForecast(lat: string, lon: string): Observable<any> {
    const URL = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&units=metric&appid=${this.forecastApiKey}`;

    return this.httpClient.get(URL).pipe(map((data: any): any => {
      return data.list.map((el: any) => {
        return {
          dt: el.dt_txt,
          temp: el.main.temp
        }
      })
    }));
  }
}
