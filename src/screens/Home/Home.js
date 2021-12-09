import React from 'react';
import { StyleSheet, View } from 'react-native';

import Greeting from '../../components/Greeting/Greeting';
import AchievementList from '../../components/AchievementList/AchievementList';

const Home = ({ currentUser }) => {
  return (
    <View style={styles.view}>
      <Greeting currentUser={currentUser} />
      <AchievementList currentUser={currentUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#121114',
    paddingTop: 50,
    paddingLeft: 16,
    paddingRight: 16,
  }
});

export default Home;
