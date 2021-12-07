import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Tabs/Home/Home';
import Scanner from './components/Tabs/Scanner/Scanner';
import Profile from './components/Tabs/Profile/Profile';

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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile">
          { props => <Profile {...props} currentUser={currentUser} /> }
        </Stack.Screen>
        <Stack.Screen name="Scanner" component={Scanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
