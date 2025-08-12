import TodoButton from '@/components/TodoButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const Onboarding = () => {
  const router = useRouter();

  const handleEmailSignup = () => {
    router.push('/(auth)/sign-up');
  };

  const handleFacebookSignup = () => {
    // Handle Facebook signup
    console.log('Facebook signup');
  };

  const handleGoogleSignup = () => {
    // Handle Google signup
    console.log('Google signup');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="mt-16 mb-16">
          <Text className="text-3xl font-sf-semibold text-center">
            <Text className="text-neutral-primary">Welcome to </Text>
            <Text className="text-brand">Todyapp</Text>
          </Text>
        </View>

        {/* Image Section */}
        <View className="flex-1 justify-center items-center mb-8">
          <Image 
            source={require('@/assets/Onboarding Image 3.jpg')} 
            className="w-full h-[400px]" 
            resizeMode="cover" 
          />
        </View>

        {/* Button Section */}
        <View>
          {/* Continue with Email Button */}
          <View className="mb-6">
            <TodoButton
              title="Continue with email"
              onPress={handleEmailSignup}
              className="bg-brand"
              iconName="email"
              iconPosition="left"
              iconSize={24}
              iconColor="#ffffff"
            />
          </View>
          
          {/* Divider */}
          <View className="flex-row items-center mb-6">
            <View className="flex-1 h-px bg-neutral-line" />
            <Text className="mx-4 text-neutral-secondary text-sm font-sf-regular">or continue with</Text>
            <View className="flex-1 h-px bg-neutral-line" />
          </View>

          {/* Social Login Buttons */}
          <View className="flex-row justify-between gap-4 mb-2">
            {/* Facebook Button */}
            <View className="flex-1">
              <TodoButton
                title="Facebook"
                onPress={handleFacebookSignup}
                className="bg-neutral-line"
                textClassName="text-neutral-primary"
                iconName="facebook"
                iconPosition="left"
                iconSize={24}
                iconColor="#1877F2"
              />
            </View>

            {/* Google Button */}
            <View className="flex-1">
              <TodoButton
                title="Google"
                onPress={handleGoogleSignup}
                className="bg-neutral-line"
                textClassName="text-neutral-primary"
                iconName="facebook"
                // iconName="google"
                iconPosition="left"
                iconSize={24}
                iconColor="#000000"
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
