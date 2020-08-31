import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/LoginScreen/LoginScreen';
import SignUpScreen from './src/SignUpScreen/SignUpScreen';
import Main from './src/AppScreens/Main';

const AppNavigator = createStackNavigator(
  {
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: ({ navigation }) => ({
        title: "LoginScreen",
        gestureEnabled: false
      }),
    },
    SignUpScreen: {
      screen: SignUpScreen,
      navigationOptions: ({ navigation }) => ({
        title: "SignUpScreen",
        gestureEnabled: false
      }),
    },
    Main: {
      screen: Main,
      navigationOptions: ({ navigation }) => ({
        title: "Main",
        gestureEnabled: false
      }),
    }
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: null
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}