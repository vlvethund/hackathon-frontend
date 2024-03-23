import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from 'axios';
type RequestType = 'POST' | 'GET' | 'DELETE' | 'PUT';

const createInstance = (axiosConfig?: CreateAxiosDefaults) =>
  axios.create({
    // baseURL: import.meta.env.VITE_APP_BASEURL,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    transformResponse: parseJson,
    ...axiosConfig,
  } as CreateAxiosDefaults);

function parseJson(res: string): JSON | string {
  let parsedData;

  try {
    parsedData = JSON.parse(res);
  } catch (e) {
    console.log('Error occurred when parsing response data. \n', e);
    return res;
  }

  return parsedData;
}

class AxiosApi {
  private _config: CreateAxiosDefaults | undefined;
  private static instance: AxiosInstance;

  private constructor(config?: CreateAxiosDefaults) {
    this._config = config;
  }

  private static getInstance(config?: CreateAxiosDefaults) {
    if (!AxiosApi.instance) {
      this.instance = createInstance(config);
    }
    return this.instance;
  }

  public static async get<T>(url: string, config?: AxiosRequestConfig<T>): Promise<T> {
    const result = await AxiosApi.request<T>('GET', url, undefined, config);
    return result.data;
  }

  public static async post<T, R = T>(
    uri: string,
    data?: T,
    config?: AxiosRequestConfig<T>,
  ): Promise<R> {
    const result = await AxiosApi.request<T, R>('POST', uri, data ?? ({} as T), config);
    return result.data;
  }

  public static async put<T, R = T>(
    uri: string,
    data?: T,
    config?: AxiosRequestConfig,
  ): Promise<R> {
    const result = await AxiosApi.request<T, R>('PUT', uri, data ?? ({} as T), config);
    return result.data;
  }

  public static async delete<T>(url: string, config?: AxiosRequestConfig<T>): Promise<T> {
    const result = await AxiosApi.request<T>('DELETE', url, undefined, config);
    return result.data;
  }

  private static async request<T, R = T>(
    requestType: RequestType,
    url: string,
    data?: T,
    config?: AxiosRequestConfig,
  ) {
    return AxiosApi.getInstance().request<T, AxiosResponse<R>>({
      method: requestType,
      url,
      data,
      ...config,
    });
  }
}

const axiosApi = AxiosApi;

export default axiosApi;
