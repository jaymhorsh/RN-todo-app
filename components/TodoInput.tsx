import { TodoInputProps } from '@/types/ui';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const TodoInput: React.FC<TodoInputProps> = ({
  isPassword = false,
  containerClassName = '',
  inputClassName = '',
  leftIcon,
  error,
  ...props
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(isPassword);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View className="mb-6">
      <View
        className={`flex-row items-center bg-gray-200 h-[60px] rounded-full px-4 ${
          error ? 'border border-red-500' : ''
        } ${containerClassName}`}
      >
        {leftIcon}
        <TextInput
          placeholderTextColor="#848484"
          secureTextEntry={secureTextEntry}
          className={`flex-1 text-black text-center text-lg h-16 px-2 ${inputClassName}`}
          {...props}
        />
        {isPassword && (
          <Pressable className="p-2" onPress={toggleSecureTextEntry}>
            <Ionicons name={secureTextEntry ? 'eye-off' : 'eye'} size={22} color="#A9B0C5" />
          </Pressable>
        )}
      </View>
      {error && <Text className="text-red-500 text-sm mt-2 px-4">{error}</Text>}
    </View>
  );
};

export default TodoInput;
