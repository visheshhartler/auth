// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB5S8TrDFCnq9se0zlJa1M9_ZLD6B1XzOA",
            authDomain: "auth-d2a99.firebaseapp.com",
            databaseURL: "https://auth-d2a99.firebaseio.com",
            projectId: "auth-d2a99",
            storageBucket: "auth-d2a99.appspot.com",
            messagingSenderId: "1069700577436"
        });
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;