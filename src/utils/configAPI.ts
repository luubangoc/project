import axios from "axios";
const request = axios.create({
  baseURL: "http://localhost:3000/",
});

request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
// export const getRequest(url: string) {
//   return axios.get(url);
// }
// export const getAPI = async (path: string) => {
//   const response = await request.get(path);
//   return response;
// };

// export const postAPI = async (path: string, data: any) => {
//   const response = await request.post(path, data);
//   return response;
// };

// export const updateAPI = async (path: string, data: any) => {
//   const response = await request.put(path, data);
//   return response;
// };

// export const deleteAPI = async (path: string) => {
//   const response = await request.delete(path);
//   return response;
// };

export default request;
