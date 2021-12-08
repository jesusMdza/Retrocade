import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ShopBlock = ({ text }) => {
  return (
    <View style={styles.container}>
      <Image src="img" />
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
  },
});

export default ShopBlock;
