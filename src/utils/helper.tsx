import axios, { AxiosResponse } from "axios";



const axiosPost = (reqUrl: string, reqBody: any) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  return new Promise((resolve, reject) => {
    axios
      .post(baseUrl + reqUrl, reqBody)
      .then(function (response: any) {
        resolve(response);
      })
      .catch(function (error: any) {
        reject(error);
      });
  });
};
export {
  axiosPost,
};


