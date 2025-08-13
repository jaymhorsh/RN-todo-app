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

  const handleSettingsPress = () => {
    router.push('/settings');
  };

  // Get current date and time
  const getCurrentDateTime = () => {
    const now = new Date();
    const today = now.toLocaleDateString('en-US', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    return `Today .${today}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="mt-8 mb-8">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-3xl font-sf-bold text-neutral-primary mb-2">Today</Text>
              <Text className="text-base font-sf-regular text-neutral-secondary">Best platform for creating to-do lists.</Text>
            </View>
            <View className="flex-row items-center">
              {/* User Avatar */}
              <TouchableOpacity className="mr-3">
                <Image source={user?.image ? { uri: user?.image } : require('@/assets/Headshot.png')} className="w-10 h-10 rounded-full" />
              </TouchableOpacity>

              {/* Settings */}
              <TouchableOpacity className="mr-3" onPress={handleSettingsPress}>
                <MaterialIcons name="settings" size={24} color="#767E8C" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Usr info  */}
        </View>

        {/* Main Content Card */}
        <View className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Theme Color Header */}
          <View className="py-6 w-full items-center justify-center flex-row" style={{ backgroundColor: themeColor }} />
          {/* Card Body */}
          <View className="flex-row items-center gap-4 px-4" style={{ paddingVertical: 25 }}>
            <View className="w-8 h-8 rounded-md items-center justify-center" style={{ backgroundColor: themeColor }}>
              <MaterialIcons name="add" size={24} color="#ffffff" />
            </View>
            <Text className="text-black text-xl font-sf-semibold">Tap plus to create a new task</Text>
          </View>
          <View
            className="flex-row py-5 px-5 border-t border-neutral-100 items-center justify-between"
            style={{ paddingVertical: 15, marginHorizontal: 10 }}
          >
            <Text className="text-neutral-secondary font-sf-regular">Add your task</Text>
            <Text className="text-neutral-secondary font-sf-regular">{getCurrentDateTime()}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
