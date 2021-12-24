import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, SpaceMono_400Regular, SpaceMono_700Bold } from '@expo-google-fonts/space-mono';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';

import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';
import Scan from './src/screens/Scan/Scan';
import NavigationBar from './src/components/NavigationBar/NavigationBar';
import fakeUserData from './src/data/User.json';
import fakeAchievementData from './src/data/Achievement.js';
import fakeInventoryData from './src/data/Inventory.json';

const Stack = createNativeStackNavigator();

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [userData, setUserData] = useState([]);
  const [achievementData, setAchievementData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);

  let [fontsLoaded] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_700Bold,
  });

  useEffect(() => {
    fetchData();
    setUser();
  }, []);

  const fetchData = () => {
    let userData;
    let achievementData;
    let inventoryData;

    userData = Object.keys(fakeUserData).map(key => { return fakeUserData[key] });
    achievementData = Object.keys(fakeAchievementData).map(key => { return fakeAchievementData[key] });
    inventoryData = Object.keys(fakeInventoryData).map(key => { return fakeInventoryData[key] });

    setUserData(userData);
    setAchievementData(achievementData);
    setInventoryData(inventoryData);
  }

  const setUser = () => {
    let currentUser = {};
    let loginId = 23882190;
    const foundUser = fakeUserData.find(user => user.id === loginId);

    Object.keys(foundUser).forEach(key => {
      currentUser[key] = foundUser[key]
    });

    getUserAchievements(currentUser);
    setCurrentUser(currentUser);
  }

  const getUserAchievements = (user) => {
    user.achievements = [];
    const doesUserHaveAchievements = user.achievementIds.count != 0;

    if (doesUserHaveAchievements) {
      user.achievementIds.forEach(id => {
        const foundAchievement = fakeAchievementData.find(achievement => id == achievement.id);

        user.achievements.push(foundAchievement);
      });
    }
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          tabBar={props => <NavigationBar {...props} />}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: { background: 'transparent', backgroundColor: '#0f1421', position: 'absolute', bottom: 10, border: 'none', }
          })}
        >
          <Stack.Screen name="Home">
            { props => <Home {...props} currentUser={currentUser} inventoryData={inventoryData} /> }
          </Stack.Screen>
          <Stack.Screen name="Profile">
            { props => <Profile {...props} currentUser={currentUser} /> }
          </Stack.Screen>
          <Stack.Screen name="Scan">
            { props => <Scan {...props} userData={userData} currentUser={currentUser} /> }
          </Stack.Screen>
        </Stack.Navigator>
        <StatusBar style="light" />
      </NavigationContainer>
    );
  }
}

export default App;
