import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useTheme } from '@react-navigation/native'; 

interface WeatherIconProps {
  name: string;
  value: string;
  label: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ name, value, label }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.weatherIconContainer, { backgroundColor: colors.background }]}>
      <Icon name={name} size={40} color={colors.text} />
      <Text style={[styles.weatherIconValue, { color: colors.text }]}>{value}</Text>
      <Text style={[styles.weatherIconLabel, { color: colors.text }]}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  weatherIconContainer: {
    alignItems: 'center',
    marginTop: 8,
    borderRadius: 8, 
    padding: 12, 
  },
  weatherIconLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  weatherIconValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default WeatherIcon;
