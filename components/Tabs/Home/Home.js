import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../../Header/Header';
import UserQRCode from '../../UserQRCode/UserQRCode';
import TabBarBackground from '../../TabBarBackground/TabBarBackground';
// import NavigationBar from '../../NavigationBar/NavigationBar';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text="Retrocade" />
      <UserQRCode />
      <TabBarBackground />
      {/* <NavigationBar navigation={navigation} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#16161f',
    paddingTop: 50
  },
  tabBar: {
    width: 300,
    height: 300,
    position: 'absolute'
  }
});

export default Home;
