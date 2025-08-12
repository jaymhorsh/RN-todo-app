import TodoButton from '@/components/TodoButton';
import { useAppIconStore } from '@/store/appIconStore';
import { showToast } from '@/utils/toast';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppIcon = () => {
  const router = useRouter();
  const { selectedIconId, setSelectedIconId } = useAppIconStore();

  const appIcons = [
    { id: 'red', color: '#FF6B6B', name: 'Red' },
    { id: 'blue', color: '#4D96FF', name: 'Blue' },
    { id: 'green', color: '#6BCF7F', name: 'Green' },
    { id: 'orange', color: '#FFA500', name: 'Orange' },
    { id: 'black', color: '#2C3E50', name: 'Black' },
    { id: 'pink', color: '#FFB6C1', name: 'Pink' },
    { id: 'yellow', color: '#FFD93D', name: 'Yellow' },
    { id: 'blue2', color: '#3498DB', name: 'Blue 2' },
    { id: 'purple', color: '#9B59B6', name: 'Purple' },
    { id: 'gray', color: '#7F8C8D', name: 'Gray' },
    { id: 'cyan', color: '#00CED1', name: 'Cyan' },
    { id: 'teal', color: '#24A19C', name: 'Teal' },
    { id: 'brightGreen', color: '#00FF7F', name: 'Bright Green' },
    { id: 'hotPink', color: '#FF69B4', name: 'Hot Pink' },
    { id: 'brightOrange', color: '#FF8C00', name: 'Bright Orange' },
  ];

  const handleIconSelect = (iconId: string) => {
    setSelectedIconId(iconId);
  };

  const handleSaveIcon = () => {
    showToast('success', 'App icon saved successfully!');
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="flex-row items-center justify-between mt-4 mb-8">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="#1B1C1F" />
          </TouchableOpacity>
          <Text className="text-xl font-sf-bold text-neutral-primary">App Icon</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* App Icon Grid */}
        <View className="flex-1">
          <View className="flex-row flex-wrap justify-between">
            {appIcons.map((icon) => (
              <TouchableOpacity
                key={icon.id}
                className="w-20 h-20 mb-4 items-center justify-center"
                onPress={() => handleIconSelect(icon.id)}
              >
                <View 
                  className="w-16 h-16 rounded-2xl items-center justify-center relative"
                  style={{ backgroundColor: icon.color }}
                >
                  {/* Checklist Icon */}
                  <View className="items-center">
                    <View className="flex-row items-center mb-1">
                      <MaterialIcons name="check" size={16} color="white" />
                      <View className="w-8 h-0.5 bg-white ml-1" />
                    </View>
                    <View className="flex-row items-center mb-1">
                      <MaterialIcons name="check" size={16} color="white" />
                      <View className="w-6 h-0.5 bg-white ml-1" />
                    </View>
                    <View className="flex-row items-center">
                      <MaterialIcons name="check" size={16} color="white" />
                      <View className="w-7 h-0.5 bg-white ml-1" />
                    </View>
                  </View>
                  
                  {/* Selection Indicator */}
                  {selectedIconId === icon.id && (
                    <View className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full items-center justify-center">
                      <MaterialIcons name="check" size={16} color="white" />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Save Icon Button */}
        <View className="mb-6">
          <TodoButton
            title="Save Icon"
            onPress={handleSaveIcon}
            className="bg-brand"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppIcon;
