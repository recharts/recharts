export const setup = () => {
  process.env.TZ = 'UTC';
  // @ts-expect-error TODO remove the requestAnimationFrame override
  global.requestAnimationFrame = (callback: () => void) => {
    callback();
  };
};
