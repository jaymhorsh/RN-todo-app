import { useAuthStore } from '@/store';
import '@/styles/global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NotifierWrapper } from 'react-native-notifier';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { queryClient } from '../utils/reactQueryClient';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { loadAuth } = useAuthStore();
  const scheme = useColorScheme();

  useEffect(() => {
    loadAuth();
  }, [loadAuth]);

  const [loaded, error] = useFonts({
    'SFProDisplay-Regular': require('@/assets/fonts/SFPRO-Regular.otf'),
    'SFProDisplay-Medium': require('@/assets/fonts/SFPRO-medium.otf'),
    'SFProDisplay-Bold': require('@/assets/fonts/SFPRO-bold.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  if (error) {
    console.error('Font loading error:', error);
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NotifierWrapper>
          <QueryClientProvider client={queryClient}>
            <Stack>
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="screens/settings" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} translucent />
          </QueryClientProvider>
        </NotifierWrapper>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
