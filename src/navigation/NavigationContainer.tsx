
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { observer } from 'mobx-react-lite';
import React from 'react';

import ChatPage from '../app/features/chat/views/ChatPage';
import ProfilePage from '../app/features/profile/views/ProfilePage';
import { NavigationRoutes } from './types';
import CatsPage from '../app/features/cats/views/CatsPage';
import { StyleSheet, Image, View } from 'react-native';
import theme from '../config/theme';

const Tab = createBottomTabNavigator();

const catsIcon = require('../assets/cat.png');
const chatIcon = require('../assets/chat.png');
const profileIcon = require('../assets/profile.png');

const AppNavigationContainer = () => {
  return (
     <View style={styles.appViewStyle}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          contentStyle: { backgroundColor: 'transparent' },
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: theme.colors.active,
          tabBarInactiveTintColor: theme.colors.black,
          tabBarIcon: ({ color, size }) => {
            let source;
            if (route.name === NavigationRoutes.Cats) {
              source = catsIcon;
            } else if (route.name === 'Chat') {
              source = chatIcon;
            } else if (route.name === 'Profile') {
              source = profileIcon;
            }
            return <Image source={source} style={{ width: styles.tabBarIconStyle.width, height: styles.tabBarIconStyle.height, tintColor: color }} />;
          },
          headerShown: false,
          tabBarShowLabel: false,
      })}>
            <Tab.Screen name={NavigationRoutes.Cats} component={CatsPage} />
            <Tab.Screen name={NavigationRoutes.Chat} component={ChatPage} />
            <Tab.Screen name={NavigationRoutes.Profile} component={ProfilePage} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  appViewStyle: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  tabBarStyle: {
    bottom: 80,
    height: 44,
    borderRadius: 36,
    width: 156,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    display: 'flex',
    flexDirection: 'column'
  },
  tabBarIconStyle: {
    width: 20,
    height: 20,
  },
});

export default observer(AppNavigationContainer);
