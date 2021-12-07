import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../../Header/Header';
import QRCode from '../../QRCode/QRCode';
import NavigationBar from '../../NavigationBar/NavigationBar';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text="Retrocade" />
      <QRCode />
      <NavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingTop: 50
  },
});

export default Home;
