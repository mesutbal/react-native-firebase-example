import React from 'react';
import { View, Linking } from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import SelectPage from '../pages/SelectPage';
import GamePage from '../pages/GamePage';


const RealtimeDbScreen = createStackNavigator(
    {
        SelectPage: { 
            screen: ({ navigation }) => (
                <SelectPage style={{ padding: 10 }} navigation={navigation} />),
            navigationOptions: ({ navigation }) => ({
                title: 'Select Your Role',
                headerTitle: 'Select Your Role',
                headerTitleAllowFontScaling: true,
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
                    name="link"
                    size={30}
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    color="gray"
                    onPress={() => { Linking.openURL('https://firebase.google.com/docs/database/'); }}
                /></View>)
            })
        },
        GamePage: { 
            screen: ({ navigation }) => (
                <GamePage style={{ padding: 10 }} navigation={navigation} />),
            navigationOptions: ({ navigation }) => ({
                title: 'Play The Game',
                headerTitle: `Play The Game [${navigation.state.params.role}]`,
                headerTitleAllowFontScaling: true,
                headerBackTitle: 'Geri',
                headerTransparent: false,
                headerRight: (<View style={{ paddingRight: 0 }}><Entypo.Button 
                    name="circle-with-cross"
                    size={30}
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    color="gray"
                    onPress={() => {}}
                /></View>)
            })
        }
    }, 
    {
        headerBackTitleVisible: true,
        headerLayoutPreset: 'center'
    });

export default RealtimeDbScreen;
