import { colors } from '@/theme/colors';
import { default as React, default as React } from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loading = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
};

export default Loading;
export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#09090A' }}>
      <ActivityIndicator color={'#7c3aed'} />
    </View>
  );
}
