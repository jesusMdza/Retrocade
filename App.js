import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './components/Tabs/Home/Home';
import Scanner from './components/Tabs/Scanner/Scanner';
import Profile from './components/Tabs/Profile/Profile';
import fakeData from './Data/User.json';

const Tab = createBottomTabNavigator();

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [database, setDatabase] = useState([]);

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

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home">
          { props => <Home {...props} currentUser={currentUser} /> }
        </Tab.Screen>
        <Tab.Screen name="Profile">
          { props => <Profile {...props} currentUser={currentUser} /> }
        </Tab.Screen>
        <Tab.Screen name="Scanner">
          { props => <Scanner {...props} database={database} currentUser={currentUser} /> }
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
