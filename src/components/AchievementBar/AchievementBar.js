import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const AchievementBar = ({ badge, title, points }) => {
  return (
    <View style={styles.badgeContainer}>
      <Image src="" />
      <Text>A Gamer Has Emerged</Text>
      <View style={styles.points}>
        <Text>{points}</Text>
        <Text>pt</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 35,
    color: '#fff',
  },
});

export default AchievementBar;
