import React from 'react';
import { View, Linking } from 'react-native';
import { createStackNavigator, DrawerActions } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import LoginPage from '../pages/LoginPage';
import UserPage from '../pages/UserPage';


const AuthenticationScreen = createStackNavigator(
    {
        LoginPage: { 
            screen: ({ navigation }) => (
                <LoginPage style={{ padding: 10 }} navigation={navigation} />),
            navigationOptions: ({ navigation }) => ({
                title: 'Authentication',
                headerTitle: 'Authentication',
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
                    onPress={() => { Linking.openURL('https://firebase.google.com/docs/auth/'); }}
                /></View>)
            })
        },
        UserPage: { 
            screen: ({ navigation }) => (
                <UserPage style={{ padding: 10 }} navigation={navigation} />),
            navigationOptions: () => ({
                title: 'User Info',
                headerTitle: 'User Info',
                headerTitleAllowFontScaling: true,
                headerBackTitle: 'Geri',
                headerTransparent: false,
                headerRight: (<View style={{ paddingRight: 0 }}><Entypo.Button 
                    name="link"
                    size={30}
                    backgroundColor="transparent"
                    underlayColor="transparent"
                    color="gray"
                    onPress={() => { Linking.openURL('https://firebase.google.com/docs/auth/'); }}
                /></View>)
            })
        }
    }, 
    {
        initialRouteName: 'LoginPage',
        headerBackTitleVisible: true,
        headerLayoutPreset: 'center'
    });

export default AuthenticationScreen;
