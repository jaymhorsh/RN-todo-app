import { useThemeStore } from '@/store/themeStore';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Inbox = () => {
  const { themeColor } = useThemeStore();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="mt-8 mb-8">
          <View className="flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-3xl font-sf-bold text-neutral-primary mb-2">Inbox</Text>
              <Text className="text-base font-sf-regular text-neutral-secondary">
                Manage your incoming tasks and messages.
              </Text>
            </View>
            <TouchableOpacity>
              <MaterialIcons name="search" size={24} color="#767E8C" />
            </TouchableOpacity>
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
                <MaterialIcons name="inbox" size={24} color={themeColor} />
              </View>
              <Text className="text-white text-lg font-sf-medium">
                Your inbox is empty
              </Text>
            </View>
            {/* Card Body */}
            <View className="p-6">
              <View className="flex-row items-center justify-between">
                <Text className="text-neutral-secondary font-sf-regular">No new messages</Text>
                <Text className="text-neutral-secondary font-sf-regular">All caught up!</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Inbox;
