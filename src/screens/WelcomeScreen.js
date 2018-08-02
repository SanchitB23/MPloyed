import React, { Component } from 'react';
import _ from 'lodash';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#03A9F4' },
  { text: 'Set your location and swipe away', color: '#009688' },
  { text: 'Use this to get a Job', color: '#03A9F4' }

];

class WelcomeScreen extends Component {
  state = { token: null }
  async componentWillMount() {
    const token = await AsyncStorage.getItem('fb_token');
    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }
  onSlidesComplete() {
    this.props.navigation.navigate('auth');
  }
  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    console.log('welcome');
    return (
     <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
   );
  }
}

export default WelcomeScreen;
