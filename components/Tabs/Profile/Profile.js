import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import NavigationBar from '../../NavigationBar/NavigationBar';
import Header from '../../Header/Header';

const Profile = ({ navigation, currentUser }) => {
  return (
    <View style={styles.container}>
      <Header text={`Profile`}/>
      <Image src="" style={styles.profilePicture} />
      <NavigationBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingTop: 50,
  },
  profilePicture: {
    width: 20,
    height: 20,
  }
});

export default Profile;
