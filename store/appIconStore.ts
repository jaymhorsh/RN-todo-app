import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AppIconStore {
  selectedIconId: string;
  setSelectedIconId: (iconId: string) => void;
  resetIconId: () => void;
}

export const useAppIconStore = create<AppIconStore>()(
  persist(
    (set) => ({
      selectedIconId: 'blue', // Default to blue icon
      
      setSelectedIconId: (iconId: string) => {
        set({ selectedIconId: iconId });
      },
      
      resetIconId: () => {
        set({ selectedIconId: 'blue' });
      },
    }),
    {
      name: 'app-icon-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
