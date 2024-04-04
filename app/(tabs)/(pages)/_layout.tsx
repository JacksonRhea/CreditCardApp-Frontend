import { Tabs, usePathname } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function AppLayout() {

  const isActive = (path: string) => {
    const pathName = usePathname();
    return path == pathName;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          tabBarIcon: () => (
            <View>
              <Text>Home</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Settings"
        options={{
          title: "Settings",
          tabBarIcon: () => (
            <View>
              <Text>Settings</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
