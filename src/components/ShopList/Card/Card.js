import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const Card = ({ title, points, src }) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={require('../../../assets/shopItem.png')}/>
      <View style={styles.content}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.points}>Cost: { points } pt</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    // flex: 1,
    flexDirection: 'column',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#2D2D33',
    paddingVertical: 19,
    paddingHorizontal: 18,
    marginBottom: 8,
    height: 'auto'
  },
  title: {
    justifyContent: 'flex-start',
    color: '#fff',
    fontFamily: 'SpaceMono_700Bold',
    fontSize: 14
  },
  points: {
    fontSize: 12,
    color: '#8B8B8D',
    fontFamily: 'SpaceMono_400Regular',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  image: {
    flex: 1,
    width: 'auto',
    height: 100,
  }
});

export default Card;
