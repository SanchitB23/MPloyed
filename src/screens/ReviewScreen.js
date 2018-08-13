import React, { Component } from 'react';
import { View, Text, Linking, Image, ScrollView } from 'react-native';
import { Button, Card } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ReviewScreen extends Component {
  static navigationOptions =({ navigation }) => ({
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
    })
  renderLikedJobs() {
    return this.props.likedJob.map((job, i) => (
        <Card key={i} title={job.title}>
          <View style={{ height: 200 }}>
            <Image
              source={{ uri: job.company_logo }}
              resizeMode='center'
              style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 50 }}
            />
            <View style={styles.detailWrapper}>
              <Text style={styles.italics}>{job.company}</Text>
              <Text style={styles.italics}>{job.created_at}</Text>
            </View>
            <Button
              title='Apply Now'
              backgroundColor='#03A9F4'
              onPress={() => Linking.openURL(job.url)}
            />
          </View>
        </Card>
      )
    );
  }
  render() {
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
