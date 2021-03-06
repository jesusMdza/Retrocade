import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Bar = ({ title, points, file }) => {
  return (
    <View style={styles.view}>
      <Image source={file} />
      <View style={styles.textView}>
        <Text style={styles.title}>{ title }</Text>
      </View>
      <View style={styles.pointsView}>
        <Text style={styles.points}>{points} pt</Text>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#2D2D33',
    paddingVertical: 19,
    paddingHorizontal: 18,
    marginBottom: 8,
    maxHeight: 66
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 14
  },
  title: {
    justifyContent: 'flex-start',
    color: '#fff',
    fontFamily: 'SpaceMono_700Bold',
    fontSize: 14
  },
  pointsView: {
    flexDirection: 'row'
  },
  points: {
    fontSize: 12,
    color: '#8B8B8D',
    fontFamily: 'SpaceMono_400Regular',
  }
});

export default Bar;
