import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from './src/LoginScreen/LoginScreen';
import SignUpScreen from './src/SignUpScreen/SignUpScreen';

import HomeScreen from './src/AppScreens/HomeScreen/HomeScreen'
import ProfileScreen from './src/AppScreens/ProfileScreen/ProfileScreen'
import BookshelfScreen from './src/AppScreens/BookshelfScreen/BookshelfScreen'

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

function createMainPage(){
  return(
    <MaterialBottomTabs.Navigator
    initialRouteName="Feeds"
    activeColor="#e6e6e6"
    inactiveColor="#828282"
    barStyle={{ backgroundColor: '#242424' }}>
      <MaterialBottomTabs.Screen 
      name="Feeds" 
      component={HomeScreen}
      options={{
          tabBarLabel: 'Feeds',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="coffee" color={color} size={26} />
          ),
      }}
      />
      <MaterialBottomTabs.Screen 
      name="Bookshelf" 
      component={BookshelfScreen}
      options={{
          tabBarLabel: 'Bookshelf',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="book" color={color} size={26} />
          ),
      }}
      />
      <MaterialBottomTabs.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
      }}
      />
    </MaterialBottomTabs.Navigator>
  );
}

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <Stack.Screen name="Main" children={createMainPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;