import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {

  // HACK: This renders only when in last slide
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="Onwards!"
          raised
          onPress={this.props.onComplete}
          buttonStyle={styles.buttonStyle} //custom Style args for nativebaseelements
        />
      );
    }
  }
  renderSlides() {
    return this.props.data.map((slide, index) => (
        <View
          key={slide.text}
          style={[styles.slide, { backgroundColor: slide.color }]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      ));
  }

  render() {
    return (
    <ScrollView
      horizontal //NOTE: scroll L to R
      pagingEnabled // NOTE: Don't stop scroll in the middle
      style={{ flex: 1 }}
    >
      {this.renderSlides()}
    </ScrollView>
  );
  }
}

const styles = {
  slideText: {
    fontSize: 30,
    color: 'white'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  buttonStyle: {
    backgroundColor: '#0288D1',
  }
};

export default Slides;
