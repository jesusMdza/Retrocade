import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const UserQRCode = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan to Enter</Text>
      <View style={styles.outerBox}>
        <QRCode
          value="jesus@mendoza.com"
          size={180}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerBox: {
    width: 220,
    height: 220,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#b2b3b8',
    fontSize: 25,
    paddingBottom: 15,
    fontWeight: 'bold'
  },
  code: {
    position: 'relative',
    borderRadius: 10
  }
});

export default UserQRCode;
