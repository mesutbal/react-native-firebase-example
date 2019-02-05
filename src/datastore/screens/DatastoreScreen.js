import React from 'react';
import { View, Linking } from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import DataStoreList from './DataStoreList';


const DataStoreScreen = createStackNavigator(
    {
        List: { 
            screen: ({ navigation }) => (
                <DataStoreList style={{ padding: 10 }} navigation={navigation} />),
            navigationOptions: ({ navigation }) => ({
                title: 'Müşteri Listesi',
                headerTitle: 'Müşteri Listesi',
                headerBackTitle: 'Geri',
                headerTransparent: false,
                headerLeft: () => (<Entypo.Button 
                    name="menu"
                    size={40}
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    color="gray"
                    onPress={() => { navigation.dispatch(DrawerActions.openDrawer()); }}
                />),
                headerRight: (<View style={{ paddingRight: 0 }}><Entypo.Button 
                    name="add-user"
                    size={30}
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    color="gray"
                    onPress={() => { Linking.openURL('https://firebase.google.com/docs/database/'); }}
                /></View>)
            })
        }
    }, 
    {
        headerBackTitleVisible: true,
        headerLayoutPreset: 'center'
    });

export default DataStoreScreen;
