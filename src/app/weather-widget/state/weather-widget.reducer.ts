import { Actions, SET_WEATHER } from "./weather-widget.actions"
import { WeatherState } from "./weather-widget.interface"

export const initialState: WeatherState = {
  weather: {}
}

export function reducer(state = initialState, action: Actions): WeatherState {
  switch (action.type) {
    case SET_WEATHER:
      return { ...state, weather: { ...action.payload } }
    default:
      return state
  }
}
