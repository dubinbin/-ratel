import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import Axios from 'axios';


export interface IResponse<T> {
    code: number
    data: T
    msg: string
}

const BASE_URL = 'http://localhost:9001'


class Request {

    private static getData<T extends IResponse<any>>(response: AxiosResponse<T>): T['data'] {
        const { data } = response;
        if (data.code === 0) {
            return data
        } else {
            throw data
        }
    }

    public static async $get<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
        return Request.getData<IResponse<T>>(
            await axios.get<IResponse<T>>(BASE_URL + url, options)
        )
    }

    public static async $post<T>(url: string, data?: any, options?: AxiosRequestConfig): Promise<T> {
        Axios.create({
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        })
        return Request.getData<IResponse<T>>(
            await axios.post<IResponse<T>>(BASE_URL + url, data, options)
        )
    }
}

export {
    Request
}