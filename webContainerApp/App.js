/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

type Props = {};
export default class App extends Component<Props> {
  onMessage = (event) => {
    const {title, message} = JSON.parse(event.nativeEvent.data)
    Alert.alert(
      title,
      message,
      [],
      { cancelable: true }
    );
  }

  render() {
    const params = 'platform='+Platform.OS;
    const sourceUri = 'http://romimate.com/';

    return (
      <View style={styles.container}>
        <WebView          
          source={{ uri: sourceUri }}
          style={{ marginTop: 50 }} 
          javaScriptEnabled={true}
          originWhitelist={['*']}
          allowFileAccess={true}
          onMessage={this.onMessage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});