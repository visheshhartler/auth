import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email,password } = this.state;
        console.log( 'email:' + email );
        console.log( 'password:' + password );
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch( (err) => {
            console.log(err);
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch( (err) => {
                    console.log(err);
                    this.setState({ error: err.message });
                })
        });
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                     placeholderText="user@gmail.com"
                     label="Email"
                     onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                   
                <CardSection>
                 <Input 
                    SecureTextEntry
                    placeholderText="password"
                    label="Password"
                    onChangeText={password => this.setState({ password })}
                     />
                </CardSection>

                <Text style={styles.errorStyle}>
                {this.state.error}
                </Text>

                <CardSection>
                    <Button 
                    onPress={this.onButtonPress.bind(this)}
                    buttonText="Log In" />
                </CardSection>

          </Card>
        );
    }
}

const styles = {
    errorStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }  
};

export default LoginForm;