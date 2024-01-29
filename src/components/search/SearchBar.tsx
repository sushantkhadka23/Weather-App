import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface SearchBarProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  clearInput: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({input, setInput, clearInput}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.border,
      borderRadius: 8,
      paddingHorizontal: 12,
      marginHorizontal: 12,
    },
    searchIcon: {
      marginRight: 8,
    },
    input: {
      flex: 1,
      height: 40,
      color: colors.text,
    },
    searchStyle: {
      fontSize: 17,
      fontWeight: 'bold',
      marginHorizontal: 12,
      marginBottom: 5,
      color: colors.text,
    },
  });

  return (
    <View>
      <Text style={styles.searchStyle}>Search Location</Text>
      <View style={styles.searchBar}>
        <Icon
          name="search"
          size={20}
          color={colors.text}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Search Location"
          placeholderTextColor={colors.text}
          value={input}
          onChangeText={enterText => setInput(enterText)}
        />
        {input !== '' && (
          <Icon
            name="times-circle"
            size={20}
            color={colors.text}
            onPress={clearInput}
          />
        )}
      </View>
    </View>
  );
};

export default SearchBar;
