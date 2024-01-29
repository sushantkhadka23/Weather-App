
export const IconsWeather = {
  sunny: 'day-sunny',
  cloudy: 'cloudy',
  rainy: 'rain',
  windy: 'wind',
  thunder: 'lightning',
  snowy: 'snows',
};

export const getWeatherIcon = (icon: string): string => {
  switch (icon) {
    case '01d':
    case '01n':
      return IconsWeather.sunny;
    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      return IconsWeather.cloudy;
    case '09d':
    case '09n':
    case '10d':
    case '10n':
      return IconsWeather.rainy;
    case '11d':
    case '11n':
      return IconsWeather.thunder;
    case '13d':
    case '13n':
      return IconsWeather.snowy;
    case '50d':
    case '50n':
      return IconsWeather.windy;
    default:
      return IconsWeather.cloudy;
  }
};

