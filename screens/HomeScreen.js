import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f0fdf4" />
      <ImageBackground
        source={require("../assets/home.png")}
        style={styles.background}
        resizeMode="cover"
      >
        {/* Top Navigation */}
        {/* Hero Section */}F
        <View style={styles.hero}>
          <Text style={styles.title}>
            Chăm Sóc{"\n"}Da Thông{"\n"}Minh
          </Text>
          <Text style={styles.subtitle}>Với Công Nghệ AI</Text>
          <Text style={styles.description}>
            Khám phá quy trình chăm sóc {"\n"}da cá nhân hóa được thiết kế{"\n"}
            riêng cho bạn
          </Text>
          <TouchableOpacity
            style={styles.startButton}
            onPress={() => {
              // Navigate to your skin analysis or onboarding screen
              // navigation.navigate("Analysis");
            }}
          >
            <Text style={styles.startText}>Bắt đầu ngay</Text>
          </TouchableOpacity>
        </View>
        {/* Section 2 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tư Vấn AI Chuyên Nghiệp</Text>
          <Text style={styles.sectionDesc}>
            Hệ thống AI của chúng tôi sẽ phân tích loại da và đưa ra lời khuyên
            chăm sóc da phù hợp nhất
          </Text>

        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Phân Tích Da</Text>
          <Text style={styles.sectionDesc}>
            AI phân tích ảnh da của bạn để xác định loại da và các vấn đề hiện
            tại
          </Text>
                    <TouchableOpacity
            style={styles.startButton1}
            onPress={() => {
              // Navigate to your skin analysis or onboarding screen
              // navigation.navigate("Analysis");
            }}
          >
            <Text style={styles.startText}>Bắt đầu ngay</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tư Vấn AI Chuyên Nghiệp</Text>
          <Text style={styles.sectionDesc}>
            Hệ thống AI của chúng tôi sẽ phân tích loại da và đưa ra lời khuyên
            chăm sóc da phù hợp nhất
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    paddingTop: 48, // Added extra padding for status bar
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent overlay
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#22c55e",
  },
  loginButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  loginText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  hero: {
    padding: 24,
    marginTop: 20,
  },
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#166534",
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 24,
    color: "#22c55e",
    marginBottom: 12,
    fontWeight: "600",
  },
  description: {
    fontSize: 20,
    color: "#374151",
    marginBottom: 24,
    lineHeight: 26,
  },
  startButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 32,
    alignItems: "center",
    alignSelf: "flex-start",
    shadowColor: "#22c55e",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  startButton1: {
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 32,
    alignItems: "center",
    alignSelf: "flex-start",
    shadowColor: "#22c55e",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    alignSelf: "center",
    paddingTop: 10,
    marginTop: 20,
  },
  startText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  section: {
    padding: 24,
    marginTop: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    marginHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    display: "flex",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#166534",
    marginBottom: 8,
    alignItems: "center",
  },
  sectionDesc: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
    alignItems: "center",
    textAlign: "center",
  },
});
