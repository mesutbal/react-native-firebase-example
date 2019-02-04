import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export default class GamePage extends React.Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={[styles.satirStyle]}>
                    <TouchableOpacity 
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag, styles.alt]} 
                    />
                    <TouchableOpacity 
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag, styles.alt]} 
                    />
                    <TouchableOpacity 
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.alt]} 
                    />
                </View>
                <View style={styles.satirStyle}>
                    <TouchableOpacity 
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag, styles.alt]} 
                    />
                    <TouchableOpacity 
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag, styles.alt]} 
                    />
                    <TouchableOpacity 
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.alt]} 
                    />
                </View>
                <View style={styles.satirStyle}>
                    <TouchableOpacity 
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag]} 
                    />
                    <TouchableOpacity 
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag]} 
                    />
                    <TouchableOpacity 
                        activeOpacity={1} 
                        style={[styles.cellStyle]} 
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        padding: 20
    },
    satirStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    cellStyle: {
        flex: 1
    },
    sag: {
        borderRightWidth: 5,
        borderRightColor: 'black'
    },
    sol: {
        borderLeftWidth: 5,
        borderLeftColor: 'black'
    },
    alt: {
        borderBottomWidth: 5,
        borderBottomColor: 'black'
    }
});
