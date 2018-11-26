import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
// import { MapView } from 'expo';
import { Card, Button, Icon } from 'react-native-elements';
import * as actions from '../actions';
import Swipe from '../components/Swipe';

// let latitude = '';
// let longitude = '';
class DeckScreen extends Component {
  static navigationOptions = {
    title: 'Jobs',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="description" size={30} color={tintColor} />
    )
  }
  renderCard(job) {
    // const initialRegion = {
    //   longitude,
    //   latitude,
    //   latitudeDelta: 0.045,
    //   longitudeDelta: 0.02
    // };
    return (
      <Card
        title={job.title}
      >
        <View style={{ height: 300 }}>
          {/*           <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          /> */
          }
          <Image style={{ flex: 1 }} source={{ uri: job.company_logo }} resizeMode='center' />
        </View>
        <View style={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.created_at}</Text>
        </View>
        <Text>{job.description}</Text>
      </Card>
    );
  }
  renderNoMoreCards = () => (
    <Card
      title="No More Jobs"
    >
      <Button
        title='Back to Map'
        large
        icon={{ name: 'my-location' }}
        onPress={() => this.props.navigation.navigate('map')}
      />
    </Card>
  )
  render() {
    // latitude = this.props.navigation.getParam('lat', 28.632744);
    // longitude = this.props.navigation.getParam('long', 77.219597);
    console.log('DeckScreen');
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
    marginVertical: 10
  }
};
