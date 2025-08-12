import React from 'react';
import { View, Modal, ActivityIndicator, StyleSheet } from 'react-native';
const Loader = ({ modalVisible, setModalVisible }: { modalVisible: boolean; setModalVisible: (visible: boolean) => void }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator color="#000" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'transparent',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: 'transparent',
    elevation: 5,
  },
});

export default Loader;
