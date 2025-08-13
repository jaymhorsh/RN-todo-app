import { Stack } from 'expo-router';


export default function SettingsLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="account" options={{ headerShown: false }} />
      <Stack.Screen name="theme" options={{ headerShown: false }} />
      <Stack.Screen name="app-icon" options={{ headerShown: false }} />
      <Stack.Screen name="help-center" options={{ headerShown: false }} />
    </Stack>
  );
}
