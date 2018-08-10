import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';
import * as actions from '../actions';

class MapScreen extends Component {
  static navigationOptions={
    title: 'Map',
    tabBarIcon: () => (
      <Icon name="my-location" size={30} />
    )
  }
  state={
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }
  componentDidMount() {
    this.setState({ mapLoaded: true });
  }
  onRegionChangeComplete=(region) => {
    this.setState({ region });
  }
  onButtonPress=() => {
    console.log('seaarched');
    // console.log(this.state.region);
    this.props.fetchJobs(this.state.region, () => {
      this.props.navigation.navigate('deck', {
        lat: this.state.region.latitude,
        long: this.state.region.longitude
      });
    });
  }
  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator
            size="large"
          />
        </View>
      );
    }
    console.log('map');
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainer}>
          <Button
            large
            backgroundColor='#009688'
            title="Search This Area"
            icon={{ name: 'search' }}
            onPress={this.onButtonPress} //// NOTE: no need to bind if using arrow func
          />
        </View>
      </View>
    );
  }
}

export default connect(null, actions)(MapScreen);

const styles = {
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  }
};
