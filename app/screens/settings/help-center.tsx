import TodoButton from '@/components/TodoButton';
import TodoInput from '@/components/TodoInput';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HelpCenter = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const helpTopics = [
    { id: 1, icon: '💻', title: 'Platforms are used' },
    { id: 2, icon: '💬', title: 'Usage question' },
    { id: 3, icon: '🙋‍♀️', title: 'Application usage' },
    { id: 4, icon: '⏳', title: 'Update Time App' },
    { id: 5, icon: '🖥️', title: 'Cross Platform App' },
    { id: 6, icon: '🔔', title: 'Update reminder' },
  ];

  const handleTopicPress = (topic: any) => {
    console.log('Topic pressed:', topic.title);
  };

  const handleMoreTopics = () => {
    console.log('More topics pressed');
  };

  const filteredTopics = helpTopics.filter((topic) => topic.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="flex-row items-center justify-between mt-4 mb-8">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#1B1C1F" />
          </TouchableOpacity>
          <Text className="text-xl font-sf-bold text-neutral-primary">Help Center</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Search Bar */}
        <View className="mb-6">
          <View className="flex-row items-center bg-neutral-line rounded-xl px-4 py-1">
            <MaterialIcons name="search" size={20} color="#767E8C" />
            <TodoInput
              placeholder="Search for help topics"
              value={searchQuery}
              onChangeText={setSearchQuery}
              containerClassName="flex-1 ml-3 bg-transparent"
            />
          </View>
        </View>

        {/* Topic Cards Grid */}
        <View className="flex-1">
          <View className="flex-row flex-wrap justify-between">
            {filteredTopics.map((topic) => (
              <TouchableOpacity key={topic.id} className="w-[45%] mb-4" onPress={() => handleTopicPress(topic)}>
                <View className="bg-neutral-line rounded-xl h-32 justify-center items-center">
                  <Text className="text-3xl mb-2">{topic.icon}</Text>
                  <Text className="text-sm font-sf-medium text-neutral-primary text-center">{topic.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* More Topics Button */}
        <View className="mb-6">
          <TodoButton title="More Topics" onPress={handleMoreTopics} className="bg-brand" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HelpCenter;
