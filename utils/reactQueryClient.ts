import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2,
      refetchOnReconnect: true,
      staleTime: 1000 * 60,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
    mutations: {
      retry: 1,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      networkMode: 'offlineFirst',
    },
  },
});

// staleTime: 1000 * 60 * 5, // 5 minutes
// gcTime: 1000 * 60 * 30, // 30 minutes
// retry: 3,
// retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
// refetchOnWindowFocus: true,
// refetchOnReconnect: true,
// refetchOnMount: true,
// networkMode: "offlineFirst",
// retryOnMount: true,
