// PickerComponent.tsx
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface PickerComponentProps {
  selectedItem: string | null;
  onValueChange: (value: string | null) => void;
}

const PickerComponent: React.FC<PickerComponentProps> = ({
  selectedItem,
  onValueChange,
}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    pickerStyle: {
      marginHorizontal: 17,
      marginVertical: 10,
      backgroundColor: colors.border,
      color: colors.text,
    },
    pickerItemStyle: {
      fontWeight: 'bold',
      color: colors.text,
    },
  });

  return (
    <View>
      <Picker
        selectedValue={selectedItem}
        onValueChange={value => onValueChange(value as string)}
        style={styles.pickerStyle}
        itemStyle={styles.pickerItemStyle}>
        <Picker.Item label="Mass" value={'mass'} />
        <Picker.Item label="Length" value={'length'} />
        <Picker.Item label="Time" value={'time'} />
        <Picker.Item label="Temperature" value={'temperature'} />
      </Picker>
    </View>
  );
};

export default PickerComponent;
