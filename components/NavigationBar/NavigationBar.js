import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const NavigationBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.tab}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.tab}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={() =>
          navigation.navigate('Camera')
        }
        style={styles.button} 
      >
        <Text style={styles.tab}>Scan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 'auto',
    justifyContent: 'space-evenly'
  },
  tab: {
    padding: 13,
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default NavigationBar;
