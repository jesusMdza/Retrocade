import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import Card from './Card/Card';

const ShopList = ({ inventoryData }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>New In Shop</Text>

      <FlatList 
        style={styles.list}
        data={inventoryData}
        renderItem={({ item }) => (<Card badgeSrc={item.badgeSrc} title={item.title} points={item.points} />)}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    paddingBottom: 40,
  },
  text: {
    color: '#fff',
    fontSize: 13,
    fontFamily: 'SpaceMono_700Bold',
    paddingBottom: 12
  },
});

export default ShopList;
