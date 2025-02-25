interface IRequestOptions {
    method: string;
    url: string;
    data?: any;
  }
  
  class ApiCallError extends Error {
    name = 'ApiCallError';
    type = 'ApiCallError';
  }
  
  export interface IApiListResponse<T> {
    count: number;
    next?: string;
    previous?: string;
    results: Array<T>;
  }
  
  export default class Api {
    constructor() {}
  
    private async request<Response = any>(options: IRequestOptions): Promise<Response> {
      try {
        const response = await fetch(options.url, { method: options.method });
        return response.json();
      } catch (error) {
        throw new ApiCallError();
      }
    }
  
    public async get<Response = any>(url: string): Promise<Response> {
      return await this.request({ url, method: 'GET' });
    }

    public async post<Response = any>(
        url: string,
        data?: any,
        options?: IRequestOptions,
      ) {
        return this.request<Response>({
          method: 'POST',
          url,
          data,
          ...options,
        });
      }
  }