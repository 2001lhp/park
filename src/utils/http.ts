import type { Data } from '@/types/request';
import axios, { type Method } from 'axios'
import { getToken } from './cookie';
import { useCounterStore } from '@/stores/counter';
const store = useCounterStore()

const http = axios.create({
    baseURL: 'https://api-hmzs.itheima.net/v1',
    timeout: 10000
})

http.interceptors.request.use(config => {
    // Do something before request is sent
    // const token = getToken()
    // console.log('token', token)
    // if (token) {
    //   config.headers.Authorization = token
    // }
    config.headers.Authorization = store.token
    return config;
}, error => {
    // Do something with request error
    return Promise.reject(error);
});

http.interceptors.response.use(response => {
    // Do something before response is sent
    return response.data;
}, error => {
    // Do something with response error
    return Promise.reject(error);
});

const request = <T>(url: string, method: Method, submitData?: object) => {
    return http.request<T, Data<T>>({ url, method, [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData })
}

export default request