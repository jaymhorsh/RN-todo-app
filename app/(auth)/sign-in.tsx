import TodoButton from '@/components/TodoButton';
import TodoInput from '@/components/TodoInput';
import { useLogin } from '@/hooks/auth/useAuth';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';
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
      <View className="flex-1 justify-between px-6">
        {/* Header */}
        <View className="mt-14 mb-16">
          <Text className="text-3xl font-sf-bold text-neutral-primary text-center mb-3">Welcome Back!</Text>
          <Text className="text-lg font-sf-regular text-neutral-secondary text-center">Your work faster and structured with Todyapp</Text>
           {/* Input Section */}
        <View className="mt-10 justify-center">
          <TodoInput
            label="Username"
            placeholder="Enter your username"
            placeholderTextColor="#767E8C"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading}
          />

          <TodoInput
            label="Password"
            placeholder="Enter your password"
            placeholderTextColor="#767E8C"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            editable={!isLoading}
            isPassword = {true}
          />

          {/* Demo Credentials Info */}
          <View className="mb-6 p-4 bg-blue-50 rounded-lg">
            <Text className="text-base font-sf-medium text-blue-800 mb-2">Demo Credentials:</Text>
            <Text className="text-sm text-blue-600 font-sf-regular">
              Username: emilys{'\n'}
              Password: emilyspass
            </Text>
          </View>
        </View>
        </View>

       

        {/* Login Button */}
        {/* <View className="mb-4">
       
        </View> */}

        {/* Sign Up Link */}
        <View className="mb-2">
            <TodoButton
            title={isLoading ? 'Signing In...' : 'Sign In'}
            onPress={handleLogin}
            className="bg-brand mb-2"
            disabled={!username.trim() || !password.trim() || isLoading}
          />
          <Text className="text-center text-neutral-secondary font-sf-regular">
            Don't have an account?{' '}
            <Text className="text-brand font-sf-medium" onPress={handleSignUp}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
