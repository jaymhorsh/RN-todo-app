import { useAuth } from '@/hooks/auth/useAuth';
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const { isLoading, isAuthenticated } = useAuth();
  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }
  // Correct: authenticated -> home, else -> welcome
  return <Redirect href={isAuthenticated ? '/home' : '/welcome'} />;
}
