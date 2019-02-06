import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';
import styles from '../styles/Style';

export default class DataStoreCell extends React.Component {

    onItemClick() {
        this.props.navigation.navigate('Detail', { personel: this.props.personel });
    }

    deleteData() {
        this.props.fsDatabase.doc(this.props.personel.key).delete().then(() => {
            Alert.alert('Firebase App', 'Personel silindi !');            
        })
        .catch((error) => {
            console.error(error);
            Alert.alert('Firebase App', 'Personel silinemedi !');
        });
    }

    render() {
        const rbtns = [
            {
                text: 'Sil',
                backgroundColor: 'red',
                underlayColor: 'gray',
                onPress: () => { this.deleteData(); }
            }
        ];

        
        const lbtns = [
            {
                text: 'Detay',
                backgroundColor: 'blue',
                underlayColor: 'gray',
                onPress: () => { this.onItemClick(); }
            }
        ];

        return (
        <Swipeout right={rbtns} left={lbtns} autoClose backgroundColor='transparent'>
            <TouchableOpacity style={styles.containerStyle} onPress={() => { this.onItemClick(); }}>
                <Text style={[styles.textStyle, styles.boldStyle]}>{this.props.personel.adi}</Text>
                <Text style={[styles.textStyle, styles.boldStyle]}>{this.props.personel.soyadi}</Text>
                <Text style={[styles.textStyle]}>{this.props.personel.sicil}</Text>
                <Text style={[styles.textStyle]}>{this.props.personel.telefon}</Text>
                <Text style={[styles.textStyle]}>{this.props.personel.birim}</Text>
            </TouchableOpacity>
        </Swipeout>);
    }
}

