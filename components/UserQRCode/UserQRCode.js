import React from 'react';
import { StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const UserQRCode = () => {
  return (
    <View style={styles.container}>
      <QRCode
        value="jesus@mendoza.com"
        size={180}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  QRCode: {
    width: 200,
    height: 200,
  }
});

export default UserQRCode;
