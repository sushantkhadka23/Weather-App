import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet , Text, View} from 'react-native';
import SearchBar from '../components/search/SearchBar';
import SuggestionList from '../components/search/SuggestionList';
import ModalContainer from '../components/search/ModalContainer';
import {fetchLocationSuggestions} from '../apis/LocationSuggestions';
import {LocationType} from '../types/location';
import fetchWeatherData from '../apis/WeatherApi';
import {WeatherData} from '../types/weather';
import { useTheme } from '@react-navigation/native';

const Search: React.FC = () => {
  const {colors} = useTheme();


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 16,
    },
  });



  const [input, setInput] = useState<string>('');
  const [suggestions, setSuggestions] = useState<LocationType[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(
    null,
  );
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const clearInput = () => {
    setInput('');
    setSuggestions([]);
  };

  useEffect(() => {
    const fetchSuggestion = async () => {
      const suggestions = await fetchLocationSuggestions(input);
      setSuggestions(suggestions);
    };

    if (input.length > 2) {
      fetchSuggestion();
    } else {
      setSuggestions([]);
    }
  }, [input]);

  const handleItemPress = async (item: LocationType) => {
    setSelectedLocation(item);
    const result = await fetchWeatherData(Number(item.lat), Number(item.lon));
    setWeatherData(result);
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar input={input} setInput={setInput} clearInput={clearInput}  />
      {suggestions.length > 0 && (
        <SuggestionList
          suggestions={suggestions}
          handleItemPress={handleItemPress}
        />
      )}
      <ModalContainer
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        selectedLocation={selectedLocation}
        weatherData={weatherData}
      />
    </SafeAreaView>
  );
};



export default Search;
