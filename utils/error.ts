import AsyncStorage from '@react-native-async-storage/async-storage';
import { AxiosError } from 'axios';
import { router } from 'expo-router';
import { showToast } from './toast';

export const handleAxiosError = async (error: AxiosError): Promise<void> => {
  const { response } = error;

  if (response?.status === 500) {
    showToast('error', 'Server Error. Unable to perform operation, try again later!');
    return;
  }

  // Auth handler
  if (response && [401, 403].includes(response?.status)) {
    await AsyncStorage.clear();
    if (response?.status === 401) {
      showToast('error', 'Session expired, Log in');
      router.replace('/');
    } else {
      showToast('error', (response?.data as any)?.message || 'Session expired');
      router.replace('/');
    }
    return;
  }

  // Handle other errors
  const errorMsg = (response?.data as Record<string, string>)?.message || error.message || 'An error occurred';
  if (Array.isArray(errorMsg)) {
    errorMsg.forEach((msg) => showToast('error', msg));
  } else {
    showToast('error', errorMsg);
  }
};

export const onError = (error: AxiosError) => handleAxiosError(error);
