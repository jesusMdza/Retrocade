import React from 'react';
import { StyleSheet, View } from 'react-native';

const TabBarBackground = () => {
  return (
    <View style={styles.tabBar} />
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 100,
    transform: [{ scale: 35 }],
    backgroundColor: '#cef246',
    position: 'absolute',
    left: 130,
    top: 2280
  }
});

export default TabBarBackground;
