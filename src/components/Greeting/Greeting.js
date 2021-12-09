import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Greeting = ({ currentUser }) => {
  const { firstName, totalPoints } = currentUser;

  return (
    <View style={styles.view}>
      <Text style={styles.headline}>{`Greetings, ${firstName}!`}</Text>
      <View>
        <Text style={styles.points}>{totalPoints}</Text>
        <Text style={styles.abbreviation}>pt</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingTop: 65,
    paddingBottom: 83,
    alignItems: 'center'
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
  }
});

export default Greeting;
