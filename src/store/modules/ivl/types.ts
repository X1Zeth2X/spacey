interface IVLState {
  feed: Collection[];
  currentInfo: Info | null;
  assetsInfo: object[] | null;

  loading: boolean;
  error: boolean;
  errorMsg: string;
}

interface Collection {
  items: object[];
  metadata: object;
  version: string;
  href: string;
}

interface Info {
  data: object[];
  href: string;
  links: object[];
}

export { IVLState, Collection, Info };
