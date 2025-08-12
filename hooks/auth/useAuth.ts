import { getCurrentUser, login, refreshAuth } from '@/queries/auth';
import { useAuthStore } from '@/store/authStore';
import { LoginRequest, RefreshTokenRequest } from '@/types/auth';
import { showToast } from '@/utils/toast';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { setAuth, setLoading } = useAuthStore();

  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: (data) => {
      const userProfile = {
        id: data.id,
        username: data.username,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        image: data.image,
      };

      // Set authentication state
      setAuth(userProfile, data.accessToken, data.refreshToken);
      // Invalidate and refetch user queries
      queryClient.invalidateQueries({ queryKey: ['user'] });

      showToast('success', 'Login successful!');
      router.replace('/(tabs)/home');
    },
    onError: (error: any) => {
      console.error('Login error:', error);
      showToast('error', error?.response?.data?.message || 'Login failed. Please try again.');
    },
    onSettled: () => {
      setLoading(false);
    },
  });
};

// Hook for getting current user
export const useCurrentUser = () => {
  const { accessToken, isAuthenticated } = useAuthStore();

  return useQuery({
    queryKey: ['user', 'current'],
    queryFn: getCurrentUser,
    enabled: !!accessToken && isAuthenticated,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};

// Hook for refreshing authentication
export const useRefreshAuth = () => {
  const { setTokens } = useAuthStore();

  return useMutation({
    mutationFn: (data: RefreshTokenRequest) => refreshAuth(data),
    onSuccess: (data) => {
      setTokens(data.accessToken, data.refreshToken);
    },
    onError: (error: any) => {
      console.error('Token refresh error:', error);
    },
  });
};

// Main authentication hook for checking auth state and redirecting
export const useAuth = () => {
  const { isAuthenticated, user, isLoading } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated && user) {
        router.replace('/home');
      } else {
        router.replace('/welcome');
      }
    }
  }, [isAuthenticated, user, isLoading, router]);

  return {
    isAuthenticated,
    user,
    isLoading,
  };
};

// Hook for logout
export const useLogout = () => {
  const { logout } = useAuthStore();
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    try {
      logout();
      queryClient.clear();
      showToast('success', 'Logged out successfully');
      router.replace('/welcome');
    } catch (error) {
      console.error('Logout error:', error);
      showToast('error', 'Logout failed. Please try again.');
    }
  };

  return { logout: handleLogout };
};
