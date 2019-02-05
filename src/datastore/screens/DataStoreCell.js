import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/Style';

export default class DataStoreCell extends React.Component {
    onItemClick() {
        this.props.navigation.navigate('Detail', { personel: this.props.personel });
    }

    render() {
        return (
        <TouchableOpacity style={styles.containerStyle} onPress={() => { this.onItemClick(); }}>
            <Text style={[styles.textStyle, styles.boldStyle]}>{this.props.personel.adi}</Text>
            <Text style={[styles.textStyle, styles.boldStyle]}>{this.props.personel.soyadi}</Text>
            <Text style={[styles.textStyle]}>{this.props.personel.sicil}</Text>
            <Text style={[styles.textStyle]}>{this.props.personel.telefon}</Text>
            <Text style={[styles.textStyle]}>{this.props.personel.birim}</Text>
        </TouchableOpacity>);
    }
}


