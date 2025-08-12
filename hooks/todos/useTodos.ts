import { getAllTodos, getTodos } from '@/queries/todos';
import { TodosQueryParams } from '@/types/todos';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

// Hook for getting todos with infinite pagination
export const useInfiniteTodos = (limit: number = 5) => {
  return useInfiniteQuery({
    queryKey: ['todos', 'infinite', limit],
    queryFn: ({ pageParam = 0 }) => getTodos({ limit, skip: pageParam }),
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    initialPageParam: 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook for getting all todos
export const useAllTodos = () => {
  return useQuery({
    queryKey: ['todos', 'all'],
    queryFn: getAllTodos,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Hook for getting todos with custom pagination
export const useTodos = (params: TodosQueryParams) => {
  return useQuery({
    queryKey: ['todos', params],
    queryFn: () => getTodos(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
