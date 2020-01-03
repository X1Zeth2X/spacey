export interface FactState {
  facts: object[] | null;

  requesting: boolean;
  error: boolean;
  errorMsg: string;
}
