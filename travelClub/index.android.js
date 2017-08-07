// Index.android.js place code here for Android

// Import library to help create a component
import React from 'react';
import {
  View,
  AppRegistry
} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/albumList';

// Create a component
const App = () => {
  return (
    <View>
    <Header headerText={'Albums'} />
    <AlbumList />
    </View>
  );
};

// Render the component
AppRegistry.registerComponent('travelClub', () => App);
