import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-paper';
import firebase from 'firebase';


export default class UserPage extends React.Component {

    onButtonPress() {
        firebase.auth().signOut();
        //this.props.navigation.navigate('LoginPage');
        this.props.navigation.goBack();
    }

    render() {
        return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>{this.props.navigation.state.params.email}</Text>
            <Text style={styles.textStyle}>{this.props.navigation.state.params.password}</Text>
            <Button 
                icon="lock" 
                mode="outlined" 
                onPress={this.onButtonPress.bind(this)}
            >
                ÇIKIŞ YAP
            </Button>
        </View>);
    }
}


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        padding: 20
    },
    textStyle: {
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'micnrwb',
        fontSize: 20
    }
});
