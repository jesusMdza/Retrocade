import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import Greeting from '../../components/Greeting/Greeting';
import AchievementList from '../../components/AchievementList/AchievementList';
import ShopList from '../../components/ShopList/ShopList';
import NavigationBar from '../../components/NavigationBar/NavigationBar';

const Home = ({ currentUser, navigation, inventoryData }) => {
  return (
      <View style={styles.view}>
        <NavigationBar />
        <ScrollView>
          <Greeting currentUser={currentUser} />
          <AchievementList currentUser={currentUser} />
          <ShopList inventoryData={inventoryData} />
        </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#121114',
    paddingTop: 34,
    paddingLeft: 16,
    paddingRight: 16
  }
});

export default Home;
