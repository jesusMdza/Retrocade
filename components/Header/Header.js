import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ text }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
    color: 'red'
  },
});

export default Header;
