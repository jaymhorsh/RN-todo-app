import CustomTabBar from '@/components/CustomTabBar';
import { useThemeStore } from '@/store/themeStore';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

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

      <Tabs.Screen
        name="upcoming"
        options={{ tabBarIcon: ({ color }) => <MaterialIcons size={28} name="calendar-today" color={color} /> }}
      />

      <Tabs.Screen name="filter" options={{ tabBarIcon: ({ color }) => <MaterialIcons size={28} name="filter-list" color={color} /> }} />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="inbox" color={color} />,
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
