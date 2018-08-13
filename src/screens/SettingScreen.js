import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card } from 'react-native-elements';
import { clearLikedJobs } from '../actions';

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
      </View>
    );
  }
}

export default connect(null, { clearLikedJobs })(SettingScreen);
