import { useThemeStore } from '@/store/themeStore';
import { TodoFilter } from '@/types/todos';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Project = () => {
  const { themeColor } = useThemeStore();

  const projectOptions: TodoFilter[] = [
    { id: 'instructions', label: 'Instructions For Use', icon: 'help-outline' },
    { id: 'try-boards', label: 'Try Boards', icon: 'list' },
    { id: 'manage', label: 'Manage Projects', icon: 'settings' },
  ];

  const renderProjectItem = (item: TodoFilter) => (
    <TouchableOpacity
      key={item.id}
      className="flex-row items-center py-4 border-b border-neutral-line"
    >
      <MaterialIcons name={item.icon as any} size={24} color="#767E8C" />
      <Text className="flex-1 text-base font-sf-medium text-neutral-primary ml-4">
        {item.label}
      </Text>
      <TouchableOpacity className="mr-2">
        <MaterialIcons name="favorite-border" size={20} color="#E5E7EB" />
      </TouchableOpacity>
      <MaterialIcons name="chevron-right" size={24} color="#767E8C" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="flex-row items-center justify-between mt-4 mb-8">
          <TouchableOpacity>
            <MaterialIcons name="arrow-back" size={24} color="#1B1C1F" />
          </TouchableOpacity>
          <Text className="text-xl font-sf-bold text-neutral-primary">Project</Text>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#767E8C" />
          </TouchableOpacity>
        </View>

        {/* Filter your task Section */}
        <View className="flex-1">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-sf-bold text-neutral-primary">Filter your task</Text>
            <TouchableOpacity
              className="w-8 h-8 rounded-full items-center justify-center"
              style={{ backgroundColor: themeColor }}
            >
              <MaterialIcons name="add" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View className="bg-white rounded-xl border border-neutral-line overflow-hidden">
            {projectOptions.map((item, index) => (
              <View key={item.id}>
                {renderProjectItem(item)}
                {index < projectOptions.length - 1 && (
                  <View className="h-px bg-neutral-line mx-4" />
                )}
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Project;
