import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const Greeting = ({ currentUser }) => {
  const { firstName, totalPoints } = currentUser;

  return (
    <View style={styles.view}>
      <Image 
        style={styles.image}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} />
      <Text style={styles.headline}>{`Greetings, ${firstName}!`}</Text>
      <View style={styles.block}>
        <Text style={styles.points}>{totalPoints}</Text>
        <Text style={styles.abbreviation}>pt</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 70,
    paddingBottom: 80,
    alignItems: 'center',
  },
  achievementView: {
    alignItems: 'flex-start'
  },
  headline: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'SpaceMono_700Bold',
  },
  points: {
    color: '#fff',
    fontSize: 48,
    fontFamily: 'SpaceMono_400Regular'
  },
  abbreviation: {
    fontSize: 16,
    color: '#8B8B8D',
    fontFamily: 'SpaceMono_400Regular',
    position: 'absolute',
    right: -21,
    bottom: 10
  },
  image: {
    width: 46,
    height: 46,
    marginBottom: 21
  },
});

export default Greeting;
