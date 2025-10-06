import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import AdviceScreen from "../screens/AdviceScreen";
import RoutineScreen from "../screens/RoutineScreen";
import ProflieScreen from "../screens/ProflieScreen";
import Header from "../components/Header"; 


const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (
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
      <Tab.Screen name="Hồ Sơ" component={ProflieScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;