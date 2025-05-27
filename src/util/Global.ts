const parseIsSsrByDefault = (): boolean =>
  !(typeof window !== 'undefined' && window.document && Boolean(window.document.createElement) && window.setTimeout);

export const Global = {
  isSsr: parseIsSsrByDefault(),
};
