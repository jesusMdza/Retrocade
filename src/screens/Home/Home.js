import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

const Home = ({ currentUser }) => {
  const { firstName, totalPoints } = currentUser;

  return (
    <View style={styles.view}>
      <View style={styles.userIntroView}>
        <Text style={styles.headline}>{`Greetings, ${firstName}!`}</Text>
        <Text style={styles.pointsText}>{totalPoints}</Text>
      </View>

      <View style={styles.achievementView}>
        <Text style={styles.subheadline}>Achievements</Text>
        {/* <FlatList 
          data={}
          renderItem={() => <AchievementBar badge{} title={} points={} />}
        /> */}
      </View>
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
  },
  userIntroView: {
    flex: 1,
    paddingTop: 65,
    paddingBottom: 83,
    
  },
  achievementView: {
    flex: 1,
    alignItems: 'flex-start'
  },
  headline: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'SpaceMono_700Bold',
  },
  pointsText: {
    color: '#fff',
    fontSize: 48,
    fontFamily: 'SpaceMono_400Regular'
  },
  subheadline: {
    color: '#8B8B8D',
    fontSize: 13,
    fontFamily: 'SpaceMono_700Bold',
  }
});

export default Home;
