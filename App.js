import React from 'react';
// import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { Icon } from 'react-native-elements';

import store from './src/store';
import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import DeckScreen from './src/screens/DeckScreen';
import SettingScreen from './src/screens/SettingScreen';
import ReviewScreen from './src/screens/ReviewScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: createBottomTabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: createStackNavigator({
                review: {
                  screen: ReviewScreen,
                },
                settings: { screen: SettingScreen }
              }),
              navigationOptions: {
                tabBarLabel: 'Review Jobs',
                tabBarIcon: ({ tintColor }) => (
                  <Icon name="favorite" size={30} color={tintColor} />
                ),
              }
            }
      }, {
        // tabBarPosition: 'bottom', not needed now
        tabBarOptions: {
          labelStyle: { fontSize: 12 }
        }
      })
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazyLoad: true //not preload Components in navi
    });
    console.log('App.js');
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}
