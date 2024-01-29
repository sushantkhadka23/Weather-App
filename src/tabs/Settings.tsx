import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {SettingsProps} from '../types/screen';
import { useTheme } from '@react-navigation/native';

const Settings: React.FC<SettingsProps> = ({navigation}) => {

  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      justifyContent: 'center',
      alignItems: 'center', // Center items horizontally
    },
    headerContainer: {
      marginTop: 20,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.text,
    },
    searchContainer: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 20,
    },
    inputStyle: {
      flex: 1,
      borderWidth: 1,
      borderColor: colors.border,
      color: colors.text,
      backgroundColor: colors.border,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 8,
      marginRight: 10,
    },
    searchButton: {
      backgroundColor: colors.text,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    buttonText: {
      color: colors.card,
      fontWeight: 'bold',
    },
    changeText: {
      color: colors.text,
      fontWeight: 'bold',
      fontSize: 17,
    },
    changeContainer: {
      alignItems: 'center',
    },
  });

  const [input, setInput] = useState<string>('');
  const onChangeText = (text: string) => {
    setInput(text);
  };

  const onPress = () => {
    if (input.trim() !== '') {
      navigation.navigate('Home', { locationName: input });
      setInput('');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.headerContainer}>
      <Text style={styles.changeText}>Change Location</Text>
    </View>
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Enter location"
        value={input}
        onChangeText={onChangeText}
        style={styles.inputStyle}
      />
      <TouchableOpacity style={styles.searchButton} onPress={onPress}>
        <Text style={styles.buttonText}>Change</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
};

export default Settings;


