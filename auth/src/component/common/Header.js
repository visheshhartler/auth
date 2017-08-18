// @flow
import React from 'react';
import { Text, View } from 'react-native';
//Make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}> { props.headerText } </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    padding: 15,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20,
    color: '#007aff',
    fontFamily: 'Asap Condensed'
  }
};

// Make the component available to other parts of the app
export {Header};
