import {Alert} from 'react-native';
import {WeatherData} from '../types/weather';

const fetchWeatherData = async (
  lat: number | undefined,
  lon: number | undefined,
  locationName?: string,
): Promise<WeatherData | null> => {
  let endpoint;
  const API_KEY = 'ADD_YOUR_API_KEY';

  if (locationName) {
    // Fetch weather data by location name
    endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${locationName}&appid=${API_KEY}`;
  } else if (lat !== undefined && lon !== undefined) {
    // Fetch weather data by coordinates
    endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  } else {
    console.error('Coordinates or location are required.');
    return null;
  }

  try {
    const res = await fetch(endpoint);
    if (res.ok) {
      const data: WeatherData = await res.json();
      return data;
    } else {
      Alert.alert(
        'Location Error',
        'Invalid location or failed to fetch weather data. Please check the location and try again.',
      );
      return null;
    }
  } catch (error) {
    console.error('Error fetching weather data: ', error);
    Alert.alert(
      'Error',
      'An error occurred while fetching weather data. Please try again later.',
    );
    return null;
  }
};

export default fetchWeatherData;
