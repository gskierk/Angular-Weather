import { Action } from "@ngrx/store";
import { WeatherWidget } from "../weather-widget.interface";

export const FETCH_WEATHER = 'Fetch Weather';
export const SET_WEATHER = 'Set Weather'

export class FetchWeather implements Action {
  public readonly type = FETCH_WEATHER
}

export class SetWeather implements Action {
  public readonly type = SET_WEATHER

  public constructor (public payload: WeatherWidget) {}
}

export type Actions = FetchWeather | SetWeather
