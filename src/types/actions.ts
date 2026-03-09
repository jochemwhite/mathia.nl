export type ActionResponse<T> = {
  success: true;
  data: T;
  error?: undefined;
};
