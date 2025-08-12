import '@/styles/global.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NotifierWrapper } from 'react-native-notifier';
import 'react-native-reanimated';
import { queryClient } from '../utils/reactQueryClient';

export default function RootLayout() {
  SplashScreen.preventAutoHideAsync();

  // Load all SF Pro Display fonts
  const [loaded, error] = useFonts({
    'SFProDisplay-Regular': require('@assets/fonts/SFPRODISPLAYREGULAR.OTF'),
    'SFProDisplay-Medium': require('@assets/fonts/SFPRODISPLAYMEDIUM.OTF'),
    'SFProDisplay-Bold': require('@assets/fonts/SFPRODISPLAYBOLD.OTF'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NotifierWrapper>
        <QueryClientProvider client={queryClient}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </QueryClientProvider>
      </NotifierWrapper>
    </GestureHandlerRootView>
  );
}
