import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import * as fconfig from '../../assets/configs/firebase.json';


export default class DataStoreList extends React.Component {

    state = {
        loading: true,
        personels: []
    }

    firebaseApp = {};
    fsDatabase = {};
    unsubscribe = null;

    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(fconfig);
        }
        this.firebaseApp = firebase.apps[0];

        //const settings = { timestampsInSnapshots: true };
        //firebase.firestore().settings(settings);

        this.fsDatabase = firebase.firestore().collection('personel'); 
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.unsubscribe = this.fsDatabase.onSnapshot(this.onUpdate);
    }

    onUpdate = (snapshot) => {
        console.log('onUpdate');
        // eslint-disable-next-line no-underscore-dangle
        const _personels = [];
        snapshot.forEach((item) => {
            const { adi, soyadi, sicil, telefon, birim } = item.data();
            _personels.push({
                key: item.id,
                doc: item,
                adi,
                soyadi,
                sicil,
                telefon,
                birim
            });
        });        
        this.setState({
            personels: _personels,
            loading: false
        });
    }

    renderLoading() {
        return (
        <View style={styles.containerStyle}>
            <View style={styles.subContainerStyle}>
                <Image 
                    style={styles.imageStyle}
                    source={require('../../assets/images/loader.gif')}
                />
                <Text style={styles.textStyle}>Yükleniyor...</Text>
            </View>
        </View>);
    }

    render() {
        if (this.state.loading) {
            return this.renderLoading();
        }
        return (<View style={{ flex: 1, backgroundColor: 'yellow' }} />);
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    subContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        resizeMode: 'contain'
    },
    textStyle: {
        fontSize: 16,
        marginTop: 10
    }
});
