import React, { Component } from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { eventUpdate } from '../actions';
import { LoginSection, Input,Card,CardSection,Button } from './common';
import { eventJoin } from '../actions/EventActions';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

class Detailed extends Component {
    componentWillMount() {
        _.each(this.props.event, (value, prop) => {
            this.props.eventUpdate({ prop, value });
        });
     }
    render() {
        return (
      <View style={styles.container}>
         <Card>
           <LoginSection>
             <EvilIcons name='user' color='#000' size={36} />
             <Text style={styles.nameStyle}>
             {this.props.name}
             </Text>
             <Text style={styles.titleStyle}>
               date: {this.props.date}
             </Text>
             <Text style={styles.titleStyle}>
               location: {this.props.location}
             </Text>
           </LoginSection>
           
           <CardSection>
             <Text style={styles.titleStyle}>
                tag: {this.props.tag}
             </Text>
             <Text style={styles.titleStyle}>
                Description: {this.props.description}
             </Text>
           </CardSection>


           <LoginSection>
           <Button onPress={eventJoin(this.props.event )}> Join </Button>
           </LoginSection>
           </Card>
      </View>
        );
    }
}

const styles ={
    container: {
        flex:1
    }
};

const mapStateToProps = (state) => {
    const { name , date, location , tag , description } = state.eventForm;
  
    return { name , date, location , tag , description };
  };
  

export default connect(mapStateToProps,{eventUpdate})(Detailed);