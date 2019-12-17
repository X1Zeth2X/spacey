import axios from 'axios';

const apiKey: string | null = localStorage.getItem('apiKey');

const ApiService = {
  init(baseUrl: string) {
    axios.defaults.baseURL = baseUrl;
  },

  get(resource: string) {
    return axios.get(resource);
  },

  post(resource: string, data: any) {
    return axios.post(resource, data);
  },

  put(resource: string, data: any) {
    return axios.put(resource, data);
  },

  delete(resource: string) {
    return axios.delete(resource);
  },

  /*
    Perform custom Axios request.
    data is an object
    - method
    - url
    - data ... request payload
    - auth (optional)
      - email
      - password
  */

  customRequest(data: any) {
    return axios(data);
  },
};

export default ApiService;

export { ApiService, apiKey };
