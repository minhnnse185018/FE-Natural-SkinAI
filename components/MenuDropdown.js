import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

export const MenuDropdown = ({ visible, onClose }) => {
  const menuItems = [
    { title: 'Trang Chủ', onPress: () => console.log('Home') },
    { title: 'Tư Vấn AI', onPress: () => console.log('Advice') },
    { title: 'Quy Trình', onPress: () => console.log('Routine') },
    { title: 'Hồ Sơ', onPress: () => console.log('Profile') },
  ];

  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={styles.dropdownMenu}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                item.onPress();
                onClose();
              }}
            >
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default MenuDropdown;