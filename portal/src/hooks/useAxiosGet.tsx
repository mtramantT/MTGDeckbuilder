import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { useState, useEffect, useRef } from 'react';

export interface ApiConfig extends AxiosRequestConfig {}
const BASE_URL = 'localhost:8080';

export type ApiResult<T> = {
   data: T | undefined;
   error: AxiosError | Error | undefined;
   loading: boolean;
};

const api = axios.create({
   baseURL: 'http://localhost:8080/scryfall/',
});

const useAxiosGet = (axiosConfig: ApiConfig) => {
   const [response, setResponse] = useState(undefined);
   const [error, setError] = useState('');
   const [loading, setLoading] = useState(true);
   const isMounted = useRef(true);

   useEffect(() => {
      return () => {
         isMounted.current = false;
      };
   }, []);

   const fetchData = async (config: ApiConfig) => {
      try {
         if (isMounted.current) {
            const result = await api.request(config);
            setResponse(result.data);
         }
      } catch (error: any) {
         setError(error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchData(axiosConfig);
   }, []);

   return { response, error, loading };
};

export default useAxiosGet;
