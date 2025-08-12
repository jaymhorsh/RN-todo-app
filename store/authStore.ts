import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { deleteToken, getToken, setToken } from '../storage/token';
import { AuthStore } from '../types/auth';

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      isLoading: false,

      // Actions
      setAuth: async (user, accessToken, refreshToken) => {
        // Store tokens in secure storage
        await setToken('accessToken', accessToken);
        await setToken('refreshToken', refreshToken);
        
        set({   
          user,
          accessToken,
          refreshToken,
          isAuthenticated: true,
          isLoading: false,
        });
      },

      setUser: (user) => {
        set({ user });
      },

      setTokens: async (accessToken, refreshToken) => {
        // Store tokens in secure storage
        await setToken('accessToken', accessToken);
        await setToken('refreshToken', refreshToken);
        
        set({
          accessToken,
          refreshToken,
          isAuthenticated: true,
        });
      },

      logout: async () => {
        // Remove tokens from secure storage
        await deleteToken('accessToken');
        await deleteToken('refreshToken');
        
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
          isLoading: false,
        });
      },

      setLoading: (loading) => {
        set({ isLoading: loading });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => ({
        getItem: async (name) => {
          try {
            const value = await getToken(name);
            return value ? JSON.stringify(value) : null;
          } catch (error) {
            console.error('Error getting item from storage:', error);
            return null;
          }
        },
        setItem: async (name, value) => {
          try {
            await setToken(name, JSON.parse(value));
          } catch (error) {
            console.error('Error setting item in storage:', error);
          }
        },
        removeItem: async (name) => {
          try {
            await deleteToken(name);
          } catch (error) {
            console.error('Error removing item from storage:', error);
          }
        },
      })),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
