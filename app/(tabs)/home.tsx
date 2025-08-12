import { useLogout } from '@/hooks/auth/useAuth';
import { useAuthStore } from '@/store/authStore';
import { useThemeStore } from '@/store/themeStore';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  const router = useRouter();
  const { themeColor } = useThemeStore();
  const { user } = useAuthStore();
  const { logout } = useLogout();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: logout },
      ]
    );
  };

  const handleSettingsPress = () => {
    router.push('/screens/settings');
  };

  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const today = now.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
    return `Today • ${today}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="mt-8 mb-8">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-3xl font-sf-bold text-neutral-primary mb-2">
                Welcome back, {user?.firstName || 'User'}!
              </Text>
              <Text className="text-base font-sf-regular text-neutral-secondary">
                Best platform for creating to-do lists.
              </Text>
            </View>
            <View className="flex-row items-center">
              {/* User Avatar */}
              <TouchableOpacity className="mr-3">
                <Image 
                  source={user?.image ? { uri: user.image } : require('@/assets/logo.png')} 
                  className="w-10 h-10 rounded-full"
                />
              </TouchableOpacity>
              {/* Settings */}
              <TouchableOpacity 
                className="mr-3"
                onPress={handleSettingsPress}
              >
                <MaterialIcons name="settings" size={24} color="#767E8C" />
              </TouchableOpacity>
              {/* Logout */}
              <TouchableOpacity onPress={handleLogout}>
                <MaterialIcons name="logout" size={24} color="#FF6B6B" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* User Info Card */}
        <View className="mb-6">
          <View className="bg-gray-50 rounded-2xl p-4 border border-neutral-line">
            <View className="flex-row items-center">
              <Image 
                source={user?.image ? { uri: user.image } : require('@/assets/logo.png')} 
                className="w-16 h-16 rounded-full mr-4"
              />
              <View className="flex-1">
                <Text className="text-lg font-sf-bold text-neutral-primary">
                  {user?.firstName} {user?.lastName}
                </Text>
                <Text className="text-sm font-sf-regular text-neutral-secondary">
                  @{user?.username}
                </Text>
                <Text className="text-sm font-sf-regular text-neutral-secondary">
                  {user?.email}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Main Content Card */}
        <View className="flex-1 justify-center">
          <View className="bg-white rounded-2xl shadow-sm border border-neutral-line overflow-hidden">
            {/* Theme Color Header */}
            <View 
              className="h-20 w-full items-center justify-center flex-row"
              style={{ backgroundColor: themeColor }}
            >
              <View className="w-12 h-12 rounded-full bg-white items-center justify-center mr-3">
                <MaterialIcons name="add" size={24} color={themeColor} />
              </View>
              <Text className="text-white text-lg font-sf-medium">
                Tap plus to create a new task
              </Text>
            </View>
            {/* Card Body */}
            <View className="p-6">
              <View className="flex-row items-center justify-between">
                <Text className="text-neutral-secondary font-sf-regular">Add your task</Text>
                <Text className="text-neutral-secondary font-sf-regular">{getCurrentDateTime()}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
