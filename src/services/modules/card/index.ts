import { Request, IResponse } from "@/services/requst";

export type IGetCardType = {
    title: string
    price: number,
    originPrice: number,
    cover: string
    link: string
}[]

export type IGetModuleType = Datum[]

export interface Child {
    title: string;
    value: string;
}

export interface Datum {
    title: string;
    value: string;
    selectable: boolean;
    children: Child[];
}



export const CardServicesModule = {
    getCard(): Promise<IResponse<IGetCardType>> {
       return Request.$get<IResponse<IGetCardType>>('/index/getdata')
    },

    getModule() :Promise<IResponse<IGetModuleType>> {
        return Request.$get<IResponse<IGetModuleType>>('/index/getmodule')
    }
}