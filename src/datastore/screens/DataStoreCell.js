import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DataStoreCell extends React.Component {
    render() {
        return (<View style={styles.containerStyle}>
            <Text style={[styles.textStyle, styles.boldStyle]}>{this.props.personel.adi}</Text>
            <Text style={[styles.textStyle, styles.boldStyle]}>{this.props.personel.soyadi}</Text>
            <Text style={[styles.textStyle]}>{this.props.personel.sicil}</Text>
            <Text style={[styles.textStyle]}>{this.props.personel.telefon}</Text>
            <Text style={[styles.textStyle]}>{this.props.personel.birim}</Text>
        </View>);
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginRight: 16,
        marginLeft: 16,
        marginTop: 5,
        marginBottom: 5
    },
    boldStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red'
    },  
    textStyle: {
        marginBottom: 10 
    }
});
