/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class navBar extends Component {
  render() {
    return (
    <MyNav renderPage={this.renderPage} initialPage={{key="one"}}/>
    );
  }

  renderPage(route, navigator){
    if (route.key == "one") {
      return <View style={{backgroundColor: 'red', flex: 1}}/>
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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

AppRegistry.registerComponent('navBar', () => navBar);
