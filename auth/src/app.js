// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {

    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyB5S8TrDFCnq9se0zlJa1M9_ZLD6B1XzOA",
            authDomain: "auth-d2a99.firebaseapp.com",
            databaseURL: "https://auth-d2a99.firebaseio.com",
            projectId: "auth-d2a99",
            storageBucket: "auth-d2a99.appspot.com",
            messagingSenderId: "1069700577436"
        });

        firebase.auth().onAuthStateChanged((user) => {
           if (user){
               this.setState({ loggedIn: true });
           } else {
               this.setState({loggedIn: false});
           }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
            return (
                <CardSection>
                <Button buttonText="Log Out" onPress={() => firebase.auth().signOut()}/>
                </CardSection>
            );
            case false:
            return <LoginForm />;
            default:
            return <Spinner size="large"/>
        }
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;