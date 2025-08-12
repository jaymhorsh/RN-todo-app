import { api } from '@/services/axios';
import { TodosQueryParams, TodosResponse } from '@/types/todos';

// Get todos with pagination
export const getTodos = async (params: TodosQueryParams): Promise<TodosResponse> => {
  const { data } = await api.get('/todos', { params });
  return data;
};

// Get all todos (limit=0)
export const getAllTodos = async (): Promise<TodosResponse> => {
  const { data } = await api.get('/todos', { params: { limit: 0 } });
  return data;
};
