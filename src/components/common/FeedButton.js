import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const FeedButton = ({ onPress, children }) => {
    const { buttonStyle , textStyle } = styles;

        return (
         <TouchableOpacity onPress={onPress} style={buttonStyle}>
         <Text style={textStyle}>
         {children}
         </Text>
         </TouchableOpacity>
        );
    };

const styles = {
    textStyle: {
        color: '#2699fb',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
    },
    buttonStyle: {
        flex: 1,
        padding: 10,
    }
};

export { FeedButton };