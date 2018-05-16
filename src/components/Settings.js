import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { Card, LoginSection, Button, Confirm, Background } from './common';
import { Image } from 'react-native';
import PhotoUpload from 'react-native-photo-upload';

class Settings extends Component {
  state = { showModal: false };

  render() {
    return (
      <Background>
        <PhotoUpload
          onPhotoSelect={avatar => {
            if (avatar) {
              console.log('Image base64 string: ', avatar)
            }
          }}
        >
          <Image
            style={{
              paddingVertical: 30,
              width: 150,
              height: 150,
              borderRadius: 75
            }}
            resizeMode='cover'
            source={{
              uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
            }}
          />
        </PhotoUpload>
      </Background>
    );
  }

}
export default Settings;