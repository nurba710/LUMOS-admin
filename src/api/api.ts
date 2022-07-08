import axios from 'axios';

import { TOKEN } from '../common/consts/auth.const';
import { getStorage } from '../common/services/storage.service';

const baseURL = 'https://frontend-blog-be.herokuapp.com/';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((request: any) => {
  request.headers = {
    ...request.headers,
    token: getStorage(TOKEN),
  };
  return request;
});

axiosInstance.interceptors.response.use(
  (response: any) => response,
  ({ response }: any) => {
    const { status } = response || {};
    if (status === 401 || status === 403) {
      // error page
      console.log(404);
    }

    return Promise.reject(response);
  }
);

export default axiosInstance;
