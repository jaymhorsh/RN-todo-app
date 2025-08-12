import { Stack } from 'expo-router';
import React from 'react';

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Settings',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="account"
        options={{
          title: 'Account',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="theme"
        options={{
          title: 'Theme',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="app-icon"
        options={{
          title: 'App Icon',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="help-center"
        options={{
          title: 'Help Center',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
