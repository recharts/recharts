import fetch from 'cross-fetch';

const fetchFile = (url) =>
  new Promise((resolve, reject) =>
    fetch(url)
      // 没必要传参数，只要url拼接即可
      .then((res) => {
        if (res.status >= 400) {
          reject(res);
        } else {
          Promise.resolve(res.text()).then(
            (fileRes) => {
              resolve(fileRes);
            },
            (error) => {
              reject(error);
            },
          );
        }
      }),
  );

export default fetchFile;
