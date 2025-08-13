import { useAuthStore } from '@/store/authStore';
import { useThemeStore } from '@/store/themeStore';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
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

  const displayName = user?.firstName ? `${user.firstName}${user.lastName ? ' ' + user.lastName : ''}` : user?.username || 'Guest';

  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
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
          {/* User info card */}
          {/* <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              padding: 16,
              marginTop: 12,
              shadowColor: '#000',
              shadowOpacity: 0.06,
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 8,
              elevation: 2,
              borderWidth: 1,
              borderColor: 'rgba(0,0,0,0.05)'
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={user?.image ? { uri: user.image } : require('@/assets/Headshot.png')}
                style={{ width: 56, height: 56, borderRadius: 28, marginRight: 14 }}
              />
              <View style={{ flex: 1 }}>
                <Text className="text-lg font-sf-semibold text-neutral-primary" numberOfLines={1}>
                  {greeting()}, {displayName}
                </Text>
                <Text className="text-xs font-sf-regular text-neutral-secondary" numberOfLines={1}>
                  Stay productive and organized today.
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: themeColor,
                  paddingVertical: 6,
                  paddingHorizontal: 12,
                  borderRadius: 14,
                }}
              >
                <Text className="text-white text-xs font-sf-semibold">Active</Text>
              </View>
            </View>
          </View> */}
        </View>

  {/* Quick Create Card */}
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
