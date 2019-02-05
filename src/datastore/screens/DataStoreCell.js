import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/Style';

export default class DataStoreCell extends React.Component {
    render() {
        return (
        <TouchableOpacity style={styles.containerStyle}>
            <Text style={[styles.textStyle, styles.boldStyle]}>{this.props.personel.adi}</Text>
            <Text style={[styles.textStyle, styles.boldStyle]}>{this.props.personel.soyadi}</Text>
            <Text style={[styles.textStyle]}>{this.props.personel.sicil}</Text>
            <Text style={[styles.textStyle]}>{this.props.personel.telefon}</Text>
            <Text style={[styles.textStyle]}>{this.props.personel.birim}</Text>
        </TouchableOpacity>);
    }
}


