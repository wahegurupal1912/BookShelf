import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class HomeScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    )
  }
}

class BookShelfScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>My BookShelf</Text>
      </View>
    )
  }
}

class ProfileScreen extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    )
  }
}

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e6e6e6"
      inactiveColor="#828282"
      barStyle={{ backgroundColor: '#242424' }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="BookShelf" 
          component={BookShelfScreen}
          options={{
            tabBarLabel: 'BookShelf',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
