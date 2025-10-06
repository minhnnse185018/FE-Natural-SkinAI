import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function RoutineScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>⚙️ Quy Trình Chăm Sóc</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", color: "#2e7d32", marginBottom: 10 },
});
