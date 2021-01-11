const parseIsSsrByDefault = (): boolean =>
  !(typeof window !== 'undefined' && window.document && window.document.createElement && window.setTimeout);

export interface GlobalConfig {
  isSsr?: boolean;
}

export type GlobalConfigKeys = 'isSsr';

export const Global = {
  isSsr: parseIsSsrByDefault(),

  get: (key: 'isSsr') => {
    return Global[key];
  },

  set: (key: GlobalConfigKeys | GlobalConfig, value?: any) => {
    if (typeof key === 'string') {
      Global[key] = value;
    } else {
      const keys = Object.keys(key);

      if (keys && keys.length) {
        keys.forEach((k: GlobalConfigKeys) => {
          Global[k] = key[k];
        });
      }
    }
  },
};
