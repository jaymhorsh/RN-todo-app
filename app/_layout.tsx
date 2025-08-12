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
  
  // Set up network state listener
  // onlineManager.setEventListener((setOnline) => {
  //   const eventSubscription = Network.addNetworkStateListener((state) => {
  //     setOnline(!!state.isConnected);
  //   });
  //   return eventSubscription.remove;
  // });

  // function onAppStateChange(status: AppStateStatus) {
  //   if (Platform.OS !== 'web') {
  //     focusManager.setFocused(status === 'active');
  //   }
  // }
  // const [fontsLoaded, fontError] = useFonts({});
  // const splashHidden = useRef(false);

  // const hideSplashScreen = async () => {
  //   if (!splashHidden.current) {
  //     splashHidden.current = true;
  //     await SplashScreen.hideAsync();
  //   }
  // };

  // // Hide splash screen when fonts are ready or on error
  // useEffect(() => {
  //   if (fontsLoaded || fontError) {
  //     hideSplashScreen();
  //   }
  // }, [fontsLoaded, fontError]);

  // // Safety timeout - hide splash after 3 seconds regardless
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     hideSplashScreen();
  //   }, 3000);
  //   return () => clearTimeout(timeout);
  // }, []);

  // // Set up app state listener for React Query focus management
  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', onAppStateChange);
  //   return () => subscription.remove();
  // }, []);

  // // Don't render anything until fonts are loaded or timeout
  // // if (!fontsLoaded && !fontError) {
  // //   return null;
  // // }

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
