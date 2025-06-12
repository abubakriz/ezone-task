export type EzoneResponse<T> = {
  Data: T;
  Title: string | null;
  Status: number;
  ErrorList: string[] | null;
  IsSuccess: boolean;
};
