import React, { Component } from 'react';
import { Image, View } from 'react-native';

export default class Movies extends Component {
  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <Image source={{uri: 'https://c1.staticflickr.com/8/7167/6540479079_16e97a624a_b.jpg'}}
          style={{width: 375, height: 300}}/>
      </View>
    );
  }
}
