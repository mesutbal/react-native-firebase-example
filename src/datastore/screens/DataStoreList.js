import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';


export default class DataStoreList extends React.Component {

    state = {
        loading: true
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
