import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Tabs/Home/Home';
import Profile from './components/Tabs/Profile/Profile';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Camera from './components/Tabs/Camera/Camera';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setUser();
  }, []);

  const setUser = () => {
    setCurrentUser({
      "id": 23882190,
      "firstName": "Jesus",
      "lastName": "Mendoza",
      "email": "jesus@mendoza.com",
      "code": "jesus&mendoza"
    });
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
