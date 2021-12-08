import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Header from '../../Header/Header';

const Profile = ({ navigation, currentUser }) => {
  return (
    <View style={styles.container}>
      <Header text={`Profile`} />
      <Image src="" style={styles.profilePicture} />
      <Text style={styles.subtitle}>{ currentUser.firstName }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1421',
    paddingTop: 50,
    alignItems: 'center'
  },
  subtitle: {
    flexDirection: 'row',
    fontSize: 30,
    color: '#fff'
  },
  profilePicture: {
    width: 80,
    height: 80,
    backgroundColor: 'gray',
    borderRadius: 100 / 2
  }
});

export default Profile;
