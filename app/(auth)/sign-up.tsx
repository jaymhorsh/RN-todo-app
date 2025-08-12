import TodoButton from '@/components/TodoButton';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // Handle sign up
    console.log('Sign up with:', { username, password });
    if (username.trim() && password.trim()) {
      // Add your sign up logic here
      console.log('Proceeding with sign up...');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="mt-16 mb-16">
          <Text className="text-3xl font-sf-bold text-neutral-primary text-center mb-3">
            Create account
          </Text>
          <Text className="text-base font-sf-regular text-neutral-secondary text-center">
            Create your account and feel the benefits
          </Text>
        </View>

        {/* Input Section */}
        <View className="flex-1 justify-center">
          {/* Username Field */}
          <View className="mb-6">
            <Text className="text-base font-sf-medium text-neutral-primary mb-3">
              Username
            </Text>
            <TextInput
              className="w-full h-14 bg-neutral-line rounded-xl px-4 text-base font-sf-regular text-neutral-primary"
              placeholder="Enter your username"
              placeholderTextColor="#767E8C"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Password Field */}
          <View className="mb-6">
            <Text className="text-base font-sf-medium text-neutral-primary mb-3">
              Password
            </Text>
            <View className="relative">
              <TextInput
                className="w-full h-14 bg-neutral-line rounded-xl px-4 pr-12 text-base font-sf-regular text-neutral-primary"
                placeholder="Enter your password"
                placeholderTextColor="#767E8C"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                className="absolute right-4 top-0 bottom-0 justify-center"
              >
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={24}
                  color="#767E8C"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Sign Up Button */}
        <View className="mb-2">
          <TodoButton
            title="Sign Up"
            onPress={handleSignUp}
            className="bg-brand"
            disabled={!username.trim() || !password.trim()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
