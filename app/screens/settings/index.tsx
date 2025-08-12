import { useLogout } from '@/hooks/auth/useAuth';
import { useDeleteUser } from '@/hooks/settings/useSettings';
import { useAuthStore } from '@/store/authStore';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, Switch, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
  const router = useRouter();
  const { user, logout: logoutFromStore } = useAuthStore();
  const { logout } = useLogout();
  const { mutate: deleteUser, isPending: isDeleting } = useDeleteUser();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleNavigate = (screen: string) => {
    router.push(`/screens/settings/${screen}` as any);
  };

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

  const handleDeleteAccount = () => {
    if (!user) return;

    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive', 
          onPress: () => {
            deleteUser(user.id);
          }
        },
      ]
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="flex-row items-center justify-between mt-4 mb-8">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="#1B1C1F" />
          </TouchableOpacity>
          <Text className="text-xl font-sf-bold text-neutral-primary">Settings</Text>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#767E8C" />
          </TouchableOpacity>
        </View>

        {/* Profile Section */}
        <View className="items-center mb-8">
          <View className="relative mb-4">
            <Image
              source={user?.image ? { uri: user.image } : require('@/assets/logo.png')}
              className="w-24 h-24 rounded-full"
            />
            <TouchableOpacity className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full items-center justify-center">
              <MaterialIcons name="edit" size={16} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="text-xl font-sf-bold text-neutral-primary mb-1">
            {user ? `${user.firstName} ${user.lastName}` : 'User Name'}
          </Text>
          <Text className="text-base font-sf-regular text-neutral-secondary">
            {user ? `@${user.username}` : '@username'}
          </Text>
        </View>

        {/* Settings Options */}
        <View className="flex-1">
          {/* First Group */}
          <View className="mb-6">
            <TouchableOpacity 
              className="flex-row items-center py-4 border-b border-neutral-line"
              onPress={() => handleNavigate('account')}
            >
              <MaterialIcons name="person" size={24} color="#767E8C" />
              <Text className="flex-1 text-base font-sf-medium text-neutral-primary ml-4">Account</Text>
              <MaterialIcons name="chevron-right" size={24} color="#767E8C" />
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center py-4 border-b border-neutral-line"
              onPress={() => handleNavigate('theme')}
            >
              <MaterialIcons name="auto-awesome" size={24} color="#767E8C" />
              <Text className="flex-1 text-base font-sf-medium text-neutral-primary ml-4">Theme</Text>
              <MaterialIcons name="chevron-right" size={24} color="#767E8C" />
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center py-4 border-b border-neutral-line"
              onPress={() => handleNavigate('app-icon')}
            >
              <MaterialIcons name="star" size={24} color="#767E8C" />
              <Text className="flex-1 text-base font-sf-medium text-neutral-primary ml-4">App Icon</Text>
              <MaterialIcons name="chevron-right" size={24} color="#767E8C" />
            </TouchableOpacity>

            <TouchableOpacity className="flex-row items-center py-4 border-b border-neutral-line">
              <MaterialIcons name="link" size={24} color="#767E8C" />
              <Text className="flex-1 text-base font-sf-medium text-neutral-primary ml-4">Productivity</Text>
              <MaterialIcons name="chevron-right" size={24} color="#767E8C" />
            </TouchableOpacity>

            <View className="flex-row items-center py-4 border-b border-neutral-line">
              <MaterialIcons name="wb-sunny" size={24} color="#767E8C" />
              <Text className="flex-1 text-base font-sf-medium text-neutral-primary ml-4">Change Mode</Text>
              <Switch
                value={isDarkMode}
                onValueChange={setIsDarkMode}
                trackColor={{ false: '#E5E7EB', true: '#24A19C' }}
                thumbColor={isDarkMode ? '#24A19C' : '#FFFFFF'}
              />
            </View>
          </View>

          {/* Second Group */}
          <View className="mb-6">
            <TouchableOpacity className="flex-row items-center py-4 border-b border-neutral-line">
              <MaterialIcons name="vpn-key" size={24} color="#767E8C" />
              <Text className="flex-1 text-base font-sf-medium text-neutral-primary ml-4">Privacy Policy</Text>
              <MaterialIcons name="chevron-right" size={24} color="#767E8C" />
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center py-4 border-b border-neutral-line"
              onPress={() => handleNavigate('help-center')}
            >
              <MaterialIcons name="help" size={24} color="#767E8C" />
              <Text className="flex-1 text-base font-sf-medium text-neutral-primary ml-4">Help Center</Text>
              <MaterialIcons name="chevron-right" size={24} color="#767E8C" />
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center py-4 border-b border-neutral-line"
              onPress={handleDeleteAccount}
              disabled={isDeleting}
            >
              <MaterialIcons name="delete-forever" size={24} color="#EA4335" />
              <Text className="flex-1 text-base font-sf-medium text-red-500 ml-4">
                {isDeleting ? 'Deleting...' : 'Delete Account'}
              </Text>
              <MaterialIcons name="chevron-right" size={24} color="#767E8C" />
            </TouchableOpacity>

            <TouchableOpacity 
              className="flex-row items-center py-4"
              onPress={handleLogout}
            >
              <MaterialIcons name="exit-to-app" size={24} color="#EA4335" />
              <Text className="flex-1 text-base font-sf-medium text-red-500 ml-4">Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;
