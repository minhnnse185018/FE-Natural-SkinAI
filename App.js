import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";

function AdviceScreen() {
  return (
    <View style={styles.center}>
      <Image
        source={require("./assets/home.png")}
        style={[styles.logo, { height: 100, width: 100 }]}
      />
    </View>
  );
}

function RoutineScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>⚙️ Quy Trình Chăm Sóc</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>👤 Hồ Sơ Người Dùng</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const Header = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const MenuDropdown = () => (
    <Modal
      transparent={true}
      visible={menuVisible}
      onRequestClose={() => setMenuVisible(false)}
      animationType="fade"
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        activeOpacity={1}
        onPress={() => setMenuVisible(false)}
      >
        <View style={styles.dropdownMenu}>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>Trang Chủ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>Tư Vấn AI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>Quy Trình</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>Về Chúng Tôi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => {
              setMenuVisible(false);
            }}
          >
            <Text style={styles.menuText}>Gói Mua Hàng</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={require("./assets/logo.png")} style={styles.logo} />
        <Text style={styles.headerTitle}>NaturalSkinAI</Text>
      </View>

      {/* Right side */}
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Đăng Nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Ionicons name="menu" size={38} color="#000000ff" />
        </TouchableOpacity>
      </View>
      <MenuDropdown />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          header: () => <Header />,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Trang Chủ") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Tư Vấn AI") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            } else if (route.name === "Quy Trình") {
              iconName = focused ? "construct" : "construct-outline";
            } else if (route.name === "Hồ Sơ") {
              iconName = focused ? "person" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Trang Chủ" component={HomeScreen} />
        <Tab.Screen name="Tư Vấn AI" component={AdviceScreen} />
        <Tab.Screen name="Quy Trình" component={RoutineScreen} />
        <Tab.Screen name="Hồ Sơ" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 10,
  },
  subtitle: { fontSize: 16, color: "#555", textAlign: "center" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // 👈 split left & right
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2e7d32",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10, // 👈 small space between button and menu icon
  },
  headerButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    minWidth: 70,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  headerButtonText: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 18,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  dropdownMenu: {
    position: "absolute",
    top: 90, // Adjust this value based on your header height
    right: 20,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    minWidth: 180,
  },
  menuItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuText: {
    fontSize: 16,
    color: "#333",
  },
});
