export type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    feels_like:number;
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
} | null;

export function KelvinToCelsius(temperature: number): string {
  const result = temperature - 273.15;
  return result.toFixed(2);
}

export function unixTimestampToCurrentTime(unixTimestamp: number): string {
  const currentDateTime = new Date(unixTimestamp * 1000);
  return currentDateTime.toLocaleTimeString();
}

export function sunriseToCurrentTime(sunrise: number): string {
  const currentSunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
  return currentSunriseTime;
}

export function sunsetToCurrentTime(sunset: number): string {
  const currentSunsetTime = new Date(sunset * 1000).toLocaleTimeString();
  return currentSunsetTime;
}
export function MeterToKilometer(distace:number):number{
  return distace / 1000;
}





