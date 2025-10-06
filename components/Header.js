import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MenuDropdown } from "./MenuDropdown";
import styles from "./styles";

export const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        <Text style={styles.headerTitle}>NaturalSkinAI</Text>
      </View>

      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => console.log("Login pressed")}
        >
          <Text style={styles.headerButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setIsMenuVisible(true)}
          style={styles.menuButton}
        >
          <Ionicons name="menu" size={28} color="#000" />
        </TouchableOpacity>
      </View>

      <MenuDropdown
        visible={isMenuVisible}
        onClose={() => setIsMenuVisible(false)}
      />
    </View>
  );
};

export default Header;
