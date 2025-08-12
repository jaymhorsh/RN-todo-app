import { useInfiniteTodos } from '@/hooks/todos/useTodos';
import { useThemeStore } from '@/store/themeStore';
import { Todo } from '@/types/todos';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useCallback, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    RefreshControl,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Upcoming = () => {
  const { themeColor } = useThemeStore();
  const [selectedDate, setSelectedDate] = useState(7); // Wednesday 7th
  const [refreshing, setRefreshing] = useState(false);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    refetch,
  } = useInfiniteTodos(5);

  // Flatten all todos from all pages
  const allTodos = data?.pages.flatMap((page) => page.todos) || [];

  // Group todos by date (simulating different dates)
  const groupedTodos = allTodos.reduce((acc, todo, index) => {
    const dateIndex = Math.floor(index / 3); // 3 todos per date for demo
    const dates = [
      { day: 'Today', date: 'Wednesday', fullDate: '7 Apr 2022' },
      { day: '8 Apr 2022', date: 'Thursday', fullDate: '8 Apr 2022' },
      { day: '9 Apr 2022', date: 'Friday', fullDate: '9 Apr 2022' },
      { day: '10 Apr 2022', date: 'Friday', fullDate: '10 Apr 2022' },
      { day: '11 Apr 2022', date: 'Saturday', fullDate: '11 Apr 2022' },
      { day: '12 Apr 2022', date: 'Sunday', fullDate: '12 Apr 2022' },
    ];

    if (!acc[dateIndex]) {
      acc[dateIndex] = {
        ...dates[dateIndex],
        todos: [],
      };
    }
    acc[dateIndex].todos.push(todo);
    return acc;
  }, [] as Array<{ day: string; date: string; fullDate: string; todos: Todo[] }>);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }, [refetch]);

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const renderTodoItem = ({ item }: { item: Todo }) => (
    <View className="flex-row items-start mb-4 bg-white rounded-xl p-4 shadow-sm border border-neutral-line">
      {/* Todo Status Circle */}
      <View
        className="w-6 h-6 rounded-full mr-3 mt-1 items-center justify-center"
        style={{ backgroundColor: themeColor }}
      >
        <View className="w-3 h-3 rounded-full bg-white" />
      </View>

      {/* Todo Content */}
      <View className="flex-1">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-base font-sf-medium text-neutral-primary flex-1 mr-2">
            {item.todo}
          </Text>
          <TouchableOpacity>
            <MaterialIcons name="more-horiz" size={20} color="#767E8C" />
          </TouchableOpacity>
        </View>

        {/* Time */}
        <View className="flex-row items-center mb-2">
          <MaterialIcons name="access-time" size={16} color="#EA4335" />
          <Text className="text-sm font-sf-regular text-neutral-secondary ml-1">
            08.30 PM
          </Text>
        </View>

        {/* Comments and Participants */}
        <View className="flex-row items-center">
          <View className="flex-row items-center mr-4">
            <MaterialIcons name="chat-bubble-outline" size={16} color="#767E8C" />
            <Text className="text-sm font-sf-regular text-neutral-secondary ml-1">
              1
            </Text>
          </View>
          <View className="flex-row items-center">
            <MaterialIcons name="person" size={16} color="#767E8C" />
            <Text className="text-sm font-sf-regular text-neutral-secondary ml-1">
              2
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderDateSection = ({ item }: { item: { day: string; date: string; fullDate: string; todos: Todo[] } }) => (
    <View className="mb-6">
      {/* Date Header */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-lg font-sf-bold text-neutral-primary">
          {item.day} • {item.date}
        </Text>
        {item.day === 'Today' && (
          <TouchableOpacity>
            <Text className="text-base font-sf-medium" style={{ color: themeColor }}>
              Reschedule
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Todos for this date */}
      {item.todos.map((todo) => (
        <View key={todo.id} className="ml-4">
          {renderTodoItem({ item: todo })}
        </View>
      ))}
    </View>
  );

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return (
      <View className="py-4">
        <ActivityIndicator size="small" color={themeColor} />
      </View>
    );
  };

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color={themeColor} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="flex-row items-center justify-between mt-4 mb-6">
          <TouchableOpacity>
            <MaterialIcons name="arrow-back" size={24} color="#1B1C1F" />
          </TouchableOpacity>
          <Text className="text-xl font-sf-bold text-neutral-primary">Upcoming</Text>
          <TouchableOpacity>
            <MaterialIcons name="search" size={24} color="#767E8C" />
          </TouchableOpacity>
        </View>

        {/* Calendar/Date Selector */}
        <View className="mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <Text className="text-lg font-sf-medium text-neutral-primary mr-2">
                April 2022
              </Text>
              <MaterialIcons name="keyboard-arrow-down" size={20} color="#767E8C" />
            </View>
            <Text className="text-base font-sf-medium" style={{ color: themeColor }}>
              Today
            </Text>
          </View>

          {/* Days Row */}
          <View className="flex-row justify-between">
            {['M 5', 'T 6', 'W 7', 'T 8', 'F 9', 'S 10', 'S 11', 'M 12'].map((day, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedDate(index + 5)}
                className={`w-10 h-10 rounded-full items-center justify-center ${
                  selectedDate === index + 5 ? 'bg-opacity-20' : ''
                }`}
                style={{
                  backgroundColor: selectedDate === index + 5 ? themeColor : 'transparent',
                }}
              >
                <Text
                  className={`text-sm font-sf-medium ${
                    selectedDate === index + 5 ? 'text-white' : 'text-neutral-secondary'
                  }`}
                >
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Todos List */}
        <FlatList
          data={groupedTodos}
          renderItem={renderDateSection}
          keyExtractor={(item, index) => `date-${index}`}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[themeColor]} />
          }
          onEndReached={loadMore}
          onEndReachedThreshold={0.1}
          ListFooterComponent={renderFooter}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Upcoming;
