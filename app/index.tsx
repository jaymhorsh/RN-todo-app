import { useAuth } from '@/hooks/auth/useAuth';
import { Redirect } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';

const Page = () => {
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading spinner while checking auth state
  if (isLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  // Redirect based on authentication state
  if (isAuthenticated) {
    return <Redirect href="/(tabs)/home" />;
  } else {
    return <Redirect href="/(auth)/welcome" />;
  }
};

export default Page;
