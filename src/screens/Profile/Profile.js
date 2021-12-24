import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import NavigationBar from '../../components/NavigationBar/NavigationBar';

const Profile = ({ navigation, currentUser }) => {
  return (
    <View style={styles.view}>
      <Image src="" style={styles.profilePicture} />
      <Text style={styles.subtitle}>{ currentUser.firstName }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#0f1421',
    paddingTop: 34,
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
