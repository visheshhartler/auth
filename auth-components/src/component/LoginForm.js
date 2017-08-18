import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email,password } = this.state;
        this.setState({ error: '', loading: true });
        console.log( 'email:' + email );
        console.log( 'password:' + password );
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch( (err) => {
            console.log(err);
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch( (err) => {
                    console.log(err);
                    this.setState({ error: err.message });
                })
        });
    }

    renderButton(){
        if (this.state.loading) {
            return <Spinner size='small' />;
        } else {
            return(
                <Button 
                 onPress={this.onButtonPress.bind(this)}
                buttonText="Log In" />
            );
        }
    }

    onLoginSuccess(){
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                     placeholderText="user@gmail.com"
                     label="Email"
                     value={this.state.email}
                     onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                   
                <CardSection>
                 <Input 
                    SecureTextEntry
                    placeholderText="password"
                    label="Password"
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                     />
                </CardSection>

                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                   {this.renderButton()}
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