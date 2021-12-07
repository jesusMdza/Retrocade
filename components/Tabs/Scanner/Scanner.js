import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const Scanner = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    console.log("requesting for camera permission");
  }
  if (hasPermission === false) {
    console.log("No access to camera");
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    flex: 1,
    flexDirection: 'column'
  },
  // layerTop: {
  //   flex: 2,
  //   backgroundColor: opacity
  // },
  // layerCenter: {
  //   flex: 1,
  //   flexDirection: 'row'
  // },
  // layerLeft: {
  //   flex: 1,
  //   backgroundColor: opacity
  // },
  // focused: {
  //   flex: 3
  // },
  // layerRight: {
  //   flex: 1,
  //   backgroundColor: opacity
  // },
  // layerBottom: {
  //   flex: 2,
  //   backgroundColor: opacity
  // },
});

export default Scanner;
