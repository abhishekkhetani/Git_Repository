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
  Dimensions
} from 'react-native';
import Camera from 'react-native-camera';
import Button from 'react-native-smart-button';
import Toast from 'react-native-smart-loading-spinner-overlay';
import LoadingSpinnerOverlay from 'react-native-smart-loading-spinner-overlay';

//import request from 'superagent';
import 'whatwg-fetch';

export default class MyCamera extends Component {
  constructor(){
    super()
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Text style={styles.instructions}>
          {this.state.data}
        </Text>
		  <Camera
           ref={(cam) => {
             this.camera = cam;
           }}
           style={styles.preview}
           aspect={Camera.constants.Aspect.fill}>
           <Button
                    onPress={this.takePicture.bind(this)}
                    touchableType={Button.constants.touchableTypes.fadeContent}
                    style={{margin: 10, height: 40, backgroundColor: 'white', borderRadius: 3, borderWidth: StyleSheet.hairlineWidth, borderColor: 'white', alignSelf: 'stretch'}}
                    textStyle={{fontSize: 17, color: 'gray'}}>
                      Know me!
          </Button>

       </Camera>
       <LoadingSpinnerOverlay ref={ component => this._modalLoadingSpinnerOverLay = component }/>
      </View>

    );
  }


  takePicture(e) {
    e.preventDefault();
     this._modalLoadingSpinnerOverLay.show();
     this.camera.capture()
       .then((data) => this._showModalLoadingSpinnerOverLay(data))
       .catch(err => console.error(err));
 }

 _showModalLoadingSpinnerOverLay = (data) => {

    function checkStatus(response) {
      if (response.status >= 200 && response.status < 300) {
          return response;
      } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
    }

    function parseJSON(response) {
        return response.json();
    }

    var imageUri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg';
    var source = {
      imageUri : imageUri
    };
    var image = {
      source : source
    };
    var type = 'LABEL_DETECTION';
    var featuresElement = {
      type : type
    };
    var features = [featuresElement];
    var requestsElement = {
      image : image,
      features : features
    };
    var requests = [requestsElement];

    fetch('https://vision.googleapis.com/v1/images:annotate', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'request' : requests })
    })
      //.then(checkStatus)
      .then(function(response) {alert(response);})
      .catch(function(error) {
          console.log('request failed', error);
          alert(error.error.code);
    });

    setTimeout(
      () => { this._modalLoadingSpinnerOverLay.hide();
    }, 2000 );

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
  preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
   height: Dimensions.get('window').height,
   width: Dimensions.get('window').width,
 },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
  }
});

AppRegistry.registerComponent('MyCamera', () => MyCamera);
