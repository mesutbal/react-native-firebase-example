import React from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import * as fconfig from '../../assets/configs/firebase.json';
import DataStoreCell from './DataStoreCell.js';
import Moment from 'moment';


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
            const { Adi, Soyadi, Sicil, Telefon, Birim, DogumTarihi } = item.data();
            const dvalue = DogumTarihi ? Moment(DogumTarihi).format('DD/MM/YYYY') : '';
            _personels.push({
                key: item.id,
                doc: item,
                adi: Adi,
                soyadi: Soyadi,
                sicil: Sicil,
                telefon: Telefon,
                birim: Birim,
                dogumtarihi: dvalue
            });
        });        
        //console.log(_personels);
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

    onRefreshData() {
        this.setState({ loading: true });
        //this.loadData();
        //this.setState({ loading: false });
    }

    renderList() {
        return (<FlatList 
            refreshing={this.state.loading}
            onRefresh={() => this.onRefreshData()}
            data={this.state.personels}
            keyExtractor={(item, index) => `list-item${index}`}
            renderItem={({ item }) => <DataStoreCell navigation={this.props.navigation} personel={item} fsDatabase={this.fsDatabase} />}
        />);
    }

    render() {
        if (this.state.loading) {
            return this.renderLoading();
        }
        return this.renderList();
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
