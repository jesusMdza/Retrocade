import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import NavigationBar from '../../NavigationBar/NavigationBar';

const Profile = ({ navigation, currentUser }) => {
  return (
    <View style={styles.container}>
      <Text>Let's game, { currentUser.firstName }!</Text>
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
  },
  profilePicture: {
    width: 20,
    height: 20,
  }
});

export default Profile;
