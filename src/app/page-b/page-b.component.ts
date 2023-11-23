import { Component, OnInit } from '@angular/core';
import { WeatherWidgetService } from '../weather-widget/weather-widget.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.sass']
})
export class PageBComponent implements OnInit {
  public forecast: any

  constructor(private weatherWidgetService: WeatherWidgetService) {}

  public ngOnInit() {
    const lat = '53.429'
    const lon = '14.553'

    this.weatherWidgetService.getHourlyForecast(lat, lon).pipe(take(1)).subscribe((data: any) => {
      this.forecast = data
    })
  }
}
