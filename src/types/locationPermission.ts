import { Alert, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const requestLocationPermission = async () => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
          buttonNeutral: 'Ask Later',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('Location permission granted');
        return true;
      } else {
        // console.log('Location permission denied');
        Alert.alert('Location Permission Denied', 'Please enable location permissions to use this feature.');
        return false;
      }
    } else if (Platform.OS === 'ios') {
      const granted = await Geolocation.requestAuthorization('whenInUse');
      if (granted === 'granted') {
        // console.log('Location permission granted');
        return true;
      } else {
        // console.error('Location permission denied');
        Alert.alert('Location Permission Denied', 'Please enable location permissions to use this feature.');
        return false;
      }
    }
  } catch (error) {
    // console.error('Error requesting location permission:', error);
    Alert.alert('Error', 'Failed to request location permission. Please try again.');
    return false;
  }
};

export const getCurrentLocation = (): Promise<{ latitude: number; longitude: number }> => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      (error) => {
        // console.error('Error getting current location:', error);
        Alert.alert('Error', 'Failed to get current location. Please check your location settings and try again.');
        reject(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  });
};



