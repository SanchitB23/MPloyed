import React, { Component } from 'react';
import { View, Text, Linking, ScrollView, Platform } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import * as actions from '../actions';

class ReviewScreen extends Component {
  static navigationOptions =({ navigation }) => ({
    // tabBarLabel: 'Review',
    // BUG: Not able to set tab related stuff coz of stacknavigator
    headerTitle: 'Review Jobs',
    headerRight: (
      <Button
        title='Settings'
        tabBarLabel='Settings'
        onPress={() => navigation.navigate('settings')}
        color="rgba(0,122,255,1)"
        backgroundColor="rgba(0,0,0,0)"
      />
    ),
      // headerStyle: {
      //   // marginTop: Platform.OS === 'android' ? 24 : 0
      // }
    })
  renderLikedJobs() {
    return this.props.likedJob.map((job, i) => {
      console.log(job);
      const initialRegion = {
        longitude: -122,
        latitude: 37,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
      };
      return (
        <Card key={i} title='Title'>
          <View style={{ height: 200 }}>
            <MapView
              style={{ flex: 1 }}
              cacheEnabled={Platform.OS === 'android'}
              scrollEnabled={false}
              initialRegion={initialRegion}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>Company</Text>
              <Text style={styles.italics}>Date</Text>
            </View>
            <Button
              title='Appply Now'
              backgroundColor='#03A9F4'
              onPress={() => Linking.openURL(job.url)}
            />
          </View>
        </Card>
      );
      }
    );
  }
  render() {
    console.log('ReviewScreen');
    console.log('Data', this.props.likedJob);
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    );
  }
}

function mapStateToProps({ likedJob }) {
  return { likedJob };
}
export default connect(mapStateToProps, actions)(ReviewScreen);

const styles = {
  detailWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  italics: {
    fontStyle: 'italic'
  }
};
