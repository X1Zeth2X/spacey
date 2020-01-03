export interface APODState {
  requesting: boolean;
  apod: object | null;

  error: boolean;
  errorMsg: string;
}
