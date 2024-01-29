import React from 'react';
import {FlatList, Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LocationType} from '../../types/location';
import {useTheme} from '@react-navigation/native';

interface SuggestionListProps {
  suggestions: LocationType[];
  handleItemPress: (item: LocationType) => void;
}

const SuggestionList: React.FC<SuggestionListProps> = ({
  suggestions,
  handleItemPress,
}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    suggestionsContainer: {
      marginTop: 8,
      backgroundColor: colors.border,
    },
    suggestionItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      borderBottomWidth: 0.3,
      backgroundColor: colors.background,
      borderRadius: 3,
      paddingHorizontal: 12,
      marginHorizontal: 6,
    },
    markerIcon: {
      marginRight: 8,
    },
    suggestionText: {
      fontSize: 16,
      color: colors.text,
    },
  });

  return (
    <FlatList
      data={suggestions}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => handleItemPress(item)}>
          <View style={styles.suggestionItem}>
            <Icon
              name="map-marker"
              size={20}
              color={colors.text}
              style={styles.markerIcon}
            />
            <Text style={styles.suggestionText}>{item.display_name}</Text>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.place_id.toString()}
      style={styles.suggestionsContainer}
    />
  );
};

export default SuggestionList;
