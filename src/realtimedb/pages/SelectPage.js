import React from 'react';
import { View, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default class SelectPage extends React.Component {

    firebaseApp = {};
    rtDatabase = {};

    componentWillMount() {
       /* if (!firebase.apps.length) {
            firebase.initializeApp(fconfig);
        } 
        this.firebaseApp = firebase.apps[0];
        this.rtDatabase = this.firebaseApp.database().ref('Users');
        this.rtDatabase.push({ title: 'Eyüp Can Dündar' });*/
    }

    playGame(selectedrole) {
        this.props.navigation.navigate('GamePage', { role: selectedrole });
    }

    render() {
        return (
        <View style={styles.containerStyle}>
            <View style={styles.iconStyle}>
            <Entypo.Button 
                name="heart"
                size={150}
                backgroundColor="transparent"
                underlayColor="transparent"
                color="red"
                style={styles.iconStyle}
                onPress={() => { this.playGame('heart'); }}
            />
            </View>
            <View style={styles.iconStyle}>
            <Entypo.Button 
                name="star-outlined"
                size={150}
                backgroundColor="transparent"
                underlayColor="transparent"
                color="blue"
                style={styles.iconStyle}
                onPress={() => { this.playGame('star'); }}
            />
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconStyle: {
        padding: 10,
        flex: 1
    }
});
