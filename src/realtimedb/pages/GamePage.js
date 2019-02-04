import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import firebase from 'firebase';
import * as fconfig from '../../assets/configs/firebase.json';

export default class GamePage extends React.Component {
    state = {
        role: '',
        durum: ['', '', '', '', '', '', '', '', '']
    }

    firebaseApp = {};
    rtDatabase = {};

    setDurum(index) {
        const yenidizi = [...this.state.durum];

        if (yenidizi[index] !== '') {
            yenidizi[index] = '';
        } else {
            yenidizi[index] = this.state.role;
        }
        
        this.rtDatabase.push({ Index: index, Role: yenidizi[index] });

        this.setState({ durum: yenidizi });
    }

    setDurumRemote(index, role) {
        const yenidizi = [...this.state.durum];

        if (yenidizi[index] !== '') {
            yenidizi[index] = '';
        } else {
            yenidizi[index] = role;
        }

        this.setState({ durum: yenidizi });
    }

    renderItem(index) {
        if (this.state.durum[index] === 'heart') {
            return (<Entypo.Button 
                name="heart"
                size={50}
                backgroundColor="transparent"
                underlayColor="transparent"
                color="red"
                style={styles.iconStyle}
            />);
        }
        
        if (this.state.durum[index] === 'star') {
            return (<Entypo.Button 
                name="star-outlined"
                size={50}
                backgroundColor="transparent"
                underlayColor="transparent"
                color="blue"
                style={styles.iconStyle}
            />);
        }
    }

    componentWillMount() {
        console.log(this.props.navigation.state.params.role);
        this.setState({ role: this.props.navigation.state.params.role });

        if (!firebase.apps.length) {
            firebase.initializeApp(fconfig);
        } 
        console.log(fconfig);
        this.firebaseApp = firebase.apps[0];
        this.rtDatabase = this.firebaseApp.database().ref('Durum');
        this.rtDatabase.remove();

        this.rtDatabase.orderByKey().limitToLast(1).on('child_added', (snapshot) => {
            if (snapshot.val()) {
                const item = snapshot.val();
                this.setDurumRemote(item.Index, item.Role);
            }
        });
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <View style={[styles.satirStyle]}>
                    <TouchableOpacity 
                        onPress={() => { this.setDurum(0); }}
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag, styles.alt]} 
                    >
                    { this.renderItem(0) }
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => { this.setDurum(1); }}
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag, styles.alt]} 
                    >
                    { this.renderItem(1) }
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => { this.setDurum(2); }}
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.alt]} 
                    >
                    { this.renderItem(2) }
                    </TouchableOpacity>
                </View>
                <View style={styles.satirStyle}>
                    <TouchableOpacity 
                        onPress={() => { this.setDurum(3); }}
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag, styles.alt]} 
                    >
                    { this.renderItem(3) }
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => { this.setDurum(4); }}
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag, styles.alt]} 
                    >
                    { this.renderItem(4) }
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => { this.setDurum(5); }}
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.alt]} 
                    >
                    { this.renderItem(5) }
                    </TouchableOpacity>
                </View>
                <View style={styles.satirStyle}>
                    <TouchableOpacity 
                        onPress={() => { this.setDurum(6); }}
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag]} 
                    >
                    { this.renderItem(6) }
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => { this.setDurum(7); }}
                        activeOpacity={1} 
                        style={[styles.cellStyle, styles.sag]} 
                    >
                    { this.renderItem(7) }
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => { this.setDurum(8); }}
                        activeOpacity={1} 
                        style={[styles.cellStyle]} 
                    >
                    { this.renderItem(8) }
                    </TouchableOpacity>
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
        flex: 1,
        justifyContent: 'center'
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
    },
    iconStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
});
