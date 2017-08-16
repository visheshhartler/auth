import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {

    state = { text: '' };

    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                     label="Email"
                     onChangeText={ (text) => this.setState( text )}
                   />
                </CardSection>
                <CardSection></CardSection>
                <CardSection>
                    <Button buttonText="Log In" />
            </CardSection>
          </Card>
        );
    }

}

export default LoginForm;