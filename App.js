import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import Entypo from 'react-native-vector-icons/Entypo';
import AuthenticationScreen from './src/authentication/screens/AuthenticationScreen';
import RealtimeDbScreen from './src/realtimedb/screens/RealtimeDbScreen';
import DatastoreScreen from './src/datastore/screens/DatastoreScreen';


const Drawer = createDrawerNavigator({
  Authentication: {
    screen: AuthenticationScreen,
    navigationOptions: {
      title: 'Firebase Authentication',
      drawerIcon: (<Entypo 
        name="login"
        size={20}
        backgroundColor="transparent"
        color="gray"
      />)
    }
  },
  Datastore: {
    screen: DatastoreScreen,
    navigationOptions: {
      title: 'Firebase Datastore',
      drawerIcon: (<Entypo 
        name="database"
        size={20}
        backgroundColor="transparent"
        color="gray"
      />)
    }
  },
  RealtimeDb: {
    screen: RealtimeDbScreen,
    navigationOptions: {
      title: 'Firebase Realtime Database',
      drawerIcon: (<Entypo 
        name="hour-glass"
        size={20}
        backgroundColor="transparent"
        color="gray"
      />)
    }
  }
}, {
  drawerWidth: 300,
  drawerType: 'slide',
  contentOptions: {
    activeTintColor: '#e91e63',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1
    },
    inactiveLabelStyle: {
      fontFamily: 'micnrwb'
    }
  }
});

const AppContainer = createAppContainer(Drawer);

//export default AppContainer;

export default class App extends React.Component {
  render() {
    return (
      <PaperProvider>
        <AppContainer />
      </PaperProvider>
    );
  }
}
