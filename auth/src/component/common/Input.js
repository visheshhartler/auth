import React from 'react';
import { View, TextInput, Text } from 'react-native';

const Input = ({ placeholderText, label, onChaneText, SecureTextEntry }) => {
    const { containerStyle, labelStyle, inputStyle } = styles
    return(
      <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
            secureTextEntry={SecureTextEntry}
            placeholder={placeholderText}
            autoCorrect= {false}
            onChange={onChaneText} 
            style={ inputStyle }/>
      </View>
    );
};

const styles = {
    inputStyle: {
        color: '#444444',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontWeight: '600',
        color: '#666666',        
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };