import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Text = ({ type }) => {
  return (
    <View style={styles.view}>
      <Text style={styles[type]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  primaryBold: {
    color: '#fff',
    fontSize: 14,
    fontFamily: "SpaceMono_700Bold",
  },
  primaryRegular: {

  },
  secondaryBold: {
    color: '#8B8B8D',
    fontSize: 13,
    fontFamily: "SpaceMono_700Bold",
  },
  secondaryRegular: {

  }
});

export default Text;
