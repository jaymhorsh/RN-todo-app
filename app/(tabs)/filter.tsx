import { useThemeStore } from '@/store/themeStore';
import { TodoFilter, TodoLabel } from '@/types/todos';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Filter = () => {
  const { themeColor } = useThemeStore();

  const filterOptions: TodoFilter[] = [
    { id: 'assigned', label: 'Assigned to me', icon: 'filter-list' },
    { id: 'priority1', label: 'Priority 1', icon: 'star', count: 1 },
    { id: 'priority3', label: 'Priority 3', icon: 'thumb-up', count: 1 },
    { id: 'manage', label: 'Manage Filter', icon: 'settings' },
  ];

  const labelOptions: TodoLabel[] = [
    { id: 'masana', label: 'Masana label', icon: 'list' },
    { id: 'manage-labels', label: 'Manage labels', icon: 'settings' },
  ];

  const renderFilterItem = (item: TodoFilter) => (
    <TouchableOpacity
      key={item.id}
      className="flex-row items-center py-4"
    >
      <MaterialIcons
        name={item.icon as any}
        size={24}
        color={item.id === 'priority1' ? '#EA4335' : item.id === 'priority3' ? '#FFD93D' : '#767E8C'}
      />
      <Text className="flex-1 text-lg font-sf-medium text-neutral-primary ml-4">
        {item.label}
      </Text>
      {item.count && (
        <Text className="text-base font-sf-medium text-neutral-secondary mr-2">
          {item.count}
        </Text>
      )}
      <MaterialIcons name="chevron-right" size={24} color="#767E8C" />
    </TouchableOpacity>
  );

  const renderLabelItem = (item: TodoLabel) => (
    <TouchableOpacity
      key={item.id}
      className="flex-row items-center py-4 "
    >
      <MaterialIcons name={item.icon as any} size={24} color="#767E8C" />
      <Text className="flex-1 text-lg font-sf-medium text-neutral-primary ml-4">
        {item.label}
      </Text>
      <MaterialIcons name="chevron-right" size={24} color="#767E8C" />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="flex-row items-center justify-between mt-4 mb-8">
          <TouchableOpacity>
            <MaterialIcons name="arrow-back-ios" size={24} color="#1B1C1F" />
          </TouchableOpacity>
          <Text className="text-xl font-sf-bold text-neutral-primary">Filter & Labels</Text>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#767E8C" />
          </TouchableOpacity>
        </View>

        {/* Filter your task Section */}
        <View className="mb-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-sf-bold text-neutral-primary">Filter your task</Text>
            <TouchableOpacity
              className="w-8 h-8 rounded-full items-center justify-center"
              style={{ backgroundColor: themeColor }}
            >
              <MaterialIcons name="add" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View className="bg-white rounded-xl overflow-hidden">
            {filterOptions.map((item, index) => (
              <View key={item.id}>
                {renderFilterItem(item)}
                {index < filterOptions.length - 1 && (
                  <View className="-px bg-neutralline mx-4" />
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Labels Section */}
        <View className="flex-1">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-sf-bold text-neutral-primary">Labels</Text>
            <TouchableOpacity
              className="w-8 h-8 rounded-full items-center justify-center"
              style={{ backgroundColor: themeColor }}
            >
              <MaterialIcons name="add" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View className="bg-white rounded-xl  overflow-hidden">
            {labelOptions.map((item, index) => (
              <View key={item.id}>
                {renderLabelItem(item)}
                {index < labelOptions.length - 1 && (
                  <View className="h-px bg-netral-line mx-4" />
                )}
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Filter;
