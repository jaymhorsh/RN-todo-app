import TodoButton from '@/components/TodoButton';
import { useLogin } from '@/hooks/auth/useAuth';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Text, TextInput, View, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignIn = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const { mutate: loginMutation, isPending: isLoading } = useLogin();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    loginMutation({
      username: username.trim(),
      password: password.trim(),
      expiresInMins: 60, // 1 hour
    });
  };

  const handleSignUp = () => {
    router.push('/(auth)/sign-up');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="mt-16 mb-16">
          <Text className="text-3xl font-sf-bold text-neutral-primary text-center mb-3">
            Welcome Back!
          </Text>
          <Text className="text-base font-sf-regular text-neutral-secondary text-center">
            Your work faster and structured with Todyapp
          </Text>
        </View>

        {/* Input Section */}
        <View className="flex-1 justify-center">
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
              editable={!isLoading}
            />
          </View>

          <View className="mb-6">
            <Text className="text-base font-sf-medium text-neutral-primary mb-3">
              Password
            </Text>
            <TextInput
              className="w-full h-14 bg-neutral-line rounded-xl px-4 text-base font-sf-regular text-neutral-primary"
              placeholder="Enter your password"
              placeholderTextColor="#767E8C"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              editable={!isLoading}
            />
          </View>

          {/* Demo Credentials Info */}
          <View className="mb-6 p-4 bg-blue-50 rounded-lg">
            <Text className="text-sm font-sf-medium text-blue-800 mb-2">
              Demo Credentials:
            </Text>
            <Text className="text-xs text-blue-600 font-sf-regular">
              Username: emilys{'\n'}
              Password: emilyspass
            </Text>
          </View>
        </View>

        {/* Login Button */}
        <View className="mb-4">
          <TodoButton
            title={isLoading ? "Signing In..." : "Sign In"}
            onPress={handleLogin}
            className="bg-brand"
            disabled={!username.trim() || !password.trim() || isLoading}
          />
        </View>

        {/* Sign Up Link */}
        <View className="mb-2">
          <Text className="text-center text-neutral-secondary font-sf-regular">
            Don't have an account?{' '}
            <Text 
              className="text-brand font-sf-medium"
              onPress={handleSignUp}
            >
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
