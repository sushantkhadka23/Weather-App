import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {IconsWeather, getWeatherIcon} from '../types/icons';
import WeatherIcon from '../components/home/WeatherIcons';
import {
  requestLocationPermission,
  getCurrentLocation,
} from '../types/locationPermission';
import fetchWeatherData from '../apis/WeatherApi';
import {KelvinToCelsius, MeterToKilometer, WeatherData} from '../types/weather';
import LottieView from 'lottie-react-native';
import {HomeProps} from '../types/screen';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';

const {width, height} = Dimensions.get('window');

const Home: React.FC<HomeProps> = ({route}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center',
    },
    innerContainer: {
      width: width * 0.9,
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
    },
    iconStyle: {
      marginVertical: 20,
    },
    temperatureText: {
      fontSize: 60,
      fontWeight: 'bold',
      color: colors.text,
    },
    detailsContainer: {
      width: '90%',
      height: height * 0.22,
      borderWidth: 1.5,
      borderColor: colors.text,
      backgroundColor: colors.background,
      borderRadius: 12,
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingHorizontal: 20,
      shadowOffset: {
        width: 3,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowColor: colors.border,
    },
  });

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  useEffect(() => {
    fetchLocation();
  }, [route.params?.locationName]);

  const fetchLocation = async () => {
    try {
      const locationPermission = await requestLocationPermission();
      if (
        typeof route.params?.locationName === 'undefined' &&
        locationPermission
      ) {
        const location = await getCurrentLocation();
        const data = await fetchWeatherData(
          location.latitude,
          location.longitude,
        );
        setWeatherData(data);
      } else if (
        typeof route.params?.locationName !== 'undefined' &&
        locationPermission
      ) {
        let address = route.params?.locationName;
        const data = await fetchWeatherData(undefined, undefined, address);
        setWeatherData(data);
      } else {
        console.warn('Weather Data cannot be fetched.');
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {weatherData ? (
          <>
            <Text style={styles.text}>{weatherData.name}</Text>
            <Icon
              name={getWeatherIcon(weatherData.weather[0].icon)}
              color={colors.text}
              size={110}
              style={styles.iconStyle}
            />
            <Text style={styles.temperatureText}>
              {KelvinToCelsius(weatherData.main.temp)}°
            </Text>
            <Text style={styles.text}>
              {weatherData.weather[0].description}
            </Text>
            <View style={styles.detailsContainer}>
              <WeatherIcon
                name="droplet"
                value={`${weatherData.main.humidity}%`}
                label="Humidity"
              />
              <WeatherIcon
                name="wind"
                value={`${weatherData.wind.speed} m/s`}
                label="Wind Speed"
              />
              <WeatherIcon
                name="eye"
                value={`${MeterToKilometer(weatherData.visibility)}Km`}
                label="Visibility"
              />
            </View>
          </>
        ) : (
          <LottieView
            style={{width: 300, height: 300}}
            source={require('../assets/dinosaur.json')}
            autoPlay
            loop
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
