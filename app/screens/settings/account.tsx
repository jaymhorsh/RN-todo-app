import TodoButton from '@/components/TodoButton';
import TodoInput from '@/components/TodoInput';
import { useUpdateUser } from '@/hooks/settings/useSettings';
import { useAuthStore } from '@/store/authStore';
import { UpdateUserRequest } from '@/types/settings';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Account = () => {
  const router = useRouter();
  const { user } = useAuthStore();
  const { mutate: updateUser, isPending } = useUpdateUser();

  const [form, setForm] = useState({
    fullName: user ? `${user.firstName} ${user.lastName}` : '',
    email: user?.email || '',
  });

  const handleSaveChanges = async () => {
    if (!user) return;

    if (!form.fullName.trim() || !form.email.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Split full name into first and last name
    const nameParts = form.fullName.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    const userData: UpdateUserRequest = {
      firstName,
      lastName,
      email: form.email.trim(),
    };

    updateUser(userData);
  };

  const handleChangePassword = () => {
    Alert.alert('Change Password', 'Password change functionality will be implemented here.', [{ text: 'OK' }]);
  };

  const handleInputChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6">
        {/* Header */}
        <View className="flex-row items-center justify-between mt-4 mb-8">
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="#1B1C1F" />
          </TouchableOpacity>
          <Text className="text-xl font-sf-bold text-neutral-primary">Account</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Content Fields */}
        <View className="flex-1">
          {/* Full Name */}
          <View className="mb-6">
            <Text className="text-base font-sf-medium text-neutral-primary mb-3">Full Name</Text>
            <TodoInput
              placeholder="Full name"
              value={form.fullName}
              onChangeText={(value) => handleInputChange('fullName', value)}
              autoCapitalize="words"
              autoCorrect={false}
            />
          </View>

          {/* Email */}
          <View className="mb-6">
            <Text className="text-base font-sf-medium text-neutral-primary mb-3">Email</Text>
            <TodoInput
              placeholder="name@example.com"
              value={form.email}
              onChangeText={(value) => handleInputChange('email', value)}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* Password */}
          <View className="mb-6">
            <Text className="text-base font-sf-medium text-neutral-primary mb-3">Password</Text>
            <TouchableOpacity
              className="w-full h-14 bg-white border border-neutral-line rounded-xl px-4 items-center justify-center"
              onPress={handleChangePassword}
            >
              <Text className="text-base font-sf-regular text-neutral-secondary">Change Password</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Save Changes Button */}
        <View className="mb-6">
          <TodoButton
            title={isPending ? 'Saving...' : 'Save Changes'}
            onPress={handleSaveChanges}
            disabled={isPending}
            className={isPending ? 'bg-neutral-line' : 'bg-brand'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Account;
