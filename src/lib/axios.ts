import type { AxiosRequestConfig } from "axios";

import axios from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:9090",
  timeout: 30000,
};
const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use(
  async request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
//
// export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
//   try {
//     const [url, config] = Array.isArray(args) ? args : [args];
//
//     const res = await axiosInstance.get(url, { ...config });
//
//     return res;
//   } catch (error) {
//     throw error;
//   }
// };

export const fetcher = async <T = any>(args: string | [string, AxiosRequestConfig]): Promise<T> => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get<T>(url, { ...config });

    return res.data;
  } catch (error) {
    throw error;
  }
};
