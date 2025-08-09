import { create } from 'zustand';

interface AppState {
  user: null | { id: string; name: string };
  loading: boolean;
  setUser: (user: { id: string; name: string } | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  loading: false,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
})); 