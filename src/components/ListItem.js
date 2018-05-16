//Компонент поста
import React, { Component } from 'react';
import { 
    Text,
    TouchableWithoutFeedback,
    View,
    TouchableOpacity
 } from 'react-native';
 import { Actions } from 'react-native-router-flux';
import { Button, LoginSection,CardSection,Card, FeedButton } from './common';
import { eventJoin } from '../actions/EventActions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Swipeable from 'react-native-swipeable';

class ListItem extends Component {
    state = {
        rightActionActivated: false,
        toggle: false
      };

      onButtonPress() {
        Actions.Detailed({ event: this.props.event });
    }

    render() {
        const {rightActionActivated, toggle} = this.state;

        const { name , date, location , tag , description } = this.props.event;

        return(
                  <Card>
                      <View style={styles.container}>
                          <View style={styles.header}>
                              <View style={styles.subsection1}>
                                  <View style={styles.photo}>
                                  </View>
                                  
                                  <View style={styles.mainInfo}>
                                      <View style={styles.name}>
                                          <Text style={styles.nameStyle}>
                                               {name}
                                          </Text>
                                      </View>
                                      
                                      <View style={styles.LocDate}>
                                          <View style={styles.location}>
                                              <Text>
                                                  {location}
                                              </Text>
                                          </View>
                                          
                                          <View style={styles.date}>
                                              <Text>
                                                  {date}
                                              </Text>
                                          </View>
                                      </View>
                                  </View>
                              </View>
                              
                              <Text style={styles.description}>
                                  {description}
                              </Text>
                          </View>
                          
                          <View style={styles.image}>
                          </View>
                          
                          <View style={styles.footer}>
                              <FeedButton onPress={eventJoin(this.props.event )}> Join </FeedButton>
                          </View>
                      </View>
                      <LoginSection>
            <Button onPress={this.onButtonPress.bind(this)}> Details... </Button>
            </LoginSection>
                  </Card>
        );
    }
}


const styles ={
    container: {
      flex: 1,
      backgroundColor: '#fff',

    },
    header: {
      padding: 10,
    },
    subsection1: {
      flexDirection: 'row',
    },
    photo: {
      height: 50,
      width: 50,
      backgroundColor: 'lightblue',
      borderRadius: 25,
    },
    mainInfo: {
      paddingLeft: 10,
    },
    name: {
      
    },
    nameStyle: {
      fontSize: 20,
      color: '#2699fb',
    },
    LocDate: {
      flexDirection: 'row',
    },
    location: {
      marginRight: '7%',
    },
    date: {
      
    },
    description: {
      color: '#454545',
      marginTop: '3%',
    },
    image: {
      height: 200,
      flex: 1,
      backgroundColor: 'lightblue',
    },
    footer: {
      
    },
};

export default ListItem;


