import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, switchMap } from "rxjs";
import { FETCH_WEATHER } from "./weather-widget.actions";
import { WeatherWidgetService } from "../weather-widget.service";

@Injectable()
export class WeatherWidgetEffects {
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(FETCH_WEATHER),
    switchMap(() => this.weatherWidgetService.getCurrentWeatherData('53.429', '14.553', 'standard')
      .pipe(
        map(weather => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private weatherWidgetService: WeatherWidgetService
  ) {}
}
