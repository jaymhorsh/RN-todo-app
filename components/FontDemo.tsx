import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const FontDemo: React.FC = () => {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-sf-bold text-neutral-primary mb-6">
        SF Pro Display Fonts
      </Text>
      
      <View className="space-y-4">
        <Text className="text-lg font-sf-regular text-neutral-secondary">
          Regular - SF Pro Display Regular
        </Text>
        
        <Text className="text-lg font-sf-medium text-neutral-secondary">
          Medium - SF Pro Display Medium
        </Text>
        
        <Text className="text-lg font-sf-semibold text-neutral-secondary">
          Semibold - SF Pro Display Medium (fallback)
        </Text>
        
        <Text className="text-lg font-sf-bold text-neutral-secondary">
          Bold - SF Pro Display Bold
        </Text>
      </View>
      
      <View className="mt-8 p-4 bg-neutral-line rounded-xl">
        <Text className="text-base font-sf-medium text-neutral-primary mb-2">
          Available Font Weights:
        </Text>
        <Text className="text-sm font-sf-regular text-neutral-secondary mb-1">
          • font-sf-regular - For body text
        </Text>
        <Text className="text-sm font-sf-regular text-neutral-secondary mb-1">
          • font-sf-medium - For emphasis
        </Text>
        <Text className="text-sm font-sf-regular text-neutral-secondary mb-1">
          • font-sf-semibold - For headings (uses Medium as fallback)
        </Text>
        <Text className="text-sm font-sf-regular text-neutral-secondary mb-1">
          • font-sf-bold - For strong emphasis
        </Text>
      </View>
      
      <View className="mt-4 p-4 bg-brand rounded-xl">
        <Text className="text-base font-sf-bold text-white mb-2">
          Note:
        </Text>
        <Text className="text-sm font-sf-regular text-white">
          Only Regular, Medium, and Bold fonts are currently loaded. 
          Semibold uses Medium as a fallback since the Semibold font file is italic.
        </Text>
      </View>
    </ScrollView>
  );
};

export default FontDemo;
