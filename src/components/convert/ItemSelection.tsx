import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PickerComponent from './PickerComponent';
import TextInputComponent from './TextInputComponent';
import {
  KgToPound,
  PoundToKg,
  FootToInch,
  InchToFoot,
  CelsiusToFahrenheit,
  FahrenheitToCelsius,
  MinutesToSeconds,
  SecondsToMinutes,
} from '../../types/conversion';
import {useTheme} from '@react-navigation/native';

const ItemSelection: React.FC = () => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    rowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 16,
      marginVertical: 5,
    },
    equalSign: {
      fontWeight: 'bold',
      fontSize: 35,
      color: colors.text,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      fontWeight: 'bold',
      fontSize: 17,
      color: colors.text,
    },
  });

  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [input1, setInput1] = useState<string>('');
  const [input2, setInput2] = useState<string>('');

  const handleInput1Change = (text: string) => {
    setInput1(text);
    const convertedValue = convertInput(text, selectedItem);
    setInput2(convertedValue);
  };

  const handleInput2Change = (text: string) => {
    setInput2(text);
    const convertedValue = convertInput(text, selectedItem, true);
    setInput1(convertedValue);
  };

  const convertInput = (
    value: string,
    conversionType: string | null,
    reverse: boolean = false,
  ): string => {
    const numericValue = parseFloat(value);

    if (isNaN(numericValue)) {
      return '';
    }

    switch (conversionType) {
      case 'mass':
        return reverse
          ? KgToPound(numericValue).toString()
          : PoundToKg(numericValue).toString();
      case 'length':
        return reverse
          ? InchToFoot(numericValue).toString()
          : FootToInch(numericValue).toString();
      case 'time':
        return reverse
          ? MinutesToSeconds(numericValue).toString()
          : SecondsToMinutes(numericValue).toString();
      case 'temperature':
        return reverse
          ? FahrenheitToCelsius(numericValue).toString()
          : CelsiusToFahrenheit(numericValue).toString();
      default:
        return '';
    }
  };

  const getUnitLabel = (
    conversionType: string | null,
    isFirstUnit: boolean,
  ): string => {
    switch (conversionType) {
      case 'mass':
        return isFirstUnit ? 'POUND' : 'KG';
      case 'length':
        return isFirstUnit ? 'FOOT' : 'INCH';
      case 'time':
        return isFirstUnit ? 'SECOND' : 'MINUTE';
      case 'temperature':
        return isFirstUnit ? 'CELSIUS' : 'FAHRENHEIT';
      default:
        return '';
    }
  };

  return (
    <View>
      <PickerComponent
        selectedItem={selectedItem}
        onValueChange={setSelectedItem}
      />

      <View style={styles.rowContainer}>
        <TextInputComponent
          value={input1}
          onChangeText={handleInput1Change}
          keyboardType="numeric"
        />
        <Text style={styles.equalSign}> = </Text>
        <TextInputComponent
          value={input2}
          onChangeText={handleInput2Change}
          keyboardType="numeric"
        />
      </View>

      <View style={styles.rowContainer}>
        <Text style={styles.textStyle}>{getUnitLabel(selectedItem, true)}</Text>
        <Text style={styles.textStyle}>
          {getUnitLabel(selectedItem, false)}
        </Text>
      </View>
    </View>
  );
};

export default ItemSelection;
