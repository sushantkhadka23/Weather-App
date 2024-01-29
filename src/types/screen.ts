import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type TabParamList = {
  Home: {locationName: string};
  Search: undefined;
  Conversion: undefined;
  Settings: undefined;
};

export type HomeProps = NativeStackScreenProps<TabParamList, 'Home'>;
export type SearchProps = NativeStackScreenProps<TabParamList, 'Search'>;
export type ConversionProps = NativeStackScreenProps<
  TabParamList,
  'Conversion'
>;
export type SettingsProps = NativeStackScreenProps<TabParamList, 'Settings'>;
