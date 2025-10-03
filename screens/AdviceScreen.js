import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AdviceScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>🤖 Tư Vấn AI</Text>
      <Text style={styles.subtitle}>AI sẽ phân tích loại da của bạn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#2e7d32", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#555", textAlign: "center" },
});
