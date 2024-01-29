import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useTheme,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, useColorScheme} from 'react-native';
import Home from '../tabs/Home';
import Search from '../tabs/Search';
import Conversion from '../tabs/Convert';
import Settings from '../tabs/Settings';
import {TabParamList} from '../types/screen';

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
  },
};

interface TabBarIconsProps {
  name: string;
}

const TabBarIcons: React.FC<TabBarIconsProps> = ({name}) => {
  const {colors} = useTheme();
  return <Icon name={name} size={25} color={colors.text} />;
};

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabContainer: React.FC = () => {
  const theme = useColorScheme();
  const {colors} = useTheme();

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : CustomTheme}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarLabelStyle:{
            textTransform:'uppercase',
            fontWeight:'600',
          },
          tabBarStyle: styles.bottomTabStyle,
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <TabBarIcons name="home" />,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => <TabBarIcons name="search" />,
          }}
        />
        <Tab.Screen
          name="Conversion"
          component={Conversion}
          options={{
            tabBarIcon: () => <TabBarIcons name="exchange" />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: () => <TabBarIcons name="gear" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  bottomTabStyle: {
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    paddingHorizontal: 10,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 6,
    },
    elevation: 10,
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
});

export default BottomTabContainer;
