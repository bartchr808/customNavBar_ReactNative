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
  View,
  TouchableHighlight
} from 'react-native';
import MyNav from './MyNav';

export default class navBar extends Component {
  render() {
    return (
    <MyNav renderPage={this.renderPage} initialPage={{key:"one", title:"Page 1"}} renderNavBar={this.renderNavBar}/> // main Component that houses the navBar and Page
    );
  }

  renderPage(route, navigator){ // creates the page based on the route key which is assigned as a property in MyNav. Called in MyNav.js
    if (route.key == "one") {
      return <View style={{backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center'}}><TouchableHighlight onPress={() => navigator.push({key:"two", title:"Page 2"})}><Text>Hi there</Text></TouchableHighlight></View>
    }
    else if (route.key == "two") {
      return <View style={{backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Poop</Text></View>
    }
  }

  renderNavBar(currentRoute, navigator) { // creates the navBar based on the route title which is assigned as a property in MyNav. Called in MyNav.js
    return <View style={{backgroundColor: 'green', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
      <View style={{flex: 1}}>
        {currentRoute.key != "one" ? // if not first page, add back button
        <TouchableHighlight style={{flex:1, justifyContent: 'center', alignItems: 'center'}} onPress={navigator.pop}><Text style={{textAlign: 'center'}}>Back</Text></TouchableHighlight>: undefined}
      </View>
      <Text style={{flex:3, textAlign: 'center'}}>{currentRoute.title ? currentRoute.title : ''}</Text> // check if Title exists then add to avoid "undefined" title
      <View style={{flex:1}}/></View>
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
