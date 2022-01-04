import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const UserQRCode = () => {
  return (
      <View style={styles.outerBox}>
        <QRCode
          value="jesus@mendoza.com"
          size={180}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  outerBox: {
    width: 206,
    height: 206,
    backgroundColor: '#fff',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  code: {
    position: 'relative'
  }
});

export default UserQRCode;
