export interface WeatherWidget {
  temp?: number
  tempMax?: number
  tempMin?: number
  tempFeelsLike?: number,
  icon?: string
}

export interface City {
  name: string
  lat: string
  lon: string
}
