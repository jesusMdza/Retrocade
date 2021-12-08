import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../../Header/Header';
import UserQRCode from '../../UserQRCode/UserQRCode';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text="Retrocade" />
      <UserQRCode />
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
