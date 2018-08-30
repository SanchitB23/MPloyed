import React, { Component } from 'react';
import { View, AsyncStorage, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card } from 'react-native-elements';
import { clearLikedJobs } from '../actions';

const FEEDBACK_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdiUw6GIIU_RDz0vWM2bxe6dYomSeKDJmuTZAtpkiE_iaOwgg/viewform?usp=sf_link';

class SettingScreen extends Component {
  render() {
    return (
      <View>
        <Card>

          <Button
            title='Reset Liked Jobs'
            large
            icon={{ name: 'delete-forever' }}
            backgroundColor='#F44336'
            onPress={this.props.clearLikedJobs}
          />
        </Card>
        <Card>

          <Button
            title='Logout'
            large
            icon={{ name: 'delete-forever' }}
            backgroundColor='#F44336'
            onPress={() => {
              AsyncStorage.removeItem('fb_token');
              this.props.clearLikedJobs();
              this.props.navigation.navigate('welcome');
            }}
          />
        </Card>
        <Card>

          <Button
            title='Feedback'
            large
            icon={{ name: 'feedback' }}
            backgroundColor='#F9A825'
            onPress={() => Linking.openURL(FEEDBACK_URL)}
          />
        </Card>
      </View>
    );
  }
}

export default connect(null, { clearLikedJobs })(SettingScreen);
