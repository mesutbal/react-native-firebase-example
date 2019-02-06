import React, { createRef } from 'react';
import { ScrollView, StyleSheet, Alert, View, TouchableOpacity, Text, Keyboard } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import DateTimePicker from 'react-native-modal-datetime-picker';
import firebase from 'firebase';
import firestore from 'firebase/firestore';
import * as fconfig from '../../assets/configs/firebase.json';

export default class DataStoreDetail extends React.Component {

    state = {
        adi: '',
        soyadi: '',
        sicil: '',
        telefon: '',
        birim: '',
        dogumtarihi: undefined,
        open: false,
        personel: {},
        loading: false,
        mevcutkayit: false
    }

    fsDatabase = {};


    componentWillMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp(fconfig);
        }
        this.firebaseApp = firebase.apps[0];
        this.fsDatabase = firebase.firestore().collection('personel'); 

        
        if (this.props.navigation.state.params) {
            const personel = this.props.navigation.state.params.personel;
            this.setState({
                adi: personel.adi,
                soyadi: personel.soyadi,
                sicil: personel.sicil,
                telefon: personel.telefon,
                birim: personel.birim,
                dogumtarihi: undefined,
                mevcutkayit: true,
                personel
            });
        }
    }

    addPersonel() {
        this.fsDatabase.add({
            Adi: this.state.adi,
            Soyadi: this.state.soyadi,
            Sicil: this.state.sicil,
            Telefon: this.state.telefon,
            Birim: this.state.birim,
        }).then(() => {
            this.setState({ loading: false }); 
            this.props.navigation.goBack();
        })
        .catch((error) => {
            console.error(error);
            this.setState({ loading: false }); 
            Alert.alert('Firebase App', 'Personel eklenemedi !');
        });
    }

    updatePersonel() {
        console.log(this.state.personel);
        this.fsDatabase.doc(this.state.personel.key).set({
            Adi: this.state.adi,
            Soyadi: this.state.soyadi,
            Sicil: this.state.sicil,
            Telefon: this.state.telefon,
            Birim: this.state.birim,
        }).then(() => {
            this.setState({ loading: false }); 
            this.props.navigation.goBack();
        })
        .catch((error) => {
            console.error(error);
            this.setState({ loading: false }); 
            Alert.alert('Firebase App', 'Personel kaydedilemedi !');
        });
    }

    savePersonel() {
        this.setState({ loading: true });

        if (this.state.mevcutkayit) {
            this.updatePersonel();
        } else {
            this.addPersonel();
        }
    }


    handleChange = dogumtarihi => {
        this.handleClose();
        this.setState({ dogumtarihi });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleOpen = () => {
        Keyboard.dismiss();
        this.setState({ open: true });
    };

    renderTouchText = props => {
        const { style, value } = props;

        return (
            <TouchableOpacity onPress={this.handleOpen}>
                <Text style={style}>{value}</Text>
            </TouchableOpacity>
        );
    };

    render() {
        const { dogumtarihi, open } = this.state;
        const dvalue = dogumtarihi ? dogumtarihi.toLocaleString() : '';

        return (
        <ScrollView 
            style={{ flex: 1, padding: 20 }} 
            keyboardShouldPersistTaps='always'
            keyboardDismissMode={'interactive'}
        >
            <TextInput 
                mode="outlined"
                label="Personel Adı"
                value={this.state.adi}
                onChangeText={adi => this.setState({ adi })}
                style={styles.textStyle}
            />
            <TextInput 
                mode="outlined"
                label="Personel Soyadı"
                value={this.state.soyadi}
                onChangeText={soyadi => this.setState({ soyadi })}
                style={styles.textStyle}
            />
            <TextInput 
                mode="outlined"
                label="Sicil No"
                value={this.state.sicil}
                onChangeText={sicil => this.setState({ sicil })}
                style={styles.textStyle}
            />
            <TextInput 
                mode="outlined"
                label="Telefon"
                value={this.state.telefon}
                onChangeText={telefon => this.setState({ telefon })}
                style={styles.textStyle}
            />
            <TextInput 
                mode="outlined"
                label="Birim"
                value={this.state.birim}
                onChangeText={birim => this.setState({ birim })}
                style={styles.textStyle}
            />
            
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TextInput
                    mode='outlined'
                    label='Dogum Tarihi'
                    ref={this.textInput}
                    render={this.renderTouchText}
                    value={dvalue}
                    style={styles.textStyle}
                />
                <DateTimePicker
                    mode='date'
                    date={dogumtarihi}
                    isVisible={open}
                    onConfirm={this.handleChange}
                    onCancel={this.handleClose}
                />
            </View>

            <Button 
                style={styles.textStyle}
                loading={this.state.loading}
                icon="save"
                mode="contained"
                onPress={() => this.savePersonel()}
            >Personel Kaydet</Button>
        </ScrollView>);
    }
}

const styles = StyleSheet.create({
    textStyle: {
        marginTop: 10
    }
});
