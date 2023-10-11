export type TApiResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  meta?: {
    page: number;
    size: number;
    total: number;
  };
  data?: T | null;
  access_token?: string | null;
};
