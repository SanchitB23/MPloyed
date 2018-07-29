import React, { Component } from 'react';
// import { View, Text } from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#03A9F4' },
  { text: 'Set your location and swipe away', color: '#009688' }
];

class WelcomeScreen extends Component {
  onSlidesComplete() {
    this.props.navigation.navigate('auth');
  }
  render() {
    console.log('welcome');
    return (
     <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete.bind(this)} />
   );
  }
}

export default WelcomeScreen;
