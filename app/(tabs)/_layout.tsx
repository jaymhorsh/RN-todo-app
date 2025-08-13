import CustomTabBar from '@/components/CustomTabBar';
import { useThemeStore } from '@/store/themeStore';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import Octicons from '@expo/vector-icons/Octicons';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayout() {
  const { themeColor } = useThemeStore();
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: themeColor,
        tabBarInactiveTintColor: '#888',
        headerShown: false,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
        }}
      />

      <Tabs.Screen name="upcoming" options={{ tabBarIcon: ({ color }) => <MaterialIcons size={24} name="inbox" color={color} /> }} />

      <Tabs.Screen name="filter" options={{ tabBarIcon: ({ color }) => <Octicons name="apps" size={24} color={color} /> }} />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="briefcase" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="settings" color={color} />,
        }}
      />
    </Tabs>
  );
}
