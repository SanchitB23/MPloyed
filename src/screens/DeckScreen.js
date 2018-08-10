import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Card } from 'react-native-elements';
import * as actions from '../actions';
import Swipe from '../components/Swipe';

let latitude = '';
let longitude = '';
class DeckScreen extends Component {
  renderCard(job) {
    // console.log('eck', latitude, longitude);
    const initialRegion = {
      longitude,
      latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };
    // console.log('card', job);
    return (
      <Card
        title={job.title}
      >
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.created_at}</Text>
        </View>
        <Text>Job Detail</Text>
      </Card>
        // {/* <View style={{ height: 300 }}>
        //   <MapView
        //     scrollEnabled={false}
        //     style={{ flex: 1 }}
        //     cacheEnabled={Platform.OS === 'android'}
        //     initialRegion={initialRegion}
        //   />
        //   </View>
        //   <View style={styles.detailWrapper}>
        //   <Text>{job.company}</Text>
        //   <Text>{job.formattedRelativeTime}</Text>
        //   </View>
        //   <Text>
        //   {job.snippet.replace(/<b>/g, '').replace(/<\/b/g, '')}
        // </Text> */}
        );
  }
  renderNoMoreCards() {
    return (
      <Card
        title="No More Jobs"
      />
    );
  }
  render() {
    latitude = this.props.navigation.getParam('lat', 28.632744);
    longitude = this.props.navigation.getParam('long', 77.219597);
    console.log('DeckScreen');
    // console.log('deck props', this.props.jobs);
    // BUG: Different Height depending on job description
    // FIXME: How to ^: Either set height of card or text height
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={job => this.props.likeJob(job)}
        />
      </View>
    );
  }
}

function mapStateToProps({ jobs }) {
  return { jobs: jobs.data };
}

export default connect(mapStateToProps, actions)(DeckScreen);
const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
};
