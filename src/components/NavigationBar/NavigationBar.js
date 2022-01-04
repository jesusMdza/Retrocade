import React, { useState } from 'react';
import { StyleSheet, View, Image, Modal, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';

import UserQRCode from '../UserQRCode/UserQRCode';

const NavigationBar = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.view}>
      <TouchableOpacity>
        <Image style={styles.profileImage} source={require('../../assets/profileImage.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsModalVisible(true)}>
        <Image style={styles.qrIcon} source={require('../../assets/qrIcon.png')} />
      </TouchableOpacity>
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <TouchableOpacity style={styles.centeredView} onPressOut={() => setIsModalVisible(false)}>
          <TouchableWithoutFeedback>
            <View style={styles.modal}>
              <Text style={styles.modalText}>Member Code</Text>
              <UserQRCode />
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 4,
    left: 0,
  },
  qrIcon: {
    width: 28,
    height: 28,
    right: 0
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(6, 6, 6, 0.5)'
  },
  modal: {
    padding: 50,
    backgroundColor: '#222226',
    borderRadius: 4,
    justifyContent: 'center'
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
    marginBottom: 30,
    fontFamily: 'SpaceMono_700Bold'
  }
});

export default NavigationBar;
