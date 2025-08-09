import { ButtonSize, ButtonVariant, TodoButtonProps } from '@/types/ui';
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ActivityIndicator, Pressable, Text } from 'react-native';

const TodoButton: React.FC<TodoButtonProps> = ({
  title,
  onPress,
  loading = false,
  disabled = false,

  className = '',
}) => {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      className={`
        flex-row items-center bg-[#24A19C]  justify-center rounded-xl
       w-full h-[60px]
        ${isDisabled ? 'opacity-50' : ''}
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      onPress={onPress}
      disabled={isDisabled}
    >
      {/* Loading Indicator */}
      {loading && <ActivityIndicator color="#ffffff" size={24} style={{ marginRight: title ? 8 : 0 }} />}

      {/* Button Text */}
      {title && <Text className={`text-white text-lg font-poppinsMedium`}>{title}</Text>}
    </Pressable>
  );
};

export default TodoButton;
