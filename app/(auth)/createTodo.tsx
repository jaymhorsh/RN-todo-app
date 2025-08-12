import TodoButton from '@/components/TodoButton';
import { useThemeStore } from '@/store/themeStore';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Theme options with their colors
const themeOptions = [
  { id: 'dark', name: 'Dark Theme', color: '#1B1C1F' },
  { id: 'brand', name: 'Brand Theme', color: '#24A19C' },
  { id: 'red', name: 'Red Theme', color: '#EA4335' },
  { id: 'blue', name: 'Blue Theme', color: '#1877F2' },
];

const CreateTodo = () => {
  const router = useRouter();
  const { themeColor, setThemeColor } = useThemeStore();

  const handleThemeSelect = (color: string) => {
    setThemeColor(color);
    console.log('Selected theme color:', color);
  };

  const handleOpenTodoApp = () => {
    console.log('Opening Todo App with theme color:', themeColor);
    router.push('/(tabs)/home');
  };
  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="mt-16 mb-16">
          <Text className="text-3xl font-sf-bold text-neutral-primary text-center mb-3">
            Create to do list
          </Text>
          <Text className="text-base font-sf-regular text-neutral-secondary text-center">
            Choose your to do list color theme:
          </Text>
        </View>

        {/* Theme Selection List */}
        <View className="flex-1 justify-center">
          <ScrollView showsVerticalScrollIndicator={false}>
            {themeOptions.map((theme) => (
              <TouchableOpacity
                key={theme.id}
                onPress={() => handleThemeSelect(theme.color)}
                className="mb-6"
              >
                <View className="relative">
                  {/* Theme Preview Card */}
                  <View className="bg-white rounded-xl shadow-sm border border-neutral-line overflow-hidden">
                    {/* Theme Color Header Bar */}
                    <View 
                      className="h-16 w-full rounded-t-md"
                      style={{ backgroundColor: theme.color }}
                    />
                    {/* Content Preview */}
                    <View className="p-4">
                      <View className="flex-row items-center">
                        <View className="w-4 h-4 rounded-full bg-neutral-line mr-3" />
                        <View className="flex-1 space-y-2">
                          <View className="h-3 bg-neutral-line rounded w-3/4" />
                          <View className="h-3 bg-neutral-line rounded w-1/2" />
                          <View className="h-3 bg-neutral-line rounded w-2/3" />
                        </View>
                      </View>
                    </View>
                  </View>
                  
                  {/* Absolute Positioned Checkmark */}
                  {themeColor === theme.color && (
                    <View className="absolute top-2 left-2 w-6 h-6 rounded-full bg-green-500 items-center justify-center">
                      <MaterialIcons 
                        name="check" 
                        size={16} 
                        color="white" 
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Open Todo App Button */}
        <View className="mb-2">
          <TodoButton
            title="Open Todyapp"
            onPress={handleOpenTodoApp}
            backgroundColor={themeColor}
            disabled={!themeColor}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateTodo;
