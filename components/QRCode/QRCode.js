import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const QRCode = () => {
  
  return (
    <View style={styles.container}>
      <Image 
        style={styles.QRCode}
        source={{
          uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=jesusmendoza'
        }}
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

export default QRCode;
