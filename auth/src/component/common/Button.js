// @flow
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, buttonText }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>
                {buttonText}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingBottom: 10,
        paddingTop: 10,
        elevation: 3
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        elevation: 2
    }
};

export { Button };
