import TodoButton from '@/components/TodoButton';
import { useAppIconStore } from '@/store/appIconStore';
import { useThemeStore } from '@/store/themeStore';
import { showToast } from '@/utils/toast';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useCallback } from 'react';
import { Dimensions, FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppIcon = () => {
  const router = useRouter();
  const { selectedIconId, setSelectedIconId } = useAppIconStore();
  const { themeColor } = useThemeStore();

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

  const handleIconSelect = (iconId: string) => setSelectedIconId(iconId);

  const handleSaveIcon = () => {
    showToast('success', 'App icon saved successfully!');
    router.back();
  };

  // 3-column layout width calc
  const itemSize = (Dimensions.get('window').width - 32 - 32) / 3; // padding horizontal ~24? using px-6 (24) both sides + gap ~?; using 32 total margin

  const renderItem = useCallback(({ item }: ListRenderItemInfo<typeof appIcons[number]>) => {
    const selected = selectedIconId === item.id;
    return (
      <TouchableOpacity
        onPress={() => handleIconSelect(item.id)}
        style={{ width: itemSize, marginBottom: 20, alignItems: 'center' }}
        activeOpacity={0.85}
      >
        <View
          style={{
            width: 72,
            height: 72,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: item.color,
            position: 'relative',
            borderWidth: selected ? 3 : 0,
            borderColor: selected ? themeColor : 'transparent',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 3,
          }}
        >
          {/* Stylized checklist glyph */}
          <View style={{ alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
              <MaterialIcons name="check" size={16} color="white" />
              <View style={{ width: 32, height: 2, backgroundColor: 'white', marginLeft: 4, borderRadius: 1 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
              <MaterialIcons name="check" size={16} color="white" />
              <View style={{ width: 24, height: 2, backgroundColor: 'white', marginLeft: 4, borderRadius: 1 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialIcons name="check" size={16} color="white" />
              <View style={{ width: 28, height: 2, backgroundColor: 'white', marginLeft: 4, borderRadius: 1 }} />
            </View>
          </View>
          {selected && (
            <View
              style={{
                position: 'absolute',
                top: -6,
                right: -6,
                width: 26,
                height: 26,
                borderRadius: 13,
                backgroundColor: themeColor,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MaterialIcons name="check" size={16} color="white" />
            </View>
          )}
        </View>
        <Text style={{ marginTop: 8, fontSize: 12, color: '#1B1C1F' }}>{item.name}</Text>
      </TouchableOpacity>
    );
  }, [handleIconSelect, itemSize, selectedIconId, themeColor]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        <View className="flex-row items-center justify-between mt-4 mb-6">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back-ios" size={24} color="#1B1C1F" />
          </TouchableOpacity>
          <Text className="text-xl font-sf-bold text-neutral-primary">App Icon</Text>
          <View style={{ width: 24 }} />
        </View>
        <FlatList
          data={appIcons}
          keyExtractor={(item) => item.id}
            numColumns={3}
          renderItem={renderItem}
          scrollEnabled
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 4, paddingBottom: 32 }}
        />
        <View style={{ marginBottom: 16 }}>
          <TodoButton
            title="Save Icon"
            onPress={handleSaveIcon}
            className=""
            backgroundColor={themeColor}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AppIcon;
