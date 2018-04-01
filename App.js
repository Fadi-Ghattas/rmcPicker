/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MultiPicker from 'rmc-picker/lib/MultiPicker';
import Picker from 'rmc-picker/lib/Picker';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
		  <MultiPicker
			  selectedValue={['4', '12']}
			  onValueChange={(value)=>{}}
			  style={{height:400, width:'100%'}}
		  >
			  <Picker indicatorClassName="my-picker-indicator" style={{height:200}}>
				  <Picker.Item className="my-picker-view-item" value="1">one</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="2">two</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="3">three</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="4">four</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="5">five</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="6">six</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="7">seven</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="8">eight</Picker.Item>
			  </Picker>
			  <Picker indicatorClassName="my-picker-indicator">
				  <Picker.Item className="my-picker-view-item" value="11">eleven</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="12">twelve</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="13">thirteen</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="14">fourteen</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="15">fifteen</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="16">sixteen</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="17">seventeen</Picker.Item>
				  <Picker.Item className="my-picker-view-item" value="18">eighteen</Picker.Item>
			  </Picker>
		  </MultiPicker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
