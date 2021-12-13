import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import Bar from './Bar/Bar';

const AchievementList = ({ currentUser }) => {
  const { achievements } = currentUser;

  return (
    <View style={styles.view}>
      <Text style={styles.text}>Achievements</Text>
      <FlatList 
        style={styles.list}
        data={achievements}
        renderItem={({ item }) => (<Bar badgeSrc={item.badgeSrc} title={item.title} points={item.points} />)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    alignItems: 'stretch',
    paddingBottom: 18
  },
  text: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'SpaceMono_700Bold',
    paddingBottom: 12
  }
});

export default AchievementList;
