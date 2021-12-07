import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Orbitron_900Black } from '@expo-google-fonts/orbitron';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons'; 
import AppLoading from 'expo-app-loading';

import Home from './components/Tabs/Home/Home';
import Scan from './components/Tabs/Scan/Scan';
import Profile from './components/Tabs/Profile/Profile';
import fakeData from './Data/User.json';

const Tab = createBottomTabNavigator();

const App = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [database, setDatabase] = useState([]);

  let [fontsLoaded] = useFonts({
    Orbitron_900Black
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
          tabBar={props => <MyTabBar {...props} />}
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let icon;
              switch(route.name) {
                case "Home": icon = <MaterialCommunityIcons name="gamepad-round-outline" size={24} color="black" />
                case "Profile": icon = <AntDesign name="user" size={24} color="black" />
                case "Scan": icon = <Ionicons name="md-scan-sharp" size={24} color="black" />
              }
              return icon;
            },
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

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.customTabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}
          >
            <View style={styles.dummyIcon} />
            <Text style={styles.tabButtonText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  customTabBar: {
    width: 'auto',
    flexDirection: 'row',
    backgroundColor: '#cef246',
  },
  tabButton: {
    flex: 1, 
    alignItems: 'center',
    paddingBottom: 25,
  },
  tabButtonText: {
    color: '#000',
    paddingTop: 8
  },
  dummyIcon: {
    width: 25,
    height: 25,
    backgroundColor: '#000'
  }
});

export default App;
