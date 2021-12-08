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
    fontSize: 35,
    color: '#cef246',
    paddingTop: 20,
    paddingBottom: 100,
    textTransform: 'uppercase',
    fontFamily: 'Orbitron_900Black'
  },
});

export default Header;
