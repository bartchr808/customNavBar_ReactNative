import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navBar: {
    flex: 1
  },
  body: {
    flex: 8
  }
});

export default class MyNav extends Component {
  constructor(props) {
    super(props);
    this.state={route: [props.initialPage]}; // create a list of routes consisting of (as of right now) key value objects of key and title
    this.push=this.push.bind(this); // sets "this" of push to be MyNav
    this.pop=this.pop.bind(this); // as above

  }

  push(nextRoute) { // add route to end of list and set new route state
    this.setState({route: this.state.route.concat(nextRoute)});
  }

  pop() { // take off the last route and set new route state
    this.setState({route: this.state.route.slice(0, this.state.route.length -1)});
  }

  render() {
    return (

      <View style={styles.container}>
        <View style={styles.navBar}>
          {this.props.renderNavBar(this.state.route[this.state.route.length-1], this)} // passes in last route in list and MyNav component
        </View>
        <View style={styles.body}>
          {this.props.renderPage(this.state.route[this.state.route.length-1], this)} // passes in last route in list and MyNav component
        </View>
      </View>
    );
  }
}
