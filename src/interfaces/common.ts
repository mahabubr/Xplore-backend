export interface iGenericResponse<T> {
  meta: {
    page: number;
    size: number;
    total: number;
  };
  data: T;
}

export interface iGenericErrorMessage {
  path: string | number;
  message: string;
}

export interface iGenericErrorResponse {
  statusCode: number;
  message: string;
  errorMessages: iGenericErrorMessage[];
}
