import axios from 'axios';
import { globalConfig } from '../config/global.js';

export class Axios {
  static async get(endpoint, headers) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: globalConfig.baseUrl + globalConfig.prefixPath + endpoint,
        headers,
      })
        .then((response) => {
          resolve({
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            data: response.data,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async post(endpoint, headers, requestBody) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: globalConfig.baseUrl + globalConfig.prefixPath + endpoint,
        headers,
        data: JSON.stringify(requestBody),
      })
        .then((response) => {
          resolve({
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            data: response.data,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async put(endpoint, headers, requestBody) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'put',
        url: globalConfig.baseUrl + globalConfig.prefixPath + endpoint,
        headers,
        data: JSON.stringify(requestBody),
      })
        .then((response) => {
          resolve({
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            data: response.data,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async patch(endpoint, headers, requestBody) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'patch',
        url: globalConfig.baseUrl + globalConfig.prefixPath + endpoint,
        headers,
        data: JSON.stringify(requestBody),
      })
        .then((response) => {
          resolve({
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            data: response.data,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static async delete(endpoint, headers) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'delete',
        url: globalConfig.baseUrl + globalConfig.prefixPath + endpoint,
        headers,
      })
        .then((response) => {
          resolve({
            status: response.status,
            statusText: response.statusText,
            headers: response.headers,
            data: response.data,
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
