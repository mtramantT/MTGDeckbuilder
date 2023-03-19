import { useState, useEffect, useRef } from 'react';
import axios, { AxiosRequestConfig, AxiosError  } from 'axios';

export interface ApiConfig extends AxiosRequestConfig {};

export type ApiResult<T> = {
    data: T | undefined;
    error: AxiosError | Error | undefined;
    loading: boolean;
}

const useApi = <T>(initialUrl: string, initialConfig?: ApiConfig): ApiResult<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError | Error>();
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios(initialUrl, initialConfig);
        if (isMounted.current) {
            setData(response.data);
            setLoading(false);
        }
      } catch (err) {
        if ( isMounted.current && (err instanceof AxiosError || err instanceof Error)) {
            setError(err);
            setLoading(false);
        }
      }
    };
    fetchData();
  }, [initialUrl, initialConfig]);
  return { data, loading, error };
};

export default useApi;