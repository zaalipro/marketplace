import { useState, useEffect } from 'react';
import { API_URL } from '@/utils/constants';

export type ApiResponse<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export function useApi<T>(
  endpoint: string,
  options: RequestInit = {},
  dependencies: any[] = []
): ApiResponse<T> {
  const [state, setState] = useState<ApiResponse<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${endpoint}`, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setState({ data, error: null, loading: false });
      } catch (error) {
        setState({ data: null, error: error instanceof Error ? error : new Error('Unknown error'), loading: false });
      }
    };

    fetchData();
  }, [...dependencies, endpoint, JSON.stringify(options)]);

  return state;
}
