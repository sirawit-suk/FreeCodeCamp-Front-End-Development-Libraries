export interface NaviKey {
  name: string;
  path: string;
}

export interface Navigations {
  [key: string]: NaviKey;
}
