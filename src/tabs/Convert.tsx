import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ItemSelection from '../components/convert/ItemSelection';
import {useTheme} from '@react-navigation/native';

export default function Convert() {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: colors.background,
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 17,
            color: colors.text,
          }}>
          Unit Conversion
        </Text>
      </View>
      <ItemSelection />
    </View>
  );
}
