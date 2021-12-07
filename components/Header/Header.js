import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={[{ fontFamily: 'PressStart2P', fontSize: 30 }, styles.text]}>{ text }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  text: {
    color: 'red',
    paddingTop: 20,
    paddingBottom: 130
  },
});

export default Header;
