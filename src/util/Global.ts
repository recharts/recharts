const parseIsSsrByDefault = (): boolean =>
  !(typeof window !== 'undefined' && window.document && Boolean(window.document.createElement) && window.setTimeout);

export const Global = {
  devToolsEnabled: process.env.NODE_ENV !== 'production',
  isSsr: parseIsSsrByDefault(),
};
