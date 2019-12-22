export interface IVLState {
  feed: Collection[];
  loading: boolean;
  error: boolean;
  errorMsg: string;
}

export interface Collection {
  items: object[];
  metadata: object;
  version: string;
  href: string;
}
