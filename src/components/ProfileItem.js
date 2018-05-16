import React, { Component } from 'react';
import {
      Text,
      TouchableWithoutFeedback,
      View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { ProfileButton, CardSection, ProfileSection, ProfileCard } from './common';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { ProfileStyles } from './common';
import UserAvatar from 'react-native-user-avatar';

class ProfileItem extends Component {

      onButtonPress1() {
            Actions.userEdit({ userInfo: this.props.userInfo });
      }

      onButtonPress2() {
            Actions.Settings();
      }
      onButtonPress3() {
            Actions.Joined();
      }
      onButtonPress4() {
            Actions.Created();
      }

      render() {

            const { name, surname, age, location, hobby } = this.props.userInfo;

            return (
                  <ProfileCard>
                        <View style={styles.header}>
                              <View style={styles.edit}>
                                    <EvilIcons onPress={this.onButtonPress1.bind(this)} name='pencil' color='#2699fb' size={36} />
                              </View>

                              <View style={styles.settings}>
                                    <EvilIcons onPress={this.onButtonPress2.bind(this)} name='gear' color='#2699fb' size={36} />
                              </View>
                        </View>
                        <View style={styles.body}>
                              <View style={styles.userPhoto}>
                                    <UserAvatar name={name + surname} size={100} />
                              </View>

                              <View style={styles.userName}>
                                    <Text style={styles.nameStyle}>
                                          {name} {surname}
                                    </Text>
                              </View>

                              <View style={styles.userInfo}>
                                    <View style={styles.userLocation}>
                                          <Text style={styles.infoStyle}>
                                                {location},
                                    </Text>
                                    </View>

                                    <View style={styles.userAge}>
                                          <Text style={styles.infoStyle}>
                                                {age}
                                          </Text>
                                    </View>
                              </View>

                              <View style={styles.description}>
                                    <Text style={styles.descriptionStyle}>
                                          {hobby}
                                    </Text>
                              </View>

                              <View style={styles.buttons}>
                                    <View style={styles.b1}>
                                          <ProfileButton onPress={this.onButtonPress3.bind(this)}>JOINED</ProfileButton>
                                    </View>

                                    <View style={styles.b2}>
                                          <ProfileButton onPress={this.onButtonPress4.bind(this)}>CREATED</ProfileButton>
                                    </View>

                                    <View style={styles.b1}>
                                          <ProfileButton>CHALLENGES</ProfileButton>
                                    </View>
                              </View>
                        </View>
                  </ProfileCard>
            );
      }
}


const styles = {
      header: {
            flex: 1,
            flexDirection: 'row',
            padding: 10,
            marginBottom: 20,
      },
      edit: {
            flex: 1,
            alignItems: 'flex-start'
      },
      settings: {
            flex: 1,
            alignItems: 'flex-end'
      },
      body: {
            alignItems: 'center',
      },
      userPhoto: {
      },
      userName: {
      },
      userInfo: {
            flexDirection: 'row',
      },
      userLocation: {},
      userAge: {},
      description: {
            padding: '5%',
      },
      buttons: {
            marginTop: 20,
            flexDirection: 'row',
      },
      b1: {
      },
      b2: {
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderColor: '#bce0fd',
      },
      nameStyle: {
            color: '#2699fb',
            fontSize: 26,
            fontWeight: '600'
      },
      infoStyle: {
            color: '#2699fb',
            fontSize: 14,
      },
      descriptionStyle: {
            textAlign: 'center',
            color: '#2699fb',
            fontSize: 16,
      },
};

export default ProfileItem;


