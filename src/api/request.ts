import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

async function apiRequest<T>(config: AxiosRequestConfig): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios(config);

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError: AxiosError = error;

      throw new ApiError(
        axiosError.message,
        axiosError.response?.status,
        axiosError.response?.data
      );
    } else {
      throw new Error(`API request failed: ${(error as Error).message}`);
    }
  }
}

class ApiError extends Error {
  public status: number | undefined;
  public data: unknown | undefined;

  constructor(message: string, status?: number, data?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export default apiRequest;
