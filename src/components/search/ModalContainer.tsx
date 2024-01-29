import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Image,
} from 'react-native';
import {LocationType} from '../../types/location';
import {
  KelvinToCelsius,
  WeatherData,
  sunriseToCurrentTime,
  sunsetToCurrentTime,
  unixTimestampToCurrentTime,
} from '../../types/weather';
import Icon from 'react-native-vector-icons/Fontisto';
import {getWeatherIcon} from '../../types/icons';
import {useTheme} from '@react-navigation/native';

interface ModalContainerProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  selectedLocation: LocationType | null;
  weatherData: WeatherData;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isModalVisible,
  toggleModal,
  selectedLocation,
  weatherData,
}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modalContent: {
      backgroundColor: colors.background,
      borderRadius: 10,
      padding: 20,
      width: '80%',
      alignItems: 'center',
    },
    locationText: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: colors.text,
    },
    textStyle: {
      fontSize: 18,
      color: colors.text,
      fontWeight: '500',
    },
    closeModalText: {
      fontSize: 16,
      color: colors.notification,
      fontWeight: 'bold',
    },
    image: {
      width: 100,
      height: 100,
    },
  });

  const currentTime = unixTimestampToCurrentTime(Math.floor(Date.now() / 1000));
  const sunrise = sunriseToCurrentTime(Number(weatherData?.sys.sunrise));
  const sunset = sunsetToCurrentTime(Number(weatherData?.sys.sunset));

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.locationText}>
            {selectedLocation?.display_place}
          </Text>
          <Text style={styles.textStyle}>
            Temperature: {KelvinToCelsius(Number(weatherData?.main.temp))}°C
          </Text>

          <Icon
            name={getWeatherIcon(weatherData?.weather[0].icon)}
            size={69}
            color={colors.text}
          />

          <Text style={styles.textStyle}>
            {weatherData?.weather[0].description}
          </Text>
          <Text style={styles.textStyle}>Sunrise : {sunrise}</Text>
          <Text style={styles.textStyle}>Sunset : {sunset}</Text>
          <Text style={styles.textStyle}>Current Time : {currentTime}</Text>

          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.closeModalText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalContainer;
