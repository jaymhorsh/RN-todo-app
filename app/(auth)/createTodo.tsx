import TodoButton from '@/components/TodoButton';
import { useThemeStore } from '@/store/themeStore';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

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
  const insets = useSafeAreaInsets();

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
      <View style={{ flex: 1, paddingHorizontal: 24 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 48, paddingBottom: 32, flexGrow: 1 }}
        >
          <View>
            <Text className="text-3xl font-sf-bold text-neutral-primary text-center mb-3">Create to do list</Text>
            <Text className="text-base font-sf-regular text-neutral-secondary text-center">Choose your to do list color theme:</Text>
          </View>
          <View className="mt-8">
            {themeOptions.map((theme) => (
              <TouchableOpacity key={theme.id} onPress={() => handleThemeSelect(theme.color)} className="mb-6">
                <View className="relative">
                  <View className="bg-white rounded-xl shadow-sm border border-neutral-line overflow-hidden">
                    <View className="h-16 w-full" style={{ backgroundColor: theme.color }} />
                    <View className="p-4">
                      <View className="flex-row items-center">
                        <View className="w-4 h-4 rounded-full bg-neutral-line mr-3" />
                        <View className="flex-1">
                          <View className="h-3 bg-neutral-line mb-1 rounded w-3/4" />
                          <View className="h-3 bg-neutral-line mb-1 rounded w-1/2" />
                          <View className="h-3 bg-neutral-line mb-1 rounded w-2/3" />
                        </View>
                      </View>
                    </View>
                  </View>
                  {themeColor === theme.color && (
                    <View className="absolute -top-2 -left-0 w-8 h-8 rounded-full bg-green-500 items-center justify-center">
                      <MaterialIcons name="check" size={20} color="white" />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        <View style={{ paddingBottom: insets.bottom + 8 }}>
          <TodoButton
            title="Open Todo App"
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
