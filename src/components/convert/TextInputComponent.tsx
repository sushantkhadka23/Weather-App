// TextInputComponent.tsx
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextInput} from 'react-native';

interface TextInputComponentProps {
  value: string;
  onChangeText: (text: string) => void;
  keyboardType: 'numeric';
}

const TextInputComponent: React.FC<TextInputComponentProps> = ({
  value,
  onChangeText,
  keyboardType,
}) => {
  const {colors} = useTheme();
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      style={{
        flex: 1,
        borderWidth: 0.7,
        borderColor: colors.border,
        color: colors.text,
        borderRadius: 3,
        marginHorizontal: 5,
        backgroundColor: colors.border,
      }}
    />
  );
};

export default TextInputComponent;
