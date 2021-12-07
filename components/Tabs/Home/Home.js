import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from '../../Header/Header';
import UserQRCode from '../../UserQRCode/UserQRCode';
// import NavigationBar from '../../NavigationBar/NavigationBar';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header text="Retrocade" />
      <UserQRCode />
      {/* <NavigationBar navigation={navigation} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  },
});

export default Home;
