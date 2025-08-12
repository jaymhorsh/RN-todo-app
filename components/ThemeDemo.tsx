import { useThemeStore } from '@/store/themeStore';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const ThemeDemo = () => {
  const { themeColor, setThemeColor } = useThemeStore();

  const themeOptions = [
    { id: 'dark', name: 'Dark Theme', color: '#1B1C1F' },
    { id: 'brand', name: 'Brand Theme', color: '#24A19C' },
    { id: 'red', name: 'Red Theme', color: '#EA4335' },
    { id: 'blue', name: 'Blue Theme', color: '#1877F2' },
  ];

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-sf-bold text-neutral-primary mb-6">
        Theme Demo - Simple Usage
      </Text>
      
      {/* Current Theme Display */}
      <View className="mb-8 p-4 rounded-xl" style={{ backgroundColor: themeColor }}>
        <Text className="text-white text-lg font-sf-bold mb-2">
          Current Theme Color
        </Text>
        <Text className="text-white font-sf-regular">
          {themeColor}
        </Text>
      </View>

      {/* Theme Options */}
      <View className="space-y-4">
        <Text className="text-lg font-sf-medium text-neutral-primary mb-4">
          Select Theme:
        </Text>
        
        {themeOptions.map((theme) => (
          <TouchableOpacity
            key={theme.id}
            onPress={() => setThemeColor(theme.color)}
            className={`p-4 rounded-xl border-2 ${
              themeColor === theme.color ? 'border-neutral-primary' : 'border-neutral-line'
            }`}
          >
            <View className="flex-row items-center">
              <View 
                className="w-8 h-8 rounded-full mr-3"
                style={{ backgroundColor: theme.color }}
              />
              <Text className="text-base font-sf-medium text-neutral-primary">
                {theme.name}
              </Text>
              {themeColor === theme.color && (
                <View className="ml-auto">
                  <Text className="text-brand font-sf-bold">✓ Selected</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Usage Examples */}
      <View className="mt-8 p-4 bg-neutral-line rounded-xl">
        <Text className="text-base font-sf-medium text-neutral-primary mb-3">
          Usage Examples:
        </Text>
        
        <View className="space-y-3">
          <View className="p-3 rounded-lg" style={{ backgroundColor: themeColor }}>
            <Text className="text-white font-sf-medium">
              Background with theme color
            </Text>
          </View>
          
          <View className="p-3 rounded-lg border-2" style={{ borderColor: themeColor }}>
            <Text className="text-neutral-primary font-sf-regular">
              Border with theme color
            </Text>
          </View>
          
          <TouchableOpacity 
            className="p-3 rounded-lg items-center"
            style={{ backgroundColor: themeColor }}
          >
            <Text className="text-white font-sf-bold">
              Button with theme color
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* How to Use */}
      {/* <View className="mt-8 p-4 bg-brand rounded-xl">
        <Text className="text-base font-sf-bold text-white mb-3">
          How to Use in Any Component:
        </Text>
        
        <Text className="text-sm text-white font-sf-regular mb-2">
          1. Import: import { useThemeStore } from '@/store/themeStore';
        </Text>
        
        <Text className="text-sm text-white font-sf-regular mb-2">
          2. Use: const { themeColor } = useThemeStore();
        </Text>
        
        <Text className="text-sm text-white font-sf-regular mb-2">
          3. Apply: style={{ backgroundColor: themeColor }}
        </Text> */}
      {/* </View> */}
    </ScrollView>
  );
};

export default ThemeDemo;
