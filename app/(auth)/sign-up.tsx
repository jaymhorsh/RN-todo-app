import TodoButton from '@/components/TodoButton';
import TodoInput from '@/components/TodoInput';
import { showToast } from '@/utils/toast';
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
      router.push('/(auth)/sign-in'); // Redirect to sign-in after successful sign-up
    } else {
      showToast('error', 'Please fill in all fields');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-between px-6">
        {/* Header */}
        <View className="mt-14 mb-16">
          <Text className="text-3xl font-sf-bold text-neutral-primary text-center mb-3">Create account</Text>
          <Text className="text-base font-sf-regular text-neutral-secondary text-center">Create your account and feel the benefits</Text>
          {/* Input Section */}
          <View className=" mt-10 justify-center">
            {/* Username Field */}
            <View className="mt-6">
              <TodoInput
                label="Username"
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
              <TodoInput
                label="Password"
                placeholder="Enter your password"
                placeholderTextColor="#767E8C"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                autoCorrect={false}
                isPassword={true}
              />
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
