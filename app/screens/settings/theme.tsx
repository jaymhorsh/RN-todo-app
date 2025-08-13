import TodoButton from '@/components/TodoButton';
import { useThemeStore } from '@/store/themeStore';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Theme = () => {
  const router = useRouter();
  const { setThemeColor } = useThemeStore();

  const themes = [
    { id: 'blue', color: '#4D96FF', name: 'Blue' },
    { id: 'cyan', color: '#24A19C', name: 'Cyan' },
    { id: 'orange', color: '#FF6B35', name: 'Orange' },
    { id: 'yellow', color: '#FFD93D', name: 'Yellow' },
    { id: 'green', color: '#6BCF7F', name: 'Green' },
  ];

  const handleThemeSelect = (color: string) => {
    setThemeColor(color);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="flex-row items-center justify-between mt-4 mb-8">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#1B1C1F" />
          </TouchableOpacity>
          <Text className="text-xl font-sf-bold text-neutral-primary">Theme</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Theme Previews */}
        <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
          {themes.map((theme) => (
            <TouchableOpacity key={theme.id} className="mb-4" onPress={() => handleThemeSelect(theme.color)}>
              <View className="bg-white rounded-2xl shadow-sm border border-neutral-line overflow-hidden">
                {/* Theme Color Header */}
                <View className="px-4 h-16 w-full items-center  flex-row" style={{ backgroundColor: theme.color }}>
                  <View className="w-8 h-8 rounded-lg bg-white items-center justify-center mr-3">
                    <MaterialIcons name="add" size={24} color={theme.color} />
                  </View>
                  <Text className="text-white text-lg font-sf-medium">{theme.name} Theme</Text>
                </View>
                {/* Card Body */}
                <View className="p-6">
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                      <View className="w-8 h-8 rounded-full bg-neutral-line mr-3" />
                      <View>
                        <View className="w-20 h-3 bg-neutral-line rounded mb-2" />
                        <View className="w-16 h-3 bg-neutral-line rounded" />
                      </View>
                    </View>
                    <Text className="text-neutral-secondary font-sf-regular">Preview</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* More Theme Button */}
        {/* <View className="mb-6">
          <TodoButton
            title="More Theme"
            onPress={() => {}}
            className="bg-brand"
          />
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Theme;
