import React from 'react';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';

export default class DataStoreDetail extends React.Component {

    state = {
        adi: '',
        soyadi: '',
        sicil: '',
        telefon: '',
        birim: ''
    }

    render() {
        return (
        <ScrollView style={{ flex: 1, backgroundColor: 'blue' }} >
            <TextInput 
                label="Adı"
                value={this.state.text}
                onChangeText={adi => this.setState({ adi })}
            />
        </ScrollView>);
    }
}
