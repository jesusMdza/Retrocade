import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Orbitron_900Black } from '@expo-google-fonts/orbitron';
import { Teko_300Light, Teko_400Regular, Teko_500Medium} from '@expo-google-fonts/teko';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import Home from './components/Tabs/Home/Home';
import Scan from './components/Tabs/Scan/Scan';
import Profile from './components/Tabs/Profile/Profile';
import fakeData from './Data/User.json';
import NavigationBar from './components/NavigationBar/NavigationBar';

const Tab = createBottomTabNavigator();

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [database, setDatabase] = useState([]);

  let [fontsLoaded] = useFonts({
    Orbitron_900Black,
    Teko_300Light,
    Teko_400Regular,
    Teko_500Medium
  });

  useEffect(() => {
    setUser();
    fetchData();
  }, []);

  const fetchData = () => {
    const allData = [];
    Object.keys(fakeData).map(key => allData.push(fakeData[key]));
    setDatabase(allData);
  }

  const setUser = () => {
    setCurrentUser({
      "id": 23882190,
      "firstName": "Jesus",
      "lastName": "Mendoza",
      "email": "jesus@mendoza.com",
      "code": "jesus&mendoza"
    });
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Tab.Navigator 
          tabBar={props => <NavigationBar {...props} />}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: { background: 'transparent', backgroundColor: '#0f1421', position: 'absolute', bottom: 10, border: 'none', }
          })}
        >
          <Tab.Screen name="Home">
            { props => <Home {...props} currentUser={currentUser} /> }
          </Tab.Screen>
          <Tab.Screen name="Profile">
            { props => <Profile {...props} currentUser={currentUser} /> }
          </Tab.Screen>
          <Tab.Screen name="Scan">
            { props => <Scan {...props} database={database} currentUser={currentUser} /> }
          </Tab.Screen>
        </Tab.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    );
  }
}

export default App;
