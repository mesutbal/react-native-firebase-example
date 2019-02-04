import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import firebase from 'firebase';
import * as fconfig from '../../assets/configs/firebase.json';


export default class LoginPage extends React.Component {
    state = {
        email: 'eyupcandundar@gmail.com',
        password: '123456',
        loading: false,
        loggedIn: false
    };

    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(fconfig);
        
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ loggedIn: true });
                } else {
                    this.setState({ loggedIn: false });
                }
            });
        }
    }

    onButtonPress() {
        if (this.state.loading === false) {
            const { email, password } = this.state;        
            this.setState({ error: '', loading: true });        
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
            });
        }
      }
    
      onLoginFail() {
        this.setState({ loading: false });
        Alert.alert('React Native', 'Kullanıcı adı ve/veya şifreniz hatalıdır !');
      }
    
      onLoginSuccess() {
        this.setState({ loading: false });
        this.props.navigation.navigate('UserPage', 
        { 
            email: this.state.email, 
            password: this.state.password 
        });
      }

    render() {
        return (
        <View style={styles.containerStyle}>
            <TextInput
                mode="outlined"
                style={styles.inputStyle}
                label='Email'
                value={this.state.email}
                editable={!this.state.loading}
                onChangeText={email => this.setState({ email })}
            />
            <TextInput
                secureTextEntry
                mode="outlined"
                style={styles.inputStyle}
                label='Password'
                value={this.state.password}
                editable={!this.state.loading}
                onChangeText={password => this.setState({ password })}
            />
            <Button 
                icon="input" 
                mode="contained" 
                loading={this.state.loading}
                onPress={this.onButtonPress.bind(this)}
            >
                Giriş Yap
            </Button>
        </View>);
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 20
    },
    inputStyle: {
        marginBottom: 20
    }
});
